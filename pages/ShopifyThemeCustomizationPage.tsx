import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home, PackageSearch, LayoutGrid, Menu as MenuIcon, ShoppingCart, Sparkles,
  Smartphone, Blocks, FileCode2, Layers,
} from 'lucide-react';
import { PillarTemplate, PillarContent } from '../components/pillar/PillarTemplate';

const content: PillarContent = {
  slug: 'shopify-theme-customization',
  serviceName: 'Shopify Theme Customization',
  serviceDescription:
    'Custom Shopify theme development and customization: bespoke homepages, product and collection pages, mega menus, cart drawers, animations, custom Liquid sections, and Online Store 2.0 upgrades — built for speed and conversion.',
  badge: 'Custom Shopify Theme Development',
  h1Lead: 'Shopify Theme',
  h1Accent: 'Customization',
  subtitle:
    'Your theme is your storefront, your salesperson, and your brand — and 3,000 other stores are running the same one. Custom theme development makes your store unmistakably yours while staying fast, maintainable, and built on Online Store 2.0.',
  heroBullets: [
    'Online Store 2.0 native — sections everywhere',
    'Performance budgeted — no speed tax for beauty',
    'Editable by your team, no developer needed',
    'Conversion-informed design decisions',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200',
    alt: 'Shopify theme developer customizing an Online Store 2.0 theme with custom Liquid sections and responsive design',
  },
  stats: [
    { value: 'OS 2.0', label: 'Every build on Online Store 2.0 architecture — sections on every page' },
    { value: '9,000+', label: 'Products on the Shopify store we run ourselves — we build what we operate' },
    { value: '100%', label: 'Of custom sections editable by your team in the theme editor' },
    { value: '0', label: 'Page-builder apps required — native code, no monthly app tax' },
  ],
  problems: {
    heading: 'What We',
    accent: 'Customize',
    sub: 'From single high-impact sections to ground-up custom themes — every build is native code, never a page-builder app slowing your store.',
    items: [
      {
        icon: <Home className="text-indigo-600" />,
        title: 'Custom Homepage',
        desc: 'Your highest-traffic page deserves better than stock theme sections. We design and build homepage experiences that communicate your brand in the first scroll and route visitors to revenue: bestseller logic, editorial storytelling, social proof, and offer placement that converts.',
      },
      {
        icon: <PackageSearch className="text-blue-600" />,
        title: 'Custom Product Pages',
        desc: 'The page where money changes hands. Custom galleries with zoom and video, metafield-driven spec tables, size guides, shipping estimators, sticky add-to-cart, and cross-sell placement — designed around how your specific customers decide.',
      },
      {
        icon: <LayoutGrid className="text-purple-600" />,
        title: 'Collection Pages',
        desc: 'Faceted filtering that actually helps (size, color, price, custom attributes via metafields), promotional tiles inside the grid, collection storytelling headers, and sort logic tuned to push profitable products forward.',
      },
      {
        icon: <MenuIcon className="text-emerald-600" />,
        title: 'Mega Menu',
        desc: 'For catalogs too rich for a dropdown: multi-column mega menus with imagery, featured products, and promotional slots — keyboard accessible, mobile-adapted, and fast.',
      },
      {
        icon: <ShoppingCart className="text-orange-600" />,
        title: 'Cart Drawer',
        desc: 'A slide-out cart that sells: free-shipping progress bars, in-cart upsells and cross-sells, gift-wrap and note options, and a checkout button that\u2019s never more than one tap away. Cart drawers consistently outperform cart pages in our testing.',
      },
      {
        icon: <Sparkles className="text-pink-600" />,
        title: 'Animations & Micro-interactions',
        desc: 'Scroll reveals, hover states, add-to-cart feedback, and smooth transitions that make a store feel premium — implemented with CSS and lightweight JS, performance-budgeted so delight never costs you Core Web Vitals.',
      },
    ],
  },
  guide: [
    {
      heading: 'Why Online Store 2.0',
      accent: 'Changed Everything',
      paragraphs: [
        <>Online Store 2.0 — Shopify\u2019s theme architecture introduced with Dawn — rebuilt how themes work. The headline feature: <strong>sections on every page</strong>, not just the homepage. Product pages, collection pages, blog posts, and custom pages all become JSON templates composed of reorderable, configurable sections. For store owners, that means the marketing team can build a landing page or restructure a product template in the theme editor — no developer ticket required.</>,
        <>The second pillar is <strong>metafields and metaobjects</strong>: structured custom data (ingredients, dimensions, care instructions, compatibility charts) attached to products and rendered dynamically by theme sections. Instead of hard-coding a spec table per product or stuffing HTML into descriptions, data lives as data — editable in the admin, rendered consistently, and reusable across templates. Metaobjects go further, letting you define entirely custom content types (designers, store locations, ingredient glossaries) that non-technical staff manage like products.</>,
        <>If your store still runs a pre-2.0 "vintage" theme, you\u2019re paying a compounding tax: every content change needs a developer, page-builder apps fill the gaps (adding weight and monthly fees), and you\u2019re cut off from years of platform improvements. An OS 2.0 rebuild is the single upgrade that pays dividends on every future change you make.</>,
      ],
    },
    {
      heading: 'Custom Theme vs. Customized Theme:',
      accent: 'An Honest Comparison',
      paragraphs: [
        <>You don\u2019t always need a fully custom theme, and we\u2019ll tell you when you don\u2019t. <strong>Customizing a premium theme</strong> (Dawn, or a quality paid theme) suits stores that need distinctive key pages and a handful of custom sections — it\u2019s faster, cheaper, and inherits the theme developer\u2019s ongoing updates. The trade-off: you carry code for features you\u2019ll never use, and deep changes fight the theme\u2019s assumptions.</>,
        <><strong>A ground-up custom theme</strong> makes sense when brand differentiation is strategic, when performance targets are aggressive (custom themes ship only the code you need), or when your catalog\u2019s logic doesn\u2019t fit standard templates — configurators, B2B pricing displays, unusual product relationships. It costs more upfront and you own the maintenance, but nothing about your store is generic, and there\u2019s no dead weight.</>,
        <>The middle path we build most often: a lean base (usually Dawn-derived) stripped of unused features, plus a library of custom sections built precisely for your brand. Distinctive where customers look, standard where they don\u2019t, fast everywhere. Every build ships performance-budgeted — we treat <Link to="/shopify-speed-optimization" className="text-indigo-600 underline underline-offset-2">Core Web Vitals as a design constraint</Link>, not an afterthought, because a beautiful theme that fails LCP is a beautiful liability.</>,
      ],
    },
    {
      heading: 'Custom Liquid, Sections,',
      accent: 'and How We Build',
      paragraphs: [
        <>Everything we ship is native Shopify: Liquid templates, JSON section schemas, vanilla or lightweight JavaScript, and CSS — no page-builder apps, no external dependencies renting your storefront back to you at $30/month. Native code is faster (no app-injected scripts), portable (it\u2019s yours), and future-proof (it works as long as Shopify does).</>,
        <>Every custom section is built with a full settings schema: your team changes copy, images, colors, layouts, and toggles features in the theme editor, exactly like stock sections. The test we hold ourselves to: <em>could a marketer with no code knowledge use this section correctly?</em> If not, the schema isn\u2019t finished. Sections also ship responsive by default and mobile-first — the majority of your traffic is on a phone, so mobile isn\u2019t an adaptation, it\u2019s the primary design.</>,
        <>Design decisions themselves are conversion-informed, drawing on what our <Link to="/shopify-cro" className="text-indigo-600 underline underline-offset-2">Shopify CRO practice</Link> has tested across stores: where trust elements earn their space, how gallery interactions affect add-to-cart rates, what sticky elements do on mobile. Custom doesn\u2019t mean experimental with your revenue — it means your brand, on proven patterns.</>,
      ],
    },
    {
      heading: 'Before & After:',
      accent: 'What Changes',
      paragraphs: [
        <><strong>Before:</strong> a stock theme with the same layout as thousands of stores, page-builder apps adding 400KB of JavaScript, product descriptions stuffed with hand-written HTML tables, every landing page a developer request, and a homepage the marketing team hasn\u2019t been able to restructure since launch.</>,
        <><strong>After:</strong> a storefront that\u2019s recognizably yours in the first scroll, custom sections your team rearranges freely, metafield-driven product content that\u2019s consistent across the catalog, no page-builder tax, and Core Web Vitals passing because the theme carries exactly the code it needs. Typical engagements run 3–6 weeks for a comprehensive customization, 6–10 for a ground-up custom theme.</>,
      ],
    },
    {
      heading: 'Theme SEO:',
      accent: 'The Code Your Rankings Sit On',
      paragraphs: [
        <>A theme isn\u2019t just what customers see — it\u2019s what Google reads. Every theme we build or customize ships SEO-complete by default: a single H1 per template with a logical heading hierarchy beneath it, semantic HTML (real <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm">nav</code>, <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm">main</code>, and <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm">article</code> elements, not div soup), and structured data — Product schema with price, availability, and review markup on PDPs, BreadcrumbList on every template, and Organization markup site-wide — so your products qualify for rich results in both classic search and AI-powered answers.</>,
        <>Image handling gets the same discipline: every image renders through Shopify\u2019s CDN with responsive <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-sm">srcset</code> sizes, explicit dimensions (no layout shift), native lazy loading below the fold, and alt-text fields wired to metafields so merchandisers fill them in as naturally as a product title. These are the on-page fundamentals our <Link to="/seo" className="text-indigo-600 underline underline-offset-2">ecommerce SEO service</Link> audits for — building them into the theme means every future product inherits them for free.</>,
        <>Accessibility rides along with SEO, because they share a foundation: keyboard-navigable menus and modals, visible focus states, sufficient color contrast, and ARIA where native semantics don\u2019t suffice. Beyond being the right thing to build, accessible themes convert better (everyone can complete checkout) and reduce legal exposure — ADA-related demand letters against ecommerce sites are a growth industry you don\u2019t want to fund.</>,
      ],
    },
  ],
  method: {
    heading: 'Our Theme Development',
    accent: 'Capabilities',
    sub: 'Native Shopify engineering across the full theme surface.',
    items: [
      { icon: <Blocks className="text-indigo-600" />, title: 'Section Development', desc: 'Bespoke OS 2.0 sections with complete settings schemas — drag, drop, and configure them anywhere without touching code.' },
      { icon: <FileCode2 className="text-purple-600" />, title: 'Custom Liquid', desc: 'Complex product logic, dynamic pricing displays, conditional content, and metafield rendering written in clean, documented Liquid.' },
      { icon: <Layers className="text-blue-600" />, title: 'Theme 2.0 Upgrades', desc: 'Vintage theme to Online Store 2.0 migrations that preserve your design while unlocking sections everywhere and metafields.' },
      { icon: <Smartphone className="text-emerald-600" />, title: 'Mobile Optimization', desc: 'Mobile-first builds: thumb-reachable actions, performant galleries, and layouts designed for the device most customers actually use.' },
      { icon: <Home className="text-orange-600" />, title: 'Landing Page Systems', desc: 'Reusable section libraries that let your team assemble campaign pages in minutes — no page-builder app required.' },
      { icon: <Sparkles className="text-pink-600" />, title: 'Animation & Polish', desc: 'Performance-budgeted micro-interactions and scroll experiences that add premium feel without Core Web Vitals cost.' },
      { icon: <ShoppingCart className="text-cyan-600" />, title: 'Cart & Checkout UX', desc: 'Cart drawers with upsells and shipping progress, plus checkout customization where your plan supports it.' },
      { icon: <MenuIcon className="text-amber-600" />, title: 'Navigation Systems', desc: 'Mega menus, predictive search integration, and mobile navigation built for large catalogs and fast product discovery.' },
    ],
  },
  process: {
    heading: 'From Brief to',
    accent: 'Launch',
    steps: [
      { title: 'Discovery & UX Audit', desc: 'We study your brand, catalog structure, analytics, and current theme — identifying what to keep, what to rebuild, and where conversion opportunities hide.' },
      { title: 'Design', desc: 'High-fidelity designs for every key template, mobile-first, reviewed and iterated with you before a line of code is written.' },
      { title: 'Development', desc: 'Native Liquid/OS 2.0 build on a duplicate theme with full section schemas, metafield architecture, and a performance budget enforced throughout.' },
      { title: 'QA & Launch', desc: 'Cross-device and cross-browser testing, speed verification against Core Web Vitals, content migration, staff training on the new sections — then a monitored launch.' },
    ],
  },
  checklist: {
    heading: 'Theme Health',
    accent: 'Self-Check',
    intro: 'How does your current theme score? Each "no" is friction your team and customers pay for daily.',
    items: [
      'Your theme is Online Store 2.0 (JSON templates, sections on all pages)',
      'Marketing can build a landing page without a developer',
      'Product specs live in metafields, not hand-written HTML',
      'No page-builder app is rendering your core pages',
      'Your homepage passes Core Web Vitals on mobile',
      'The cart is a drawer with upsell/free-shipping logic',
      'Navigation surfaces your full catalog within two taps on mobile',
      'Custom sections have settings — nothing is hard-coded',
      'The theme has been updated within the last year',
      'Uninstalled apps left no leftover code in your Liquid files',
      'Every image ships responsive sizes (srcset), not originals',
      'Your brand is recognizable with the logo covered',
    ],
  },
  testimonial: {
    quote: 'The custom store design and conversion optimizations by eCeez are top tier.',
    author: 'Becca',
    role: 'Founder, Luxury Brand',
  },
  faqs: [
    {
      q: 'Should I customize a premium theme or build a fully custom theme?',
      a: 'Customize a premium theme when you need distinctive key pages on a solid foundation — it\u2019s faster and cheaper, and you inherit the theme developer\u2019s updates. Go fully custom when brand differentiation is strategic, performance targets are aggressive, or your catalog logic doesn\u2019t fit standard templates. Most of our clients land on the middle path: a lean base plus a custom section library. We\u2019ll recommend honestly based on your goals and budget.',
    },
    {
      q: 'Will customizations break when the theme updates?',
      a: 'This is exactly why architecture matters. We build customizations as self-contained sections and snippets rather than editing core theme files wherever possible, which makes updates dramatically safer. When updates do require merging, we handle it on a duplicate theme with full testing — it\u2019s a core part of our maintenance plans.',
    },
    {
      q: 'What is Online Store 2.0 and do I need it?',
      a: 'Online Store 2.0 is Shopify\u2019s modern theme architecture: sections on every page (not just the homepage), JSON templates, and native metafield support. If your theme predates it, every content change beyond basics needs a developer, and you\u2019re likely paying for page-builder apps to compensate. Upgrading unlocks self-service editing for your team and is usually the highest-leverage theme investment available.',
    },
    {
      q: 'How long does theme customization take?',
      a: 'A focused engagement — custom homepage plus product page and a handful of sections — typically runs 3–6 weeks. A comprehensive ground-up custom theme runs 6–10 weeks including design, development, QA, and launch. All work happens on a duplicate theme, so your live store sells uninterrupted throughout.',
    },
    {
      q: 'Will a custom theme slow down my store?',
      a: 'Ours won\u2019t — every build carries an enforced performance budget, and custom themes are often faster than stock ones because they ship only the code your store uses (multipurpose themes carry hundreds of features you\u2019ll never enable). We verify Core Web Vitals before launch and treat speed as a design requirement, not a post-launch patch.',
    },
  ],
  related: [
    { to: '/shopify-speed-optimization', label: 'Speed Optimization', desc: 'Already love your design? Keep it and make it fast — Core Web Vitals engineering without a rebuild.' },
    { to: '/shopify-cro', label: 'Shopify CRO', desc: 'Let evidence drive the design: test-informed customization that lifts revenue, not just aesthetics.' },
    { to: '/shopify-app-development', label: 'App Development', desc: 'When theme code isn\u2019t enough, custom apps extend your store\u2019s functionality without compromise.' },
  ],
  sources: [
    { href: 'https://shopify.dev/docs/storefronts/themes/architecture', label: 'Shopify.dev — Theme architecture (OS 2.0)' },
    { href: 'https://help.shopify.com/en/manual/custom-data/metafields', label: 'Shopify — Metafields documentation' },
    { href: 'https://shopify.dev/docs/storefronts/themes/best-practices/performance', label: 'Shopify.dev — Theme performance' },
  ],
};

export const ShopifyThemeCustomizationPage: React.FC = () => <PillarTemplate content={content} />;
