import React from 'react';
import { Link } from 'react-router-dom';
import {
  Lock, Store, Plug, Warehouse, Building, Users2, Truck, Repeat, Award, LayoutDashboard,
  ClipboardList, PenTool, Code2, TestTube2, Rocket, LifeBuoy,
} from 'lucide-react';
import { PillarTemplate, PillarContent } from '../components/pillar/PillarTemplate';

const content: PillarContent = {
  slug: 'shopify-app-development',
  serviceName: 'Shopify App Development',
  serviceDescription:
    'Custom Shopify app development: private/custom apps, public apps, and API integrations — ERP, CRM, inventory, shipping, subscriptions, loyalty, and custom dashboards built on the GraphQL Admin API.',
  badge: 'Custom Shopify App Developers',
  h1Lead: 'Shopify App',
  h1Accent: 'Development',
  subtitle:
    'When the App Store doesn\u2019t have what your business needs — or the app that does costs $500/month for features you\u2019d use 10% of — custom app development closes the gap. We build private apps, integrations, and dashboards on Shopify\u2019s modern API stack.',
  heroBullets: [
    'GraphQL Admin API — Shopify\u2019s current standard',
    'Built on Remix, Shopify\u2019s official app framework',
    'Your data, your logic, no per-month app tax',
    'From single integrations to full platforms',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    alt: 'Shopify app developer writing custom API integration code connecting a store to ERP and CRM systems',
  },
  stats: [
    { value: '2', label: 'App types we build: custom (private, your store) and public (App Store)' },
    { value: 'GraphQL', label: 'The Admin API standard — REST is legacy for new development' },
    { value: '$5k–50k+', label: 'Typical range from focused integration MVP to enterprise platform' },
    { value: '100%', label: 'Yours — code, data, and roadmap, with no monthly app subscription' },
  ],
  problems: {
    heading: 'Integrations We Build',
    accent: 'Most Often',
    sub: 'The recurring pattern: your business runs on systems that don\u2019t talk to Shopify. We make them talk — in real time.',
    items: [
      {
        icon: <Warehouse className="text-indigo-600" />,
        title: 'Inventory & Warehouse (WMS)',
        desc: 'Multi-location stock sync, warehouse management integration, low-stock automation, and inventory truth that matches reality — so you stop overselling on drops and underselling on restock.',
      },
      {
        icon: <Building className="text-blue-600" />,
        title: 'ERP Integration',
        desc: 'NetSuite, SAP, Dynamics, Odoo, or your legacy ERP synced bidirectionally with Shopify: orders flow in, fulfillment and inventory flow back, finance reconciles automatically. The integration that removes the most manual work per dollar.',
      },
      {
        icon: <Users2 className="text-purple-600" />,
        title: 'CRM Sync',
        desc: 'Customer profiles, order history, LTV, and segmentation flowing into HubSpot, Salesforce, or your CRM of choice — so sales and support see the whole customer, not a name and an email.',
      },
      {
        icon: <Truck className="text-emerald-600" />,
        title: 'Shipping & Fulfillment',
        desc: 'Carrier integrations, custom rate logic at checkout, label automation, 3PL connections, and branded tracking experiences that cut "where is my order?" tickets.',
      },
      {
        icon: <Repeat className="text-orange-600" />,
        title: 'Subscriptions',
        desc: 'Custom subscription logic built on Shopify\u2019s native Subscription APIs — build-a-box, flexible schedules, pause/swap/skip flows — when off-the-shelf subscription apps can\u2019t model your offer.',
      },
      {
        icon: <Award className="text-pink-600" />,
        title: 'Loyalty & Custom Dashboards',
        desc: 'Points, tiers, and referral programs designed around your economics — plus internal dashboards that unify Shopify data with ad spend, fulfillment costs, and margins into the one screen your team actually needs.',
      },
    ],
  },
  guide: [
    {
      heading: 'Custom Apps vs. Public Apps:',
      accent: 'Which Do You Need?',
      paragraphs: [
        <><strong>Custom apps</strong> (what Shopify used to call "private apps") are built for one store — yours. They don\u2019t go through App Store review, can be scoped precisely to your data, and ship in weeks. This is the right shape for integrations, internal tooling, automation, and store-specific features. As of 2026, new custom apps are created and managed through Shopify\u2019s Dev Dashboard, with credentials scoped tightly to exactly the permissions the app needs — a security posture we treat as non-negotiable.</>,
        <><strong>Public apps</strong> are products: listed on the Shopify App Store, installable by any merchant, subject to Shopify\u2019s review process, and built to handle multi-tenant billing, onboarding, and support. If you\u2019ve validated an internal tool that other merchants keep asking about, we productize it — App Store review requirements, Polaris UI standards, billing API, and all.</>,
        <>The decision is usually simple: solving <em>your</em> problem → custom app; building a <em>business</em> → public app. The economics differ too — a custom app is a one-time build you own outright (often replacing a $200–500/month app subscription within the first year), while a public app is a product investment with ongoing revenue and ongoing obligations.</>,
      ],
    },
    {
      heading: 'The Modern Shopify',
      accent: 'App Stack',
      paragraphs: [
        <>Shopify\u2019s app platform has consolidated hard around a modern stack, and building on it is the difference between an app that lasts and one that needs a rewrite in 18 months. <strong>The GraphQL Admin API is the standard</strong> — Shopify has made clear that REST is legacy for new development, and new API capabilities ship GraphQL-first. GraphQL\u2019s precise queries also matter operationally: you fetch exactly the fields you need, which respects rate limits and keeps syncs fast at catalog scale.</>,
        <><strong>Remix is Shopify\u2019s official app framework</strong>, with first-party templates, embedded-app auth handled for you, and Polaris (Shopify\u2019s design system) so custom apps feel native inside the admin. For event-driven work — the heart of most integrations — <strong>webhooks</strong> deliver order, inventory, and customer events in near real time. We build every webhook consumer idempotent (duplicate deliveries are a documented reality) with queue-backed processing, retry logic, and reconciliation jobs that catch anything missed. That last 5% of engineering is the difference between an integration you trust and one you babysit.</>,
        <><strong>Metafields and metaobjects</strong> round out the toolkit: structured custom data on products, orders, and customers that apps read and write, and that themes render — the clean bridge between app logic and storefront display, which is why our app and <Link to="/shopify-theme-customization" className="text-indigo-600 underline underline-offset-2">theme customization</Link> teams work as one on most projects.</>,
      ],
    },
    {
      heading: 'What Custom Development',
      accent: 'Actually Costs',
      paragraphs: [
        <>Honest ranges, because "it depends" helps nobody: a focused single-purpose integration or automation MVP typically lands around <strong>$5k–15k</strong>; a substantial custom app — ERP sync with reconciliation, a custom subscription engine, a multi-source dashboard — runs <strong>$15k–40k</strong>; enterprise platforms with multiple integrations, complex business logic, and high-availability requirements go <strong>$50k+</strong>. Every project gets a fixed scope and quote after a discovery call, not an hourly meter.</>,
        <>The ROI comparison to make: a custom app replacing two $300/month SaaS apps pays for itself in under two years while fitting your workflow exactly — and the calculus improves further when off-the-shelf apps would each inject storefront JavaScript your <Link to="/shopify-speed-optimization" className="text-indigo-600 underline underline-offset-2">Core Web Vitals</Link> can\u2019t afford. Custom apps run server-side by default: zero storefront weight.</>,
        <>One thing we\u2019ll always tell you honestly in discovery: if a well-built existing app solves 95% of your need at $30/month, buy it. Custom development is for the problems the App Store genuinely doesn\u2019t solve — and enough of those exist to keep our engineers very busy.</>,
      ],
    },
    {
      heading: 'Reliability Engineering:',
      accent: 'Why Integrations Fail (and Ours Don\u2019t)',
      paragraphs: [
        <>Most integration horror stories share a root cause: the happy path was built, and reality wasn\u2019t. Shopify\u2019s APIs are rate-limited, webhooks are delivered at-least-once (meaning duplicates are guaranteed, not hypothetical), third-party APIs go down mid-sync, and a bulk price update can generate ten thousand events in a minute. An integration that hasn\u2019t been designed for these facts will work perfectly in the demo and corrupt data on Black Friday.</>,
        <>Our reliability playbook is standard on every build: <strong>queue-backed processing</strong> so event spikes buffer instead of dropping; <strong>idempotency keys</strong> so a duplicate webhook can never create a duplicate order in your ERP; <strong>exponential-backoff retries</strong> for transient failures; <strong>dead-letter queues</strong> with alerting for events that genuinely can\u2019t process; and <strong>nightly reconciliation jobs</strong> that compare Shopify\u2019s state to the integrated system\u2019s and flag drift before it becomes a finance-team mystery.</>,
        <>Observability is the other half: every integration ships with structured logging, a health dashboard, and alerts to your Slack or email when something needs a human. You should never learn about a sync failure from a customer — and with proper monitoring, you won\u2019t. This is also where our <Link to="/shopify-maintenance" className="text-indigo-600 underline underline-offset-2">maintenance plans</Link> extend naturally to custom software: API version upgrades, dependency updates, and monitoring under the same agreement that watches your theme.</>,
        <>Increasingly, we\u2019re also building AI-assisted layers into custom apps — automated product categorization, description generation pipelines, support-ticket triage, and anomaly detection on order patterns. The same reliability rules apply doubly: AI components get confidence thresholds, human-review queues, and audit logs, because automation you can\u2019t inspect is automation you can\u2019t trust.</>,
      ],
    },
  ],
  method: {
    heading: 'Our Development',
    accent: 'Process',
    sub: 'Six stages from idea to supported production software — with working software visible early, not a big reveal at the end.',
    items: [
      { icon: <ClipboardList className="text-indigo-600" />, title: '1. Planning', desc: 'Discovery, requirements, data-flow mapping, and an honest build-vs-buy recommendation — ending in a fixed scope and quote.' },
      { icon: <PenTool className="text-purple-600" />, title: '2. Wireframe', desc: 'UI flows in Polaris patterns for admin apps, or architecture diagrams for headless integrations — agreed before code begins.' },
      { icon: <Code2 className="text-blue-600" />, title: '3. Development', desc: 'Remix + GraphQL Admin API builds with idempotent webhooks, queue-backed jobs, and staged demos every week.' },
      { icon: <TestTube2 className="text-emerald-600" />, title: '4. Testing', desc: 'Development-store testing, edge-case and failure-mode simulation (API limits, duplicate webhooks, partial syncs), and UAT with your team.' },
      { icon: <Rocket className="text-red-500" />, title: '5. Deployment', desc: 'Production rollout with monitoring, alerting, and rollback plans — plus App Store submission handling for public apps.' },
      { icon: <LifeBuoy className="text-cyan-600" />, title: '6. Support', desc: 'API version upgrades (Shopify deprecates on a schedule), monitoring, and feature iterations under a support agreement.' },
    ],
  },
  process: {
    heading: 'App Types We',
    accent: 'Deliver',
    steps: [
      { title: 'Custom (Private) Apps', desc: 'Single-store apps for integrations, automation, and internal tools — scoped credentials, no App Store review, shipped in weeks, owned by you outright.' },
      { title: 'Public Apps', desc: 'Multi-tenant App Store products: review-compliant, Polaris-native, billing-API integrated, with onboarding and support architecture built for scale.' },
      { title: 'Headless Integrations & Middleware', desc: 'No-UI services that sync Shopify with ERPs, WMSs, CRMs, and data warehouses — the invisible plumbing that runs operations.' },
    ],
  },
  checklist: {
    heading: 'Build-vs-Buy',
    accent: 'Checklist',
    intro: 'Before commissioning custom development, pressure-test the decision — we run this same list in every discovery call.',
    items: [
      'You\u2019ve genuinely searched the App Store — no app covers the core need',
      'Or: the apps that do cost more over 2 years than a custom build',
      'The workflow is specific to how YOUR business operates',
      'Off-the-shelf options would inject storefront JavaScript you can\u2019t afford',
      'You need data flows between systems an app doesn\u2019t connect',
      'Manual work being replaced costs measurable staff hours weekly',
      'You want to own the code, data, and roadmap outright',
      'The requirement is stable enough to specify (not changing weekly)',
      'You have (or we provide) a plan for API version upgrades over time',
      'For public apps: 10+ merchants have asked for this exact thing',
    ],
  },
  testimonial: {
    quote: 'With eCeez, the most helpful things were for sure automated email sequences. It was so painful to do it manually — that\u2019s what I did for the first year.',
    author: 'Benjamin Hyppönen',
    role: 'Founder, Digital Marketing Agency (Helsinki)',
  },
  faqs: [
    {
      q: 'What\u2019s the difference between a private (custom) app and a public app?',
      a: 'A custom app is built for one store — yours. No App Store review, precise permission scoping, fast delivery, and you own it outright. A public app is a product: listed on the Shopify App Store, installable by any merchant, subject to Shopify\u2019s review, and built for multi-tenant billing and support. Solving your own problem calls for a custom app; building a software business calls for a public one.',
    },
    {
      q: 'How much does Shopify app development cost?',
      a: 'A focused integration or automation MVP typically runs $5k–15k; substantial apps (ERP sync, custom subscriptions, multi-source dashboards) run $15k–40k; enterprise platforms with multiple integrations go $50k+. We quote fixed scope after discovery — and if an existing $30/month app genuinely solves your problem, we\u2019ll tell you to buy it instead.',
    },
    {
      q: 'How long does it take to build a custom Shopify app?',
      a: 'Simple integrations ship in 2–4 weeks. A typical custom app with an admin UI runs 6–10 weeks including testing. Public apps add App Store review preparation and multi-tenant architecture, usually 10–16 weeks to launch. You see working software weekly from the first sprint, not a reveal at the end.',
    },
    {
      q: 'Will a custom app slow down my storefront?',
      a: 'No — this is one of custom development\u2019s biggest advantages. Custom apps run server-side, communicating with Shopify through APIs and webhooks, adding zero JavaScript to your storefront. Compare that to many off-the-shelf apps that inject scripts on every page, and custom development is often a speed upgrade as much as a functionality one.',
    },
    {
      q: 'What happens when Shopify updates its APIs?',
      a: 'Shopify releases API versions quarterly and retires old ones on a published schedule, so every app needs periodic maintenance. We build against current stable versions, avoid deprecated patterns from day one, and offer support agreements covering version upgrades, monitoring, and fixes — so your app keeps working while Shopify evolves underneath it.',
    },
  ],
  related: [
    { to: '/shopify-plus-development', label: 'Shopify Plus Development', desc: 'Plus\u2019s expanded API limits are where serious integrations shine — ERP and WMS sync in real time.' },
    { to: '/shopify-theme-customization', label: 'Theme Customization', desc: 'Apps handle the logic, themes handle the display — our teams build both sides as one project.' },
    { to: '/shopify-maintenance', label: 'Shopify Maintenance', desc: 'Keep custom software healthy: API upgrades, monitoring, and support under one maintenance plan.' },
  ],
  sources: [
    { href: 'https://shopify.dev/docs/apps', label: 'Shopify.dev — App development documentation' },
    { href: 'https://shopify.dev/docs/api/admin-graphql', label: 'Shopify.dev — GraphQL Admin API' },
    { href: 'https://shopify.dev/docs/apps/build/webhooks', label: 'Shopify.dev — Webhooks best practices' },
  ],
};

export const ShopifyAppDevelopmentPage: React.FC = () => <PillarTemplate content={content} />;
