import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, Layers, Puzzle, Gauge, ShieldCheck, GitBranch,
  Boxes, Settings, Workflow, FileCode, Wrench, Terminal,
} from 'lucide-react';
import { PillarTemplate, PillarContent } from '../components/pillar/PillarTemplate';

const content: PillarContent = {
  slug: 'shopify-custom-liquid-development',
  serviceName: 'Shopify Custom Liquid Development',
  serviceDescription:
    'eCeez builds custom Shopify Liquid: bespoke sections, dynamic templates, metafield-driven content, and complex theme logic that off-the-shelf themes and apps can\u2019t deliver, owned outright, with zero app tax.',
  badge: 'Custom Liquid Development',
  h1Lead: 'Custom Shopify Liquid',
  h1Accent: 'Development',
  subtitle:
    'When a theme setting or an app can\u2019t do what your store needs, custom Liquid can. We write bespoke sections, dynamic templates, metafield-driven layouts, and the complex theme logic that turns a generic storefront into exactly the store your business requires, native code you own, with no monthly app fees and no storefront bloat.',
  heroBullets: [
    'Bespoke Online Store 2.0 sections & blocks',
    'Metafield-driven dynamic content',
    'Complex conditional theme logic',
    'Owned code, no app subscriptions',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200',
    alt: 'Custom Shopify Liquid development — bespoke theme code on screen',
  },
  stats: [
    { value: '0', label: 'Monthly app fees for native Liquid features' },
    { value: '2.0', label: 'Online Store 2.0 sections everywhere' },
    { value: '100%', label: 'Code you own outright, no lock-in' },
    { value: '9,000+', label: 'Products on the Shopify store we run ourselves' },
  ],
  problems: {
    heading: 'When You Need',
    accent: 'Custom Liquid',
    sub: 'Themes and apps solve common problems. Custom Liquid solves yours. These are the situations where writing bespoke code is the right, and often cheaper, answer.',
    items: [
      {
        icon: <Puzzle className="text-indigo-600" />,
        title: 'The Theme Setting Doesn\u2019t Exist',
        desc: 'You need a layout, a product-page behavior, or a merchandising rule your theme simply doesn\u2019t offer. Rather than fight the theme or stack apps, custom Liquid builds exactly the feature you need, and nothing you don\u2019t.',
      },
      {
        icon: <Boxes className="text-blue-600" />,
        title: 'App Bloat Is Slowing You Down',
        desc: 'You\u2019re paying monthly for apps that inject scripts and slow your store, when the same function could be native theme code. Replacing apps with Liquid cuts cost and improves Core Web Vitals at once.',
      },
      {
        icon: <Layers className="text-purple-600" />,
        title: 'You Need Metafield-Driven Content',
        desc: 'Structured product data, specs, ingredients, size charts, care instructions, should render consistently across your catalog. Custom Liquid reads metafields to build dynamic, maintainable content no app handles cleanly.',
      },
      {
        icon: <Workflow className="text-emerald-600" />,
        title: 'Your Logic Is Genuinely Complex',
        desc: 'Conditional pricing displays, B2B-versus-retail views, bundle logic, or catalog relationships that standard templates can\u2019t express. Liquid\u2019s logic handles the edge cases your business actually has.',
      },
      {
        icon: <Settings className="text-orange-600" />,
        title: 'Your Team Needs to Edit It',
        desc: 'A custom feature is only useful if your team can manage it. We build sections with clean theme-editor settings, so marketers update content without touching code, the difference between a tool and a liability.',
      },
      {
        icon: <GitBranch className="text-pink-600" />,
        title: 'It Must Survive Theme Updates',
        desc: 'Careless custom code breaks on the next theme update. We build self-contained, upgrade-safe sections that keep working, so your investment doesn\u2019t evaporate the first time you update.',
      },
    ],
  },
  guide: [
    {
      heading: 'What Liquid Is,',
      accent: 'and Why It Matters',
      paragraphs: [
        <>Liquid is Shopify\u2019s templating language, the code that turns your theme and store data into the pages shoppers see. Every theme is built in Liquid, and everything a theme <em>can</em> do is ultimately Liquid doing it. Custom Liquid development means writing that code directly to build features, layouts, and logic beyond what a theme\u2019s settings expose.</>,
        <>The strategic point is ownership and performance. An app is someone else\u2019s code, rented monthly, running on your storefront, often adding JavaScript that slows your pages. A custom Liquid section is <em>your</em> code, built once, owned forever, running natively with no added weight. For any feature you\u2019ll use long-term, native Liquid is almost always faster and cheaper over time than an app.</>,
        <>This is why serious Shopify development leans on custom Liquid rather than reflexively installing apps. It\u2019s the difference between assembling a store from rented parts and engineering one built precisely for your business. Our <Link to="/shopify-web-development" className="text-indigo-600 underline underline-offset-2">Shopify development</Link> and <Link to="/shopify-theme-customization" className="text-indigo-600 underline underline-offset-2">theme customization</Link> services are built on exactly this foundation.</>,
      ],
    },
    {
      heading: 'Online Store 2.0:',
      accent: 'Sections, Blocks & Metafields',
      paragraphs: [
        <>Modern Shopify development happens on the <strong>Online Store 2.0</strong> architecture, and custom Liquid is how you exploit it fully. <strong>Sections and blocks</strong> let us build modular, reorderable content components your team arranges in the theme editor, a custom section is reusable across pages and fully merchant-editable, combining developer power with marketer control.</>,
        <><strong>Metafields</strong> are the other half. They store structured data, an ingredient list, a spec table, a size guide, a "pairs well with" relationship, against products, collections, and pages. Custom Liquid reads those metafields to render consistent, dynamic content across your entire catalog from a single template. Add a metafield value, and the page updates; no per-product manual work, no app.</>,
        <>Together, sections and metafields let us build sophisticated, maintainable stores: rich product pages that pull structured data automatically, dynamic landing pages, and content architectures that scale with your catalog. This is the modern, upgrade-safe way to build on Shopify, and it\u2019s what separates a durable custom build from fragile theme hacks.</>,
      ],
    },
    {
      heading: 'Replacing Apps',
      accent: 'With Native Code',
      paragraphs: [
        <>One of the highest-ROI things custom Liquid does is <strong>replace apps</strong>. The average Shopify store runs 15\u201320 apps, and app subscriptions often exceed the base Shopify plan, while many of those apps inject scripts that quietly harm Core Web Vitals and conversions. A meaningful share of them perform functions that native Liquid could handle with no monthly fee and no performance cost.</>,
        <>We audit your app stack, identify which apps could be replaced with native code, and rebuild those functions in Liquid, custom badges, trust elements, product-page features, merchandising rules, upsell displays. The result is lower monthly cost, a faster store, and no dependency on a third party who could change pricing or shut down. Over two years, replacing even a few apps often pays for the development several times over.</>,
        <>This isn\u2019t about removing all apps, some are genuinely worth their cost. It\u2019s about being deliberate: buy apps for validated, complex needs, and build native Liquid for everything else. That discipline is exactly how we run our own <Link to="/shopify-maintenance" className="text-indigo-600 underline underline-offset-2">maintained stores</Link>, and it\u2019s a core part of keeping a store fast.</>,
      ],
    },
    {
      heading: 'How We Build',
      accent: 'Upgrade-Safe Liquid',
      paragraphs: [
        <>Custom code has a reputation for breaking, and badly-written Liquid earns it. Editing core theme files directly, hardcoding values, and ignoring theme structure all create code that shatters on the next theme update. We build the opposite way: <strong>self-contained sections</strong> that don\u2019t touch core files, clean separation between custom and theme code, and settings-driven flexibility so changes happen in the editor, not the codebase.</>,
        <>Every project is built on a duplicate theme, tested across devices and browsers, and verified against Core Web Vitals before it goes live, your live store keeps selling throughout. We document what we build and how it works, so you\u2019re never dependent on a single developer\u2019s memory. And we never edit <code>checkout.liquid</code> (retired) or hack around Shopify\u2019s architecture in ways that create future landmines.</>,
        <>The result is custom functionality that behaves like it was always part of your theme, survives updates, and your team can actually manage. That\u2019s the difference between custom development as an asset and custom development as technical debt. <Link to="/contact" className="text-indigo-600 underline underline-offset-2">Tell us what you need built</Link> and we\u2019ll scope it properly.</>,
      ],
    },
  ],
  method: {
    heading: 'What We Build in',
    accent: 'Custom Liquid',
    sub: 'The bespoke Shopify features and logic we deliver most often, all native, all owned.',
    items: [
      { icon: <FileCode className="text-indigo-600" />, title: 'Custom Sections & Blocks', desc: 'Bespoke, reusable Online Store 2.0 sections your team arranges and edits in the theme editor.' },
      { icon: <Layers className="text-blue-600" />, title: 'Metafield-Driven Content', desc: 'Dynamic product specs, ingredients, size charts, and structured content rendered from metafields.' },
      { icon: <Boxes className="text-purple-600" />, title: 'App Replacement', desc: 'Rebuilding app functions as native Liquid to cut cost and remove storefront-slowing scripts.' },
      { icon: <Workflow className="text-emerald-600" />, title: 'Conditional Logic', desc: 'B2B/retail views, conditional pricing displays, bundle logic, and catalog-relationship rules.' },
      { icon: <Boxes className="text-orange-600" />, title: 'Dynamic Templates', desc: 'Custom product, collection, and page templates that adapt to data instead of hardcoded layouts.' },
      { icon: <Gauge className="text-cyan-600" />, title: 'Performance Refactors', desc: 'Rewriting bloated theme code and lazy-loading logic to pass Core Web Vitals.' },
      { icon: <Wrench className="text-pink-600" />, title: 'Theme Debugging & Fixes', desc: 'Diagnosing and fixing broken Liquid, rendering bugs, and inherited theme problems.' },
      { icon: <Terminal className="text-indigo-500" />, title: 'AJAX & Interactivity', desc: 'Cart drawers, quick-add, live filtering, and dynamic UI built cleanly on Shopify\u2019s APIs.' },
    ],
  },
  faqs: [
    {
      q: 'What is Shopify Liquid?',
      a: 'Liquid is Shopify\u2019s open-source templating language, the code that combines your theme with your store\u2019s data to render the pages shoppers see. Every Shopify theme is built in Liquid, so custom Liquid development means writing that code directly to build features, layouts, and logic beyond what a theme\u2019s built-in settings allow.',
    },
    {
      q: 'Should I use an app or custom Liquid?',
      a: 'It depends on the need. Apps are good for complex, validated functionality you\u2019d rather not maintain (like a full subscription engine). Custom Liquid is better for anything you\u2019ll use long-term that a theme setting doesn\u2019t cover, because it\u2019s owned outright, carries no monthly fee, and adds no storefront-slowing scripts. For many common features, native Liquid is faster and cheaper over two years than an app. We\u2019ll advise honestly which fits your specific case.',
    },
    {
      q: 'Will custom Liquid break when I update my theme?',
      a: 'Not when it\u2019s built correctly. Poorly-written custom code that edits core files does break on updates, but we build self-contained sections that don\u2019t touch core theme files, keeping custom and theme code cleanly separated. Built this way, your custom features survive theme updates. This upgrade-safety is a core part of how we work.',
    },
    {
      q: 'Can custom Liquid replace my Shopify apps?',
      a: 'Often, yes, and it\u2019s one of the highest-ROI things we do. Many apps perform functions native Liquid can handle with no monthly fee and no performance penalty. We audit your app stack, identify replaceable apps, and rebuild those functions natively, lowering cost and improving speed. Not every app should be replaced (some are genuinely worth it), but many can be.',
    },
    {
      q: 'What are metafields and why do they matter?',
      a: 'Metafields store structured data, like ingredient lists, spec tables, or size guides, against products, collections, or pages. Custom Liquid reads them to render consistent, dynamic content across your whole catalog from a single template. This means you add a value once and the page updates automatically, no per-product manual work and no app required. It\u2019s the modern, scalable way to manage rich product content.',
    },
    {
      q: 'Can you fix or improve existing custom Liquid on my store?',
      a: 'Yes. Much of our Liquid work is fixing inherited code, debugging broken sections, resolving rendering issues, refactoring bloated theme code for speed, or making a previous developer\u2019s work upgrade-safe. Every engagement starts with understanding your existing theme before we change anything.',
    },
  ],
  related: [
    { to: '/shopify-web-development', label: 'Shopify Web Development', desc: 'Full custom Shopify builds, of which custom Liquid is the engineering core.' },
    { to: '/shopify-theme-customization', label: 'Theme Customization', desc: 'Customizing and extending Shopify themes with bespoke sections and design.' },
    { to: '/shopify-maintenance', label: 'Shopify Maintenance', desc: 'Ongoing support, upgrades, and app-stack discipline to keep your store fast and current.' },
  ],
  sources: [
    { href: 'https://shopify.dev/docs/api/liquid', label: 'Shopify.dev — Liquid reference' },
    { href: 'https://shopify.dev/docs/storefronts/themes/architecture', label: 'Shopify.dev — Theme architecture (OS 2.0)' },
    { href: 'https://shopify.dev/docs/apps/build/custom-data/metafields', label: 'Shopify.dev — Metafields' },
  ],
};

export const ShopifyCustomLiquidPage: React.FC = () => <PillarTemplate content={content} />;
