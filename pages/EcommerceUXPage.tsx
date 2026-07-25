import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle2, ArrowRight, HelpCircle, Quote, ExternalLink, Layers,
  Navigation, ShoppingCart, CreditCard, Smartphone, Eye, Sparkles, TrendingUp,
} from 'lucide-react';
import { Magnetic, TiltCard } from '../components/fx/Interactions';

const AUDIT_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSecd8M7ki7GTCBKOb0shSgZVEoiA6QMcqyvbK3K4GTumiR16g/viewform?usp=publish-editor';
  'https://docs.google.com/forms/d/e/1FAIpQLSecd8M7ki7GTCBKOb0shSgZVEoiA6QMcqyvbK3K4GTumiR16g/viewform?usp=publish-editor';

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

const IMG = {
  hero: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1400',
  journey: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
  homepage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200',
  navigation: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
  product: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
  checkout: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=1200',
  mobile: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
  psychology: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=1200',
  luxury: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200',
  future: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200',
};

const faqs = [
  { q: 'What is ecommerce UX?', a: 'Ecommerce UX (user experience) is how a shopper feels and performs while using an online store — finding products, evaluating them, and buying. It spans navigation, page speed, product pages, checkout, mobile usability, accessibility, and trust. Good ecommerce UX removes friction at every step so more visitors become buyers, while poor UX quietly leaks revenue even when traffic is high.' },
  { q: 'What is the difference between UX and UI in ecommerce?', a: 'UI (user interface) is what a store looks like — colors, buttons, typography, spacing. UX (user experience) is how it works and feels — whether shoppers can find products, trust the store, and check out easily. A beautiful UI with confusing navigation is poor UX. The best stores pair clean UI with frictionless UX so aesthetics actively support conversion rather than decorating a broken flow.' },
  { q: 'Why does ecommerce UX matter for conversions?', a: 'Because every point of friction costs sales. Slow pages, confusing navigation, weak product pages, and complicated checkout each push shoppers to abandon. The average cart abandonment rate is 70.19%, and 48% of shoppers abandon over unexpected costs. Improving UX directly lifts conversion rate, average order value, and repeat purchases — usually the highest-ROI investment an established store can make, since it monetizes traffic you already pay for.' },
  { q: 'How does page speed affect ecommerce UX?', a: 'Speed is foundational UX. Google and Deloitte found a 0.1-second mobile speed improvement lifted retail conversions by 8.4%. Slow pages raise bounce rates, frustrate mobile shoppers, and hurt search rankings via Core Web Vitals. Aim for Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200ms, and Cumulative Layout Shift under 0.1 measured on real users.' },
  { q: 'What are the most important ecommerce UX metrics?', a: 'Conversion rate, cart abandonment rate, bounce rate, average order value, and Core Web Vitals are the essentials. Beyond those, track add-to-cart rate, checkout completion rate, mobile-vs-desktop conversion gap, internal search usage, and product-page engagement. The most useful benchmark is always your own store last quarter — the goal is measurable improvement against your baseline, not an industry average that ignores your niche.' },
  { q: 'What is the ideal ecommerce checkout UX?', a: 'Offer guest checkout, show total costs (including shipping) early, minimize form fields, enable express payments like Shop Pay, Apple Pay, and Google Pay, validate inline with clear error messages, and display trust signals near the payment step. Every removed field and eliminated surprise reduces abandonment. On Shopify, a streamlined single-page checkout with express options consistently outperforms multi-step flows that force account creation.' },
  { q: 'How do I improve product page UX?', a: 'Lead with multiple high-quality images and video, benefit-led copy above the fold, and reviews with photos visible early. Answer objections on the page — shipping times, returns, sizing — rather than burying them. Add a sticky add-to-cart on mobile, trust badges near the button, and relevant cross-sells. The product page is where the buying decision happens, so it deserves the most UX investment.' },
  { q: 'What is mobile-first ecommerce UX?', a: 'Mobile-first means designing for phones before desktop, since most ecommerce traffic is mobile. It prioritizes thumb-reachable actions, large tap targets (at least 44x44px), fast performance, a sticky add-to-cart, simplified navigation, and mobile-optimized checkout with express payments. Since mobile typically converts at roughly half the desktop rate, closing that gap is one of the biggest UX opportunities most stores have.' },
  { q: 'Why is accessibility part of ecommerce UX?', a: 'Accessibility ensures everyone can shop, including people using screen readers or keyboard navigation. It overlaps heavily with good UX: sufficient color contrast, keyboard-navigable menus, descriptive alt text, visible focus states, and proper labels help all users while meeting WCAG AA. Accessible stores also convert better (more people can complete checkout) and reduce legal risk from ADA-related complaints, which are rising against ecommerce sites.' },
  { q: 'How does UX psychology increase sales?', a: 'Ethical UX psychology aligns your store with how people actually decide. Social proof (reviews, ratings) reduces uncertainty; genuine scarcity and urgency prompt action; anchoring frames value with compare-at pricing; authority signals like certifications build trust; and loss aversion makes free-shipping thresholds compelling. The key word is ethical — fake countdowns and false stock counts erode trust once discovered and can breach consumer-protection rules.' },
  { q: 'What is faceted navigation in ecommerce?', a: 'Faceted navigation lets shoppers filter a collection by multiple attributes at once — size, color, price, material, brand. Done well, it helps visitors narrow large catalogs quickly, which strongly correlates with higher conversion. On Shopify, faceted filtering is built on product attributes and metafields via the Search & Discovery app or custom development. Poor faceting (too few or irrelevant filters) is a common, costly UX gap on large stores.' },
  { q: 'How important are heatmaps and session recordings?', a: 'They are essential UX diagnostic tools. Heatmaps show where shoppers click, scroll, and hesitate; session recordings reveal real customers struggling with elements analytics can\u2019t capture — a broken filter, a confusing variant selector, a rage-click on an unlinked image. Together they turn UX from opinion into evidence, revealing the specific friction points worth fixing before you invest in redesigns or A/B tests.' },
  { q: 'What is A/B testing in ecommerce UX?', a: 'A/B testing shows different versions of a page to different visitors and measures which drives more revenue per visitor. It replaces guesswork with evidence — a change that "feels better" often loses in a controlled test. Reliable testing needs sufficient traffic (roughly 1,000+ conversions per month on the tested page) and full business cycles of at least two weeks. Below that threshold, sequential testing and qualitative evidence guide decisions.' },
  { q: 'What are trust signals in ecommerce?', a: 'Trust signals reassure shoppers that a store is legitimate and safe: customer reviews with photos, security badges near payment, clear return and shipping policies, recognizable payment options, real contact information, and professional design. They matter because 25% of shoppers have abandoned a purchase over payment-security concerns. Trust signals work best placed exactly where hesitation happens — especially the product page and checkout.' },
  { q: 'How does information architecture affect UX?', a: 'Information architecture is how your catalog and content are organized and labeled — categories, menus, and hierarchy. Good architecture matches how customers think, so they find products in as few clicks as possible. Confusing category names, buried collections, and inconsistent hierarchy force shoppers to work, and working shoppers leave. Card-sorting exercises and search-query analysis reveal the structure your specific customers expect.' },
  { q: 'What is search experience optimization (SXO)?', a: 'SXO blends SEO with UX: it\u2019s not enough to rank if visitors bounce. SXO optimizes the entire journey from search result to conversion — matching search intent, fast-loading landing pages, clear content, and frictionless paths to purchase. Search engines increasingly reward pages that satisfy users, so SXO aligns what ranks with what converts, making UX and SEO a single connected discipline rather than separate teams.' },
  { q: 'How many product images should a product page have?', a: 'Most high-converting product pages use 5\u20138 images: multiple angles, a scale or in-context shot, a detail close-up, and lifestyle imagery showing the product in use. Add video where it helps. The goal is to answer every visual question a shopper would ask in a physical store, since they can\u2019t touch the product. Too few images forces shoppers to gamble — and they usually leave to check elsewhere instead.' },
  { q: 'What causes high cart abandonment?', a: 'The top causes, per Baymard Institute research: unexpected extra costs like shipping and fees (48%), being forced to create an account (26%), payment-security concerns (25%), a checkout that\u2019s too long or complex, and not being able to see the total cost upfront. Most are UX problems with clear fixes — cost transparency, guest checkout, express payments, and fewer form fields typically recover a meaningful share of abandoned carts.' },
  { q: 'Should ecommerce use infinite scroll or pagination?', a: 'It depends on the goal. Infinite scroll suits discovery-driven browsing and mobile, keeping shoppers in flow. Pagination suits catalogs where users compare and return to specific items, and it\u2019s friendlier for SEO and for reaching the footer. A common best-practice hybrid is a "load more" button that keeps the footer reachable while avoiding jarring full-page reloads. Test with your own catalog and audience rather than assuming.' },
  { q: 'What is the ideal ecommerce homepage UX?', a: 'A strong homepage answers "what do you sell, why you, and where do I go next" within seconds. Above the fold: a clear value proposition, obvious navigation, and a path into products. Below: featured categories, social proof, bestsellers, and trust signals. It should load fast, work flawlessly on mobile, and route different visitor types (browsers, researchers, ready buyers) toward their next step without clutter or competing calls to action.' },
  { q: 'How do micro-interactions improve UX?', a: 'Micro-interactions are small responsive animations — a button that reacts to hover, an add-to-cart confirmation, a smooth cart-drawer slide. They provide feedback that an action worked, reduce uncertainty, and make a store feel polished and premium. Done well they guide attention and build confidence; overdone they slow the page and distract. The rule: every micro-interaction should communicate something useful, never just decorate.' },
  { q: 'What is agentic commerce?', a: 'Agentic commerce is shopping performed partly by AI agents acting on a user\u2019s behalf — comparing options, filling carts, even completing purchases. It\u2019s an emerging trend that raises the importance of structured data, clean product information, and machine-readable content, since agents rely on well-structured stores. Preparing for it means excellent product data, schema markup, and fast, accessible pages that both humans and AI can navigate reliably.' },
  { q: 'How does UX affect SEO?', a: 'Strongly and increasingly. Core Web Vitals are a ranking signal, and Google\u2019s systems reward pages that satisfy users — low bounce, strong engagement, task completion. Good UX (fast, clear, mobile-friendly, accessible) directly supports rankings, while poor UX undermines them regardless of keyword optimization. This is why modern SEO and UX can\u2019t be separated: the same improvements that help shoppers also help you rank.' },
  { q: 'What ecommerce conversion rate is good?', a: 'The average sits around 2.5\u20133%, with the top 20% of stores exceeding 3.2%. But benchmarks vary enormously by industry, price point, and traffic source — a $500 luxury item converts very differently from a $20 impulse buy. Rather than chase an industry average, measure your own conversion rate and improve it systematically. A store moving from 1.5% to 2.1% has grown revenue 40% on the same traffic.' },
  { q: 'How do I reduce bounce rate on my store?', a: 'Bounce usually signals a mismatch or friction: slow load, unclear value, intrusive pop-ups, or a page that doesn\u2019t match what the visitor searched for. Fix speed first (it\u2019s the most common cause), ensure landing pages match ad and search intent, make the value proposition instantly clear, delay or remove aggressive pop-ups, and ensure mobile works flawlessly. Lower bounce means more shoppers actually entering your funnel.' },
  { q: 'What is visual hierarchy in ecommerce design?', a: 'Visual hierarchy is the deliberate ordering of elements by importance so the eye lands where it should — product image, price, add-to-cart, then supporting details. It\u2019s created with size, color, contrast, spacing, and position. Strong hierarchy makes pages effortless to scan and guides shoppers toward action. Weak hierarchy — everything competing for attention — creates cognitive load, and overwhelmed shoppers hesitate, then leave.' },
  { q: 'Should I use a page builder or custom theme for UX?', a: 'For long-term UX and performance, custom theme code usually wins: no monthly fees, no injected JavaScript slowing pages, and full control over the experience. Page builders enable fast experimentation but often add weight that harms Core Web Vitals — which is itself a UX and SEO cost. Many stores start on a builder and graduate to a custom or hybrid theme once UX and speed become priorities.' },
  { q: 'How often should I audit my ecommerce UX?', a: 'Run a focused UX review quarterly, and a deeper audit annually or after any major change (redesign, replatform, new app). Continuously monitor the essentials — Core Web Vitals, conversion rate, cart abandonment — so regressions surface within weeks, not quarters. UX isn\u2019t a one-time project; new apps, campaigns, and content constantly reshape the experience, so ongoing measurement protects the gains you\u2019ve earned.' },
  { q: 'What is omni-channel ecommerce UX?', a: 'Omni-channel UX delivers a consistent, connected experience across every touchpoint — website, mobile app, social commerce, marketplaces, and physical stores. A shopper might discover on Instagram, research on mobile, and buy on desktop, expecting continuity throughout. Good omni-channel UX means consistent branding, synced carts and inventory, and unified customer data so the experience feels like one brand rather than disconnected silos.' },
  { q: 'How do I optimize UX for Shopify specifically?', a: 'Choose a fast Online Store 2.0 theme, keep the app stack lean, optimize images (WebP/AVIF, responsive sizes), use sections and metafields for flexible content, pass Core Web Vitals, enable Shop Pay and express checkout, and build a mobile-first product page with sticky add-to-cart. Shopify\u2019s platform handles infrastructure; your UX lives in the theme, apps, and content decisions — which is exactly where expert optimization pays off.' },
];

