import React from 'react';
import { Link } from 'react-router-dom';
import {
  Gauge, Code2, Layers, Globe, Zap, GitBranch,
  Boxes, Server, Smartphone, Cpu, Network, ShieldCheck,
} from 'lucide-react';
import { PillarTemplate, PillarContent } from '../components/pillar/PillarTemplate';

const content: PillarContent = {
  slug: 'shopify-headless-commerce',
  serviceName: 'Shopify Headless Commerce',
  serviceDescription:
    'eCeez builds Shopify headless commerce with Hydrogen, the Storefront API, and modern frameworks, decoupling the storefront from Shopify\u2019s backend for maximum performance, design freedom, and omnichannel reach.',
  badge: 'Headless Commerce',
  h1Lead: 'Shopify Headless',
  h1Accent: 'Commerce',
  subtitle:
    'Headless commerce decouples your storefront from Shopify\u2019s backend, keeping Shopify\u2019s bulletproof checkout, cart, and catalog while building the customer-facing experience in a fast, modern framework. It\u2019s not for everyone, but for the right store it unlocks performance, design freedom, and omnichannel reach a standard theme can\u2019t match. We\u2019ll tell you honestly whether it\u2019s right for you.',
  heroBullets: [
    'Hydrogen & Storefront API builds',
    'Best-in-class Core Web Vitals',
    'Total front-end design freedom',
    'Shopify\u2019s checkout & backend retained',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80&w=1200',
    alt: 'Shopify headless commerce architecture — decoupled storefront development',
  },
  stats: [
    { value: '<1s', label: 'Achievable LCP on a well-built headless storefront' },
    { value: 'API', label: 'Storefront API + Hydrogen architecture' },
    { value: '\u221e', label: 'Front-end design freedom, no theme constraints' },
    { value: '100%', label: 'Shopify checkout & backend retained' },
  ],
  problems: {
    heading: 'When Headless',
    accent: 'Makes Sense',
    sub: 'Headless is powerful but not universal. It\u2019s the right call in specific situations, and overkill in many others. Here\u2019s when it genuinely earns its added complexity.',
    items: [
      {
        icon: <Gauge className="text-indigo-600" />,
        title: 'Performance Is Mission-Critical',
        desc: 'You\u2019ve optimized your theme and still need more, sub-second loads, instant navigation. A headless front end on a modern framework can hit performance a Liquid theme structurally can\u2019t.',
      },
      {
        icon: <Layers className="text-blue-600" />,
        title: 'You Need Total Design Freedom',
        desc: 'Your brand demands an experience no theme can express, complex interactions, unconventional layouts, app-like UX. Headless removes theme constraints entirely; the front end is limited only by what you can build.',
      },
      {
        icon: <Network className="text-purple-600" />,
        title: 'You\u2019re Selling Across Many Channels',
        desc: 'Web, mobile app, kiosk, IoT, marketplaces, all pulling from one commerce backend. Headless treats Shopify as a commerce engine any front end can consume, making true omnichannel practical.',
      },
      {
        icon: <Boxes className="text-emerald-600" />,
        title: 'Content & Commerce Must Merge',
        desc: 'A content-heavy brand that needs a powerful CMS and commerce as one seamless experience. Headless lets you combine Shopify with a best-in-class CMS instead of forcing both into a theme.',
      },
      {
        icon: <Cpu className="text-orange-600" />,
        title: 'You Have Engineering Resources',
        desc: 'Headless is a real application requiring ongoing development. It fits teams with (or willing to fund) engineering capacity, and we\u2019re honest when a store lacks the resources to maintain one.',
      },
      {
        icon: <ShieldCheck className="text-pink-600" />,
        title: 'You Want Backend Stability',
        desc: 'Headless keeps Shopify\u2019s checkout, payments, inventory, and admin, the hard, security-critical parts, while you innovate freely on the front end. Best of both: stable backend, unlimited frontend.',
      },
    ],
  },
  guide: [
    {
      heading: 'What Headless Commerce',
      accent: 'Actually Is',
      paragraphs: [
        <>In a traditional Shopify store, the front end (what shoppers see) and the back end (catalog, cart, checkout) are coupled together in the theme. <strong>Headless commerce decouples them</strong>: Shopify continues to run the backend, products, inventory, cart, and its bulletproof checkout, while the storefront is built as a separate application that pulls data through Shopify\u2019s <strong>Storefront API</strong>.</>,
        <>The "head" is the front end; going "headless" means detaching it so you can build it however you like, in React, Vue, or Shopify\u2019s own <strong>Hydrogen</strong> framework, while Shopify remains the commerce engine underneath. You keep everything Shopify does brilliantly (PCI-compliant checkout, payments, inventory, admin) and gain total freedom over the customer experience.</>,
        <>The trade-off is complexity. A headless store is a custom application to build and maintain, not a theme to configure. That\u2019s why it\u2019s the right answer for specific, ambitious stores and the wrong answer for most others, where a well-built <Link to="/shopify-web-development" className="text-indigo-600 underline underline-offset-2">custom theme</Link> delivers excellent results at a fraction of the cost and upkeep.</>,
      ],
    },
    {
      heading: 'Hydrogen, Oxygen &',
      accent: 'the Modern Stack',
      paragraphs: [
        <><strong>Hydrogen</strong> is Shopify\u2019s official headless framework, built on React (specifically Remix), purpose-designed for Shopify commerce. It ships with commerce-aware components, Storefront API integration, and performance patterns baked in, making it the most direct path to a headless Shopify build. <strong>Oxygen</strong> is Shopify\u2019s global hosting for Hydrogen storefronts, deploying your front end to a fast edge network at no additional hosting cost.</>,
        <>Together, Hydrogen and Oxygen make headless dramatically more accessible than it used to be, you get a Shopify-native framework and Shopify-native hosting, rather than assembling everything from scratch. For teams that prefer other stacks, the Storefront API is framework-agnostic: we can build headless front ends in Next.js or other modern frameworks where that suits your team and existing systems better.</>,
        <>Whichever stack, the performance ceiling is the draw. A well-built headless storefront can achieve loading and navigation speeds a Liquid theme structurally cannot, because the front end is a purpose-built, edge-delivered application. When performance is genuinely mission-critical and you have the resources, that ceiling is the reason to go headless.</>,
      ],
    },
    {
      heading: 'The Honest',
      accent: 'Trade-Offs',
      paragraphs: [
        <>We\u2019d rather lose a headless project than sell you one you don\u2019t need, so here are the real trade-offs. <strong>Cost and complexity</strong> are higher, both upfront and ongoing; a headless store is a bespoke application requiring engineering to build and maintain. <strong>Some Shopify conveniences change</strong>: certain apps and theme-editor workflows work differently or need custom reimplementation, since they assume a standard theme.</>,
        <><strong>Maintenance is a real commitment.</strong> Frameworks update, dependencies need managing, and the front end is your responsibility in a way a theme isn\u2019t. Without engineering capacity (in-house or retained), a headless store becomes a liability rather than an asset. This is the single most common reason we advise against headless, plenty of ambitious brands are better served by a fast custom theme.</>,
        <>The reward, when the fit is right, is a storefront with no performance or design ceiling, true omnichannel reach, and Shopify\u2019s rock-solid backend underneath. If you\u2019re weighing headless, we\u2019ll give you a straight assessment of whether it fits your goals, resources, and stage, before you commit a cent. <Link to="/contact" className="text-indigo-600 underline underline-offset-2">Book an honest consultation</Link>.</>,
      ],
    },
    {
      heading: 'Headless vs.',
      accent: 'a Fast Custom Theme',
      paragraphs: [
        <>Most stores asking about headless actually want its <em>outcomes</em>, speed and a distinctive experience, not headless itself. And often, a well-engineered custom Liquid theme delivers most of those outcomes at far lower cost and complexity. A theme built with disciplined performance, optimized images, minimal apps, and clean code can pass Core Web Vitals comfortably and feel fast and premium.</>,
        <>So our honest process starts by asking what you\u2019re really trying to achieve. If it\u2019s "our store is slow," the answer is usually <Link to="/shopify-speed-optimization" className="text-indigo-600 underline underline-offset-2">speed optimization</Link> or a custom theme rebuild, not headless. If it\u2019s "we need an experience and performance ceiling no theme can reach, across multiple channels, and we have the engineering to sustain it," then headless is genuinely the right tool.</>,
        <>That honesty is the point. Headless is a powerful, legitimate architecture we\u2019re fully equipped to build, and it\u2019s the wrong choice for the majority of stores that ask about it. We\u2019ll tell you which group you\u2019re in, because recommending the right solution matters more than selling the most expensive one.</>,
      ],
    },
  ],
  method: {
    heading: 'Our Headless',
    accent: 'Capabilities',
    sub: 'End-to-end headless Shopify, from architecture decision to build to maintenance.',
    items: [
      { icon: <Code2 className="text-indigo-600" />, title: 'Hydrogen Development', desc: 'Headless storefronts on Shopify\u2019s official React/Remix framework, deployed to Oxygen edge hosting.' },
      { icon: <Server className="text-blue-600" />, title: 'Storefront API Integration', desc: 'Framework-agnostic headless builds pulling commerce data through Shopify\u2019s Storefront API.' },
      { icon: <Gauge className="text-purple-600" />, title: 'Performance Engineering', desc: 'Edge delivery, streaming, and modern rendering for best-in-class Core Web Vitals.' },
      { icon: <Boxes className="text-emerald-600" />, title: 'CMS Integration', desc: 'Combining Shopify commerce with a best-in-class headless CMS for content-heavy brands.' },
      { icon: <Network className="text-orange-600" />, title: 'Omnichannel Architecture', desc: 'One commerce backend serving web, app, and other channels through the same APIs.' },
      { icon: <ShieldCheck className="text-cyan-600" />, title: 'Checkout Retention', desc: 'Keeping Shopify\u2019s secure, PCI-compliant checkout while the storefront runs headless.' },
      { icon: <GitBranch className="text-pink-600" />, title: 'Architecture Consulting', desc: 'An honest headless-vs-theme assessment before any build, so you invest in the right approach.' },
      { icon: <Smartphone className="text-indigo-500" />, title: 'Ongoing Maintenance', desc: 'Framework updates, dependency management, and support to keep a headless store healthy.' },
    ],
  },
  faqs: [
    {
      q: 'What is headless commerce on Shopify?',
      a: 'Headless commerce decouples the storefront (what shoppers see) from the commerce backend (catalog, cart, checkout). On Shopify, it means Shopify keeps running the backend and its secure checkout, while the customer-facing storefront is built as a separate application that pulls data through Shopify\u2019s Storefront API, typically using Shopify\u2019s Hydrogen framework or another modern stack. You gain total front-end freedom while keeping Shopify\u2019s reliable commerce engine.',
    },
    {
      q: 'What is Shopify Hydrogen?',
      a: 'Hydrogen is Shopify\u2019s official headless commerce framework, built on React (Remix), with commerce-aware components and Storefront API integration built in. Paired with Oxygen (Shopify\u2019s global edge hosting for Hydrogen storefronts), it\u2019s the most direct, Shopify-native path to building a headless store, and it makes headless considerably more accessible than assembling a custom stack from scratch.',
    },
    {
      q: 'Should my store go headless?',
      a: 'Probably only if performance or design requirements genuinely exceed what a custom theme can deliver, you\u2019re selling across multiple channels from one backend, and you have engineering resources to maintain a custom application. For most stores, a well-built custom theme achieves the speed and design they actually want at far lower cost and complexity. We give an honest assessment before recommending headless, and we often recommend against it.',
    },
    {
      q: 'What are the downsides of headless commerce?',
      a: 'Higher upfront and ongoing cost, real complexity, and a genuine maintenance commitment, a headless store is a custom application, not a theme to configure. Some Shopify apps and theme-editor workflows work differently or need custom reimplementation. Without engineering capacity to maintain it, a headless store becomes a liability. These trade-offs are exactly why headless suits specific ambitious stores and not the majority.',
    },
    {
      q: 'Does headless keep Shopify\u2019s checkout?',
      a: 'Yes, and that\u2019s a key advantage. Headless decouples the storefront but retains Shopify\u2019s backend, including its secure, PCI-compliant, high-converting checkout, plus payments, inventory, and admin. You innovate freely on the front end while the hard, security-critical parts stay on Shopify\u2019s battle-tested infrastructure.',
    },
    {
      q: 'Is headless faster than a normal Shopify theme?',
      a: 'It can be, a well-built headless storefront on a modern edge-delivered framework can achieve loading and navigation speeds a Liquid theme structurally can\u2019t. But "can be" is important: a poorly-built headless store can be slower than a well-optimized theme. Headless raises the performance ceiling; realizing it requires skilled engineering. For many stores, a disciplined custom theme already hits the speed they need.',
    },
  ],
  related: [
    { to: '/shopify-web-development', label: 'Shopify Web Development', desc: 'Custom Shopify builds, the right choice for most stores that want speed and design freedom.' },
    { to: '/shopify-speed-optimization', label: 'Speed Optimization', desc: 'Often the real answer when the goal is "make our store faster" without headless complexity.' },
    { to: '/shopify-plus-development', label: 'Shopify Plus Development', desc: 'Enterprise Shopify, where headless architectures most often make sense.' },
  ],
  sources: [
    { href: 'https://hydrogen.shopify.dev/', label: 'Shopify — Hydrogen' },
    { href: 'https://shopify.dev/docs/api/storefront', label: 'Shopify.dev — Storefront API' },
    { href: 'https://shopify.dev/docs/custom-storefronts', label: 'Shopify.dev — Custom storefronts' },
  ],
};

export const ShopifyHeadlessPage: React.FC = () => <PillarTemplate content={content} />;
