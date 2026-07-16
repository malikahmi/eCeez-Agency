import React from 'react';
import { Link } from 'react-router-dom';
import {
  RefreshCw, Bug, Boxes, Activity, Palette, Shield, HardDriveDownload, Siren,
  CalendarCheck, TrendingUp, Headset,
} from 'lucide-react';
import { PillarTemplate, PillarContent } from '../components/pillar/PillarTemplate';

const content: PillarContent = {
  slug: 'shopify-maintenance',
  serviceName: 'Shopify Maintenance Services',
  serviceDescription:
    'Ongoing Shopify website maintenance and support: monthly updates, bug fixing, app and performance monitoring, theme updates, security checks, backups, and emergency fixes — so your store never silently degrades.',
  badge: 'Shopify Maintenance & Support',
  h1Lead: 'Shopify',
  h1Accent: 'Maintenance Services',
  subtitle:
    'Shopify hosts your store — but nobody maintains it unless you do. Themes age, apps conflict, speed regresses, and small bugs quietly cost sales. Our maintenance plans keep your store fast, secure, and up to date, month after month.',
  heroBullets: [
    'Proactive — problems found before customers find them',
    'Any store, even ones we didn\u2019t build',
    'Fixed monthly pricing, no surprise invoices',
    'Emergency support when it matters',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    alt: 'Developer performing Shopify website maintenance with monitoring dashboards showing store health and uptime',
  },
  stats: [
    { value: '24–48h', label: 'Standard turnaround on maintenance requests' },
    { value: '<4h', label: 'Emergency response for revenue-blocking issues on priority plans' },
    { value: '12+', label: 'Health checks performed on every store, every month' },
    { value: '100%', label: 'Of work performed on a duplicate theme before going live' },
  ],
  problems: {
    heading: 'What Actually Breaks',
    accent: 'on "Maintenance-Free" Shopify',
    sub: 'Shopify\u2019s infrastructure is managed. Your theme, apps, code, and data are not. That\u2019s the shared-responsibility model nobody explains — and here\u2019s what falls on your side of it.',
    items: [
      {
        icon: <Palette className="text-indigo-600" />,
        title: 'Aging Themes',
        desc: 'Theme developers ship updates with security patches, speed improvements, and new Shopify features — but updates don\u2019t apply automatically once you\u2019ve customized anything. Stores routinely run themes 8–10 versions behind, missing years of fixes.',
      },
      {
        icon: <Boxes className="text-blue-600" />,
        title: 'App Conflicts & Drift',
        desc: 'Every app update can conflict with your theme or another app. Buttons stop working after a silent update; scripts double-load; uninstalled apps leave code behind. Without monitoring, customers discover these before you do.',
      },
      {
        icon: <Activity className="text-emerald-600" />,
        title: 'Silent Speed Regression',
        desc: 'Speed isn\u2019t fixed once — it erodes. Each new app, pixel, oversized banner image, and campaign landing page adds weight. Stores that passed Core Web Vitals in January routinely fail by June without anyone changing "anything."',
      },
      {
        icon: <Bug className="text-red-600" />,
        title: 'Small Bugs, Real Money',
        desc: 'A broken size selector on one template. A discount code that stopped stacking. A checkout field that fails on iOS Safari. Small bugs don\u2019t announce themselves — they just quietly convert less, every day, until someone looks.',
      },
      {
        icon: <Shield className="text-amber-600" />,
        title: 'Security Hygiene Gaps',
        desc: 'Shopify secures the platform; you\u2019re responsible for staff access. Ex-employees with admin logins, unused API keys with full permissions, apps with excessive scopes, and missing 2FA are the actual attack surface of a Shopify store.',
      },
      {
        icon: <HardDriveDownload className="text-purple-600" />,
        title: 'No Real Backups',
        desc: 'Here\u2019s the uncomfortable truth: Shopify does not provide customer-facing backups. Delete 500 products with a bad bulk edit or a misbehaving app, and Shopify cannot restore them. Without independent backups, "undo" doesn\u2019t exist.',
      },
    ],
  },
  guide: [
    {
      heading: 'The Shared-Responsibility Model',
      accent: 'Explained',
      paragraphs: [
        <>"Shopify is fully hosted, so there\u2019s nothing to maintain" is the most expensive misunderstanding in ecommerce. Shopify\u2019s responsibility ends at the platform: servers, uptime, PCI compliance, checkout infrastructure, and the core software. Everything you\u2019ve added on top — your theme and its customizations, your app stack, your custom code, your content, your data, your staff access — is yours to maintain. Nobody at Shopify is watching your theme for JavaScript errors or your app stack for conflicts.</>,
        <>The economics are straightforward. A store doing $30,000/month loses $1,000 for every 1% of monthly conversion it silently gives up to a bug, a speed regression, or a broken feature. Maintenance isn\u2019t an expense category — it\u2019s revenue protection with a measurable payback, the same way you wouldn\u2019t run a physical shop without ever checking whether the door opens.</>,
        <>And unlike emergency development (expensive, rushed, mid-crisis), scheduled maintenance is calm, planned work done on a duplicate theme, tested, and released safely — which is why it costs a fraction of the fire-fighting it prevents.</>,
      ],
    },
    {
      heading: 'What a Real Maintenance Month',
      accent: 'Looks Like',
      paragraphs: [
        <><strong>Weekly:</strong> uptime and checkout-flow verification, JavaScript console error sweep across key templates, order-flow test transaction, and review of any app updates that shipped — checking each against your theme before customers meet them.</>,
        <><strong>Monthly:</strong> Core Web Vitals and speed benchmark against last month\u2019s numbers (regressions get investigated, not logged), theme update review and safe application on a duplicate theme, full app-stack audit for conflicts and orphaned code, broken-link and 404 sweep, backup verification with an actual restore test, and a plain-English report of what was done, what was found, and what we recommend.</>,
        <><strong>Quarterly:</strong> security review — staff permissions against current roles, API key and webhook audit, 2FA enforcement check — plus a deeper performance and SEO health pass aligned with our <Link to="/seo" className="text-indigo-600 underline underline-offset-2">ecommerce SEO service</Link> methodology, and a roadmap conversation: what should the store do next quarter that it can\u2019t do today?</>,
        <>Every change, no matter how small, follows the same discipline: duplicate theme → change → cross-device test → publish. Live-theme editing is how "quick fixes" become outages, and we simply don\u2019t do it.</>,
      ],
    },
    {
      heading: 'Backups:',
      accent: 'The Part Everyone Skips',
      paragraphs: [
        <>Shopify\u2019s own documentation is explicit: the platform does not offer store-level backups you can restore from. If a bulk edit corrupts your catalog, an app deletes metafields, or a staff member removes the wrong collection, Shopify support cannot roll it back. The only protection is an independent, continuously-synced backup of products, collections, customers, orders, theme files, and metafields — with tested restores, because an unverified backup is a hope, not a backup.</>,
        <>Our plans include exactly that: automated daily backups via purpose-built tooling, monthly restore verification, and pre-change snapshots before any significant work. It\u2019s the least glamorous line item on the plan and the one clients end up most grateful for.</>,
      ],
    },
    {
      heading: 'Maintenance Plans',
      accent: '& Pricing',
      paragraphs: [
        <><strong>Essential (monthly):</strong> for stable stores that need a professional safety net — all weekly and monthly health checks, theme and app update management, daily backups, bug fixes within scope, and 24–48h response times.</>,
        <><strong>Growth:</strong> everything in Essential plus a monthly bank of development hours for improvements (new sections, landing pages, feature tweaks), monthly performance optimization, and conversion recommendations drawn from your analytics — maintenance that moves the store forward, not just keeps it standing. Pairs naturally with our <Link to="/shopify-cro" className="text-indigo-600 underline underline-offset-2">Shopify CRO service</Link>.</>,
        <><strong>Priority Support:</strong> for high-revenue stores where downtime is measured in dollars per minute — everything in Growth plus under-4-hour emergency response, a dedicated point of contact who knows your store\u2019s history, priority scheduling for all work, and launch-day standby support for big campaigns and product drops.</>,
        <>All plans are month-to-month with no lock-in, and yes — we maintain stores we didn\u2019t build. Every new engagement starts with a full store audit so we know exactly what we\u2019re taking responsibility for.</>,
      ],
    },
    {
      heading: 'DIY, Freelancer, or Agency:',
      accent: 'An Honest Comparison',
      paragraphs: [
        <><strong>DIY maintenance</strong> is genuinely viable for small stores with a technically comfortable owner and a simple app stack — the checklist below is everything you need. The failure mode isn\u2019t ability; it\u2019s consistency. Maintenance is the first thing skipped in a busy month, and stores degrade in exactly the months you\u2019re too busy to notice. If you go this route, calendar-block it like a meeting with your best customer, because that\u2019s what it is.</>,
        <><strong>A freelancer</strong> works well for stores with occasional needs — until the freelancer is on vacation during your checkout outage, or has moved on entirely when the theme finally needs its overdue update. Single-person dependency is the risk you\u2019re accepting for the lower rate, and for many small stores that\u2019s a fair trade.</>,
        <><strong>An agency plan</strong> earns its cost through coverage and compounding context: a team that\u2019s never all on vacation, documented knowledge of your store that survives personnel changes, established processes (duplicate-theme discipline, tested backups, monitored releases), and the pattern recognition of maintaining dozens of stores — the app conflict that just broke your cart drawer probably broke three of our other clients\u2019 first, and we already know the fix.</>,
        <>The crossover point in our experience: once a store passes roughly $15–20k/month in revenue, an hour of downtime or a week of a silently broken variant selector costs more than a quarter of professional maintenance. Below that, DIY with our checklist is a perfectly respectable answer — and we\u2019d rather you do that well than pay for a plan you don\u2019t need yet.</>,
      ],
    },
  ],
  method: {
    heading: 'What\u2019s Covered',
    accent: 'Every Month',
    sub: 'Eight workstreams, executed on schedule, reported in plain English.',
    items: [
      { icon: <RefreshCw className="text-indigo-600" />, title: 'Monthly Updates', desc: 'Theme and platform-feature updates reviewed, applied on a duplicate theme, tested, and released — never blind auto-updates.' },
      { icon: <Bug className="text-red-500" />, title: 'Bug Fixing', desc: 'From broken variant selectors to layout glitches on specific devices — found in our sweeps or reported by you, fixed within SLA.' },
      { icon: <Boxes className="text-blue-600" />, title: 'App Monitoring', desc: 'App updates checked against your theme, conflicts caught early, redundant apps flagged, and orphaned code removed.' },
      { icon: <Activity className="text-emerald-600" />, title: 'Performance Monitoring', desc: 'Core Web Vitals and speed benchmarked monthly; regressions investigated at the source before they cost conversions.' },
      { icon: <Palette className="text-purple-600" />, title: 'Theme Updates', desc: 'Customizations preserved through version updates — the tricky merge work that\u2019s the reason most stores never update at all.' },
      { icon: <Shield className="text-amber-600" />, title: 'Security Checks', desc: 'Staff permission reviews, API key and webhook audits, 2FA enforcement, and app permission-scope reviews every quarter.' },
      { icon: <HardDriveDownload className="text-cyan-600" />, title: 'Backups', desc: 'Automated daily backups of products, orders, customers, themes, and metafields — with monthly restore verification.' },
      { icon: <Siren className="text-pink-600" />, title: 'Emergency Fixes', desc: 'Checkout down, theme broken after an update, app failure during a sale — rapid response with priority-plan SLAs under 4 hours.' },
    ],
  },
  process: {
    heading: 'How a Plan',
    accent: 'Starts',
    steps: [
      { title: 'Full Store Audit', desc: 'We baseline everything: theme version and customizations, complete app inventory, speed and Core Web Vitals, security posture, and existing issues — so you know the store\u2019s true state on day one.' },
      { title: 'Stabilize', desc: 'First month priorities: fix outstanding bugs, remove orphaned app code, establish backups, and close security gaps. The store reaches a known-good state.' },
      { title: 'Ongoing Rhythm', desc: 'Weekly checks, monthly deep passes, quarterly reviews — each ending with a plain-English report of what was done, what was found, and what we recommend next.' },
    ],
  },
  checklist: {
    heading: 'DIY Monthly Maintenance',
    accent: 'Checklist',
    intro: 'Running maintenance yourself? This is the minimum monthly routine we\u2019d hand any store owner.',
    items: [
      'Place a real test order end-to-end, including a refund',
      'Check browser console for JavaScript errors on home, PDP, and cart',
      'Run PageSpeed Insights and compare against last month\u2019s numbers',
      'Review app list: anything unused, redundant, or newly conflicting?',
      'Check if your theme has updates and read the changelog',
      'Verify your backup ran — and actually restore-test it quarterly',
      'Review staff accounts: remove ex-employees, enforce 2FA',
      'Crawl for broken links and new 404s',
      'Check Search Console for coverage errors and manual actions',
      'Test checkout on a real iPhone and a real Android device',
      'Review API keys and webhooks for anything unrecognized',
      'Confirm SSL, domain, and email deliverability are healthy',
    ],
  },
  testimonial: {
    quote: 'Whenever I have a problem, I have that really good customer experience from your team.',
    author: 'Jan Rybczak',
    role: 'Merixstudio',
  },
  faqs: [
    {
      q: 'How often should a Shopify store be maintained?',
      a: 'Weekly light checks (uptime, checkout flow, console errors), a monthly deep pass (speed benchmarks, theme/app updates, backups, link sweeps), and quarterly security and strategy reviews. That cadence catches virtually everything before customers do. Stores left unchecked for months are the ones that call us with emergencies.',
    },
    {
      q: 'Do Shopify themes really need updating?',
      a: 'Yes. Theme developers continuously ship security patches, performance improvements, bug fixes, and support for new Shopify features — but once you\u2019ve customized a theme, updates must be merged carefully rather than applied blindly, which is why most stores simply never update. We preserve your customizations through each version so you get the improvements without losing your design.',
    },
    {
      q: 'Can you maintain a store you didn\u2019t build?',
      a: 'Absolutely — most stores on our maintenance plans were built elsewhere. Every engagement starts with a comprehensive audit of the theme, apps, custom code, and data so we understand exactly what we\u2019re inheriting. Messy inherited code is our daily bread; we document it as we go, so the store gets healthier every month.',
    },
    {
      q: 'Does Shopify back up my store automatically?',
      a: 'No — and this surprises almost everyone. Shopify\u2019s documentation is explicit that it doesn\u2019t provide restorable, customer-facing backups. If products are deleted or data is corrupted by a bulk edit or an app, Shopify cannot roll it back. Independent automated backups with tested restores are part of every one of our plans for exactly this reason.',
    },
    {
      q: 'What counts as an emergency, and how fast do you respond?',
      a: 'Anything blocking revenue: checkout failures, the store down or broken after a theme/app update, payment errors, or a hack/compromise. Priority-plan clients get a guaranteed under-4-hour response around scheduled campaigns and business hours; standard plans get 24–48h turnaround on all requests, with genuine emergencies always jumped to the front of the queue.',
    },
  ],
  related: [
    { to: '/shopify-speed-optimization', label: 'Speed Optimization', desc: 'Maintenance keeps speed from regressing — but if your store is slow today, start with a dedicated optimization pass.' },
    { to: '/shopify-theme-customization', label: 'Theme Customization', desc: 'When maintenance surfaces bigger opportunities, our theme developers build them properly.' },
    { to: '/shopify-migration', label: 'Shopify Migration', desc: 'Maintaining a platform you\u2019ve outgrown? Sometimes the right maintenance is a move to Shopify.' },
  ],
  sources: [
    { href: 'https://help.shopify.com/en/manual/your-account/duplicating-store-data', label: 'Shopify — Backing up store data' },
    { href: 'https://shopify.dev/docs/storefronts/themes/best-practices', label: 'Shopify.dev — Theme best practices' },
    { href: 'https://web.dev/articles/vitals', label: 'Google web.dev — Core Web Vitals' },
  ],
};

export const ShopifyMaintenancePage: React.FC = () => <PillarTemplate content={content} />;
