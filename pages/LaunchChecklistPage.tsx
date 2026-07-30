import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2, Circle, RotateCcw, Printer, ArrowRight, Info,
  Rocket, Search, Gauge, ShieldCheck, CreditCard, Truck, BarChart3, Layout,
} from 'lucide-react';

/**
 * LaunchChecklistPage — /tools/shopify-launch-checklist
 *
 * A genuine link magnet: 62-point interactive pre-launch checklist with
 * persisted progress. Targets the validated checklist keyword cluster
 * (shopify launch checklist, shopify store setup checklist, shopify
 * pre-launch checklist, shopify migration checklist, shopify go live checklist).
 *
 * PRERENDER SAFETY: no scroll-triggered reveals with translate offsets — a
 * previous section was left invisible in the prerendered build by that pattern.
 * localStorage access is wrapped in try/catch and only runs inside useEffect.
 */

const STORAGE_KEY = 'eceez-launch-checklist-v1';

interface Item { id: string; text: string; why?: string }
interface Phase { key: string; title: string; icon: React.ReactNode; blurb: string; items: Item[] }

const PHASES: Phase[] = [
  {
    key: 'foundation',
    title: 'Store Foundation',
    icon: <Layout className="w-5 h-5" aria-hidden="true" />,
    blurb: 'The settings that are painful to change after launch. Get these right first.',
    items: [
      { id: 'f1', text: 'Custom domain connected and set as primary', why: 'Launching on a myshopify.com URL then switching later forces a full redirect exercise.' },
      { id: 'f2', text: 'SSL certificate active (padlock shows on every page)' },
      { id: 'f3', text: 'Store name, legal business name and contact email set correctly' },
      { id: 'f4', text: 'Store currency and default weight units confirmed', why: 'Currency cannot be changed freely once you take orders.' },
      { id: 'f5', text: 'Timezone set to your operating region (affects reports and order timestamps)' },
      { id: 'f6', text: 'Password protection removed at go-live (and not before)' },
      { id: 'f7', text: 'Favicon uploaded' },
      { id: 'f8', text: 'Staff accounts created with appropriate permissions' },
    ],
  },
  {
    key: 'products',
    title: 'Products & Catalogue',
    icon: <Rocket className="w-5 h-5" aria-hidden="true" />,
    blurb: 'Where most launches leak revenue silently.',
    items: [
      { id: 'p1', text: 'Every sellable product set to Active and Published', why: 'Draft products import successfully but never appear in your storefront. We have seen 15% of a catalogue sit invisible for weeks.' },
      { id: 'p2', text: 'Product descriptions rewritten in your own words (not manufacturer copy)', why: 'Duplicate supplier copy has no reason to rank against the hundred other stores using it.' },
      { id: 'p3', text: 'All images at least 1000px wide, consistent aspect ratio' },
      { id: 'p4', text: 'Descriptive image alt text on every product image' },
      { id: 'p5', text: 'Variants configured correctly (size, colour) with no orphan combinations' },
      { id: 'p6', text: 'SKUs unique across the catalogue', why: 'Duplicate SKUs cause inventory rows to overwrite each other unpredictably.' },
      { id: 'p7', text: 'Inventory quantities imported and attached to the right location' },
      { id: 'p8', text: 'Inventory policy decided: deny or continue selling when out of stock' },
      { id: 'p9', text: 'Collections built (manual or automated rules) with unique descriptions', why: 'Collection pages are where category search traffic lands. Empty ones do not rank.' },
      { id: 'p10', text: 'Prices and compare-at prices verified across the catalogue' },
      { id: 'p11', text: 'Product taxonomy and metafields populated for structured content' },
    ],
  },
  {
    key: 'payments',
    title: 'Payments & Checkout',
    icon: <CreditCard className="w-5 h-5" aria-hidden="true" />,
    blurb: 'Test with real money before you invite real customers.',
    items: [
      { id: 'c1', text: 'Payment provider activated and fully verified (not pending)' },
      { id: 'c2', text: 'A real test transaction placed and refunded end to end', why: 'A test-mode success does not prove your live gateway works.' },
      { id: 'c3', text: 'Accelerated checkout enabled (Shop Pay, Apple Pay, Google Pay)' },
      { id: 'c4', text: 'Taxes configured for every region you sell into' },
      { id: 'c5', text: 'Abandoned checkout recovery email enabled' },
      { id: 'c6', text: 'Checkout branding matches your store (logo, colours)' },
      { id: 'c7', text: 'Customer accounts setting decided (guest checkout allowed)' },
    ],
  },
  {
    key: 'shipping',
    title: 'Shipping & Fulfilment',
    icon: <Truck className="w-5 h-5" aria-hidden="true" />,
    blurb: 'Unprofitable shipping rates are the quietest way to lose money on every order.',
    items: [
      { id: 's1', text: 'Shipping zones cover every region you actually sell to' },
      { id: 's2', text: 'Rates tested against real product weights for profitability' },
      { id: 's3', text: 'Free shipping threshold set deliberately (if used)' },
      { id: 's4', text: 'Product weights and dimensions entered for calculated rates' },
      { id: 's5', text: 'Packaging and label workflow tested on a real order' },
      { id: 's6', text: 'Delivery timeframes stated clearly on product and cart pages' },
    ],
  },
  {
    key: 'seo',
    title: 'SEO & Indexation',
    icon: <Search className="w-5 h-5" aria-hidden="true" />,
    blurb: 'Do this at launch, not six months later when nothing is indexed.',
    items: [
      { id: 'o1', text: 'Unique title tag and meta description on every key page (50-60 / 120-160 chars)' },
      { id: 'o2', text: 'Google Search Console verified and sitemap submitted' },
      { id: 'o3', text: 'Thin tag, filter and search pages excluded from indexing', why: 'Shopify defaults generate near-duplicate pages that waste crawl budget.' },
      { id: 'o4', text: 'Product schema outputting price, availability and brand' },
      { id: 'o5', text: 'Logical internal linking from homepage to key collections' },
      { id: 'o6', text: 'One H1 per page, headings in sequential order' },
      { id: 'o7', text: '301 redirects mapped from every old URL (migrations only)', why: 'This single step is the difference between keeping and losing your rankings.' },
      { id: 'o8', text: 'robots.txt and canonical tags reviewed' },
      { id: 'o9', text: 'Google Business Profile claimed (if you have any local presence)' },
    ],
  },
  {
    key: 'speed',
    title: 'Speed & Core Web Vitals',
    icon: <Gauge className="w-5 h-5" aria-hidden="true" />,
    blurb: 'Speed is a ranking factor and a conversion lever. A slow store loses twice.',
    items: [
      { id: 'v1', text: 'Largest Contentful Paint under 2.5s on mobile' },
      { id: 'v2', text: 'Cumulative Layout Shift under 0.1' },
      { id: 'v3', text: 'Interaction to Next Paint under 200ms' },
      { id: 'v4', text: 'Hero image right-sized to its display dimensions and preloaded', why: 'Serving a 2000px image into a 600px slot is the most common LCP failure.' },
      { id: 'v5', text: 'All images served as WebP or AVIF at display size' },
      { id: 'v6', text: 'Explicit width and height on images to prevent layout shift' },
      { id: 'v7', text: 'App stack audited — every app removed that is not earning its weight' },
      { id: 'v8', text: 'Non-critical third-party scripts deferred' },
    ],
  },
  {
    key: 'trust',
    title: 'Trust, Legal & Content',
    icon: <ShieldCheck className="w-5 h-5" aria-hidden="true" />,
    blurb: 'First-time visitors need reasons to believe you before they will pay you.',
    items: [
      { id: 't1', text: 'Refund, privacy, terms and shipping policies published' },
      { id: 't2', text: 'Contact page with a real method of reaching a human' },
      { id: 't3', text: 'About page telling an actual story' },
      { id: 't4', text: 'FAQ page answering the questions buyers really ask' },
      { id: 't5', text: 'Review app installed and ready to collect social proof' },
      { id: 't6', text: 'Cookie consent and GDPR banner (if selling into the EU or UK)' },
      { id: 't7', text: 'Trust signals visible near add-to-cart and at checkout' },
    ],
  },
  {
    key: 'analytics',
    title: 'Analytics & Marketing',
    icon: <BarChart3 className="w-5 h-5" aria-hidden="true" />,
    blurb: 'If tracking is not live on day one, that data is gone forever.',
    items: [
      { id: 'a1', text: 'GA4 installed with ecommerce events firing' },
      { id: 'a2', text: 'Conversion tracking verified on a real test purchase' },
      { id: 'a3', text: 'Email platform connected with welcome and abandoned-cart flows live' },
      { id: 'a4', text: 'Email capture present but not obnoxious' },
      { id: 'a5', text: 'Social and marketplace channels connected (if selling there)' },
      { id: 'a6', text: 'Order confirmation and shipping notification emails branded and tested' },
    ],
  },
  {
    key: 'final',
    title: 'Final Pre-Launch Sweep',
    icon: <CheckCircle2 className="w-5 h-5" aria-hidden="true" />,
    blurb: 'The last hour before you remove the password.',
    items: [
      { id: 'z1', text: 'Full purchase journey completed on a real mobile phone', why: 'Most traffic is mobile. Desktop-only testing hides the failures that matter.' },
      { id: 'z2', text: 'Tested in Chrome, Safari and one other browser' },
      { id: 'z3', text: 'Every navigation link and footer link clicked and working' },
      { id: 'z4', text: 'Search function returning sensible results' },
      { id: 'z5', text: '404 page styled and helpful' },
      { id: 'z6', text: 'No placeholder text or lorem ipsum anywhere' },
      { id: 'z7', text: 'Backup export of products, customers and theme taken' },
    ],
  },
];

