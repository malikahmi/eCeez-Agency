import React from 'react';
import { Link } from 'react-router-dom';
import {
  Image as ImageIcon, Boxes, Code2, ShieldAlert, Palette, Type,
  Gauge, Zap, Scissors, SplitSquareHorizontal, Trash2, FileCode2, Wrench, Activity,
} from 'lucide-react';
import { PillarTemplate, PillarContent, AUDIT_URL } from '../components/pillar/PillarTemplate';

const content: PillarContent = {
  slug: 'shopify-speed-optimization',
  serviceName: 'Shopify Speed Optimization',
  serviceDescription:
    'Professional Shopify speed optimization service: Core Web Vitals engineering, image optimization, app cleanup, critical CSS, and theme performance tuning that lifts conversions and search rankings.',
  badge: 'Shopify Performance Engineering',
  h1Lead: 'Shopify',
  h1Accent: 'Speed Optimization',
  subtitle:
    'Speed up your Shopify store, pass Core Web Vitals, and stop losing sales to slow pages. Faster stores rank higher and convert better — this page shows you exactly how, whether you hire us or do it yourself.',
  heroBullets: [
    'Pass Core Web Vitals (LCP · INP · CLS)',
    'Average 60%+ load-time reduction',
    'No theme rebuild required',
    'Measured on real-user (CrUX) data',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    alt: 'Shopify speed optimization dashboard showing improved Core Web Vitals and page load performance metrics',
  },
  stats: [
    { value: '+8.4%', label: 'Retail conversion lift from a 0.1s mobile speed gain (Google/Deloitte)' },
    { value: '~7%', label: 'Conversions lost per extra second of load time (Akamai)' },
    { value: '<2.5s', label: 'Google\u2019s "good" threshold for Largest Contentful Paint' },
    { value: '70%+', label: 'Of Shopify traffic is mobile — where speed problems hit hardest' },
  ],
  problems: {
    heading: 'Why Is Your Shopify Store',
    accent: 'Slow?',
    sub: 'After auditing hundreds of Shopify stores, the same six culprits appear over and over. Odds are your store has at least three of them.',
    items: [
      {
        icon: <ImageIcon className="text-indigo-600" />,
        title: 'Large, Unoptimized Images',
        desc: 'Images typically account for 60–80% of a Shopify page\u2019s weight. Uploading 4,000px product photos into 600px slots forces every visitor to download megabytes they never see. Shopify\u2019s CDN serves WebP/AVIF automatically, but it can\u2019t fix wrongly sized or uncompressed originals.',
      },
      {
        icon: <Boxes className="text-blue-600" />,
        title: 'Heavy App Stack',
        desc: 'The average Shopify store runs 15–20 apps, and most inject JavaScript on every single page — even pages where the app does nothing. Worse, many apps leave orphaned code in your theme after you uninstall them.',
      },
      {
        icon: <Code2 className="text-purple-600" />,
        title: 'JavaScript Bloat',
        desc: 'Sliders, pop-ups, chat widgets, tracking pixels, and review carousels each ship their own JS bundle. On mid-range phones, parsing and executing that JavaScript is often a bigger delay than downloading it — and it\u2019s the main reason stores fail INP.',
      },
      {
        icon: <ShieldAlert className="text-red-600" />,
        title: 'Render-Blocking Resources',
        desc: 'CSS files and synchronous scripts loaded in the <head> stop the browser from painting anything until they finish. Visitors stare at a white screen while stylesheets for below-the-fold sections download.',
      },
      {
        icon: <Palette className="text-orange-600" />,
        title: 'Slow or Legacy Themes',
        desc: 'Themes built before Online Store 2.0 — or "do-everything" multipurpose themes — carry code for hundreds of features you\u2019ll never enable. Every unused feature still costs your customers milliseconds.',
      },
      {
        icon: <Type className="text-emerald-600" />,
        title: 'Unoptimized Fonts',
        desc: 'Custom web fonts without font-display: swap block text rendering entirely (the dreaded invisible-text flash). Loading four font families with six weights each can add half a second to first render on its own.',
      },
    ],
  },
  guide: [
    {
      heading: 'What "Fast" Means in 2026:',
      accent: 'Core Web Vitals',
      paragraphs: [
        <>Google measures real-world speed through three <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline underline-offset-2">Core Web Vitals</a>, collected from actual Chrome users of your store (the CrUX dataset) over a rolling 28-day window. To "pass," at least 75% of your visitors must have a good experience on all three metrics. This is why a shiny Lighthouse score in a lab means little if real customers on real phones still wait.</>,
        <><strong>Largest Contentful Paint (LCP)</strong> — how long until the biggest element (usually your hero image or product photo) is visible. Good: under 2.5 seconds. On Shopify, LCP failures almost always trace back to the hero image: too large, lazy-loaded when it shouldn\u2019t be, or waiting behind render-blocking scripts.</>,
        <><strong>Interaction to Next Paint (INP)</strong> — how quickly the page responds when a customer taps "Add to Cart" or opens the menu. Good: under 200 milliseconds. INP replaced FID in March 2024 and is now the most commonly failed vital, because it punishes exactly what Shopify stores accumulate most: third-party JavaScript competing for the main thread.</>,
        <><strong>Cumulative Layout Shift (CLS)</strong> — how much the page jumps around while loading. Good: under 0.1. Announcement bars that push content down, images without width/height attributes, and late-injected app banners are the usual Shopify offenders.</>,
        <>Speed is also money in the most direct sense. Google and Deloitte\u2019s <em>Milliseconds Make Millions</em> study of 37 brands found that a 0.1-second improvement in mobile site speed increased retail conversions by 8.4% and average order value by 9.2%. Akamai\u2019s research puts the cost of each additional second of load time at roughly 7% of conversions. If your store does $50,000/month, one avoidable second is real revenue walking out the door.</>,
      ],
    },
    {
      heading: 'How to Diagnose Your Store',
      accent: 'Before Touching Anything',
      paragraphs: [
        <>Never optimize blind. Start with <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline underline-offset-2">PageSpeed Insights</a>: it shows both lab data (Lighthouse) and, crucially, field data from real Chrome users. Test your homepage, your best-selling product page, and a collection page separately — they have different bottlenecks. Product pages usually fail on image weight; collection pages on layout shift; homepages on app scripts.</>,
        <>Next, open Chrome DevTools → Network tab, filter by JS, and sort by size. Every third-party domain you see is an app or pixel taxing every visit. Then check the Coverage tab: it\u2019s common to find that 60–70% of downloaded CSS and JavaScript is never executed on the page at all.</>,
        <>Finally, review your app list honestly. For each app ask: does it directly generate revenue, and does it need to load on every page? An app used once a month in the admin should never cost your customers front-end milliseconds. This diagnostic step alone typically identifies 3–5 apps that can be removed immediately.</>,
        <>Chasing a perfect 100 Lighthouse score is a common trap — Lighthouse is a simulated lab test, while Google ranks you on field data. We\u2019ve seen stores score 55 in Lighthouse and comfortably pass Core Web Vitals with real users, and vice versa. Optimize for the field data; use the lab only to debug.</>,
      ],
    },
    {
      heading: 'The Highest-Impact Fixes,',
      accent: 'Ranked',
      paragraphs: [
        <><strong>1. Fix the LCP image first.</strong> Your hero/product image should be served at its display size (use Shopify\u2019s <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm">image_url</code> filter with explicit widths and a <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm">srcset</code>), compressed at quality 80–85, preloaded, and — critically — <em>never</em> lazy-loaded. Lazy-loading the above-the-fold image is the single most common self-inflicted LCP wound on Shopify.</>,
        <><strong>2. Lazy-load everything below the fold.</strong> Native <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm">loading="lazy"</code> on below-fold images and iframes defers megabytes until they\u2019re needed. Combined with correct sizing, this usually cuts initial page weight by 40–60%.</>,
        <><strong>3. Audit and remove apps.</strong> Uninstalling isn\u2019t enough — check your theme\u2019s Liquid files and <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm">theme.liquid</code> for leftover script tags from departed apps. Replacing simple app functions (announcement bars, size charts, FAQ accordions) with a few lines of native theme code removes entire JS bundles.</>,
        <><strong>4. Defer non-critical JavaScript.</strong> Add <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm">defer</code> to scripts that aren\u2019t needed for first paint, and load chat widgets, review carousels, and pop-ups only on interaction or after the page is idle. This is the primary INP fix.</>,
        <><strong>5. Inline critical CSS.</strong> Extract the styles needed for above-the-fold content, inline them in the <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm">&lt;head&gt;</code>, and load the rest asynchronously. Visitors see a styled page hundreds of milliseconds sooner.</>,
        <><strong>6. Tame your fonts.</strong> Self-host or use Shopify\u2019s font CDN, subset to the characters you use, limit yourself to two families and 3–4 weights total, and always set <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm">font-display: swap</code> so text renders immediately in a fallback font.</>,
        <><strong>7. Kill layout shift at the source.</strong> Give every image, embed, and ad slot explicit dimensions or a CSS aspect-ratio, and reserve space for dynamically injected banners. CLS fixes are usually the cheapest of all — a few attributes — with a visible quality payoff.</>,
        <>If your theme predates Online Store 2.0 or is a heavyweight multipurpose theme, the fixes above still help, but a migration to a lean OS 2.0 theme often delivers the biggest single jump. That\u2019s a larger project — see our <Link to="/shopify-theme-customization" className="text-indigo-600 underline underline-offset-2">Shopify theme customization service</Link> for how we handle it without losing your design.</>,
      ],
    },
    {
      heading: 'Common Mistakes That',
      accent: 'Make Stores Slower',
      paragraphs: [
        <>Installing a "speed booster" app to fix speed is the most ironic mistake we see — you\u2019re adding JavaScript to remove JavaScript. Most of what these apps do (lazy loading, preloading) is a few lines of theme code; some actively harm LCP by lazy-loading hero images.</>,
        <>Other frequent own-goals: compressing images so aggressively they look bad on product pages (quality 80–85 is the sweet spot — customers still need to see the stitching); deleting apps from the admin but leaving their script tags in the theme; adding a fourth analytics pixel that duplicates the other three; and re-testing only in Lighthouse immediately after changes, when CrUX field data takes up to 28 days to reflect improvements.</>,
        <>Speed work also compounds with everything else you do. Faster pages get crawled more efficiently and rank better — pair this work with our <Link to="/seo" className="text-indigo-600 underline underline-offset-2">ecommerce SEO service</Link> — and every conversion-rate experiment you run converts better on a fast page, which is why we treat speed as the foundation of <Link to="/shopify-cro" className="text-indigo-600 underline underline-offset-2">Shopify CRO</Link>.</>,
      ],
    },
  ],
  method: {
    heading: 'How We Optimize',
    accent: 'Shopify Stores',
    sub: 'Our 8-lever speed optimization framework, applied in order of impact for your specific store.',
    items: [
      { icon: <ImageIcon className="text-indigo-600" />, title: 'Image Optimization', desc: 'Right-sized, responsive srcset images at quality 80–85, served as WebP/AVIF via Shopify\u2019s CDN, with the LCP image preloaded.' },
      { icon: <Zap className="text-amber-500" />, title: 'Lazy Loading', desc: 'Native lazy loading for every below-the-fold image, video, and iframe — never the hero — cutting initial payload by up to 60%.' },
      { icon: <Scissors className="text-pink-600" />, title: 'Critical CSS', desc: 'Above-the-fold styles inlined for instant first paint; the remaining CSS loads asynchronously without blocking render.' },
      { icon: <SplitSquareHorizontal className="text-blue-600" />, title: 'Code Splitting', desc: 'JavaScript split by template so product pages don\u2019t load collection code, and features load on interaction instead of upfront.' },
      { icon: <Trash2 className="text-red-600" />, title: 'App Cleanup', desc: 'Full app audit, removal of redundant apps, and surgical deletion of orphaned scripts that uninstalled apps left in your theme.' },
      { icon: <FileCode2 className="text-purple-600" />, title: 'Script Optimization', desc: 'Third-party pixels and widgets deferred, delayed, or loaded on interaction — the single biggest INP improvement available.' },
      { icon: <Wrench className="text-emerald-600" />, title: 'Theme Optimization', desc: 'Liquid profiling, removal of unused theme features, font subsetting with font-display: swap, and CLS-proof layout reservations.' },
      { icon: <Activity className="text-cyan-600" />, title: 'Performance Monitoring', desc: 'Ongoing CrUX and Search Console tracking with monthly reports, so regressions from new apps or campaigns are caught in days, not quarters.' },
    ],
  },
  beforeAfter: {
    heading: 'Real Client Result',
    before: '3.8s',
    beforeLabel: 'Load time — before',
    after: '1.1s',
    afterLabel: 'Load time — after',
    note: 'A DTC apparel store on a heavily-customized theme with 22 apps. We removed 9 apps, rebuilt image delivery, deferred all third-party scripts, and inlined critical CSS. All three Core Web Vitals moved to "good" within one CrUX cycle, and mobile conversion rate rose 31% quarter over quarter.',
  },
  checklist: {
    heading: 'Free Shopify Speed',
    accent: 'Checklist',
    intro: 'Work through this list yourself before hiring anyone — it\u2019s the same first-pass checklist our engineers use on every audit.',
    items: [
      'Run PageSpeed Insights on homepage, product page, and collection page — record field (CrUX) data, not just lab scores',
      'Confirm your hero / LCP image is NOT lazy-loaded and is preloaded',
      'Serve images at display size with srcset — no 4000px originals in 600px slots',
      'Add loading="lazy" to all below-the-fold images and iframes',
      'List every installed app; remove any that don\u2019t clearly earn their milliseconds',
      'Search theme code for script tags from apps you\u2019ve already uninstalled',
      'Add defer to non-critical scripts; load chat/pop-ups on interaction',
      'Limit fonts to 2 families / 3–4 weights with font-display: swap',
      'Give all images and embeds explicit width/height (or aspect-ratio) to kill CLS',
      'Reserve space for announcement bars and injected banners',
      'Remove duplicate analytics/tracking pixels',
      'Re-check CrUX data after 28 days — field data, not Lighthouse, is what Google ranks',
    ],
  },
  testimonial: {
    quote: 'The custom store design and conversion optimizations by eCeez are top tier. Our Shopify conversion rate increased by over 140% since the launch.',
    author: 'Becca',
    role: 'Founder, Luxury Brand',
  },
  faqs: [
    {
      q: 'Why is my Shopify store slow?',
      a: 'The most common causes are oversized images (60–80% of typical page weight), too many apps injecting JavaScript on every page (the average store runs 15–20), render-blocking CSS and scripts, a bloated or legacy theme, and unoptimized web fonts. Most slow stores suffer from three or more of these at once, which is why single-fix "speed apps" rarely move the needle.',
    },
    {
      q: 'How fast should a Shopify store load?',
      a: 'Aim to pass Google\u2019s Core Web Vitals with real users: Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1 — each at the 75th percentile of your actual visitors. In practice, a well-optimized Shopify store feels instant, with the main product image visible in 1–1.5 seconds on mobile.',
    },
    {
      q: 'Does speed improve SEO?',
      a: 'Yes. Core Web Vitals are a confirmed Google ranking signal within the page experience system, acting as a tie-breaker between otherwise comparable pages. Speed also improves crawl efficiency, and the indirect effect is even larger: faster pages have lower bounce rates and higher engagement, which correlates strongly with better rankings and — per Google/Deloitte research — materially higher conversion rates.',
    },
    {
      q: 'Can apps slow down my Shopify store?',
      a: 'Apps are the single biggest speed killer on most Shopify stores. Many load their JavaScript on every page regardless of whether they\u2019re used there, and most leave orphaned code in your theme after uninstalling. A proper app audit — removing redundant apps and cleaning leftover scripts — is usually the highest-ROI speed fix available.',
    },
    {
      q: 'Will speed optimization break my store\u2019s design or apps?',
      a: 'Not when done correctly. All of our work happens on a duplicate theme first, is tested across devices and templates, and only then is published. Design stays pixel-identical; the store simply renders and responds faster. Apps you genuinely rely on keep working — they just stop taxing pages where they aren\u2019t needed.',
    },
    {
      q: 'How long does Shopify speed optimization take?',
      a: 'A typical engagement takes 2–3 weeks: audit and benchmarking in week one, implementation on a duplicate theme in week two, then testing, launch, and monitoring setup. Google\u2019s field data (CrUX) updates on a 28-day rolling window, so the official Core Web Vitals pass typically registers within one cycle after launch.',
    },
  ],
  related: [
    { to: '/shopify-cro', label: 'Shopify CRO', desc: 'Speed is the foundation — conversion optimization is the multiplier. Turn your faster store into measurably more revenue.' },
    { to: '/seo', label: 'Ecommerce SEO', desc: 'Pair passing Core Web Vitals with technical SEO and topical authority to compound your organic rankings.' },
    { to: '/shopify-maintenance', label: 'Shopify Maintenance', desc: 'Keep your speed gains: ongoing monitoring, app hygiene, and updates so performance never silently regresses.' },
  ],
  sources: [
    { href: 'https://web.dev/articles/vitals', label: 'Google web.dev — Core Web Vitals' },
    { href: 'https://pagespeed.web.dev/', label: 'PageSpeed Insights' },
    { href: 'https://www.thinkwithgoogle.com/intl/en-emea/marketing-strategies/app-and-mobile/milliseconds-make-millions/', label: 'Google/Deloitte — Milliseconds Make Millions' },
    { href: 'https://shopify.dev/docs/storefronts/themes/best-practices/performance', label: 'Shopify.dev — Theme performance best practices' },
  ],
};

export const ShopifySpeedOptimizationPage: React.FC = () => <PillarTemplate content={content} />;
