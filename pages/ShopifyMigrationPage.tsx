import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingCart, Database, Layout, Grid3X3, Building2, FileCode2,
  Search, Download, Upload, GitBranch, Shield, TestTube2, Rocket, LineChart,
} from 'lucide-react';
import { PillarTemplate, PillarContent } from '../components/pillar/PillarTemplate';

const content: PillarContent = {
  slug: 'shopify-migration',
  serviceName: 'Shopify Migration Services',
  serviceDescription:
    'Full-service migration to Shopify from WooCommerce, Magento, Wix, Squarespace, BigCommerce, or custom platforms — with complete data transfer, 301 redirect mapping, and SEO preservation so rankings survive the move.',
  badge: 'Platform Migration Specialists',
  h1Lead: 'Shopify',
  h1Accent: 'Migration',
  subtitle:
    'Migrate to Shopify without losing your rankings, your data, or your sleep. We\u2019ve moved stores from every major platform — this guide explains exactly how a safe migration works, and where DIY migrations go wrong.',
  heroBullets: [
    'Zero data loss — verified, not promised',
    'Complete 301 redirect mapping',
    'SEO rankings preserved',
    'Old store kept live until proven',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200',
    alt: 'Ecommerce team planning a Shopify migration with data mapping and SEO redirect strategy on screen',
  },
  stats: [
    { value: '6', label: 'Platforms we migrate from: WooCommerce, Magento, Wix, Squarespace, BigCommerce, custom CMS' },
    { value: '100%', label: 'Of high-value URLs mapped with 301 redirects before launch' },
    { value: '30–60', label: 'Days we keep your old store accessible after launch as a safety net' },
    { value: '2–6', label: 'Typical weeks from kickoff to launch, depending on catalog size' },
  ],
  problems: {
    heading: 'Platforms We',
    accent: 'Migrate From',
    sub: 'Every platform stores data differently, structures URLs differently, and breaks differently. We\u2019ve mapped the quirks of each.',
    items: [
      {
        icon: <ShoppingCart className="text-indigo-600" />,
        title: 'WooCommerce to Shopify',
        desc: 'The most common migration we do. WordPress\u2019s flexible-but-fragile stack (plugins, hosting, security patches) gives way to Shopify\u2019s managed platform. Key work: mapping /product/ and /product-category/ URL structures, migrating blog content, and rebuilding plugin functionality with native features or vetted apps.',
      },
      {
        icon: <Database className="text-orange-600" />,
        title: 'Magento to Shopify',
        desc: 'Complex catalogs, layered categories, and custom attributes make Magento migrations the most technical. We map attribute sets to Shopify metafields, flatten category trees into collections sensibly, and handle multi-store setups — usually cutting total cost of ownership dramatically.',
      },
      {
        icon: <Layout className="text-purple-600" />,
        title: 'Wix to Shopify',
        desc: 'Wix stores outgrow the platform\u2019s ecommerce ceiling fast. Wix\u2019s limited export options mean product data often needs API extraction or structured rebuilding — we handle both, plus redirecting Wix\u2019s auto-generated URL patterns properly.',
      },
      {
        icon: <Grid3X3 className="text-pink-600" />,
        title: 'Squarespace to Shopify',
        desc: 'Beautiful sites, limited commerce. We preserve your design language while unlocking real ecommerce: proper variants, inventory logic, checkout customization, and an app ecosystem Squarespace can\u2019t match.',
      },
      {
        icon: <Building2 className="text-emerald-600" />,
        title: 'BigCommerce to Shopify',
        desc: 'A commerce-to-commerce move where data maps relatively cleanly — the real work is in URL structure differences (BigCommerce\u2019s .html suffixes need careful redirect handling), theme rebuilding, and app-stack equivalents.',
      },
      {
        icon: <FileCode2 className="text-blue-600" />,
        title: 'Custom CMS to Shopify',
        desc: 'Legacy custom builds are one-way doors: the developer left, the stack aged, every change is risky. We reverse-engineer the database, extract and normalize the data, and move you onto a platform your team can actually operate.',
      },
    ],
  },
  guide: [
    {
      heading: 'Why Migrations Fail',
      accent: '(and How Ours Don\u2019t)',
      paragraphs: [
        <>Almost every migration horror story traces back to one root cause: treating migration as a data-copying exercise instead of an SEO-preservation exercise. Products can be re-imported in an afternoon. Years of accumulated Google rankings, backlinks pointing at specific URLs, and customer accounts cannot. The moment your old URLs start returning 404s without redirects, Google begins discarding the authority those pages earned — and recovering it takes months, if it happens at all.</>,
        <>The second cause is silent data corruption: variants that merge incorrectly, product descriptions that lose their formatting, customers imported without their order history, or reviews left behind entirely. These don\u2019t crash anything — they just quietly degrade your store until customers notice before you do.</>,
        <>A safe migration therefore inverts the priorities: the redirect map and SEO inventory come <em>first</em>, the data transfer is verified line-by-line against the source, and the old store stays alive behind the scenes until the new one has proven itself in Search Console.</>,
      ],
    },
    {
      heading: 'SEO Preservation:',
      accent: 'The Part That Actually Matters',
      paragraphs: [
        <>Before anything moves, we crawl your entire existing site and pull every URL that has ever earned traffic or backlinks — from Google Search Console, GA4, and backlink data. Each of those URLs gets an explicit destination on the new store. Product URLs map to product URLs, category pages to collections, blog posts to blog posts — one-to-one wherever possible, never a lazy blanket redirect to the homepage (Google treats mass homepage redirects as soft 404s, which defeats the purpose).</>,
        <>Platform quirks matter enormously here. WooCommerce\u2019s <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm">/product-category/</code> paths, Magento\u2019s layered navigation URLs, BigCommerce\u2019s <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm">.html</code> suffixes — each needs pattern-level redirect rules plus manual mapping for your highest-value pages. Shopify enforces its own URL structure (<code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm">/products/</code>, <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm">/collections/</code>), so near-identical URLs are usually impossible — which makes the 301 map the single most valuable artifact of the entire project.</>,
        <>Alongside redirects we migrate every meta title and description, alt text, and structured data; rebuild the XML sitemap; and submit it to Search Console on launch day. Then we watch: crawl stats, coverage reports, and ranking positions daily for the first weeks. A brief ranking wobble of days to a couple of weeks is normal as Google re-crawls; sustained drops are not, and the monitoring exists to catch and fix any missed mapping immediately. This is the same technical discipline behind our <Link to="/seo" className="text-indigo-600 underline underline-offset-2">ecommerce SEO service</Link>.</>,
      ],
    },
    {
      heading: 'What Gets Migrated',
      accent: '(Everything)',
      paragraphs: [
        <><strong>Products:</strong> titles, descriptions with formatting intact, all variants and options, SKUs, barcodes, prices and compare-at prices, inventory levels per location, images in original resolution with alt text, and custom fields mapped to Shopify metafields.</>,
        <><strong>Customers:</strong> accounts, addresses, and marketing consent status (migrated compliantly — consent records matter legally). Order history comes across linked to the right customers so lifetime-value data and support context survive.</>,
        <><strong>Content:</strong> blog posts, pages, navigation menus, and reviews (via review-app import). Discount codes and gift cards are recreated; active gift card balances are preserved.</>,
        <>One honest caveat: customer <em>passwords</em> cannot be migrated to Shopify from any platform — they\u2019re hashed with platform-specific methods. Customers reset their password on first login; we handle this with a launch email campaign so it feels like a feature ("we\u2019ve upgraded!") rather than a breakage.</>,
      ],
    },
    {
      heading: 'After Launch:',
      accent: 'The 30–60 Day Safety Net',
      paragraphs: [
        <>Launch is not the finish line. We keep your old store accessible (behind the scenes, not publicly indexed) for 30–60 days as the source of truth for anything that needs re-verification. During this window we monitor Search Console for crawl errors and coverage anomalies, verify redirect hit rates in the logs, reconcile order and inventory data, and fix anything the real world surfaces.</>,
        <>It\u2019s also the ideal moment to bank the platform upgrade: a fresh Shopify build is the perfect foundation for a <Link to="/shopify-speed-optimization" className="text-indigo-600 underline underline-offset-2">speed optimization pass</Link> and a <Link to="/shopify-cro" className="text-indigo-600 underline underline-offset-2">conversion optimization program</Link> — many clients see their migration pay for itself through the conversion lift of simply being on a faster, better-converting platform.</>,
      ],
    },
    {
      heading: 'Rebuilding Your Functionality:',
      accent: 'The Plugin-to-App Translation',
      paragraphs: [
        <>Data is only half a store — the other half is behavior. Every WooCommerce plugin, Magento extension, or custom feature needs an explicit answer on Shopify: is it native, is there a quality app, or does it need custom development? We build this functionality map during the audit, because discovering mid-project that your tiered-pricing plugin has no Shopify equivalent is how timelines double.</>,
        <>The good news: much of what required plugins elsewhere is native on Shopify — abandoned checkout recovery, discount codes, multi-currency via Markets, basic subscriptions APIs, gift cards, and analytics all come standard. The pattern-matching for the rest is well-worn territory: WooCommerce\u2019s subscription plugins map to Shopify subscription apps or custom Subscription API builds, Magento\u2019s layered navigation maps to Shopify\u2019s Search &amp; Discovery filtering with metafields, and B2B extensions map to Shopify\u2019s native B2B suite (now on all paid plans, with the deeper capabilities on <Link to="/shopify-plus-development" className="text-indigo-600 underline underline-offset-2">Shopify Plus</Link>).</>,
        <>Where no app fits — bespoke configurators, unusual pricing engines, deep ERP hooks — we build it as a <Link to="/shopify-app-development" className="text-indigo-600 underline underline-offset-2">custom app</Link>, which is frequently cheaper over two years than the stack of monthly app subscriptions it replaces. And a migration is the one moment you get to make app-stack decisions with a clean slate: most stores arrive dragging 20+ plugins and leave running a deliberate stack of 8–10 apps, which is a speed and maintenance win on its own.</>,
        <>Timing matters as much as mapping. Never launch a migration into your peak season — the ideal window is your slowest quarter, with launch at least 6–8 weeks before any major sales event so the SEO transition fully settles and the team is fluent in the new admin before real pressure arrives.</>,
      ],
    },
  ],
  method: {
    heading: 'Our Migration',
    accent: 'Process',
    sub: 'Seven stages, each with explicit verification before the next begins. Nothing launches on hope.',
    items: [
      { icon: <Search className="text-indigo-600" />, title: '1. Audit', desc: 'Full crawl of your current store: every URL, its traffic, its backlinks, plus a data inventory of products, customers, orders, and content.' },
      { icon: <Download className="text-blue-600" />, title: '2. Export', desc: 'Structured extraction from your platform — native exports, APIs, or direct database access for custom builds — normalized and validated.' },
      { icon: <Upload className="text-purple-600" />, title: '3. Import', desc: 'Data loaded into Shopify with variants, metafields, images, and relationships intact — then reconciled line-by-line against the source.' },
      { icon: <GitBranch className="text-orange-600" />, title: '4. Redirects', desc: 'A complete 301 map from every legacy URL to its exact new destination — pattern rules plus manual mapping for high-value pages.' },
      { icon: <Shield className="text-emerald-600" />, title: '5. SEO Preservation', desc: 'Meta titles, descriptions, alt text, and structured data migrated; new XML sitemap built and ready for Search Console.' },
      { icon: <TestTube2 className="text-pink-600" />, title: '6. Testing', desc: 'Full pre-launch QA: test orders, payment and shipping flows, redirect spot-checks, mobile testing, and data reconciliation reports.' },
      { icon: <Rocket className="text-red-500" />, title: '7. Launch', desc: 'DNS cutover at low-traffic hours, sitemap submitted, redirects live — with the team on standby monitoring in real time.' },
      { icon: <LineChart className="text-cyan-600" />, title: '8. Post-Launch Watch', desc: '30–60 days of Search Console, ranking, and data monitoring with the old store retained as a verification safety net.' },
    ],
  },
  checklist: {
    heading: 'Pre-Migration',
    accent: 'Checklist',
    intro: 'Whether you hire us or not, do not migrate without every item on this list.',
    items: [
      'Full crawl/export of ALL current URLs (Screaming Frog or similar)',
      'Search Console + GA4 export of your top-traffic pages',
      'Backlink report — know which URLs external sites point to',
      'Complete data backup: products, customers, orders, content',
      'One-to-one 301 redirect map (never blanket-redirect to homepage)',
      'Meta titles/descriptions inventory for your top pages',
      'Plan for customer password resets (they cannot be migrated)',
      'Review-platform export before your old store access expires',
      'Launch scheduled outside your peak sales period',
      'Old store retained for 30–60 days post-launch',
      'New XML sitemap ready to submit on launch day',
      'Daily rank + Search Console monitoring plan for weeks 1–4',
    ],
  },
  testimonial: {
    quote: 'If you\u2019re an e-commerce brand looking to scale, they are the absolute best choice.',
    author: 'Becca',
    role: 'Founder, Luxury Brand',
  },
  faqs: [
    {
      q: 'Will my Google rankings drop after migrating to Shopify?',
      a: 'With a proper migration — complete one-to-one 301 redirects, migrated metadata, and a submitted sitemap — a brief fluctuation of a few days to two weeks is normal while Google re-crawls, after which rankings recover and often improve thanks to Shopify\u2019s faster, cleaner technical foundation. Sustained ranking drops come from missing or lazy redirects, which is precisely what our process is built to prevent.',
    },
    {
      q: 'Will any of my products or data be lost?',
      a: 'No. Products, variants, images, SKUs, prices, inventory, customers, order history, blog content, pages, and reviews all migrate, and we reconcile the imported data line-by-line against your source before launch. The one technical exception on every platform is customer passwords (they\u2019re hashed and non-transferable) — customers simply reset on first login, which we smooth over with a launch email.',
    },
    {
      q: 'How long does a Shopify migration take?',
      a: 'Typically 2–6 weeks end to end: small catalogs from Wix or Squarespace land at 2–3 weeks, while large Magento or custom-CMS stores with tens of thousands of SKUs, complex attributes, or B2B logic run 4–6+ weeks. The redirect mapping and verification stages are where we refuse to rush — that\u2019s where rankings live.',
    },
    {
      q: 'Can my store keep selling during the migration?',
      a: 'Yes. Your current store runs untouched while we build the new one in parallel. The only cutover moment is a DNS switch, done in low-traffic hours. Orders placed in the final hours are synced across, so nothing falls through the gap.',
    },
    {
      q: 'What does a migration cost?',
      a: 'It scales with catalog size, platform complexity, and how much custom functionality needs rebuilding. A straightforward Wix or Squarespace move costs a fraction of a complex Magento migration with ERP integrations. Request a free audit — we\u2019ll scope your specific store and give you a fixed quote, not an estimate that grows.',
    },
  ],
  related: [
    { to: '/shopify-theme-customization', label: 'Theme Customization', desc: 'Don\u2019t just replatform — upgrade. Launch on a custom Online Store 2.0 theme built for your brand.' },
    { to: '/shopify-speed-optimization', label: 'Speed Optimization', desc: 'Start life on Shopify passing Core Web Vitals — the cleanest moment to build speed in is launch.' },
    { to: '/shopify-maintenance', label: 'Shopify Maintenance', desc: 'Post-migration peace of mind: monitoring, updates, and support from the team that moved you.' },
  ],
  sources: [
    { href: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes', label: 'Google — Site moves with URL changes' },
    { href: 'https://help.shopify.com/en/manual/migrating-to-shopify', label: 'Shopify — Migration documentation' },
    { href: 'https://developers.google.com/search/docs/crawling-indexing/301-redirects', label: 'Google — 301 redirects and SEO' },
  ],
};

export const ShopifyMigrationPage: React.FC = () => <PillarTemplate content={content} />;