const TOTAL = PHASES.reduce((n, p) => n + p.items.length, 0);
const AUDIT_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSecd8M7ki7GTCBKOb0shSgZVEoiA6QMcqyvbK3K4GTumiR16g/viewform?usp=publish-editor';

export const LaunchChecklistPage: React.FC = () => {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  // Load persisted progress (client only; guarded for prerender)
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {
      /* storage unavailable — checklist still works, just won't persist */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
    } catch {
      /* ignore */
    }
  }, [done, loaded]);

  useEffect(() => {
    document.title = 'Shopify Launch Checklist 2026 (62 Points, Free & Interactive) | eCeez';
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content',
      'Free interactive Shopify launch checklist: 62 pre-launch checks across products, payments, shipping, SEO, speed and analytics. Track your progress, no signup.');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://eceez.com/tools/shopify-launch-checklist');

    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'ld-checklist';
    s.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebApplication',
          name: 'Shopify Launch Checklist',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          url: 'https://eceez.com/tools/shopify-launch-checklist',
          description: 'A free interactive 62-point pre-launch checklist for Shopify stores, covering store foundation, catalogue, payments, shipping, SEO, Core Web Vitals, trust, analytics and final testing.',
        },
        {
          '@type': 'HowTo',
          name: 'How to launch a Shopify store correctly',
          description: 'Work through nine phases of pre-launch checks before removing your store password.',
          step: PHASES.map((p, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: p.title,
            text: p.blurb,
          })),
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What should I check before launching a Shopify store?',
              acceptedAnswer: { '@type': 'Answer', text: 'Work through nine areas: store foundation settings that are hard to change later, catalogue accuracy (especially that products are Active and Published rather than Draft), a real test transaction through your live payment gateway, profitable shipping rates, SEO and indexation including sitemap submission, Core Web Vitals, legal pages and trust signals, analytics tracking, and a full mobile purchase test. Skipping the mobile test and the live payment test causes the most post-launch damage.' },
            },
            {
              '@type': 'Question',
              name: 'Why are my Shopify products not showing on my store?',
              acceptedAnswer: { '@type': 'Answer', text: 'The most common cause is products set to Draft status or Published set to false, which happens routinely during bulk CSV imports. They import successfully and sit invisible in your admin. Filter your products by Draft status and bulk-activate anything that should be sellable, then confirm the products are published to the Online Store sales channel.' },
            },
            {
              '@type': 'Question',
              name: 'What is the most commonly missed step when launching a Shopify store?',
              acceptedAnswer: { '@type': 'Answer', text: 'For new stores, placing a real test transaction through the live payment gateway and completing a full purchase on an actual mobile phone. For migrations, mapping 301 redirects from every old URL to its new equivalent, which is the single step that determines whether you keep your search rankings.' },
            },
          ],
        },
      ],
    });
    document.head.appendChild(s);
    return () => { document.getElementById('ld-checklist')?.remove(); };
  }, []);

  const toggle = useCallback((id: string) => {
    setDone((d) => ({ ...d, [id]: !d[id] }));
  }, []);

  const completed = useMemo(
    () => PHASES.reduce((n, p) => n + p.items.filter((i) => done[i.id]).length, 0),
    [done]
  );
  const pct = Math.round((completed / TOTAL) * 100);

  const reset = () => {
    if (window.confirm('Clear all checked items?')) setDone({});
  };

  return (
    <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="max-w-3xl mx-auto mb-4">
        <Link to="/tools/shopify-conversion-calculator" className="text-sm text-zinc-500 hover:text-indigo-600 transition-colors">
          &larr; More free tools
        </Link>
      </div>

      <header className="text-center mb-10 max-w-3xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold mb-5 uppercase tracking-wider">
          Free Tool &middot; No Signup
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-5 text-black tracking-tight leading-[1.1]">
          The Shopify <span className="text-indigo-600">Launch Checklist</span>
        </h1>
        <p className="text-zinc-700 text-lg leading-relaxed">
          {TOTAL} checks across nine phases, built from the mistakes we actually find on real stores.
          Tick items off as you go &mdash; your progress saves automatically in this browser.
        </p>
      </header>

      {/* PROGRESS */}
      <div className="sticky top-20 z-20 mb-10 bg-white/95 backdrop-blur border border-zinc-200 rounded-2xl p-5 shadow-sm max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-bold text-black">
            {completed} of {TOTAL} complete
            {pct === 100 && <span className="ml-2 text-emerald-600">&mdash; ready to launch</span>}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-indigo-600 border border-zinc-200 rounded-lg px-2.5 py-1.5 transition-colors"
              aria-label="Print or save this checklist as PDF"
            >
              <Printer size={13} aria-hidden="true" /> Print / PDF
            </button>
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-rose-600 border border-zinc-200 rounded-lg px-2.5 py-1.5 transition-colors"
              aria-label="Reset checklist progress"
            >
              <RotateCcw size={13} aria-hidden="true" /> Reset
            </button>
          </div>
        </div>
        <div className="h-2.5 w-full bg-zinc-100 rounded-full overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div
            className="h-full bg-gradient-to-r from-[#03AED2] to-indigo-600 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* CHECKLIST */}
      <div className="space-y-8 max-w-3xl mx-auto">
        {PHASES.map((phase, pi) => {
          const phaseDone = phase.items.filter((i) => done[i.id]).length;
          const allDone = phaseDone === phase.items.length;
          return (
            <section key={phase.key} className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8" aria-labelledby={`phase-${phase.key}`}>
              <div className="flex items-start gap-4 mb-5">
                <div className={`shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${allDone ? 'bg-emerald-500 text-white' : 'bg-indigo-50 text-indigo-600'}`}>
                  {phase.icon}
                </div>
                <div className="flex-1">
                  <h2 id={`phase-${phase.key}`} className="text-xl font-bold text-black tracking-tight">
                    {pi + 1}. {phase.title}
                  </h2>
                  <p className="text-sm text-zinc-600 mt-1 leading-relaxed">{phase.blurb}</p>
                </div>
                <div className="shrink-0 text-xs font-bold text-zinc-400 tabular-nums pt-1">
                  {phaseDone}/{phase.items.length}
                </div>
              </div>

              <ul className="space-y-2.5">
                {phase.items.map((item) => {
                  const checked = !!done[item.id];
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => toggle(item.id)}
                        aria-pressed={checked}
                        className="w-full text-left flex items-start gap-3 group rounded-xl p-2.5 -m-0.5 hover:bg-zinc-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#03AED2]"
                      >
                        {checked
                          ? <CheckCircle2 className="shrink-0 mt-0.5 text-emerald-500" size={19} aria-hidden="true" />
                          : <Circle className="shrink-0 mt-0.5 text-zinc-300 group-hover:text-indigo-400 transition-colors" size={19} aria-hidden="true" />}
                        <span className="flex-1">
                          <span className={`block text-[15px] leading-snug font-medium transition-colors ${checked ? 'text-zinc-400 line-through' : 'text-zinc-800'}`}>
                            {item.text}
                          </span>
                          {item.why && !checked && (
                            <span className="block text-[13px] text-zinc-500 mt-1 leading-relaxed">{item.why}</span>
                          )}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>

      {/* SEO CONTENT */}
      <section className="max-w-3xl mx-auto mt-16 space-y-5">
        <h2 className="text-2xl font-bold text-black tracking-tight">How to use this Shopify launch checklist</h2>
        <p className="text-zinc-700 leading-relaxed">
          Work through the phases in order. The sequence matters: foundation settings such as store currency and primary
          domain are genuinely painful to change once orders exist, so they come first. Catalogue accuracy comes next,
          because the most expensive launch mistake we see is products sitting in Draft status &mdash; imported, inventoried,
          and completely invisible to customers.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          If you are <strong>migrating rather than launching new</strong>, one item outranks everything else on this list:
          mapping 301 redirects from every old URL to its new equivalent. That single step decides whether you keep years of
          accumulated search equity or start from zero. Our <Link to="/shopify-migration" className="text-indigo-600 underline underline-offset-2">Shopify migration</Link> process
          treats the redirect map as non-negotiable for exactly that reason.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          Two checks are skipped more often than any others, and both are cheap: place a <strong>real test transaction
          through your live payment gateway</strong> (a test-mode success proves nothing about production), and complete a
          <strong> full purchase on an actual mobile phone</strong>. Most of your traffic is mobile, and desktop-only testing
          reliably hides the failures that cost the most.
        </p>
        <h2 className="text-2xl font-bold text-black tracking-tight pt-4">What this checklist is built from</h2>
        <p className="text-zinc-700 leading-relaxed">
          These are not generic best practices copied from documentation. Every item exists because we have found it broken
          on a real store &mdash; including our own. We operate a live Shopify store carrying 9,000+ products, so the
          catalogue, inventory and import items come from problems we have personally caused and fixed. The speed section maps
          directly to <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline underline-offset-2">Google&rsquo;s Core Web Vitals</a> thresholds,
          and the SEO section reflects the indexation problems that Shopify&rsquo;s default architecture creates if nobody addresses them.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          Once you are live, the work shifts from launching to compounding: <Link to="/shopify-seo" className="text-indigo-600 underline underline-offset-2">Shopify SEO</Link> to
          earn traffic, <Link to="/shopify-speed-optimization" className="text-indigo-600 underline underline-offset-2">speed optimisation</Link> to
          keep Core Web Vitals passing as you add apps, and <Link to="/shopify-cro" className="text-indigo-600 underline underline-offset-2">conversion optimisation</Link> to
          earn more from the traffic you already have. Our <Link to="/tools/shopify-conversion-calculator" className="text-indigo-600 underline underline-offset-2">conversion calculator</Link> shows
          what even a small conversion lift is worth on your numbers.
        </p>
        <div className="flex items-start gap-2 text-xs text-zinc-500 bg-zinc-50 rounded-xl p-4 mt-2">
          <Info size={14} className="shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Your progress is stored in this browser only &mdash; nothing is sent to us and no signup is required. Use
            Print / PDF to keep a copy or share it with your team.
          </span>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto mt-14 bg-zinc-900 rounded-3xl p-8 md:p-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
          Want a second pair of eyes before you launch?
        </h2>
        <p className="text-zinc-300 max-w-xl mx-auto mb-7">
          We will audit your store against this checklist and tell you exactly what is still broken &mdash;
          including the issues that do not announce themselves.
        </p>
        <a
          href={AUDIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-9 py-4 rounded-full font-bold text-lg transition-colors"
        >
          Get a Free Pre-Launch Audit <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
};
