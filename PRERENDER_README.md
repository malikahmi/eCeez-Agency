# Prerender Pilot — How It Works & How to Verify

This build now includes an **optional prerendering layer** that gives search
engines and AI crawlers fully-rendered HTML for every route, without migrating
the app to Next.js.

## What changed

- **`prerender.mjs`** — after `vite build`, this launches a headless browser,
  visits all ~149 routes (31 pages + 118 blog posts), and saves the fully-rendered
  HTML into `dist/<route>/index.html`.
- **`index.tsx`** — now hydrates prerendered markup instead of replacing it, so
  there's no content flash and the SEO HTML stays intact while JS loads.
- **`package.json`** — `npm run build` runs the prerender step; `puppeteer` is an
  *optional* dependency (a download failure can't break `npm install`).
- **`netlify.toml`** — sets the Puppeteer cache directory for Netlify builds.

## The safety guarantee

Prerendering **can never break your deploy.** If Chromium is unavailable or any
route errors, the script logs a warning, exits cleanly, and your site deploys
exactly as before — with the edge-function meta tags still working. It is a bonus
layer, never a dependency.

## Deploy

Deploy the **source zip** the same way as always (drag-and-drop onto Netlify, or
Git). Netlify builds it and runs the prerender step automatically.

## How to verify it worked (after deploy)

1. In your Netlify **deploy log**, look for a line like:
   `[prerender] Done: 149 snapshotted, 0 skipped. ✔`
   If instead you see `No headless browser available — skipping`, the SPA still
   deployed fine, but Chromium didn't install — see Troubleshooting.

2. Test the rendered HTML a crawler receives (JS disabled):
   ```
   curl -s https://eceez.com/ecommerce-ux | grep -o "<h1[^>]*>.*</h1>" | head -1
   ```
   With prerendering working, you'll see the actual `<h1>` text. Without it, the
   `<body>` is mostly empty until JS runs.

3. In **Google Search Console → URL Inspection**, run a live test on a few new
   URLs and check "View crawled page" — the HTML should contain full body content.

## How to turn it off

Change the build command in `package.json` (or `netlify.toml`) from
`npm run build` to `npm run build:nossr`. That skips prerendering entirely and
ships the plain SPA build.

## Troubleshooting

- **"No headless browser available"** in the Netlify log: Netlify usually bundles
  Chromium's dependencies, but if the Chromium *download* is blocked, add a build
  plugin or set `PUPPETEER_SKIP_DOWNLOAD=false`. The site still works regardless.
- **Hydration warnings in the browser console**: harmless here — the client falls
  back to a clean render automatically. They don't affect crawlers or users.

## Is this enough, or do I still need Next.js?

Measure first. After a week, check Search Console's crawl stats and coverage. If
crawlers are now seeing full content and indexing improves, you've captured most
of the SSR benefit at a fraction of the cost. Only pursue the full Next.js
migration if you need true per-request server rendering (rare for a marketing site).
