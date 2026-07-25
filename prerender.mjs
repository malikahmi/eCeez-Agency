#!/usr/bin/env node
/**
 * prerender.mjs — post-build static snapshot generator for the eCeez SPA.
 *
 * WHY THIS EXISTS
 * ---------------
 * The site is a client-rendered React/Vite SPA. Crawlers already receive correct
 * per-route <meta> tags from the Netlify edge function, but the <body> arrives
 * mostly empty until JavaScript runs. This script executes each route in a real
 * headless browser after `vite build`, then overwrites dist/<route>/index.html
 * with the fully-rendered HTML. Result: Google, Bing, and AI crawlers (which are
 * inconsistent at running heavy JS) get complete body content — the ~70% SEO win
 * of SSR without migrating the whole app to Next.js.
 *
 * SAFETY CONTRACT
 * ---------------
 * This step must NEVER break a deploy. If Puppeteer/Chromium is unavailable, or
 * any single route errors, we log a warning and exit 0, leaving the normal SPA
 * build (with working edge-function meta) exactly as it was. Prerendering is a
 * bonus layer, never a dependency.
 *
 * Run automatically via `npm run build`, or manually: `node prerender.mjs`.
 */

import { createServer } from 'node:http';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, 'dist');
const PORT = 4321;

// Every route that should get a static snapshot. Keep in sync with App.tsx.
// Dynamic blog posts are enumerated from the built data at runtime below.
const STATIC_ROUTES = [
  '/', '/services', '/blog', '/contact', '/about-us', '/careers', '/privacy-policy',
  '/case-studies', '/case-studies/clothing-store', '/case-studies/jewelry-store',
  '/case-studies/meows-cat-health', '/case-studies/swolverine', '/case-studies/volvik',
  '/case-studies/tropez-official', '/case-studies/oddli', '/case-studies/labozero',
  '/case-studies/express-wholesalers', '/case-studies/wrestlingmart', '/case-studies/aoap-projects',
  '/case-studies/east-and-south-interiors', '/case-studies/nishiyama-ramen',
  '/shopify-development-company', '/shopify-seo', '/tools/shopify-conversion-calculator',
  '/case-studies/barber', '/case-studies/restaurant', '/case-studies/aurex',
  '/analytics', '/automation', '/collaboration', '/security',
  '/shopify-store-setup-service', '/website-development-for-businesses',
  '/cro', '/seo', '/shopify-web-development', '/tools/ecommerce-taxonomy-mapper',
  '/shopify-speed-optimization', '/shopify-maintenance', '/shopify-migration',
  '/shopify-theme-customization', '/shopify-plus-development',
  '/shopify-app-development', '/shopify-cro', '/ecommerce-ux',
];

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.ico': 'image/x-icon', '.txt': 'text/plain', '.map': 'application/json',
};

// Minimal static file server that falls back to index.html (SPA behavior).
function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
        let filePath = join(DIST, urlPath);
        try {
          const s = await stat(filePath);
          if (s.isDirectory()) filePath = join(filePath, 'index.html');
        } catch {
          // No such file — if it has a file extension it's a real 404,
          // otherwise serve index.html so the SPA router can handle the route.
          if (extname(urlPath)) { res.writeHead(404); res.end(); return; }
          filePath = join(DIST, 'index.html');
        }
        const data = await readFile(filePath);
        res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' });
        res.end(data);
      } catch {
        res.writeHead(500); res.end();
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

async function loadPuppeteer() {
  // Prefer full puppeteer (bundled Chromium); fall back to puppeteer-core with a
  // system Chrome path if provided via PUPPETEER_EXECUTABLE_PATH.
  try {
    const mod = await import('puppeteer');
    return { puppeteer: mod.default, launchOpts: {} };
  } catch {
    try {
      const mod = await import('puppeteer-core');
      const execPath =
        process.env.PUPPETEER_EXECUTABLE_PATH ||
        ['/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome-stable']
          .find((p) => existsSync(p));
      if (!execPath) return null;
      return { puppeteer: mod.default, launchOpts: { executablePath: execPath } };
    } catch {
      return null;
    }
  }
}

async function enumerateBlogRoutes() {
  // Blog post ids live in built JS chunks; rather than parse them, read the
  // source data at build time (it's still on disk during the Netlify build).
  const routes = [];
  const dataDir = join(__dirname, 'src', 'data');
  const files = ['blogData.ts', 'seoBlogData.ts', 'newBlogData.ts', 'aiBlogData.ts', 'designBlogData.ts', 'themeExpertPost.ts'];
  for (const f of files) {
    const p = join(dataDir, f);
    if (!existsSync(p)) continue;
    try {
      const txt = await readFile(p, 'utf8');
      const re = /\bid:\s*["'`]([a-z0-9-]+)["'`]/gi;
      let m;
      while ((m = re.exec(txt))) routes.push(`/blog/${m[1]}`);
    } catch { /* ignore */ }
  }
  return [...new Set(routes)];
}

async function main() {
  if (!existsSync(DIST)) {
    console.warn('[prerender] dist/ not found — skipping (build the app first).');
    return;
  }

  const loaded = await loadPuppeteer();
  if (!loaded) {
    console.warn('[prerender] No headless browser available — skipping prerender.');
    console.warn('[prerender] SPA + edge-function meta still deploy normally. ✔');
    return;
  }

  const blogRoutes = await enumerateBlogRoutes();
  const routes = [...new Set([...STATIC_ROUTES, ...blogRoutes])];
  console.log(`[prerender] Snapshotting ${routes.length} routes (${blogRoutes.length} blog posts)…`);

  const server = await startServer();
  let browser;
  let ok = 0, failed = 0;

  try {
    browser = await loaded.puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
      ...loaded.launchOpts,
    });

    for (const route of routes) {
      const page = await browser.newPage();
      try {
        await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
        // Give framer-motion entrance animations a beat to settle, then freeze.
        await new Promise((r) => setTimeout(r, 600));

        // Neutralize animation transforms so snapshot isn't caught mid-motion,
        // and drop the interactive canvas (it re-inits on the client anyway).
        await page.evaluate(() => {
          document.querySelectorAll('canvas[aria-hidden="true"]').forEach((c) => c.remove());
          document.querySelectorAll('[style*="opacity: 0"], [style*="opacity:0"]').forEach((el) => {
            el.style.opacity = '1'; el.style.transform = 'none';
          });
        });

        let html = await page.content();
        // Mark as prerendered so the client can hydrate/replace cleanly.
        html = html.replace('<div id="root">', '<div id="root" data-prerendered="true">');

        const outDir = route === '/' ? DIST : join(DIST, route);
        await mkdir(outDir, { recursive: true });
        await writeFile(join(outDir, 'index.html'), html, 'utf8');
        ok++;
      } catch (err) {
        failed++;
        console.warn(`[prerender] ⚠ ${route}: ${err.message}`);
      } finally {
        await page.close();
      }
    }
  } catch (err) {
    console.warn(`[prerender] Browser launch failed (${err.message}) — deploying SPA as-is. ✔`);
    return;
  } finally {
    if (browser) await browser.close();
    server.close();
  }

  console.log(`[prerender] Done: ${ok} snapshotted, ${failed} skipped. ✔`);
}

main().catch((err) => {
  // Absolute last-resort guard: never fail the build.
  console.warn(`[prerender] Non-fatal error — SPA deploys normally. (${err?.message})`);
  process.exit(0);
});
