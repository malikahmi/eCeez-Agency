import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, Gauge, ShieldCheck, Plug, ShoppingCart, Settings,
  Boxes, GitBranch, Server, Wrench, ArrowLeftRight, Search,
} from 'lucide-react';
import { PillarTemplate, PillarContent } from '../components/pillar/PillarTemplate';

const content: PillarContent = {
  slug: 'woocommerce-development',
  serviceName: 'WooCommerce Development',
  serviceDescription:
    'eCeez builds and optimizes WooCommerce stores: custom WordPress/WooCommerce development, performance and security hardening, custom plugins, and expert WooCommerce-to-Shopify migration when it\u2019s the right move.',
  badge: 'WooCommerce Development',
  h1Lead: 'WooCommerce',
  h1Accent: 'Development',
  subtitle:
    'WooCommerce turns WordPress into a flexible, fully-owned ecommerce platform, powerful in the right hands, and a maintenance and performance burden in the wrong ones. We build, optimize, secure, and maintain WooCommerce stores, and when a store has outgrown it, we migrate to Shopify without losing rankings. Whichever you need, we give you a straight answer on what actually serves your business.',
  heroBullets: [
    'Custom WooCommerce & WordPress builds',
    'Performance & security hardening',
    'Custom plugins & integrations',
    'Expert WooCommerce\u2192Shopify migration',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200',
    alt: 'WooCommerce development — WordPress ecommerce store building',
  },
  stats: [
    { value: 'Open', label: 'Open-source, fully self-owned platform' },
    { value: '100%', label: 'Control over hosting, data & code' },
    { value: '<2.5s', label: 'Core Web Vitals LCP target we build to' },
    { value: '301', label: 'Complete redirect mapping on every migration' },
  ],
  problems: {
    heading: 'The Reality of Running',
    accent: 'WooCommerce',
    sub: 'WooCommerce\u2019s flexibility is real, and so are its responsibilities. These are the challenges we solve for WooCommerce store owners every day.',
    items: [
      {
        icon: <Gauge className="text-indigo-600" />,
        title: 'Performance Degrades Over Time',
        desc: 'Plugins accumulate, the database bloats, and hosting strains under traffic. WooCommerce stores commonly slow down as they grow, hurting both rankings and conversions. We diagnose and fix the real bottlenecks.',
      },
      {
        icon: <ShieldCheck className="text-blue-600" />,
        title: 'Security Is Your Responsibility',
        desc: 'Self-hosted means you own security, patches, plugin vulnerabilities, and hardening. An unmaintained WooCommerce store is a genuine risk. We secure, update, and monitor so it stays safe.',
      },
      {
        icon: <Plug className="text-purple-600" />,
        title: 'Plugin Conflicts & Bloat',
        desc: 'WooCommerce runs on plugins, and too many, or poorly-built ones, cause conflicts, slowdowns, and fragility. We audit your stack, resolve conflicts, and replace bloat with clean custom code.',
      },
      {
        icon: <Server className="text-emerald-600" />,
        title: 'Hosting & Maintenance Burden',
        desc: 'Updates, backups, uptime, and compatibility all fall on you. Without a maintenance discipline, things break. We provide the ongoing care a self-hosted store needs to stay reliable.',
      },
      {
        icon: <Settings className="text-orange-600" />,
        title: 'You Need Custom Functionality',
        desc: 'Off-the-shelf plugins don\u2019t fit your exact workflow, pricing logic, or integrations. We build custom WooCommerce plugins and functionality tailored precisely to how your business operates.',
      },
      {
        icon: <ArrowLeftRight className="text-pink-600" />,
        title: 'You\u2019ve Outgrown the Platform',
        desc: 'The maintenance overhead is outweighing the flexibility, and you\u2019re considering a managed platform. We give an honest assessment, and migrate you to Shopify cleanly if that\u2019s the right move.',
      },
    ],
  },
  guide: [
    {
      heading: 'WooCommerce\u2019s Strength:',
      accent: 'Control & Flexibility',
      paragraphs: [
        <>WooCommerce is a free, open-source ecommerce plugin that turns WordPress into an online store. Its defining advantage is <strong>total ownership and flexibility</strong>: you control the hosting, the data, and the code, and because it\u2019s open-source with a vast plugin ecosystem, almost anything is customizable. For businesses that want complete control and have (or will invest in) the resources to manage it, that freedom is genuinely valuable.</>,
        <>WooCommerce also integrates commerce directly into WordPress, the world\u2019s most powerful content platform, making it a strong choice for content-and-commerce brands where blogging, publishing, and selling need to live seamlessly together. If content marketing is central to your strategy, WordPress\u2019s editorial strength is a real advantage that hosted platforms can\u2019t fully match.</>,
        <>Our WooCommerce development covers the full picture: custom store builds, bespoke theme and plugin development, third-party integrations, and the performance and security work that keeps a self-hosted store healthy. Whether you\u2019re launching, fixing, or scaling a WooCommerce store, we build it to be fast, secure, and maintainable, the things that separate a WooCommerce asset from a WooCommerce headache.</>,
      ],
    },
    {
      heading: 'Performance & Security:',
      accent: 'Where Woo Stores Struggle',
      paragraphs: [
        <>The flip side of control is responsibility, and it\u2019s where most WooCommerce stores struggle. <strong>Performance</strong> degrades as stores accumulate plugins, database bloat, and traffic that outgrows the hosting. Since site speed is both a Google ranking factor and a conversion lever, a slow WooCommerce store loses on both fronts. We fix this with caching architecture, database optimization, image and asset optimization, plugin rationalization, and hosting guidance, engineering the store to pass Core Web Vitals.</>,
        <><strong>Security</strong> is the other burden. Self-hosted means you\u2019re responsible for keeping WordPress core, WooCommerce, and every plugin patched, and unpatched vulnerabilities are the leading cause of compromised WordPress sites. We harden stores, keep everything updated, implement backups and monitoring, and remove the risk that comes from neglect. A well-maintained WooCommerce store is secure; an unmaintained one is a liability waiting to happen.</>,
        <>This is why WooCommerce rewards a maintenance discipline more than any hosted platform. The stores that thrive on it treat performance and security as ongoing work, not a launch-day checkbox. Our WooCommerce maintenance keeps your store fast, secure, and current, so its flexibility stays an advantage rather than becoming a source of risk.</>,
      ],
    },
    {
      heading: 'Custom Development',
      accent: '& Integrations',
      paragraphs: [
        <>WooCommerce\u2019s open architecture means almost anything is possible with custom development, and we build it. <strong>Custom plugins</strong> extend WooCommerce with functionality no off-the-shelf plugin provides: bespoke pricing logic, custom product types, tailored checkout flows, and business-specific workflows. Rather than forcing your operation to fit a generic plugin, we build the plugin to fit your operation.</>,
        <><strong>Integrations</strong> connect your store to the systems that run your business, ERPs, CRMs, inventory and fulfillment platforms, payment gateways, and marketing tools, through custom development on WooCommerce\u2019s hooks and REST API. For a store where WooCommerce is one node in a larger operational system, these integrations are what make it work as part of the whole.</>,
        <>We also build <strong>custom themes and designs</strong> so your WooCommerce store looks and performs exactly as your brand demands, rather than settling for a generic template. Combined with performance engineering, that means a store that\u2019s fast, distinctive, and built precisely around how your business actually operates, the full value of WooCommerce\u2019s flexibility, realized.</>,
      ],
    },
    {
      heading: 'When to Stay,',
      accent: 'and When to Migrate',
      paragraphs: [
        <>We\u2019re a Shopify-focused agency, so here\u2019s our honest position on WooCommerce: it\u2019s an excellent platform for businesses that want total control and have the resources to manage it, and it\u2019s the wrong platform for businesses drowning in its maintenance overhead who\u2019d rather focus on selling. Neither answer is universal; the right one depends on your resources, priorities, and stage.</>,
        <><strong>Stay on WooCommerce</strong> if you value complete control, content marketing is central, you have technical resources, and the flexibility genuinely serves you. <strong>Consider migrating to Shopify</strong> if security and maintenance have become a burden, performance keeps degrading, or you\u2019d simply rather Shopify handle infrastructure, PCI compliance, and uptime so you can focus on growth. Many businesses reach a point where that trade, less control for far less operational burden, is clearly worth it.</>,
        <>If migration is the right move, we handle it expertly, WooCommerce-to-Shopify migrations that preserve your products, customers, orders, and, critically, your SEO rankings through complete 301 redirect mapping. See our <Link to="/shopify-migration" className="text-indigo-600 underline underline-offset-2">Shopify migration</Link> service for how we protect rankings during a move. Either way, <Link to="/contact" className="text-indigo-600 underline underline-offset-2">talk to us</Link> and we\u2019ll give you a straight recommendation, not a sales pitch.</>,
      ],
    },
  ],
  method: {
    heading: 'Our WooCommerce',
    accent: 'Services',
    sub: 'Full-lifecycle WooCommerce, from custom builds to performance rescue to clean migration.',
    items: [
      { icon: <ShoppingCart className="text-indigo-600" />, title: 'Custom Store Builds', desc: 'Bespoke WooCommerce stores built on WordPress with custom themes and clean, maintainable code.' },
      { icon: <Gauge className="text-amber-500" />, title: 'Performance Optimization', desc: 'Caching, database optimization, and asset work to pass Core Web Vitals and speed up slow stores.' },
      { icon: <ShieldCheck className="text-blue-600" />, title: 'Security Hardening', desc: 'Patching, hardening, backups, and monitoring to protect self-hosted WooCommerce stores.' },
      { icon: <Plug className="text-purple-600" />, title: 'Custom Plugin Development', desc: 'Bespoke plugins for pricing logic, product types, checkout flows, and business-specific workflows.' },
      { icon: <Boxes className="text-emerald-600" />, title: 'Integrations', desc: 'Connecting WooCommerce to ERPs, CRMs, inventory, fulfillment, and marketing systems via API.' },
      { icon: <Wrench className="text-orange-600" />, title: 'Maintenance & Support', desc: 'Ongoing updates, compatibility management, and support to keep a self-hosted store reliable.' },
      { icon: <ArrowLeftRight className="text-cyan-600" />, title: 'Shopify Migration', desc: 'Expert WooCommerce-to-Shopify migration preserving data and rankings when it\u2019s the right move.' },
      { icon: <Search className="text-pink-600" />, title: 'WordPress SEO', desc: 'Technical SEO for WordPress/WooCommerce, structured data, speed, and crawlable architecture.' },
    ],
  },
  faqs: [
    {
      q: 'What is WooCommerce?',
      a: 'WooCommerce is a free, open-source ecommerce plugin that turns a WordPress website into a fully-featured online store. Its main advantage is total ownership and flexibility, you control the hosting, data, and code, with a vast plugin ecosystem making almost anything customizable. The trade-off is that you\u2019re responsible for performance, security, and maintenance, which a managed platform like Shopify handles for you.',
    },
    {
      q: 'Is WooCommerce better than Shopify?',
      a: 'Neither is universally better, they suit different situations. WooCommerce offers more control and flexibility and integrates deeply with WordPress content, but hands you responsibility for hosting, security, and maintenance. Shopify handles infrastructure, PCI compliance, and uptime with less operational burden, at the cost of some deep customization. WooCommerce fits businesses wanting control with technical resources; Shopify fits those wanting to focus on growth over infrastructure. We\u2019ll advise honestly based on your situation.',
    },
    {
      q: 'Why is my WooCommerce store slow?',
      a: 'The usual causes are plugin bloat and conflicts, an unoptimized or bloated database, unoptimized images and assets, missing caching, and hosting that\u2019s outgrown by your traffic. WooCommerce stores commonly slow down as they accumulate plugins and data. We diagnose the actual bottlenecks and fix them, caching, database optimization, plugin rationalization, and hosting guidance, to pass Core Web Vitals.',
    },
    {
      q: 'Do you build custom WooCommerce plugins?',
      a: 'Yes. When off-the-shelf plugins don\u2019t fit your exact needs, we build custom WooCommerce plugins, bespoke pricing logic, custom product types, tailored checkout flows, and business-specific workflows, built on WooCommerce\u2019s hooks and REST API. This lets your store work exactly how your business operates rather than forcing your operation to fit a generic plugin.',
    },
    {
      q: 'Should I migrate from WooCommerce to Shopify?',
      a: 'Consider it if security and maintenance have become a burden, performance keeps degrading despite optimization, or you\u2019d rather Shopify handle infrastructure and compliance so you can focus on selling. Stay on WooCommerce if you value complete control, content marketing is central, and you have the technical resources to manage it well. We give an honest recommendation, and if migration is right, we handle it while preserving your data and SEO rankings.',
    },
    {
      q: 'Will migrating from WooCommerce to Shopify hurt my SEO?',
      a: 'Not when it\u2019s done correctly, that\u2019s the entire point of a professional migration. The biggest risk is losing rankings from changed URLs without redirects, so we map every existing URL to its Shopify equivalent with complete 301 redirects, preserve metadata and structured data, and migrate products, customers, and orders cleanly. Done properly, you keep your rankings and gain Shopify\u2019s managed reliability.',
    },
  ],
  related: [
    { to: '/shopify-migration', label: 'Shopify Migration', desc: 'Expert WooCommerce-to-Shopify migration that preserves your data and rankings.' },
    { to: '/website-development-for-businesses', label: 'Business Website Development', desc: 'WordPress and business site development beyond ecommerce.' },
    { to: '/seo', label: 'Ecommerce SEO', desc: 'Technical and content SEO for WooCommerce, WordPress, and Shopify stores alike.' },
  ],
  sources: [
    { href: 'https://woocommerce.com/documentation/', label: 'WooCommerce — Documentation' },
    { href: 'https://developer.woocommerce.com/', label: 'WooCommerce — Developer resources' },
    { href: 'https://web.dev/articles/vitals', label: 'Google web.dev — Core Web Vitals' },
  ],
};

export const WooCommerceDevelopmentPage: React.FC = () => <PillarTemplate content={content} />;
