import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass, MousePointer2, ShieldAlert, CreditCard, Smartphone, PackageX,
  Flame, Video, FlaskConical, ShoppingCart, LayoutTemplate, BadgeCheck, Star, Layers,
} from 'lucide-react';
import { PillarTemplate, PillarContent } from '../components/pillar/PillarTemplate';

const content: PillarContent = {
  slug: 'shopify-cro',
  serviceName: 'Shopify Conversion Rate Optimization (CRO)',
  serviceDescription:
    'Shopify-specific conversion rate optimization: heatmaps, session recordings, A/B testing, product page redesign, and checkout optimization that turn existing traffic into measurably more revenue.',
  badge: 'Shopify Conversion Rate Optimization',
  h1Lead: 'Shopify',
  h1Accent: 'CRO',
  subtitle:
    'You don\u2019t have a traffic problem — you have a conversion problem. Shopify conversion rate optimization turns the visitors you already pay for into customers, using evidence instead of guesswork. Here\u2019s the complete playbook.',
  heroBullets: [
    'Built on real user evidence, not opinions',
    'Shopify & Shopify Plus native techniques',
    'A/B tested — no "best practice" gambles',
    'Checkout, PDP, and mobile focused',
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    alt: 'Shopify conversion rate optimization analytics dashboard showing A/B test results and revenue growth',
  },
  stats: [
    { value: '2.5–3%', label: 'Average ecommerce conversion rate — the top 20% of stores exceed 3.2%' },
    { value: '70.19%', label: 'Average cart abandonment rate (Baymard Institute meta-analysis)' },
    { value: '48%', label: 'Of shoppers abandon carts over unexpected extra costs — the #1 cause' },
    { value: '+140%', label: 'Conversion rate increase achieved for an eCeez client after relaunch' },
  ],
  problems: {
    heading: 'Why Shopify Stores',
    accent: 'Don\u2019t Convert',
    sub: 'Traffic arrives with intent to buy. Somewhere between landing and checkout, your store talks them out of it. These are the six leaks we find most often.',
    items: [
      {
        icon: <Compass className="text-indigo-600" />,
        title: 'Bad Navigation',
        desc: 'Visitors who use site search or clear category paths convert at multiples of those who wander. Vague menu labels, buried collections, and no search suggestions mean shoppers can\u2019t find the product they came for — so they leave and buy it elsewhere.',
      },
      {
        icon: <MousePointer2 className="text-blue-600" />,
        title: 'Weak CTAs',
        desc: 'An "Add to Cart" button that blends into the design, sits below the fold on mobile, or disappears when the shopper scrolls is a silent revenue leak. Every product page has exactly one job; weak CTAs make it optional.',
      },
      {
        icon: <ShieldAlert className="text-red-600" />,
        title: 'Poor Trust Signals',
        desc: 'Per Baymard\u2019s research, 25% of shoppers have abandoned a purchase because they didn\u2019t trust the site with their card details. Missing reviews, no visible policies, stock-photo vibes, and an unfamiliar checkout all trigger the "is this legit?" reflex.',
      },
      {
        icon: <CreditCard className="text-amber-600" />,
        title: 'Slow, High-Friction Checkout',
        desc: 'Unexpected shipping costs revealed at the last step (48% of abandonments), forced account creation (26%), and long forms are the classic killers. Every extra field and surprise is measurable lost revenue.',
      },
      {
        icon: <Smartphone className="text-emerald-600" />,
        title: 'Mobile Experience Issues',
        desc: 'Most Shopify traffic is mobile, yet mobile converts at roughly half the desktop rate on typical stores. Tiny tap targets, intrusive pop-ups, slow pages, and desktop-first layouts squander your largest audience.',
      },
      {
        icon: <PackageX className="text-purple-600" />,
        title: 'Weak Product Pages',
        desc: 'One photo, a two-line manufacturer description, and no answers to obvious questions (sizing, shipping time, returns) forces shoppers to gamble. Shoppers don\u2019t gamble — they open a new tab and check Amazon.',
      },
    ],
  },
  guide: [
    {
      heading: 'What Shopify CRO Actually Is',
      accent: '(and Isn\u2019t)',
      paragraphs: [
        <>Conversion rate optimization is the practice of systematically increasing the percentage of visitors who buy, using evidence from your own store — analytics, heatmaps, session recordings, surveys, and controlled A/B tests. It is <em>not</em> a list of "17 CRO hacks" applied blindly. A trust badge that lifts one store\u2019s checkout can lower another\u2019s; the only way to know is to test on your traffic.</>,
        <>The math is why CRO is usually the highest-ROI investment available to an established store. If you convert at 1.5% and get 40,000 visits a month at an $80 average order, you make $48,000. Move conversion to 2.1% — a realistic outcome of a structured program — and the same traffic produces $67,200. No extra ad spend, permanently compounding on every future visitor.</>,
        <>This page covers <strong>Shopify-specific</strong> CRO: the levers, apps, and checkout mechanics unique to the platform. For our broader conversion methodology across platforms, see our <Link to="/cro" className="text-indigo-600 underline underline-offset-2">ecommerce CRO service</Link> — the two pair together.</>,
      ],
    },
    {
      heading: 'The Evidence Phase:',
      accent: 'Find the Leaks First',
      paragraphs: [
        <>Every engagement starts with two to three weeks of evidence gathering, because optimizing the wrong page is expensive theater. <strong>Quantitative first:</strong> GA4 funnel analysis shows exactly where visitors drop — landing → product view → add to cart → checkout → purchase. A store losing 80% between product view and add-to-cart has a product page problem; one losing them at shipping selection has a cost-transparency problem. They need completely different fixes.</>,
        <><strong>Then qualitative:</strong> heatmaps reveal what shoppers actually see and click (spoiler: they rarely scroll where you think), session recordings show real customers rage-tapping unlinked images or fighting your size selector, and one-question exit surveys ("What stopped you from ordering today?") produce brutally useful answers no analytics tool can.</>,
        <>From this evidence we build a prioritized hypothesis backlog. Each hypothesis is scored on expected impact, implementation effort, and strength of evidence — so the first tests are the ones most likely to pay for the entire program.</>,
      ],
    },
    {
      heading: 'The Highest-Leverage',
      accent: 'Shopify Levers',
      paragraphs: [
        <><strong>Product pages (PDP).</strong> This is where the buying decision happens. The proven stack: 5–8 images including scale/context shots, benefit-led copy above the fold, reviews with photos immediately visible, shipping and return answers on the page (not buried in a policy link), urgency only when it\u2019s true, and a sticky add-to-cart bar on mobile so the buy button never disappears while shoppers read.</>,
        <><strong>Checkout.</strong> On Shopify, show shipping costs before checkout (threshold banners like "Free shipping over $75" do double duty as AOV boosters), enable express payments — Shop Pay, Apple Pay, Google Pay — prominently, and never force account creation. Shopify\u2019s own data shows Shop Pay checkouts convert dramatically better than guest flows, because saved details remove nearly all friction. Plus merchants can go further with checkout extensibility — see our <Link to="/shopify-plus-development" className="text-indigo-600 underline underline-offset-2">Shopify Plus development service</Link>.</>,
        <><strong>AOV mechanics.</strong> Conversion rate isn\u2019t the only number that matters — revenue per visitor is. Bundles ("complete the look"), in-cart cross-sells, post-purchase upsells (offered after payment, so they can\u2019t hurt conversion), and free-shipping thresholds typically add 10–25% to average order value with zero risk to the core funnel.</>,
        <><strong>Speed.</strong> Every CRO gain is multiplied or divided by page speed — Google/Deloitte measured +8.4% retail conversions from just a 0.1s mobile improvement. If your store is slow, fix that first via our <Link to="/shopify-speed-optimization" className="text-indigo-600 underline underline-offset-2">Shopify speed optimization service</Link>; it\u2019s the cheapest conversion lift you\u2019ll ever buy.</>,
      ],
    },
    {
      heading: 'Testing:',
      accent: 'How to Know It Actually Worked',
      paragraphs: [
        <>Changes that "feel better" routinely lose in controlled tests — which is why we A/B test every meaningful change. Half your visitors see the original, half see the variant, and revenue per visitor decides. To test properly you need sufficient traffic (roughly 1,000+ conversions per month per test for reliable reads); below that threshold we use sequential testing and pre/post analysis with guardrails rather than pretending to statistical rigor we don\u2019t have.</>,
        <>Two rules keep tests honest: run them for full business cycles (at least two weeks, covering weekday/weekend behavior), and measure revenue per visitor, not just conversion rate — a change that lifts conversions 5% but drops AOV 10% is a loss dressed as a win.</>,
        <>Losing tests aren\u2019t failures; they\u2019re tuition. Every result — win or lose — teaches you something true about <em>your</em> customers that competitors guessing from blog posts don\u2019t know. Over a year, that compounds into a store built on evidence.</>,
      ],
    },
  ],
  method: {
    heading: 'How We Improve',
    accent: 'Shopify Conversions',
    sub: 'Every technique below is deployed based on what your store\u2019s evidence says — never as a blind checklist.',
    items: [
      { icon: <Flame className="text-orange-500" />, title: 'Heatmaps', desc: 'Click, scroll, and move maps on your key templates reveal what shoppers actually engage with — and what they never see.' },
      { icon: <Video className="text-indigo-600" />, title: 'Session Recordings', desc: 'Watch real customers navigate, hesitate, rage-click, and abandon — the fastest way to find UX friction analytics can\u2019t show.' },
      { icon: <FlaskConical className="text-purple-600" />, title: 'A/B Testing', desc: 'Controlled experiments on PDPs, collections, and offers, measured on revenue per visitor with proper statistical guardrails.' },
      { icon: <CreditCard className="text-emerald-600" />, title: 'Checkout Optimization', desc: 'Express payments, cost transparency, guest checkout, and field reduction targeting the 70.19% average abandonment rate.' },
      { icon: <LayoutTemplate className="text-blue-600" />, title: 'Product Page Redesign', desc: 'Conversion-focused PDP rebuilds: image galleries, benefit copy, objection handling, and social proof placement that sells.' },
      { icon: <BadgeCheck className="text-cyan-600" />, title: 'Trust & Social Proof', desc: 'Reviews with photos, guarantees, security cues, and policy clarity placed where hesitation actually happens.' },
      { icon: <ShoppingCart className="text-pink-600" />, title: 'Upsells, Cross-sells & Bundles', desc: 'In-cart and post-purchase offers plus "complete the look" bundles that raise AOV without touching conversion risk.' },
      { icon: <Layers className="text-amber-600" />, title: 'Sticky Add-to-Cart & Mobile UX', desc: 'Persistent buy bars, thumb-friendly targets, and mobile-first layouts for the majority of your traffic that shops on a phone.' },
    ],
  },
  beforeAfter: {
    heading: 'What a CRO Program Delivers',
    before: '1.5%',
    beforeLabel: 'Typical starting conversion rate',
    after: '2.1%+',
    afterLabel: 'After a structured program',
    note: 'Illustrative of a typical 4–6 month engagement: same traffic, same ad spend, ~40% more revenue. Our best documented client result is a 140%+ conversion rate increase following a full redesign and optimization program. Results vary by store, traffic quality, and starting point — anyone guaranteeing a specific number is guessing.',
  },
  checklist: {
    heading: 'Shopify CRO',
    accent: 'Self-Audit',
    intro: 'Score your store honestly against this list — each "no" is a testable revenue opportunity.',
    items: [
      'Shipping costs are visible before checkout (banner or PDP), not revealed at the last step',
      'Guest checkout is enabled; account creation is optional',
      'Shop Pay, Apple Pay, and Google Pay are active and prominent',
      'Mobile PDPs have a sticky add-to-cart bar',
      'Product pages show 5+ images including scale and context shots',
      'Reviews (with photos) appear above the fold or one scroll down',
      'Returns and delivery-time answers are on the product page itself',
      'Site search works, autocompletes, and handles typos',
      'Exit or post-purchase surveys are collecting "why/why not" answers',
      'You know your funnel drop-off rates at each step in GA4',
      'Every major change in the last 6 months was A/B tested, not just shipped',
      'Pages pass Core Web Vitals — speed multiplies every other fix',
    ],
  },
  testimonial: {
    quote: 'Our Shopify conversion rate increased by over 140% since the launch. If you\u2019re an e-commerce brand looking to scale, they are the absolute best choice.',
    author: 'Becca',
    role: 'Founder, Luxury Brand',
  },
  faqs: [
    {
      q: 'How long does Shopify CRO take to show results?',
      a: 'Expect the first meaningful results in 6–8 weeks: 2–3 weeks of evidence gathering (analytics, heatmaps, recordings), then the first A/B tests, each needing at least two full weeks to read reliably. CRO compounds from there — a 4–6 month program typically delivers the headline gains, and the testing culture keeps paying afterward.',
    },
    {
      q: 'Do you guarantee conversion results?',
      a: 'No honest CRO agency guarantees a specific number, because results depend on your traffic quality, product-market fit, and starting point. What we guarantee is process: rigorous evidence gathering, prioritized hypotheses, statistically sound tests, and transparent reporting of every result — including the losers. Our track record (like a documented 140% conversion increase) comes from that process.',
    },
    {
      q: 'Can CRO improve SEO?',
      a: 'Indirectly, yes. CRO improvements like faster pages, clearer content, better mobile UX, and stronger engagement signals (lower bounce, longer sessions) all align with what Google rewards. And the relationship runs both ways — SEO brings the traffic, CRO converts it, which is why we often run them together with our ecommerce SEO service.',
    },
    {
      q: 'What conversion rate is "good" for a Shopify store?',
      a: 'The average ecommerce conversion rate sits around 2.5–3%, with the top 20% of stores above 3.2% — but benchmarks vary hugely by industry, price point, and traffic source. Luxury goods at $500+ convert very differently from $20 impulse products. The only benchmark that matters is your own store, last quarter — and beating it.',
    },
    {
      q: 'How is this different from your /cro service?',
      a: 'Our ecommerce CRO service covers conversion methodology across any platform. This service is Shopify-native: Online Store 2.0 sections, Shopify checkout mechanics, Shop Pay optimization, Shopify Functions and app-stack decisions, and Plus checkout extensibility. If you\u2019re on Shopify, this is the deeper, platform-specific version.',
    },
    {
      q: 'Do I have enough traffic for A/B testing?',
      a: 'For classic A/B testing you want roughly 1,000+ monthly conversions on the page being tested. Below that, we don\u2019t pretend — we use sequential testing, pre/post analysis with guardrail metrics, and heavier reliance on qualitative evidence (recordings, surveys) to make confident decisions at lower traffic levels.',
    },
  ],
  related: [
    { to: '/shopify-speed-optimization', label: 'Shopify Speed Optimization', desc: 'Speed is the conversion multiplier — a 0.1s mobile improvement lifted retail conversions 8.4% in Google\u2019s research.' },
    { to: '/cro', label: 'Ecommerce CRO', desc: 'Our platform-agnostic conversion methodology — the strategic layer behind this Shopify-specific service.' },
    { to: '/shopify-theme-customization', label: 'Theme Customization', desc: 'When tests prove a redesign will win, our developers build the winning variant natively into your theme.' },
  ],
  sources: [
    { href: 'https://baymard.com/lists/cart-abandonment-rate', label: 'Baymard Institute — Cart Abandonment Statistics' },
    { href: 'https://www.thinkwithgoogle.com/intl/en-emea/marketing-strategies/app-and-mobile/milliseconds-make-millions/', label: 'Google/Deloitte — Milliseconds Make Millions' },
    { href: 'https://www.shopify.com/blog/shop-pay', label: 'Shopify — Shop Pay conversion research' },
  ],
};

export const ShopifyCROPage: React.FC = () => <PillarTemplate content={content} />;
