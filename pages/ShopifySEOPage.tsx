import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Gauge, Code2, Link2, FileText, TrendingUp,
  Boxes, ShoppingCart, BarChart3, Sparkles, ClipboardCheck, Globe,
} from 'lucide-react';
import { PillarTemplate, PillarContent } from '../components/pillar/PillarTemplate';

const content: PillarContent = {
  slug: 'shopify-seo',
  serviceName: 'Shopify SEO',
  serviceDescription:
    'eCeez provides technical and content Shopify SEO — site architecture, Core Web Vitals, structured data, collection and product optimization, and AI-search readiness — engineered to rank Shopify stores and grow organic revenue.',
  badge: 'Shopify SEO',
  h1Lead: 'Shopify SEO That Grows',
  h1Accent: 'Organic Revenue',
  subtitle:
    'Most Shopify SEO advice stops at "add keywords and alt text." Real Shopify SEO is engineering: a crawlable architecture, fast Core Web Vitals, complete structured data, and collection and product pages built to rank and convert. We do the technical and content work together, because on Shopify they\u2019re inseparable, and we do it as a team that runs its own 9,000-product store.',
  heroBullets: [
    'Technical SEO built into the store, not bolted on',
    'Core Web Vitals engineered to pass',
    'Collection & product page optimization',
    'AI-search (AEO/GEO) readiness',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=1200',
    alt: 'Shopify SEO — organic search growth strategy for ecommerce stores',
  },
  stats: [
    { value: '<2.5s', label: 'Core Web Vitals LCP target on every store' },
    { value: '100%', label: 'Product, Collection & Breadcrumb schema coverage' },
    { value: '9,000+', label: 'Products on the Shopify store we run ourselves' },
    { value: '2026', label: 'Optimized for AI Overviews & answer engines' },
  ],
  problems: {
    heading: 'Why Most Shopify Stores',
    accent: 'Don\u2019t Rank',
    sub: 'Shopify makes launching easy and ranking hard. These are the issues we find on almost every underperforming store, and the reasons traffic never arrives.',
    items: [
      {
        icon: <Gauge className="text-indigo-600" />,
        title: 'Failing Core Web Vitals',
        desc: 'Bloated themes, unoptimized images, and a stack of apps injecting scripts push LCP and INP past Google\u2019s thresholds. Since Core Web Vitals are a ranking factor and a conversion lever, a slow store loses twice.',
      },
      {
        icon: <Boxes className="text-blue-600" />,
        title: 'Thin, duplicate collection pages',
        desc: 'Shopify\u2019s default collection and tag structure spawns near-duplicate, content-thin pages that Google declines to index. Without unique, substantive collection content, your most commercial pages stay invisible.',
      },
      {
        icon: <Code2 className="text-purple-600" />,
        title: 'Incomplete structured data',
        desc: 'Missing or broken Product, Breadcrumb, and Organization schema means no rich results, no price and review snippets, and a store that AI shopping agents can\u2019t read accurately.',
      },
      {
        icon: <Link2 className="text-emerald-600" />,
        title: 'Weak internal linking',
        desc: 'Orphaned products, no topical hubs, and a flat link structure leave crawl equity stranded. Google can\u2019t find or prioritize pages that nothing links to.',
      },
      {
        icon: <FileText className="text-orange-600" />,
        title: 'No content strategy',
        desc: 'Product and collection pages alone can\u2019t capture the informational searches that feed buying decisions. Without a content layer, you compete only on the narrowest, most contested commercial terms.',
      },
      {
        icon: <Search className="text-pink-600" />,
        title: 'Near-zero authority',
        desc: 'Few backlinks and little brand presence mean Google rations crawl budget and ranking trust. Even perfectly optimized pages can\u2019t rank on a domain search engines don\u2019t yet trust.',
      },
    ],
  },
  guide: [
    {
      heading: 'The Technical Foundation:',
      accent: 'SEO Built Into the Store',
      paragraphs: [
        <>Shopify SEO starts below the surface, with the things visitors never see but Google weighs heavily. <strong>Site speed</strong> is first: Core Web Vitals (LCP under 2.5s, INP under 200ms, CLS under 0.1) are both a ranking factor and a conversion lever, so we treat performance as a build constraint, optimizing images to WebP/AVIF at display size, disciplining the app stack, deferring non-critical scripts, and preloading the hero image.</>,
        <><strong>Crawlable architecture</strong> comes next: a flat, logical structure where important pages are a few clicks from the homepage, clean URLs, controlled indexation (noindexing thin tag and filter pages), and a correct sitemap. On Shopify this matters enormously, because the platform\u2019s defaults quietly generate crawl traps and duplicate pages that waste the crawl budget your store can\u2019t spare.</>,
        <><strong>Structured data</strong> ties it together: complete Product schema (price, availability, reviews), Breadcrumb, and Organization markup so you\u2019re eligible for rich results and legible to the AI systems increasingly mediating discovery. Our <Link to="/shopify-speed-optimization" className="text-indigo-600 underline underline-offset-2">speed optimization</Link> and <Link to="/seo" className="text-indigo-600 underline underline-offset-2">technical SEO</Link> services build all of this in from the start.</>,
      ],
    },
    {
      heading: 'On-Page SEO:',
      accent: 'Collection & Product Pages That Rank',
      paragraphs: [
        <>On Shopify, your <strong>collection pages</strong> are usually your most valuable commercial real estate, they target the category keywords buyers actually search ("men\u2019s running shoes," not a specific SKU). Yet Shopify ships them nearly empty. We add unique, substantive collection descriptions, sensible filtering that doesn\u2019t spawn duplicate URLs, and internal links that establish topical authority, turning thin category pages into pages Google indexes and ranks.</>,
        <><strong>Product pages</strong> need benefit-led, genuinely unique copy (not manufacturer boilerplate that duplicates a thousand other stores), descriptive image alt text, complete schema, and answers to the questions buyers actually ask. Done well, they rank for long-tail buying terms and convert the traffic they earn, which is where our <Link to="/shopify-cro" className="text-indigo-600 underline underline-offset-2">CRO</Link> work compounds the SEO.</>,
        <>The discipline that ties on-page together is <strong>search intent</strong>: every page should match what the searcher actually wants, informational, commercial, or transactional, because a page that mismatches intent won\u2019t rank no matter how well it\u2019s optimized. We map your catalog and content to real intent, not just keyword volume.</>,
      ],
    },
    {
      heading: 'Content & Authority:',
      accent: 'The Part Most Stores Skip',
      paragraphs: [
        <>Product and collection pages capture buyers who already know what they want. A <strong>content layer</strong>, buying guides, comparisons, how-tos, captures the far larger audience researching before they buy, builds topical authority that lifts your whole domain, and earns the links and citations that raise your ranking ceiling. This is the work that separates stores that rank from stores that merely exist.</>,
        <>The other half is <strong>off-site authority</strong>. Backlinks and brand mentions are how Google decides which stores to trust and how much crawl budget to spend, and they\u2019re the single biggest ceiling on most Shopify stores\u2019 rankings. We help you build authority the durable way, digital PR, genuine partnerships, and content worth linking to, not toxic link schemes that invite penalties.</>,
        <>We know this works because we live it. Running our own 9,000-product Shopify store means every SEO recommendation we make has been tested against our own organic traffic and revenue first, not lifted from a blog post. That operator\u2019s perspective is why our SEO is engineering rather than guesswork.</>,
      ],
    },
    {
      heading: 'The New Frontier:',
      accent: 'AI Search & Answer Engines',
      paragraphs: [
        <>Search is changing faster than at any point since mobile. <strong>AI Overviews</strong> now appear on roughly half of searches, and AI assistants answer product questions directly, which means being discoverable increasingly requires being <em>citable</em> by AI, not just ranked in blue links. Being cited is decoupling from ranking: many AI-cited pages don\u2019t rank in the top 10 at all.</>,
        <>Optimizing for this, sometimes called AEO (answer engine optimization) or GEO (generative engine optimization), rewards the same fundamentals aimed slightly differently: answer-first content in the first 150 words, extractable H2/H3 structure, original data and statistics, explicit named entities, and complete structured data. We also implement machine-readable signals like <code>llms.txt</code> so AI systems can accurately understand and represent your store.</>,
        <>The reassuring truth: almost every AI-era best practice, clean structure, fast pages, genuine expertise, complete schema, is something excellent SEO already requires. Preparing for AI search isn\u2019t a separate project; it\u2019s doing the fundamentals so well that any interface, human or machine, can read your store. That\u2019s exactly how we build. <Link to="/contact" className="text-indigo-600 underline underline-offset-2">Start with a free SEO audit</Link> and we\u2019ll show you precisely where your store stands.</>,
      ],
    },
  ],
  method: {
    heading: 'Our Shopify SEO',
    accent: 'Process',
    sub: 'Technical and content SEO delivered together, because on Shopify, ranking is an engineering outcome.',
    items: [
      { icon: <ClipboardCheck className="text-indigo-600" />, title: 'Audit & Diagnosis', desc: 'A full technical, content, and authority audit using Search Console data to find exactly what\u2019s blocking rankings and indexation.' },
      { icon: <Gauge className="text-amber-500" />, title: 'Core Web Vitals', desc: 'Image optimization, script discipline, and theme engineering to pass LCP, INP, and CLS, the speed foundation ranking depends on.' },
      { icon: <Boxes className="text-blue-600" />, title: 'Architecture & Indexation', desc: 'Crawlable structure, clean URLs, controlled indexation, and correct sitemaps so Google spends crawl budget on pages that matter.' },
      { icon: <Code2 className="text-purple-600" />, title: 'Structured Data', desc: 'Complete Product, Collection, Breadcrumb, and Organization schema for rich results and AI legibility.' },
      { icon: <ShoppingCart className="text-emerald-600" />, title: 'On-Page Optimization', desc: 'Collection and product pages optimized for intent, unique copy, internal linking, and topical authority.' },
      { icon: <FileText className="text-orange-600" />, title: 'Content Strategy', desc: 'Buying guides, comparisons, and how-tos that capture informational search and build topical authority.' },
      { icon: <Sparkles className="text-pink-600" />, title: 'AI-Search Readiness', desc: 'AEO/GEO optimization and machine-readable signals so your store is citable by AI Overviews and answer engines.' },
      { icon: <BarChart3 className="text-cyan-600" />, title: 'Measurement', desc: 'Search Console and analytics tracking so every change is measured against rankings, traffic, and revenue.' },
    ],
  },
  faqs: [
    {
      q: 'How long does Shopify SEO take to show results?',
      a: 'Technical fixes (speed, indexation, schema) can show impact within weeks as Google re-crawls. Content and authority building compound over 3\u20136 months and beyond. Anyone promising top rankings in days is selling something that doesn\u2019t exist, real SEO is a compounding investment, not a switch. The upside is that the gains are durable, unlike paid traffic that stops the moment you stop paying.',
    },
    {
      q: 'Is Shopify good for SEO?',
      a: 'Yes, Shopify has a solid SEO foundation: clean architecture potential, fast hosting, automatic SSL, and mobile responsiveness. But it also has default behaviors, duplicate collection and tag pages, limited URL control, thin auto-generated pages, that quietly hurt rankings if unaddressed. Shopify is good for SEO when it\u2019s configured correctly, which is exactly the work we do.',
    },
    {
      q: 'What\u2019s the difference between technical SEO and content SEO for Shopify?',
      a: 'Technical SEO is the foundation, site speed, crawlability, structured data, indexation, that determines whether Google can access and understand your store. Content SEO is what you say, collection copy, product descriptions, and guides that target search intent and build authority. On Shopify they\u2019re inseparable: perfect content on a slow, uncrawlable store won\u2019t rank, and a fast, well-structured store with thin content has nothing to rank. We do both together.',
    },
    {
      q: 'Why isn\u2019t my Shopify store showing up on Google?',
      a: 'The usual causes are: thin or duplicate content Google declines to index; failing Core Web Vitals; poor internal linking that leaves pages orphaned; near-zero domain authority (too few backlinks) so Google rations crawl budget; or indexation issues from Shopify\u2019s default structure. A proper audit identifies which of these apply to your store, our free audit does exactly that.',
    },
    {
      q: 'Do I need to optimize my Shopify store for AI search?',
      a: 'Increasingly, yes. With AI Overviews on roughly half of searches and shoppers asking AI assistants for product recommendations, being citable by AI is becoming as important as ranking. The good news is that AI-search optimization (AEO/GEO) rewards the same fundamentals as classic SEO, clean structure, fast pages, complete schema, real expertise, aimed slightly differently, plus machine-readable signals like llms.txt. Getting today\u2019s fundamentals right is most of the work.',
    },
    {
      q: 'Can you do SEO for a Shopify store you didn\u2019t build?',
      a: 'Absolutely, most of our SEO engagements are improvements to existing stores. Every one starts with a comprehensive audit so we understand exactly what we\u2019re working with before touching anything. You don\u2019t need to have built with us to work with us on SEO.',
    },
  ],
  related: [
    { to: '/shopify-speed-optimization', label: 'Shopify Speed Optimization', desc: 'Core Web Vitals engineering, the performance foundation that ranking depends on.' },
    { to: '/shopify-cro', label: 'Shopify CRO', desc: 'Convert the organic traffic your SEO earns into revenue.' },
    { to: '/ecommerce-ux', label: 'Ecommerce UX Guide', desc: 'The definitive guide to the UX fundamentals that support both ranking and conversion.' },
  ],
  sources: [
    { href: 'https://web.dev/articles/vitals', label: 'Google web.dev — Core Web Vitals' },
    { href: 'https://developers.google.com/search/docs/appearance/structured-data/product', label: 'Google — Product structured data' },
    { href: 'https://shopify.dev/docs/storefronts/themes/best-practices/performance', label: 'Shopify.dev — Performance best practices' },
  ],
};

export const ShopifySEOPage: React.FC = () => <PillarTemplate content={content} />;
