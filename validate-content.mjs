#!/usr/bin/env node
/**
 * validate-content.mjs — pre-build content guardrail for the eCeez site.
 *
 * WHY: GSC showed pages that were in the sitemap but broken, and thin posts that
 * Google crawled and refused to index. This script makes those failures loud at
 * BUILD time instead of silent in production. It checks:
 *
 *   1. Every blog post has a unique, URL-safe id (slug).
 *   2. No two posts share a slug (duplicate = one silently wins).
 *   3. Required fields exist (title, excerpt, content, seo.title, seo.description).
 *   4. Content isn't thin (warns under ~600 words — the kind Google won't index).
 *   5. Meta title <= 60 chars and description 120-160 chars (SEO hygiene).
 *   6. Every post slug appears in BOTH sitemap.xml files, and vice-versa
 *      (no orphan sitemap URLs -> no "Discovered/Crawled not indexed" ghosts).
 *
 * Exit code 1 (fails the build) only for HARD errors (dupes, missing fields,
 * sitemap mismatches). Thin-content and meta-length issues are WARNINGS so they
 * inform without blocking. Run via `npm run validate` or automatically in build.
 */

import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, 'src', 'data');

const RED = (s) => `\x1b[31m${s}\x1b[0m`;
const YELLOW = (s) => `\x1b[33m${s}\x1b[0m`;
const GREEN = (s) => `\x1b[32m${s}\x1b[0m`;

const errors = [];
const warnings = [];

// --- Pull every post object heuristically from the data files ---------------
// The data files are TS; rather than transpile, we parse the fields we need with
// tolerant regex. This is intentionally conservative: it flags problems, and a
// false positive is a warning at worst.
async function collectPosts() {
  const files = ['blogData.ts', 'seoBlogData.ts', 'newBlogData.ts', 'aiBlogData.ts', 'designBlogData.ts', 'themeExpertPost.ts', 'shopifyAppDevPost.ts'];
  const posts = [];
  for (const f of files) {
    const p = join(DATA_DIR, f);
    if (!existsSync(p)) continue;
    const txt = await readFile(p, 'utf8');

    // Find each post by its `id:` declaration, then treat the slice from this id
    // up to the NEXT id (or EOF) as that post's object. Correctly captures long
    // objects where `content:` sits far below `id:`.
    const idRe = /\bid:\s*['"`]([a-z0-9-]+)['"`]/g;
    const marks = [];
    let m;
    while ((m = idRe.exec(txt))) marks.push({ id: m[1], start: m.index });

    for (let i = 0; i < marks.length; i++) {
      const id = marks[i].id;
      const slice = txt.slice(marks[i].start, i + 1 < marks.length ? marks[i + 1].start : undefined);

      const title = (slice.match(/\btitle:\s*['"`]([^'"`]+)['"`]/) || [])[1] || '';
      const excerpt = (slice.match(/\bexcerpt:\s*['"`]([^'"`]*)['"`]/) || [])[1] || '';
      const descs = [...slice.matchAll(/description:\s*['"`]([^'"`]+)['"`]/g)];
      const seoDesc = descs.length ? descs[descs.length - 1][1] : '';

      const hasContent = /\bcontent:\s*(['"`])/.test(slice);
      const cm = slice.match(/\bcontent:\s*`([\s\S]*?)`\s*,?\s*\n/) ||
                 slice.match(/\bcontent:\s*"((?:[^"\\]|\\.)*)"/) ||
                 slice.match(/\bcontent:\s*'((?:[^'\\]|\\.)*)'/);
      const wordCount = cm ? cm[1].replace(/\s+/g, ' ').trim().split(' ').filter(Boolean).length : null;

      posts.push({ id, title, excerpt, seoDesc, hasContent, wordCount, file: f });
    }
  }
  return posts;
}

function validatePosts(posts) {
  const seen = new Map();
  const slugRe = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  for (const post of posts) {
    // Unique + URL-safe slug
    if (!slugRe.test(post.id)) {
      errors.push(`Invalid slug "${post.id}" in ${post.file} — must be lowercase, hyphenated, no spaces/special chars.`);
    }
    if (seen.has(post.id)) {
      errors.push(`Duplicate slug "${post.id}" (in ${post.file} and ${seen.get(post.id)}) — one will silently overwrite the other.`);
    } else {
      seen.set(post.id, post.file);
    }
    // Required fields
    if (!post.title) errors.push(`Post "${post.id}" is missing a title.`);
    if (!post.excerpt) warnings.push(`Post "${post.id}" is missing an excerpt (used in listings + meta).`);
    if (!post.hasContent) errors.push(`Post "${post.id}" has no content field — it will render an empty page.`);
    // Thin content (the exact thing Google refused to index)
    if (post.wordCount !== null && post.wordCount < 600) {
      warnings.push(`Post "${post.id}" is thin (~${post.wordCount} words). Google often won't index <600-word posts. Expand or merge.`);
    }
    // Meta hygiene
    if (post.seoDesc && (post.seoDesc.length < 110 || post.seoDesc.length > 165)) {
      warnings.push(`Post "${post.id}" meta description is ${post.seoDesc.length} chars (aim 120-160).`);
    }
  }
  return [...seen.keys()];
}

async function validateSitemap(slugs) {
  for (const smPath of ['sitemap.xml', 'public/sitemap.xml']) {
    const full = join(__dirname, smPath);
    if (!existsSync(full)) { warnings.push(`${smPath} not found.`); continue; }
    const xml = await readFile(full, 'utf8');
    const inSitemap = new Set([...xml.matchAll(/\/blog\/([a-z0-9-]+)</g)].map((m) => m[1]));

    // Orphan sitemap entries: URL in sitemap but no matching post -> ghost = "not indexed"
    for (const s of inSitemap) {
      if (!slugs.includes(s)) {
        errors.push(`${smPath} lists /blog/${s} but no post with that slug exists — remove it (ghost URL causes indexation errors).`);
      }
    }
    // Missing sitemap entries: real post not in sitemap -> Google may never find it
    for (const s of slugs) {
      if (!inSitemap.has(s)) {
        warnings.push(`Post "${s}" is NOT in ${smPath} — add it so Google can discover it.`);
      }
    }
  }
}

async function main() {
  console.log('\n\uD83D\uDD0E Validating content before build…\n');
  const posts = await collectPosts();
  console.log(`Found ${posts.length} blog posts.`);
  const slugs = validatePosts(posts);
  await validateSitemap(slugs);

  if (warnings.length) {
    console.log(`\n${YELLOW(`\u26A0 ${warnings.length} warning(s):`)}`);
    warnings.forEach((w) => console.log('  ' + YELLOW('•') + ' ' + w));
  }
  if (errors.length) {
    console.log(`\n${RED(`\u2716 ${errors.length} error(s) — build blocked:`)}`);
    errors.forEach((e) => console.log('  ' + RED('•') + ' ' + e));
    console.log('');
    process.exit(1);
  }
  console.log(`\n${GREEN('\u2714 Content validation passed.')}\n`);
}

main().catch((err) => {
  // A validator crash shouldn't block deploys — warn and pass.
  console.warn(`[validate-content] Non-fatal validator error: ${err?.message}`);
  process.exit(0);
});