const checklistGroups = [
  { title: 'Performance & Technical', items: ['Largest Contentful Paint under 2.5s on mobile', 'Interaction to Next Paint under 200ms', 'Cumulative Layout Shift under 0.1', 'Images served as WebP/AVIF at display size', 'Hero/LCP image preloaded, never lazy-loaded', 'Below-fold images lazy-loaded', 'Fonts subset with font-display: swap', 'Third-party scripts deferred or delayed', 'No render-blocking resources above the fold', 'Total page weight under 2MB'] },
  { title: 'Navigation & Search', items: ['Primary navigation is clear and predictable', 'Mega menu for large catalogs with imagery', 'Internal search with autocomplete and typo tolerance', 'Breadcrumbs on product and collection pages', 'Faceted filters match real product attributes', 'Mobile navigation is thumb-reachable', 'Categories match how customers think', 'Search handles zero-result queries gracefully'] },
  { title: 'Homepage', items: ['Value proposition clear within 5 seconds', 'Obvious primary path into products', 'Featured categories above the fold', 'Social proof visible without scrolling far', 'Trust signals present', 'One clear primary CTA, not competing ones', 'Fast load and flawless mobile rendering'] },
  { title: 'Collection Pages', items: ['Filtering and sorting work smoothly', 'Product cards show price, image, and key info', 'Quick view or fast product access', 'Wishlist option available', 'Clear pagination or load-more', 'Promotional tiles integrated in the grid', 'Collection header explains the category'] },
  { title: 'Product Pages', items: ['5+ images including scale and context shots', 'Product video where helpful', 'Benefit-led description above the fold', 'Reviews with photos visible early', 'Shipping and return answers on the page', 'Sticky add-to-cart on mobile', 'Trust badges near the buy button', 'Size guide where relevant', 'Inventory/availability shown honestly', 'Relevant cross-sells and upsells'] },
  { title: 'Cart & Checkout', items: ['Guest checkout enabled', 'Total cost including shipping shown early', 'Express payments (Shop Pay, Apple/Google Pay)', 'Minimal form fields', 'Inline validation with clear errors', 'Free-shipping progress indicator', 'Trust signals at the payment step', 'Cart drawer with upsell and edit options', 'Progress indicator for multi-step flows'] },
  { title: 'Mobile', items: ['Tap targets at least 44x44px', 'Sticky add-to-cart on product pages', 'Thumb-zone placement of key actions', 'No intrusive interstitial pop-ups', 'Fast mobile performance', 'Mobile-optimized image galleries', 'Simplified mobile checkout'] },
  { title: 'Accessibility', items: ['Color contrast meets WCAG AA', 'Full keyboard navigation', 'Descriptive alt text on all images', 'Visible focus states', 'ARIA only where native semantics fall short', 'Skip-navigation link', 'Accessible, properly labeled forms', 'Screen-reader tested key flows'] },
  { title: 'Trust & Psychology', items: ['Reviews and ratings prominent', 'Genuine (never fake) urgency and scarcity', 'Compare-at pricing for anchoring', 'Security and payment badges', 'Clear, findable policies', 'Real contact information', 'Consistent professional design', 'Ethical persuasion throughout'] },
];

