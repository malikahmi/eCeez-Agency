import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2, TrendingUp, Briefcase, Globe2, CreditCard, Workflow,
  Rocket, Puzzle, Gauge, Users, GitMerge, Store,
} from 'lucide-react';
import { PillarTemplate, PillarContent } from '../components/pillar/PillarTemplate';

const content: PillarContent = {
  slug: 'shopify-plus-development',
  serviceName: 'Shopify Plus Development',
  serviceDescription:
    'Shopify Plus development agency for enterprise and high-volume brands: checkout extensibility, Shopify Functions, B2B at scale, Flow automation, Launchpad, Markets, and multi-storefront architecture.',
  badge: 'Enterprise Shopify Plus Agency',
  h1Lead: 'Shopify Plus',
  h1Accent: 'Development',
  subtitle:
    'Shopify Plus gives high-volume brands enterprise power — customizable checkout, deep automation, B2B at scale, and 10x API headroom. We\u2019re the engineering partner that turns those capabilities into revenue. Here\u2019s what Plus actually gets you, and whether you need it.',
  heroBullets: [
    'Checkout extensibility & Shopify Functions',
    'B2B, wholesale & international architecture',
    'Flow, Launchpad & operations automation',
    'Honest advice on whether you even need Plus',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200',
    alt: 'Enterprise ecommerce team reviewing Shopify Plus checkout customization and B2B wholesale architecture',
  },
  stats: [
    { value: '~$2,300+', label: 'Per month entry point for Shopify Plus — the ROI math has to work' },
    { value: '10x', label: 'Approximate API rate-limit headroom vs. standard plans for integrations' },
    { value: '9', label: 'Expansion stores included for international or multi-brand architecture' },
    { value: '100%', label: 'Of checkout logic customizable via Checkout Extensibility & Functions' },
  ],
  problems: {
    heading: 'Who Actually Needs',
    accent: 'Shopify Plus?',
    sub: 'Plus is transformative for the right brand and an expensive badge for the wrong one. These are the four profiles where the math works.',
    items: [
      {
        icon: <Building2 className="text-indigo-600" />,
        title: 'Enterprise Brands',
        desc: 'Established brands that need enterprise guarantees: dedicated support, higher API limits for deep ERP/CRM integration, organization-level admin across stores, and the governance features procurement teams ask about. Plus replaces seven-figure legacy platform costs with a fraction of the overhead.',
      },
      {
        icon: <TrendingUp className="text-emerald-600" />,
        title: 'High-Volume Stores',
        desc: 'Once you\u2019re consistently in the seven-figure annual range, Plus economics flip: lower payment processing rates, checkout conversion gains from customization, and automation savings routinely exceed the plan cost. Below that, standard plans usually win — and we\u2019ll tell you so.',
      },
      {
        icon: <Briefcase className="text-blue-600" />,
        title: 'Wholesale & B2B Operations',
        desc: 'Shopify now includes B2B on all paid plans (as of April 2026), but capped at 3 catalogs. Serious wholesale — hundreds of accounts, unlimited price lists, dedicated B2B storefronts, vaulted cards, net payment terms, deposits — is where Plus\u2019s B2B suite earns its keep.',
      },
      {
        icon: <Globe2 className="text-purple-600" />,
        title: 'International Brands',
        desc: 'Selling seriously in multiple regions means localized storefronts, currencies, duties, and catalogs. Plus includes 9 expansion stores plus Markets tooling — the architecture for going from "we ship internationally" to "we operate internationally."',
      },
    ],
  },
  guide: [
    {
      heading: 'Checkout Extensibility:',
      accent: 'The Crown Jewel',
      paragraphs: [
        <>The single biggest technical difference on Plus is control over checkout — the highest-stakes screen in your business. <strong>Checkout Extensibility</strong> lets us build custom UI directly into the checkout flow: trust messaging at the payment step, delivery-date pickers, gift options, upsell offers, address validation, and custom fields — all as sandboxed, upgrade-safe extensions rather than the fragile checkout.liquid hacks of the past (which Shopify has fully retired).</>,
        <><strong>Shopify Functions</strong> are the logic layer: server-side code that rewrites how discounts stack, how shipping options appear and price, how payment methods show conditionally, and how cart validation behaves. Functions officially replace Shopify Scripts — Scripts stop executing entirely on June 30, 2026 — so any Plus store still running Ruby scripts needs a migration plan <em>now</em>. We\u2019ve built that migration into a repeatable process: audit existing scripts, reimplement as Functions, parallel-test, and cut over safely.</>,
        <>Why it matters commercially: with a 70%+ average cart abandonment rate industry-wide (Baymard Institute), even single-digit percentage improvements at checkout are worth more than almost any other optimization on the site. Checkout is where Plus pays for itself first — and it pairs directly with our <Link to="/shopify-cro" className="text-indigo-600 underline underline-offset-2">Shopify CRO practice</Link>, which tests every checkout change against revenue per visitor.</>,
      ],
    },
    {
      heading: 'B2B on Shopify Plus:',
      accent: 'Wholesale Without the Spreadsheets',
      paragraphs: [
        <>Shopify\u2019s native B2B suite turned wholesale from a workaround into a first-class capability: company profiles with multiple buyers and locations, per-company catalogs and price lists, quantity rules and volume pricing, net payment terms (net 15/30/60), vaulted credit cards for repeat ordering, draft orders for sales-rep workflows, and deposits/partial payments for large orders.</>,
        <>The strategic decision we architect with every B2B client: <strong>blended vs. dedicated</strong>. A blended store serves retail and wholesale from one storefront with B2B customers seeing their own prices after login — simpler to operate, one theme to maintain. A dedicated B2B storefront (one of your expansion stores) gives wholesale buyers a purpose-built experience: bulk order forms, quick reorder, account dashboards — worth it once wholesale is a meaningful revenue line.</>,
        <>Since April 2026, core B2B features exist on all paid Shopify plans capped at 3 catalogs — genuinely enough to pilot wholesale. Plus removes the caps and adds the operational depth (unlimited catalogs, expansion storefronts, richer permissions) that real wholesale operations hit within months. We\u2019ll tell you honestly which side of that line you\u2019re on.</>,
      ],
    },
    {
      heading: 'Automation:',
      accent: 'Flow, Launchpad & Operations at Scale',
      paragraphs: [
        <><strong>Shopify Flow</strong> is the automation engine we build entire operations on: fraud-risk orders tagged and held automatically, VIP customers routed to priority fulfillment and tagged for marketing, low-stock alerts fired to Slack with reorder context, first-time wholesale orders triggering a rep follow-up task, negative-review triggers opening support tickets. Every workflow we ship removes a human copy-paste task — at high volume, that\u2019s headcount-scale savings.</>,
        <><strong>Launchpad</strong> automates the events that used to require 2 a.m. war rooms: flash sales, product drops, and campaigns scheduled end-to-end — theme changes, pricing, inventory publishing, and Scripts/Functions activation flipping on at the exact second, then rolling back automatically when the event ends.</>,
        <>Add <strong>Markets</strong> for international selling (localized pricing, currencies, duties, and domains under one roof) and the ~10x API headroom for real-time ERP, WMS, and CRM sync, and Plus stops being "expensive Shopify" and becomes the operations platform the rest of your stack plugs into. For the custom connective tissue — middleware, dashboards, integrations — see our <Link to="/shopify-app-development" className="text-indigo-600 underline underline-offset-2">Shopify app development service</Link>.</>,
      ],
    },
    {
      heading: 'The Honest Plus',
      accent: 'Decision Framework',
      paragraphs: [
        <>At roughly $2,300+/month (variable-fee based at higher volumes), Plus must earn its cost. Our rule of thumb: the move makes sense when at least two of these are true — you\u2019re past ~$1M/year in GMV and growing; checkout conversion gains of even 5–10% would exceed the plan cost; wholesale/B2B is a strategic priority beyond 3 catalogs; you operate (or plan) multiple international or multi-brand storefronts; or your integration roadmap is throttled by standard API limits.</>,
        <>If none of those describe you, we\u2019ll say so plainly and make your standard plan work harder instead — often via <Link to="/shopify-theme-customization" className="text-indigo-600 underline underline-offset-2">theme customization</Link> and CRO, which deliver most of the customer-facing gains at a fraction of the cost. Agencies that push every client to Plus are selling the badge, not the outcome.</>,
      ],
    },
    {
      heading: 'What Plus Engagements',
      accent: 'Look Like in Practice',
      paragraphs: [
        <><strong>The Scripts rescue.</strong> A high-volume apparel brand running six Ruby Scripts for tiered discounts and shipping logic — all set to die on June 30, 2026. We inventoried the logic, reimplemented it as Shopify Functions with parallel testing against live orders, and cut over with zero customer-visible change. The Functions versions also unlocked combinations the old Scripts couldn\u2019t express, which merchandising turned into a new bundle strategy within a month.</>,
        <><strong>The wholesale unlock.</strong> A supplements brand handling 200+ wholesale accounts through email, PDFs, and a shared spreadsheet. We architected a dedicated B2B expansion store: per-company catalogs and price lists, net-30 terms with vaulted cards for reorders, and a quick-order form built for buyers who purchase by SKU. Wholesale order processing time dropped from days to minutes, and the sales team\u2019s draft-order workflow replaced the spreadsheet entirely.</>,
        <><strong>The drop machine.</strong> A streetwear brand whose product drops meant all-hands midnight deployments and a crashed theme edit two launches back. Launchpad now schedules the entire event — theme swap, pricing, inventory publishing, and rollback — while Flow handles fraud-flag holds and VIP tagging in the flood of orders. The team watches the dashboard instead of editing the theme at 11:58 p.m.</>,
        <>The common thread: Plus features compound. Checkout extensions lift conversion, Functions encode the commercial logic, Flow removes the operational drag, and the API headroom keeps the ERP honest — each engagement typically starts with one burning need and expands as the platform proves out. That\u2019s also why we scope in phases rather than proposing a monolith.</>,
      ],
    },
  ],
  method: {
    heading: 'Our Shopify Plus',
    accent: 'Capabilities',
    sub: 'Enterprise engineering across the full Plus surface area.',
    items: [
      { icon: <CreditCard className="text-indigo-600" />, title: 'Checkout Extensibility', desc: 'Custom checkout UI extensions and branding — trust elements, delivery pickers, upsells — built upgrade-safe on the modern stack.' },
      { icon: <Puzzle className="text-purple-600" />, title: 'Shopify Functions', desc: 'Custom discount, shipping, and payment logic — including full Scripts-to-Functions migrations before the June 2026 shutdown.' },
      { icon: <Briefcase className="text-blue-600" />, title: 'B2B & Wholesale', desc: 'Company accounts, catalogs, price lists, payment terms, and blended or dedicated wholesale storefront architecture.' },
      { icon: <Workflow className="text-emerald-600" />, title: 'Flow Automation', desc: 'Order routing, fraud handling, tagging, alerts, and cross-app workflows that remove manual operations at scale.' },
      { icon: <Rocket className="text-red-500" />, title: 'Launchpad', desc: 'Flash sales and product drops scheduled end-to-end — theme, pricing, inventory, and rollback, all automated.' },
      { icon: <Globe2 className="text-cyan-600" />, title: 'Markets & Expansion Stores', desc: 'International architecture: localized storefronts, currencies, duties, and up to 9 expansion stores under one organization.' },
      { icon: <GitMerge className="text-orange-600" />, title: 'API & Integrations', desc: 'ERP, WMS, CRM, and PIM integrations built on Plus\u2019s expanded API limits — real-time sync, not nightly batch jobs.' },
      { icon: <Gauge className="text-pink-600" />, title: 'Performance at Scale', desc: 'High-traffic readiness: load-tested themes, Core Web Vitals discipline, and launch-day standby for major drops.' },
    ],
  },
  process: {
    heading: 'How an Engagement',
    accent: 'Runs',
    steps: [
      { title: 'Plus Readiness Audit', desc: 'We model your numbers honestly: current GMV, checkout performance, B2B ambitions, and integration needs — producing a clear "Plus now / Plus later / not Plus" recommendation with the math shown.' },
      { title: 'Architecture', desc: 'Storefront structure (blended vs. dedicated B2B, expansion stores), checkout extension plan, Functions inventory, automation map, and integration design — documented before anything is built.' },
      { title: 'Build & Migrate', desc: 'Checkout extensions, Functions (including Scripts migrations), Flow workflows, B2B configuration, and integrations — developed, parallel-tested, and staged.' },
      { title: 'Launch & Scale', desc: 'Monitored cutover, launch-day standby for your first major event, and ongoing engineering partnership as volume grows.' },
    ],
  },
  checklist: {
    heading: 'Plus Readiness',
    accent: 'Checklist',
    intro: 'Considering the upgrade? Score yourself — two or more "yes" answers and the Plus conversation is worth having.',
    items: [
      'Annual GMV is at or past ~$1M and growing',
      'A 5–10% checkout conversion lift would exceed $28k/year in revenue',
      'Wholesale/B2B needs more than 3 catalogs or its own storefront',
      'You sell (or plan to sell) seriously in multiple countries',
      'You run flash sales or drops that currently require manual war rooms',
      'ERP/WMS/CRM sync is throttled by API rate limits',
      'You still run Shopify Scripts (mandatory Functions migration by June 30, 2026)',
      'Operations staff spend hours daily on tasks Flow could automate',
      'You need organization-level admin across multiple stores',
      'Checkout customization requests keep dying at "not possible on our plan"',
    ],
  },
  testimonial: {
    quote: 'If you\u2019re an e-commerce brand looking to scale, they are the absolute best choice.',
    author: 'Becca',
    role: 'Founder, Luxury Brand',
  },
  faqs: [
    {
      q: 'What does Shopify Plus cost, and is it worth it?',
      a: 'Plus starts around $2,300–2,500/month (moving to variable fees at higher volumes). It\u2019s worth it when the gains it unlocks — checkout conversion improvements, lower processing rates, automation savings, B2B revenue, international expansion — exceed that cost, which typically happens for brands past roughly $1M/year GMV with specific needs. Our readiness audit models this with your actual numbers before recommending anything.',
    },
    {
      q: 'What happened to Shopify Scripts?',
      a: 'Shopify Scripts are retired: editing and publishing ended April 15, 2026, and existing scripts stop executing entirely on June 30, 2026. Their replacement is Shopify Functions — more powerful, supported across discount, shipping, and payment customization. If your store still relies on Scripts for discount stacking or shipping logic, migration is urgent, and it\u2019s one of our most-requested Plus projects.',
    },
    {
      q: 'Doesn\u2019t regular Shopify have B2B now?',
      a: 'Yes — as of April 2026, core B2B features (company profiles, catalogs, payment terms) are included on all paid plans, capped at 3 catalogs. That\u2019s genuinely enough to pilot wholesale. Plus removes the catalog cap and adds dedicated B2B storefronts, vaulted cards, deposits, and the operational depth serious wholesale hits quickly. Pilot on your current plan; upgrade when the caps pinch — we\u2019ll architect it so the transition is seamless.',
    },
    {
      q: 'Can you migrate us from Magento, Salesforce Commerce, or another enterprise platform to Plus?',
      a: 'Yes — enterprise replatforming is core work for us: full data migration, 301 redirect and SEO preservation, ERP/integration rebuilds, and B2B logic translation. See our Shopify migration service for the methodology; Plus migrations add integration and checkout-logic workstreams on top of it.',
    },
    {
      q: 'Do we need a Plus-specific agency, or any Shopify developer?',
      a: 'Plus\u2019s value lives in its exclusive surfaces — Checkout Extensibility, Functions, B2B architecture, Flow at scale, multi-store organizations — which general theme developers rarely touch. You want a partner who ships those weekly. That said, beware agencies that recommend Plus reflexively; the right partner sometimes tells you to stay on your current plan, and we do.',
    },
  ],
  related: [
    { to: '/shopify-app-development', label: 'App Development', desc: 'Custom apps and integrations that plug your ERP, WMS, and CRM into Plus\u2019s expanded APIs.' },
    { to: '/shopify-migration', label: 'Shopify Migration', desc: 'Moving from Magento or another enterprise platform? Our migration methodology preserves rankings and data.' },
    { to: '/shopify-cro', label: 'Shopify CRO', desc: 'Checkout extensibility is only as good as the evidence behind it — we test every change against revenue.' },
  ],
  sources: [
    { href: 'https://www.shopify.com/plus', label: 'Shopify Plus — Official overview' },
    { href: 'https://shopify.dev/docs/api/functions', label: 'Shopify.dev — Shopify Functions' },
    { href: 'https://shopify.dev/changelog', label: 'Shopify.dev — Changelog (Scripts retirement)' },
    { href: 'https://baymard.com/lists/cart-abandonment-rate', label: 'Baymard — Cart abandonment research' },
  ],
};

export const ShopifyPlusDevelopmentPage: React.FC = () => <PillarTemplate content={content} />;