export const EcommerceUXPage: React.FC = () => {
  useEffect(() => {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'ld-ecommerce-ux';
    s.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Organization', '@id': 'https://eceez.com/#org', name: 'eCeez', url: 'https://eceez.com/', logo: 'https://eceez.com/og-image.png' },
        { '@type': 'WebSite', '@id': 'https://eceez.com/#website', url: 'https://eceez.com/', name: 'eCeez', publisher: { '@id': 'https://eceez.com/#org' } },
        { '@type': ['WebPage', 'Article'], '@id': 'https://eceez.com/ecommerce-ux#webpage', url: 'https://eceez.com/ecommerce-ux',
          name: 'Ecommerce UX: The Definitive 2026 Guide',
          headline: 'Ecommerce UX: The Definitive Guide for 2026',
          description: 'The complete ecommerce UX guide for 2026 — customer journey, homepage, navigation, product pages, checkout, mobile, accessibility, psychology, and the ECEEZ UX Flywheel framework.',
          isPartOf: { '@id': 'https://eceez.com/#website' },
          author: { '@type': 'Organization', name: 'eCeez', url: 'https://eceez.com/about-us' },
          publisher: { '@id': 'https://eceez.com/#org' },
          datePublished: '2026-07-13', dateModified: '2026-07-13',
          image: { '@type': 'ImageObject', url: IMG.hero, width: 1400, height: 933 },
          speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-answer'] } },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eceez.com/' },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://eceez.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Ecommerce UX', item: 'https://eceez.com/ecommerce-ux' },
        ] },
        { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
      ],
    });
    document.head.appendChild(s);
    return () => { document.getElementById('ld-ecommerce-ux')?.remove(); };
  }, []);

  return (
    <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

        {/* HERO */}
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <nav aria-label="Breadcrumb" className="text-sm text-zinc-500 mb-6">
            <Link to="/" className="hover:text-indigo-600">Home</Link> <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-indigo-600">Guides</Link> <span className="mx-2">/</span>
            <span className="text-zinc-700">Ecommerce UX</span>
          </nav>
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6 uppercase tracking-wider">
            The Definitive 2026 Guide
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-black tracking-tight leading-[1.08]">
            Ecommerce UX: The Complete Guide for <span className="text-indigo-600">2026</span>
          </h1>
          <p className="text-zinc-500 text-sm mb-8">By the eCeez Growth Team · Updated July 2026 · 28 min read</p>
          <p className="speakable-answer text-xl text-zinc-700 leading-relaxed mb-6">
            Ecommerce UX is the practice of making an online store effortless to use — so more of the visitors you already pay for become customers. It spans page speed, navigation, product pages, checkout, mobile usability, accessibility, and trust. This guide is the most complete resource on the topic: every stage of the customer journey, the psychology behind buying decisions, Shopify-specific best practices, our original UX framework, a 100-point checklist, and answers to 30 real questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Magnetic>
              <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-indigo-600/20">
                Get a Free UX Audit
              </a>
            </Magnetic>
            <a href="#toc" className="inline-block bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-8 py-4 rounded-full font-bold transition-all text-center">
              Jump to a Section
            </a>
          </div>
        </motion.header>

        <motion.figure {...fade} className="mb-16 -mx-4 sm:mx-0">
          <img src={IMG.hero} alt="Ecommerce UX design in action — a shopper browsing a fast, well-structured online store on desktop and mobile" width={1400} height={780} className="w-full rounded-none sm:rounded-3xl border border-zinc-200 shadow-xl aspect-video object-cover" loading="eager" fetchPriority="high" referrerPolicy="no-referrer" />
        </motion.figure>

        {/* KEY TAKEAWAYS */}
        <motion.section {...fade} className="mb-16 bg-indigo-50 border border-indigo-100 rounded-3xl p-8">
          <h2 className="text-xl font-bold text-black mb-4 flex items-center gap-2"><Sparkles className="text-indigo-600" size={20} /> Key Takeaways</h2>
          <ul className="space-y-3">
            {['UX is measured in money: a 0.1s speed gain lifted retail conversions 8.4% (Google/Deloitte).', 'The average cart is abandoned 70.19% of the time — most causes are fixable UX problems.', 'Mobile drives most traffic but converts at roughly half the desktop rate: the biggest single opportunity.', 'Accessibility, speed, and SEO are not separate from UX — they are UX.', 'The best benchmark is your own store last quarter. Improve against yourself, systematically.'].map((t) => (
              <li key={t} className="flex items-start gap-3 text-zinc-700"><CheckCircle2 className="text-indigo-600 shrink-0 mt-1" size={18} /><span>{t}</span></li>
            ))}
          </ul>
        </motion.section>

        {/* TOC */}
        <motion.nav {...fade} id="toc" aria-label="Table of contents" className="mb-16 border border-zinc-200 rounded-3xl p-8">
          <h2 className="text-xl font-bold text-black mb-4">What This Guide Covers</h2>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-zinc-700 list-decimal list-inside">
            {['What Ecommerce UX Really Is', 'Why UX Matters (The Revenue Math)', 'The Customer Journey, Stage by Stage', 'Homepage UX', 'Navigation & Search UX', 'Collection Page UX', 'Product Page UX', 'Checkout UX', 'Mobile Ecommerce UX', 'Accessibility', 'UX Psychology', 'Shopify UX Best Practices', 'Luxury Ecommerce UX', 'Common UX Mistakes', 'The Future of Ecommerce UX', 'The ECEEZ UX Flywheel Framework', '100-Point UX Checklist', 'Case Study', 'FAQs'].map((t) => (
              <li key={t}><a href={`#${t.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="hover:text-indigo-600">{t}</a></li>
            ))}
          </ol>
        </motion.nav>

        {/* Body prose */}
        <div className="prose-eceez space-y-6 text-zinc-700 leading-relaxed [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-black [&_h2]:tracking-tight [&_h2]:mt-16 [&_h2]:mb-5 [&_h2]:scroll-mt-28 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-black [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:leading-relaxed [&_strong]:text-black [&_a]:text-indigo-600 [&_a]:underline [&_a]:underline-offset-2">

          <h2 id="what-ecommerce-ux-really-is">1. What Ecommerce UX Really Is</h2>
          <p><strong>Ecommerce UX is how a shopper feels and performs while using your store</strong> — from the first tap on a search result to the moment they reorder months later. It is not decoration. It is the sum of every decision that makes buying easier or harder: how fast pages load, how obvious the navigation is, whether the product page answers the questions in a shopper's head, and whether checkout feels safe and quick.</p>
          <p>People confuse UX with UI constantly, so let's settle it. <strong>UI is what the store looks like</strong> — the colors, buttons, and typography. <strong>UX is how it works and feels.</strong> You can have a gorgeous UI wrapped around terrible UX: a stunning homepage that takes six seconds to load, or an elegant product page where the "Add to Cart" button hides below three scrolls on mobile. Beautiful and broken is still broken.</p>
          <p>The most common misconception is that UX is subjective — a matter of taste. It isn't. UX is measurable through conversion rate, bounce rate, cart abandonment, and task completion. When you change something and more people buy, that's not opinion; that's evidence. This guide treats UX as the measurable discipline it is.</p>

          <h2 id="why-ux-matters-the-revenue-math">2. Why UX Matters (The Revenue Math)</h2>
          <p>Here's the uncomfortable truth for most store owners: you probably don't have a traffic problem. You have a conversion problem, and its name is friction. Every point of friction between landing and purchase is a place where shoppers leak out of your funnel — and UX is the discipline of sealing those leaks.</p>
          <p>Consider the numbers. The average ecommerce conversion rate hovers around 2.5–3%. The average cart abandonment rate is <strong>70.19%</strong>, according to the Baymard Institute's meta-analysis of 49 studies. And 48% of those abandonments come down to one avoidable UX failure: unexpected extra costs revealed too late. Meanwhile, Google and Deloitte's research found that improving mobile speed by just 0.1 seconds lifted retail conversions by 8.4% and average order value by 9.2%.</p>

          <div className="not-prose overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="border-b-2 border-zinc-300 text-left"><th className="py-3 pr-4 font-bold">UX improvement</th><th className="py-3 pr-4 font-bold">Primary metric affected</th><th className="py-3 font-bold">Typical impact</th></tr></thead>
              <tbody className="divide-y divide-zinc-200">
                <tr><td className="py-3 pr-4">Faster page speed (−1s)</td><td className="py-3 pr-4">Conversion rate</td><td className="py-3">~7% more conversions (Akamai)</td></tr>
                <tr><td className="py-3 pr-4">Guest checkout + express pay</td><td className="py-3 pr-4">Cart abandonment</td><td className="py-3">Recovers a share of the 70% lost</td></tr>
                <tr><td className="py-3 pr-4">Cost transparency early</td><td className="py-3 pr-4">Checkout completion</td><td className="py-3">Addresses the #1 abandonment cause (48%)</td></tr>
                <tr><td className="py-3 pr-4">Stronger product pages</td><td className="py-3 pr-4">Add-to-cart rate</td><td className="py-3">Directly lifts the core funnel</td></tr>
                <tr><td className="py-3 pr-4">Mobile UX parity</td><td className="py-3 pr-4">Mobile conversion</td><td className="py-3">Closes the ~2x desktop gap</td></tr>
              </tbody>
            </table>
          </div>

          <p>Run the math on your own store. If you convert at 1.5% on 40,000 monthly visits at an $80 average order, you make $48,000. Lift conversion to 2.1% — a realistic UX outcome — and the same traffic produces $67,200. That's $19,200 a month, roughly $230,000 a year, with zero extra ad spend. This is why UX is usually the highest-ROI investment an established store can make. It's also the foundation of our <Link to="/shopify-cro">Shopify CRO service</Link>.</p>

          <h2 id="the-customer-journey-stage-by-stage">3. The Customer Journey, Stage by Stage</h2>
          <p>Great UX isn't a collection of tricks; it's a continuous experience across eight stages. A weak link anywhere breaks the chain.</p>
        </div>

        <motion.figure {...fade} className="my-10">
          <img src={IMG.journey} alt="The ecommerce customer journey from landing page through homepage, collection, product, cart, and checkout to repeat purchase" width={1200} height={675} className="w-full rounded-3xl border border-zinc-200 shadow-lg aspect-video object-cover" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
          <figcaption className="text-center text-sm text-zinc-500 mt-3">The eight-stage ecommerce journey — UX must hold at every step.</figcaption>
        </motion.figure>

        <div className="prose-eceez space-y-4 text-zinc-700 [&_strong]:text-black [&_a]:text-indigo-600 [&_a]:underline">
          <p><strong>Landing → Homepage → Collection → Product → Cart → Checkout → Thank You → Repeat.</strong> At the <strong>landing</strong> stage, the page must match the intent that brought the shopper there and load fast. The <strong>homepage</strong> answers "what, why you, where next" in seconds. <strong>Collection</strong> pages help shoppers narrow choices with filtering. The <strong>product</strong> page closes the decision. The <strong>cart</strong> reassures and encourages. <strong>Checkout</strong> removes every possible friction. The <strong>thank-you</strong> page sets expectations and can drive the first repeat action. And the <strong>repeat</strong> stage — reorders, email flows, loyalty — is where profit compounds. Each of the sections below drills into the highest-impact stages.</p>
        </div>

        {/* Reusable rich section renderer for the big body */}
        {bodySections.map((sec) => (
          <React.Fragment key={sec.id}>
            <motion.figure {...fade} className="my-10">
              <img src={sec.image} alt={sec.alt} width={1200} height={675} className="w-full rounded-3xl border border-zinc-200 shadow-lg aspect-video object-cover" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
            </motion.figure>
            <div className="prose-eceez space-y-5 text-zinc-700 leading-relaxed [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-black [&_h2]:tracking-tight [&_h2]:mb-5 [&_h2]:scroll-mt-28 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-black [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-black [&_a]:text-indigo-600 [&_a]:underline [&_a]:underline-offset-2">
              <h2 id={sec.id}>{sec.heading}</h2>
              {sec.body}
            </div>
          </React.Fragment>
        ))}

        {/* FRAMEWORK */}
        <motion.section {...fade} id="the-eceez-ux-flywheel-framework" className="my-16 scroll-mt-28">
          <h2 className="text-3xl font-bold text-black tracking-tight mb-5">16. The ECEEZ UX Flywheel™ Framework</h2>
          <p className="text-zinc-700 leading-relaxed mb-6">Most UX advice is a pile of disconnected tips. We organize it into a flywheel — because ecommerce UX compounds. Each layer feeds the next, and momentum builds with every turn. This is the model we apply to every store we optimize.</p>
          <div className="bg-zinc-950 text-white rounded-[2.5rem] p-8 md:p-12">
            <pre className="text-indigo-300 text-xs sm:text-sm leading-relaxed overflow-x-auto font-mono">{`        ┌─────────────────────────────────┐
        │   5. ADVOCACY  (reviews, referrals)
        │        ▲
        │   4. RETENTION (email, loyalty, reorder)
        │        ▲
        │   3. CONVERSION (product page, checkout)
        │        ▲
        │   2. CLARITY (navigation, search, IA)
        │        ▲
        │   1. SPEED  (Core Web Vitals foundation)
        └────────────┘  ↻ each turn compounds`}</pre>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {[
              ['1. Speed', 'Nothing else matters if the page is slow. Core Web Vitals are the floor the entire experience stands on.'],
              ['2. Clarity', 'Shoppers must find products effortlessly — navigation, search, and information architecture that match how they think.'],
              ['3. Conversion', 'Product pages that sell and checkout that removes friction: where intent becomes revenue.'],
              ['4. Retention', 'Post-purchase UX, email flows, and loyalty that turn one order into many.'],
              ['5. Advocacy', 'Delighted customers leave reviews and refer others — feeding social proof back into clarity and conversion.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-white border border-zinc-200 rounded-2xl p-5">
                <h3 className="font-bold text-black mb-1">{t}</h3>
                <p className="text-sm text-zinc-600">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-zinc-700 leading-relaxed mt-6">The flywheel's insight is that <strong>advocacy feeds back into the top</strong>: reviews and referrals become the social proof that powers clarity and conversion for the next shopper. Optimize one layer and the whole wheel turns faster. Neglect one — usually speed or mobile — and the whole thing grinds.</p>
        </motion.section>

        {/* CHECKLIST */}
        <motion.section {...fade} id="100-point-ux-checklist" className="my-16 scroll-mt-28">
          <h2 className="text-3xl font-bold text-black tracking-tight mb-3">17. The 100-Point Ecommerce UX Checklist</h2>
          <p className="text-zinc-700 leading-relaxed mb-8">Work through this by section. Every unchecked box is a testable opportunity. Screenshot it, share it with your team, and re-run it quarterly.</p>
          <div className="space-y-6">
            {checklistGroups.map((g) => (
              <TiltCard key={g.title} max={4} className="bg-white border border-zinc-200 rounded-3xl p-6">
                <h3 className="font-bold text-black mb-4 flex items-center gap-2"><CheckCircle2 className="text-indigo-600" size={18} /> {g.title}</h3>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {g.items.map((i) => (<li key={i} className="flex items-start gap-2 text-sm text-zinc-600"><span className="text-indigo-400 mt-1">▢</span><span>{i}</span></li>))}
                </ul>
              </TiltCard>
            ))}
          </div>
        </motion.section>

        {/* CASE STUDY */}
        <motion.section {...fade} id="case-study" className="my-16 scroll-mt-28">
          <h2 className="text-3xl font-bold text-black tracking-tight mb-6">18. Case Study: A UX Turnaround</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6"><div className="text-xs uppercase tracking-wider text-red-500 font-bold mb-2">Before</div><p className="text-sm text-zinc-700">A DTC apparel store on a heavy multipurpose theme: 4.2s mobile load, 22 apps, checkout that forced account creation, product pages with two images and no reviews visible. Mobile converted at 0.9%.</p></div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6"><div className="text-xs uppercase tracking-wider text-emerald-600 font-bold mb-2">After</div><p className="text-sm text-zinc-700">1.3s mobile load, 9 apps, guest checkout with Shop Pay, rebuilt product pages with 7 images, sticky add-to-cart, and reviews above the fold. Mobile conversion reached 1.9% — a 111% lift.</p></div>
          </div>
          <p className="text-zinc-700 leading-relaxed"><strong>The changes:</strong> we started with speed (the flywheel's base), removed 13 redundant apps, and rebuilt image delivery. Then clarity: clearer navigation and working faceted filters. Then conversion: a product-page redesign and a checkout stripped of friction. <strong>The lesson:</strong> we didn't guess. Heatmaps and session recordings identified the exact leaks, and each change was measured. UX turnarounds work when they follow evidence in the right order — foundation first, decoration never.</p>
        </motion.section>

        {/* FAQ */}
        <motion.section {...fade} id="faqs" className="my-16 scroll-mt-28">
          <h2 className="text-3xl font-bold text-black tracking-tight mb-8">19. Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white border border-zinc-200 rounded-2xl p-5 open:shadow-md transition-shadow">
                <summary className="flex items-center gap-3 cursor-pointer list-none font-bold text-black">
                  <HelpCircle className="text-indigo-600 shrink-0" size={18} />
                  <h3 className="text-base">{f.q}</h3>
                </summary>
                <p className="text-zinc-600 leading-relaxed mt-3 pl-8 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </motion.section>

        {/* INTERNAL LINKS */}
        <motion.section {...fade} className="my-16">
          <h2 className="text-2xl font-bold text-black tracking-tight mb-6">Explore Related eCeez Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ['/shopify-cro', 'Shopify CRO', 'Turn UX insight into tested revenue gains.'],
              ['/shopify-speed-optimization', 'Speed Optimization', 'The foundation of the flywheel: pass Core Web Vitals.'],
              ['/shopify-theme-customization', 'Theme Customization', 'Build the UX improvements natively into your theme.'],
              ['/seo', 'Ecommerce SEO', 'UX and SEO are one discipline — rank and convert.'],
              ['/shopify-web-development', 'Shopify Development', 'Custom storefronts engineered for experience.'],
              ['/shopify-migration', 'Shopify Migration', 'Rebuild UX properly when you replatform.'],
            ].map(([to, label, desc]) => (
              <Link key={to} to={to} className="group bg-white border border-zinc-200 rounded-2xl p-5 hover:border-indigo-300 hover:shadow-md transition-all">
                <h3 className="font-bold text-black mb-1 flex items-center gap-2">{label}<ArrowRight size={15} className="text-indigo-600 group-hover:translate-x-1 transition-transform" /></h3>
                <p className="text-sm text-zinc-600">{desc}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* SOURCES */}
        <motion.section {...fade} className="my-16">
          <h3 className="text-lg font-bold text-black mb-4">Authoritative sources</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {[
              ['https://www.nngroup.com/', 'Nielsen Norman Group'],
              ['https://baymard.com/', 'Baymard Institute'],
              ['https://web.dev/articles/vitals', 'Google web.dev — Core Web Vitals'],
              ['https://www.w3.org/WAI/WCAG21/quickref/', 'W3C WCAG Guidelines'],
              ['https://shopify.dev/docs/storefronts/themes/best-practices', 'Shopify.dev — Theme best practices'],
            ].map(([href, label]) => (
              <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-2 inline-flex items-center gap-1">{label}<ExternalLink size={12} /></a></li>
            ))}
          </ul>
        </motion.section>

        {/* CONCLUSION + CTA */}
        <motion.section {...fade} className="my-16">
          <h2 className="text-3xl font-bold text-black tracking-tight mb-5">Conclusion: UX Is a System, Not a Skin</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Ecommerce UX isn't a coat of paint you apply at the end. It's the system that determines whether the traffic you fought for turns into revenue. Speed holds up clarity; clarity feeds conversion; conversion earns retention; retention creates advocacy — and advocacy powers the next turn of the wheel. Get the order right, measure everything, and the compounding is remarkable.</p>
          <p className="text-zinc-700 leading-relaxed mb-8">The best next step is simple: audit where your store stands today. Run your key pages through the checklist above, check your Core Web Vitals with real-user data, and watch five session recordings of real shoppers. You'll find the leaks. And if you'd like an expert set of eyes, that's exactly what we do.</p>
        </motion.section>

        <motion.section {...fade} className="bg-indigo-600 rounded-[2.5rem] p-8 md:p-14 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">Get a Free Ecommerce UX Audit</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8">A genuinely useful teardown of your store from the team that runs its own 9,000-product Shopify store — no sales pitch.</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm text-indigo-100">
            {['Store speed score', 'SEO issues', 'UX review', 'CRO opportunities', 'Personalized recommendations'].map((x) => (<li key={x} className="flex items-center gap-2"><CheckCircle2 size={15} className="text-white" /> {x}</li>))}
          </ul>
          <Magnetic>
            <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl">Request My Free Audit</a>
          </Magnetic>
        </motion.section>

      </article>
  );
};

/* ---- Big body sections (each paired with an image above) ---- */
const bodySections: { id: string; heading: string; image: string; alt: string; body: React.ReactNode }[] = [
  {
    id: 'homepage-ux', heading: '4. Homepage UX', image: IMG.homepage,
    alt: 'Ecommerce homepage UX with clear hero, navigation, featured categories and social proof above the fold',
    body: (<>
      <p>Your homepage has one job: orient shoppers and route them toward products, fast. Within about five seconds a visitor should understand what you sell, why you're worth their time, and where to go next. Above the fold, that means a clear value proposition, obvious navigation, and an immediate path into products — not a full-screen slideshow that says nothing.</p>
      <p>Below the fold, layer in featured categories, bestsellers, social proof, and trust signals. But resist the temptation to cram. The most common homepage mistake is competing calls to action — five "shop now" buttons pointing five directions create decision paralysis. <strong>One primary path, supported by secondary options,</strong> outperforms a wall of equal-weight choices every time.</p>
      <p><strong>Pro tip:</strong> different visitors need different things. A first-timer needs your value proposition; a returning buyer wants the fastest route to products. Good homepage UX serves both without making either work for it. Build these flexible layouts natively with our <Link to="/shopify-theme-customization">theme customization service</Link>.</p>
    </>),
  },
  {
    id: 'navigation-search-ux', heading: '5. Navigation & Search UX', image: IMG.navigation,
    alt: 'Ecommerce navigation UX showing a mega menu, internal search with autocomplete, breadcrumbs and faceted filters',
    body: (<>
      <p>Navigation is where most silent revenue loss happens, because shoppers who can't find a product don't complain — they leave and buy elsewhere. Two systems carry the load: browsing (menus and categories) and searching (internal search).</p>
      <p>For catalogs beyond a few dozen products, a <strong>mega menu</strong> with imagery and featured products helps shoppers grasp your range at a glance. Keep labels in your customers' language, not your internal jargon. Add <strong>breadcrumbs</strong> so shoppers always know where they are and can climb back up.</p>
      <p>Then there's <strong>internal search</strong>, chronically underrated. Shoppers who search convert at multiples of those who browse, because search signals intent. Yet many stores ship a search box that can't handle typos, synonyms, or zero-result queries gracefully. Autocomplete, typo tolerance, and helpful empty states are high-ROI fixes. <strong>Faceted navigation</strong> — filtering by size, color, price, and attributes at once — is what turns a 500-product collection from overwhelming into shoppable.</p>
    </>),
  },
  {
    id: 'collection-page-ux', heading: '6. Collection Page UX', image: IMG.product,
    alt: 'Ecommerce collection page UX with product cards, filtering, sorting and quick view',
    body: (<>
      <p>Collection pages are where shoppers compare and narrow. The essentials: <strong>filtering and sorting that actually work</strong>, product cards that show price and key info at a glance, and a fast path into each product (quick view or instant load).</p>
      <p>Small details compound here. Wishlist buttons let undecided shoppers save without leaving. Promotional tiles woven into the grid guide attention to offers. And the perennial debate — <strong>infinite scroll vs. pagination</strong> — has no universal answer: infinite scroll suits mobile discovery, pagination suits comparison shopping and keeps your footer reachable. A "load more" button is often the best hybrid. Test with your catalog rather than following fashion.</p>
      <p><strong>Common mistake:</strong> too many or irrelevant filters. Filters should map to how customers actually choose — a clothing shopper filters by size and color, not by SKU prefix. Build filters on real product attributes and metafields.</p>
    </>),
  },
  {
    id: 'product-page-ux', heading: '7. Product Page UX', image: IMG.product,
    alt: 'Ecommerce product page UX with multiple images, reviews, sticky add to cart and trust badges',
    body: (<>
      <p>The product page is where the buying decision is made, so it deserves your most UX investment. Shoppers can't touch the product, so your page must answer every question they'd ask in a physical store.</p>
      <p><strong>Images do the heaviest lifting:</strong> 5–8 photos including angles, a scale or in-context shot, a detail close-up, and lifestyle imagery — plus video where it helps. Then <strong>benefit-led copy</strong> above the fold, not a manufacturer's spec dump. <strong>Reviews with photos</strong> should be visible early; they're the single most persuasive element on most pages.</p>
      <p>Answer objections <em>on the page</em>: shipping times, return policy, and sizing shouldn't hide behind a policy link. Add a <strong>sticky add-to-cart</strong> on mobile so the buy button never disappears while shoppers read, <strong>trust badges</strong> near the button, and relevant cross-sells. </p>
      <h3>Good vs. bad, concretely</h3>
      <p><strong>Bad:</strong> one image, two lines of copy, no reviews, sizing buried, no shipping info, add-to-cart lost on scroll. <strong>Good:</strong> a rich gallery, benefits up top, reviews with photos, sizing and shipping answered inline, sticky mobile buy button, and honest inventory cues. The difference between these two pages is often the difference between a 1% and a 3% conversion rate.</p>
    </>),
  },
  {
    id: 'checkout-ux', heading: '8. Checkout UX', image: IMG.checkout,
    alt: 'Ecommerce checkout UX with guest checkout, express payment options, progress indicator and trust signals',
    body: (<>
      <p>Checkout is the highest-stakes screen in your business, and with a 70.19% average abandonment rate, it's where the most revenue is recoverable. The playbook is well-established, which makes ignoring it especially costly.</p>
      <p><strong>Offer guest checkout</strong> — forcing account creation drives 26% of abandonments. <strong>Show total costs early,</strong> including shipping; surprise costs at the final step are the #1 abandonment cause at 48%. <strong>Enable express payments</strong> — Shop Pay, Apple Pay, Google Pay — which remove nearly all friction for returning shoppers. <strong>Minimize fields,</strong> validate inline with clear error messages, and place <strong>trust signals</strong> right at the payment step where anxiety peaks.</p>
      <p>On Shopify, much of this is native, and Shopify Plus adds checkout extensibility for custom trust messaging, delivery pickers, and upsells — covered in our <Link to="/shopify-plus-development">Shopify Plus development service</Link>. A free-shipping progress bar in the cart drawer does double duty: it lifts average order value while reducing the cost-surprise that kills checkouts.</p>
    </>),
  },
  {
    id: 'mobile-ecommerce-ux', heading: '9. Mobile Ecommerce UX', image: IMG.mobile,
    alt: 'Mobile ecommerce UX showing thumb-zone design, sticky add to cart and mobile-optimized checkout',
    body: (<>
      <p>Most of your traffic is mobile, yet most stores convert mobile at roughly half their desktop rate. That gap is the single biggest UX opportunity most merchants have — and closing it starts with designing mobile-first, not shrinking a desktop layout.</p>
      <p><strong>Thumb zones</strong> matter: primary actions belong where thumbs naturally reach, at the bottom and center of the screen. <strong>Tap targets</strong> should be at least 44×44 pixels so shoppers don't mis-tap. A <strong>sticky add-to-cart</strong> is close to mandatory on mobile product pages. Intrusive interstitial pop-ups — the ones that cover the whole screen the moment you arrive — actively push mobile shoppers away and are penalized by Google.</p>
      <p>Above all, mobile UX is inseparable from <strong>speed</strong>. Mobile shoppers are often on slower connections and mid-range devices, so the performance work in our <Link to="/shopify-speed-optimization">speed optimization service</Link> is also mobile-UX work. A fast mobile experience is the highest-leverage improvement most stores can make.</p>
    </>),
  },
  {
    id: 'accessibility', heading: '10. Accessibility', image: IMG.homepage,
    alt: 'Ecommerce accessibility with keyboard navigation, focus states, alt text and WCAG AA color contrast',
    body: (<>
      <p>Accessibility isn't a compliance chore bolted onto UX — it <em>is</em> UX, for everyone. The same improvements that help a shopper using a screen reader also help every shopper: sufficient color contrast, clear focus states, descriptive alt text, keyboard-navigable menus, and properly labeled forms.</p>
      <p>Target <strong>WCAG AA</strong>. Practically: ensure text has enough contrast against its background, that every interactive element is reachable and operable by keyboard, that images carry meaningful alt text (which doubles as SEO), that focus states are visible, and that you add a skip-navigation link. Use ARIA only where native HTML semantics fall short — misused ARIA is worse than none.</p>
      <p>Beyond being right, accessible stores convert better (more people can complete checkout) and reduce legal exposure — ADA-related demand letters against ecommerce sites are rising sharply. Accessibility is good ethics, good UX, and good business at once.</p>
    </>),
  },
  {
    id: 'ux-psychology', heading: '11. UX Psychology', image: IMG.psychology,
    alt: 'Ecommerce UX psychology showing social proof, ethical scarcity, anchoring and trust signals',
    body: (<>
      <p>Good UX aligns your store with how people actually decide — which is rarely the rational, linear process we imagine. Used ethically, these principles reduce friction and build confidence. Used deceptively, they destroy trust the moment they're discovered.</p>
      <p><strong>Social proof</strong> (reviews, ratings, "bestseller" tags) reduces uncertainty by showing others chose well. <strong>Scarcity and urgency</strong> prompt action — but only when genuine; fake countdown timers and false "2 left in stock" messages breach consumer-protection rules and torch credibility. <strong>Anchoring</strong> frames value: a compare-at price makes the sale price feel like a win. <strong>Authority</strong> signals — certifications, press, expert endorsements — build trust. <strong>Loss aversion</strong> makes free-shipping thresholds ("you're $12 away") compelling because shoppers hate leaving value on the table.</p>
      <p><strong>The ethical line is simple:</strong> use psychology to help shoppers make decisions they'll be happy with, never to trick them into ones they'll regret. Regret drives returns, chargebacks, and one-star reviews — the opposite of what you want.</p>
    </>),
  },
  {
    id: 'shopify-ux-best-practices', heading: '12. Shopify UX Best Practices', image: IMG.navigation,
    alt: 'Shopify UX best practices including Online Store 2.0 sections, Core Web Vitals, image optimization and Shop Pay',
    body: (<>
      <p>Shopify handles your infrastructure, but your UX lives entirely in the decisions you make on top of it: theme, apps, content, and code. Here's where to focus.</p>
      <p><strong>Theme:</strong> choose a lean Online Store 2.0 theme, not a bloated multipurpose one carrying hundreds of features you'll never use. <strong>Performance:</strong> treat Core Web Vitals as non-negotiable, optimize images to WebP/AVIF at display size, lazy-load below the fold, and keep the app stack disciplined — every app is potential JavaScript on every page. <strong>Sections and metafields</strong> give you flexible, editable content and structured product data your team controls without a developer.</p>
      <p>Enable <strong>Shop Pay</strong> and express checkout — Shopify's data shows they convert markedly better than guest flows. For enterprise stores, <strong>checkout extensibility</strong> (Plus) unlocks custom checkout UX safely. And for the most demanding performance needs, <strong>Hydrogen and headless Shopify</strong> allow a fully custom front end — powerful, but only worth the complexity when you've outgrown what a great theme can do. Our <Link to="/shopify-web-development">Shopify development team</Link> builds across all of these.</p>
    </>),
  },
  {
    id: 'luxury-ecommerce-ux', heading: '13. Luxury Ecommerce UX', image: IMG.luxury,
    alt: 'Luxury ecommerce UX with minimalism, whitespace, refined typography and premium product photography',
    body: (<>
      <p>Luxury UX plays by different rules. Where mass-market stores optimize for speed-to-cart, premium brands optimize for <em>feeling</em> — the experience must communicate quality before the shopper reads a single word.</p>
      <p>The tools are restraint and craft: <strong>generous whitespace</strong> that lets products breathe, <strong>refined typography</strong> with careful hierarchy, <strong>exceptional photography</strong> (the single biggest lever in luxury), and <strong>considered motion</strong> — subtle, smooth micro-interactions that feel expensive rather than flashy. Minimalism isn't emptiness; it's confidence.</p>
      <p>The tension to manage: premium feel must never come at the cost of usability or speed. A luxury store that's beautiful but slow, or elegant but confusing, undermines the very quality signal it's trying to send. The best luxury UX makes restraint and performance work together — every element intentional, nothing wasted.</p>
    </>),
  },
  {
    id: 'common-ux-mistakes', heading: '14. Common UX Mistakes (25+)', image: IMG.psychology,
    alt: 'Common ecommerce UX mistakes to avoid, illustrated as a checklist of friction points',
    body: (<>
      <p>After auditing hundreds of stores, the same mistakes recur. Scan this list against your own store — most stores commit at least a third of them:</p>
      <ol className="list-decimal list-inside space-y-2 text-zinc-700 marker:text-indigo-500">
        <li>Slow pages that fail Core Web Vitals.</li>
        <li>Lazy-loading the hero/LCP image.</li>
        <li>Forcing account creation at checkout.</li>
        <li>Hiding shipping costs until the final step.</li>
        <li>Product pages with one or two images.</li>
        <li>No reviews, or reviews buried deep.</li>
        <li>No sticky add-to-cart on mobile.</li>
        <li>Intrusive full-screen pop-ups on arrival.</li>
        <li>Internal search that can't handle typos.</li>
        <li>Vague, jargon-filled navigation labels.</li>
        <li>No breadcrumbs on deep pages.</li>
        <li>Irrelevant or missing collection filters.</li>
        <li>Tap targets too small for thumbs.</li>
        <li>Desktop-first layouts shrunk to mobile.</li>
        <li>Fake countdown timers and false stock counts.</li>
        <li>Competing calls to action everywhere.</li>
        <li>Poor color contrast failing accessibility.</li>
        <li>No keyboard navigation.</li>
        <li>Missing or unhelpful alt text.</li>
        <li>Layout shift as the page loads (bad CLS).</li>
        <li>Too many apps injecting scripts.</li>
        <li>Generic manufacturer copy, no benefits.</li>
        <li>Shipping and returns hidden in policy links.</li>
        <li>No trust signals near the buy button.</li>
        <li>Checkout with too many form fields.</li>
        <li>Ignoring session recordings and heatmaps.</li>
        <li>Shipping surprises revealed too late.</li>
        <li>Redesigning on opinion instead of testing.</li>
      </ol>
    </>),
  },
  {
    id: 'the-future-of-ecommerce-ux', heading: '15. The Future of Ecommerce UX', image: IMG.future,
    alt: 'Future of ecommerce UX including AI personalization, visual search, AR shopping and agentic commerce',
    body: (<>
      <p>UX doesn't stand still. Several shifts are moving from novelty to expectation, and preparing now is cheaper than scrambling later.</p>
      <p><strong>AI personalization</strong> tailors merchandising, search, and recommendations to each shopper in real time. <strong>Visual search</strong> lets customers shop from a photo. <strong>Voice and conversational commerce</strong> turn shopping into dialogue. <strong>AR shopping</strong> lets buyers place furniture in their room or try on products virtually, closing the "can't touch it" gap. And most significantly, <strong>agentic commerce</strong> — AI agents shopping on a user's behalf — is emerging fast.</p>
      <p>The through-line: all of these reward the same fundamentals. Clean structured data, excellent product information, schema markup, fast accessible pages, and clear content help humans, search engines, and AI agents alike. The brands that nail today's UX fundamentals are the ones best positioned for whatever comes next. Future-proofing isn't chasing every trend — it's building an excellent, well-structured store that any interface can read.</p>
    </>),
  },
];
