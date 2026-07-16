import type { ClientCaseStudy } from '../../components/case/CaseStudyTemplate';

export const clientCaseStudies: ClientCaseStudy[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'meows-cat-health',
    client: 'Meows Cat Health',
    liveUrl: 'https://meowscathealth.com/',
    industry: 'Pet Health & Supplements',
    platform: 'Shopify',
    metaTitle: 'Meows Cat Health: DTC Supplement Store Case Study | eCeez',
    metaDescription:
      'How we built Meows Cat Health — a conversion-focused Shopify DTC supplement store with subscriptions, review automation, and 100+ international markets.',
    badge: 'Shopify DTC · Supplements',
    h1Lead: 'Building a Conversion-First',
    h1Accent: 'DTC Supplement Store',
    subtitle:
      'Meows Cat Health sells vet-formulated feline nutrition direct to consumers. Supplements are a trust-first category — buyers need proof before they part with money for something they feed a pet. We built a Shopify storefront engineered around that reality: evidence above the fold, subscriptions at the core, and a checkout that works in over a hundred markets.',
    cardImage: 'https://meowscathealth.com/cdn/shop/t/14/assets/hero-cat.webp?v=3440726815307043551783404538',
    cardTags: ['Shopify', 'DTC / Subscriptions', 'CRO'],
    cardSummary:
      'A vet-formulated feline supplement brand built on Shopify with a conversion-focused custom theme, subscribe-and-save, review automation, and 100+ currency markets.',
    heroImage: {
      src: 'https://meowscathealth.com/cdn/shop/t/14/assets/hero-cat.webp?v=3440726815307043551783404538',
      alt: 'Meows Cat Health Shopify storefront hero — vet-formulated cat supplement product',
    },
    gallery: [
      {
        src: 'https://meowscathealth.com/cdn/shop/t/14/assets/pouch.webp?v=63172895715542841051783404538',
        alt: 'Meows M-1 Total Cat Health Formula product pouch on the Shopify product page',
        caption: 'Flagship M-1 product presentation with clinical dosing detail',
      },
      {
        src: 'https://meowscathealth.com/cdn/shop/t/14/assets/cat-drink.webp?v=60652638321195254121783404538',
        alt: 'Lifestyle imagery used across the Meows Cat Health Shopify store',
        caption: 'Lifestyle imagery supporting the trust-led narrative',
      },
    ],
    atAGlance: [
      { label: 'Platform', value: 'Shopify' },
      { label: 'Category', value: 'Pet supplements' },
      { label: 'Markets', value: '100+ currencies' },
      { label: 'Model', value: 'DTC + subscription' },
    ],
    challenge: [
      'Pet supplements are one of the hardest categories in ecommerce to sell cold. The buyer is spending real money on something they will feed a family member, and they cannot verify the claims themselves. Skepticism is the default state, and generic supplement-store templates do nothing to address it.',
      'On top of that, the economics only work with repeat purchase. A supplement bought once is a loss after acquisition costs; a supplement bought every month for two years is a business. The store needed to make subscribing the obvious, low-risk choice rather than a checkbox buried at checkout.',
      'Finally, the brand wanted to sell internationally from day one — which meant currency, pricing, and checkout had to work cleanly across dozens of markets without turning into an operational burden.',
    ],
    approach: [
      {
        title: 'Evidence above the fold',
        desc: 'Every element a skeptical buyer needs — vet formulation, third-party testing, ingredient doses, and the 90-day guarantee — surfaces early rather than hiding in tabs. The page answers objections in the order buyers actually raise them.',
      },
      {
        title: 'Concern-based merchandising',
        desc: 'Cat owners shop by problem, not product type. We structured the store around digestion, mobility, skin and coat, and calming — matching how customers search and think, and capturing that intent on landing pages.',
      },
      {
        title: 'Subscription as the default path',
        desc: 'Subscribe-and-save is presented as the primary option with a clear saving, not an upsell. Flexibility (cancel anytime) is stated at the decision point, because rigid subscriptions churn and flexible ones retain.',
      },
      {
        title: 'Review automation at scale',
        desc: 'Judge.me is wired into the post-purchase flow so social proof compounds automatically. Reviews with photos surface on product pages where hesitation peaks, not buried at the bottom of the page.',
      },
      {
        title: 'International from launch',
        desc: 'Shopify Markets configured for 100+ countries with local currency presentment, so an overseas buyer sees familiar pricing instead of an unexpected conversion at checkout.',
      },
      {
        title: 'Performance-budgeted build',
        desc: 'A lean custom theme with WebP imagery throughout and a disciplined app stack — because a supplement store that loads slowly loses the buyer before the evidence ever renders.',
      },
    ],
    delivered: [
      'Custom conversion-focused Shopify theme built on Online Store 2.0 sections',
      'Concern-based collection architecture (digestion, mobility, coat, calming)',
      'Flagship product page with clinical ingredient dosing and dual-format proof',
      'Subscribe-and-save subscription flow with flexible cancellation',
      'Judge.me review automation with photo reviews surfaced on product pages',
      'Track123 order-tracking integration to cut "where is my order" support load',
      'Shopify Markets configuration across 100+ countries and currencies',
      'Long-form conversion landing page ("5 Reasons") for paid-traffic campaigns',
      'WebP image pipeline and performance-budgeted app stack',
      'Vet-authority and guarantee modules to address category skepticism',
    ],
    outcome: [
      'The store now runs as a complete DTC system rather than a catalogue: paid traffic lands on purpose-built pages, the product page carries the evidence load, subscriptions convert one-time buyers into recurring revenue, and review automation compounds social proof without manual work.',
      'The international configuration means the same storefront serves buyers across more than a hundred markets in their own currency, and the order-tracking integration removes the most common support ticket a supplement brand receives.',
      'Structurally, the trust architecture is the point. Everything a hesitant cat owner needs — formulation credibility, third-party testing, dosing transparency, a real guarantee, and reviews from people with the same worry — is placed exactly where the doubt occurs.',
    ],
    stack: ['Shopify', 'Online Store 2.0', 'Liquid', 'Shopify Markets', 'Judge.me', 'Track123', 'Subscriptions', 'WebP imagery'],
    serviceLink: {
      to: '/shopify-cro',
      label: 'Explore Shopify CRO',
      desc: 'This build is conversion engineering applied to a trust-first category — the same discipline we bring to every CRO project.',
    },
    faqs: [
      {
        q: 'What made this supplement store different from a standard Shopify build?',
        a: 'The trust architecture. Supplements are bought by skeptical customers spending money on something they cannot verify, so the entire page order is built around answering objections — vet formulation, third-party testing, clinical dosing, and a real guarantee surface before the buy button rather than behind it. A standard template presents products; this build presents evidence.',
      },
      {
        q: 'Why prioritise subscriptions so heavily?',
        a: 'Because the unit economics demand it. A supplement bought once rarely covers its acquisition cost, while the same customer subscribing for a year or more is where the profit lives. We presented subscribe-and-save as the primary path with a clear saving and explicit flexibility, since rigid subscriptions churn fast and flexible ones retain.',
      },
      {
        q: 'How does selling in 100+ currencies work?',
        a: 'Shopify Markets handles currency presentment and regional pricing, so an international buyer sees familiar local pricing throughout rather than a surprise conversion at checkout. Since unexpected costs at checkout are the single biggest driver of cart abandonment, presenting the right currency early directly protects conversion.',
      },
      {
        q: 'Why concern-based navigation instead of product categories?',
        a: 'Because cat owners search for problems, not product types. Someone worries about hairballs or stiff joints — they are not shopping for "a supplement." Structuring collections around digestion, mobility, coat, and calming matches real search intent, which converts better and captures informational search traffic that category pages never would.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'wrestlingmart',
    client: 'WrestlingMart',
    liveUrl: 'https://www.wrestlingmart.com/',
    industry: 'Sports Equipment & Apparel',
    platform: 'Shopify',
    metaTitle: 'WrestlingMart: Large-Catalog Shopify Case Study | eCeez',
    metaDescription:
      'How we built WrestlingMart — a large-catalog Shopify store with brand-and-age mega navigation, custom team gear configurators, and 1,100+ reviews.',
    badge: 'Shopify · Large Catalog Retail',
    h1Lead: 'Taming a Large Catalog for',
    h1Accent: 'Specialist Sports Retail',
    subtitle:
      'WrestlingMart is a specialist retailer carrying multiple major brands across adult and youth sizing, plus a full custom team-gear operation. The hard problem was not selling products — it was making thousands of variants findable in a few taps, while serving two very different buyers: an individual wrestler and a coach ordering for an entire team.',
    cardImage: 'https://www.wrestlingmart.com/cdn/shop/files/NIKE_Inflict_4-600-Pink_Pink-HR.jpg?v=1783467803&width=800',
    cardTags: ['Shopify', 'Large Catalog', 'B2B / Custom Orders'],
    cardSummary:
      'A specialist wrestling retailer on Shopify with brand-by-age mega navigation, custom team gear configurators, and review automation across 1,100+ reviews.',
    heroImage: {
      src: 'https://www.wrestlingmart.com/cdn/shop/files/NIKE_Inflict_4-600-Pink_Pink-HR.jpg?v=1783467803&width=1400',
      alt: 'WrestlingMart Shopify storefront — wrestling shoes product photography',
    },
    gallery: [
      {
        src: 'https://www.wrestlingmart.com/cdn/shop/files/Custom_Headgear_Black_and_Red.png?v=1758051194&width=800',
        alt: 'WrestlingMart custom team headgear configurator product',
        caption: 'Custom team gear — a B2B flow inside a DTC storefront',
      },
      {
        src: 'https://www.wrestlingmart.com/cdn/shop/files/MM_EDGE_SINGLET_HERO_black_1.jpg?v=1762380988&width=800',
        alt: 'WrestlingMart singlet product photography on the Shopify store',
        caption: 'Consistent product presentation across a deep catalog',
      },
    ],
    atAGlance: [
      { label: 'Platform', value: 'Shopify' },
      { label: 'Category', value: 'Specialist sports' },
      { label: 'Reviews', value: '1,100+ collected' },
      { label: 'Model', value: 'DTC + custom team' },
    ],
    challenge: [
      'A specialist retailer with real catalog depth faces a navigation problem most stores never encounter. WrestlingMart carries shoes, headgear, singlets, knee pads, bags, hygiene, apparel, and coaching supplies — each split across multiple major brands, and each brand split again across adult and youth sizing. A conventional dropdown menu collapses under that structure.',
      'The store also serves two fundamentally different buyers through one storefront. A parent buying their kid their first pair of shoes needs guidance and a starter path. A coach ordering custom sublimated singlets for thirty athletes needs a configurator, artwork handling, and a quote process. Those journeys have almost nothing in common.',
      'Underneath both sits an inventory reality: closeouts, seasonal stock, and brand partnerships all shifting constantly, which the navigation and merchandising had to absorb without becoming stale.',
    ],
    approach: [
      {
        title: 'Brand-by-age mega navigation',
        desc: 'A visual mega menu that resolves the two-axis problem — brand (Nike, ASICS, Adidas, Cliff Keen, MatMan, ScrapLife) crossed with adult versus youth — in a couple of taps, with product imagery inside the menu so shoppers recognise what they want.',
      },
      {
        title: 'A separate custom team lane',
        desc: 'Custom team gear runs as its own architecture — gear packs, sublimated singlets, headgear, warm-ups, bags — so coaches follow a purpose-built path instead of being funnelled through a retail flow built for individuals.',
      },
      {
        title: 'A "new wrestler" entry point',
        desc: 'A dedicated starter-gear collection paired with an educational essentials guide, because the highest-anxiety buyer in this category is a parent who does not know what their child needs and will otherwise leave to research elsewhere.',
      },
      {
        title: 'Review automation at volume',
        desc: 'Judge.me wired into the post-purchase flow, accumulating over 1,100 reviews that surface on product pages — decisive in a category where fit and durability are the buying questions.',
      },
      {
        title: 'Merchandising for churn',
        desc: 'Closeout and clearance built as first-class collections rather than afterthoughts, so shifting inventory has a permanent home and seasonal stock moves without manual restructuring.',
      },
      {
        title: 'Conversion mechanics',
        desc: 'A free-shipping threshold at $50 to lift average order value, visible phone support for a category full of sizing questions, and a cart drawer that keeps shoppers in flow rather than bouncing them to a cart page.',
      },
    ],
    delivered: [
      'Multi-level visual mega menu resolving brand × adult/youth across the full catalog',
      'Dedicated custom team gear architecture with configurable products',
      'Custom sublimated singlet, headgear, compression, and warm-up product flows',
      'New-wrestler starter collection with supporting educational guide page',
      'Judge.me review automation surfacing product reviews at scale',
      'Closeout and clearance collections structured for constant inventory churn',
      'Free-shipping threshold and cart drawer to raise average order value',
      'Brand partnership merchandising (Nike, ASICS, Adidas, Cliff Keen, MatMan)',
      'Team and organisation gear programmes (CA USA Wrestling)',
      'Coaching supplies category covering mats, tape, cleaning, and tournament gear',
    ],
    outcome: [
      'The catalog is navigable. A shopper who knows they want youth ASICS shoes reaches them in two taps; a shopper who knows nothing gets a starter path built for them. That is the entire game in specialist retail, and it is where most large-catalog stores quietly lose their traffic.',
      'The custom team operation runs as a genuine second business inside the same storefront — coaches configure and order team gear through a flow designed for them, without the retail experience getting in the way of either audience.',
      'Over 1,100 collected reviews now do the persuasion work on product pages, and the closeout architecture means shifting inventory always has somewhere to live. The store absorbs constant catalog change without needing to be rebuilt around it.',
    ],
    stack: ['Shopify', 'Online Store 2.0', 'Liquid', 'Mega navigation', 'Judge.me', 'Custom product options', 'Cart drawer'],
    serviceLink: {
      to: '/shopify-web-development',
      label: 'Explore Shopify Development',
      desc: 'Large-catalog architecture, mega navigation, and custom product configurators are core Shopify development work — this is what that discipline looks like at scale.',
    },
    faqs: [
      {
        q: 'What is the hardest part of building a large-catalog Shopify store?',
        a: 'Navigation and findability. When a catalog splits across categories, brands, and age ranges simultaneously, a standard dropdown collapses and shoppers give up. The solution is a mega menu that resolves multiple axes at once with product imagery for recognition, plus filtering built on real product attributes rather than the theme defaults.',
      },
      {
        q: 'How do you serve both individual shoppers and team buyers in one store?',
        a: 'By building them separate lanes. Individual retail buyers and coaches ordering for thirty athletes have almost nothing in common — different products, different decision process, different artwork and quoting needs. We built custom team gear as its own architecture alongside the retail flow, so neither audience is forced through a journey designed for the other.',
      },
      {
        q: 'Why build a dedicated section for beginners?',
        a: 'Because the beginner is the highest-anxiety, highest-risk-of-leaving buyer in specialist retail. A parent buying a first pair of wrestling shoes does not know what their child needs, and if the store does not tell them, they leave to research and often buy elsewhere. A starter collection plus an educational guide captures that buyer at the moment of uncertainty.',
      },
      {
        q: 'Do product reviews matter in sports equipment?',
        a: 'Enormously — they are often decisive. Fit, durability, and sizing are the buying questions, and no product description answers them as credibly as a wrestler or parent who already owns the item. Automating review collection post-purchase means the social proof compounds without ongoing manual effort.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'aoap-projects',
    client: 'AOAP Projects',
    liveUrl: 'https://aoapprojects.com/',
    industry: 'Contemporary Art & Charity',
    platform: 'Shopify',
    metaTitle: 'AOAP Projects: Art Gallery Shopify Case Study | eCeez',
    metaDescription:
      'How we built AOAP Projects — a contemporary art Shopify store handling 288-work exhibitions, artist editorial, and charitable partnerships with the RSA.',
    badge: 'Shopify · Art & Editorial',
    h1Lead: 'Selling Original Art Online for a',
    h1Accent: 'Charitable Art Platform',
    subtitle:
      'AOAP Projects (formerly Art on a Postcard) connects artists, collectors and charitable causes. Selling original one-of-one artworks breaks most ecommerce assumptions — there is no restocking, no variants, and the "product" is an artist and a story. We built a Shopify platform that handles exhibition drops, deep editorial, and framing, all at once.',
    cardImage: 'https://aoapprojects.com/cdn/shop/files/IMG_06377_1.jpg?v=1733941378&width=800',
    cardTags: ['Shopify', 'Editorial / Content', 'Exhibition Drops'],
    cardSummary:
      'A contemporary art platform on Shopify handling 288-work exhibition drops, artist editorial and interviews, framing options, and charitable partnerships.',
    heroImage: {
      src: 'https://aoapprojects.com/cdn/shop/files/IMG_06377_1.jpg?v=1733941378&width=1400',
      alt: 'AOAP Projects Shopify storefront — contemporary original artworks collection',
    },
    atAGlance: [
      { label: 'Platform', value: 'Shopify' },
      { label: 'Category', value: 'Original art' },
      { label: 'Exhibition', value: '288 works' },
      { label: 'Model', value: 'Drops + charity' },
    ],
    challenge: [
      'Original art breaks the rules ecommerce is built on. Every work is a single unit — once it sells, it is gone forever, with no restock and no variants. A conventional product architecture assumes the opposite, so inventory, merchandising, and even the sold-out experience all need rethinking.',
      'The organisation also runs exhibitions as drops. A launch like Illuminated puts 288 individual original works live at once, all needing artist attribution, correct pricing, and a collection experience that stays browsable rather than becoming an overwhelming grid of unfamiliar names.',
      'Layered on top is a genuine editorial operation — artist interviews, short films, a podcast, press, and past auctions — plus charitable partnerships, including a collaboration with the Royal Society of Arts. The site had to function as a gallery, a magazine, and a shop simultaneously, without any of the three undermining the others.',
    ],
    approach: [
      {
        title: 'Architecture for one-of-one works',
        desc: 'Product structure built for single-unit originals where selling out is permanent and expected, rather than an inventory error state — with artist attribution treated as first-class product data rather than an afterthought in the description.',
      },
      {
        title: 'Exhibition drops as collections',
        desc: 'A 288-work exhibition launches as a curated, browsable collection instead of an undifferentiated grid, so collectors can navigate an unfamiliar roster of artists without being overwhelmed at the moment of interest.',
      },
      {
        title: 'Editorial as a discovery engine',
        desc: 'Artist interviews, short films, podcast episodes, news and press run as structured Shopify blogs that feed the shop — because in art, the story is the product, and editorial content also captures search traffic that collection pages never would.',
      },
      {
        title: 'Accessible price laddering',
        desc: 'Originals from £55 alongside hand-signed prints, boxsets, postcards, and a gifts-under-£150 collection, creating an entry point for first-time buyers who find traditional galleries intimidating.',
      },
      {
        title: 'Framing as an attach product',
        desc: 'Tray frames and framing options merchandised as complementary purchases, raising average order value while solving a real problem for a buyer who has just bought an unframed original.',
      },
      {
        title: 'Cart drawer with free-ship progress',
        desc: 'A live free-shipping progress indicator in the cart drawer that lifts average order value while removing the delivery-cost surprise that drives abandonment at checkout.',
      },
    ],
    delivered: [
      'Shopify architecture designed for single-unit original artworks',
      'Exhibition drop collections at scale (288 works in the RSA Illuminated launch)',
      'Artist directory with attribution wired through product data',
      'Multi-blog editorial system: interviews, short films, podcast, news, press, past auctions',
      'Price-laddered merchandising from £55 originals through prints, boxsets and postcards',
      'Framing and tray-frame attach products to raise average order value',
      'Cart drawer with live free-shipping progress indicator',
      'Discount code campaigns for boxset bundles',
      'GBP market configuration with regional presentment',
      'First-time-buyer educational content ("How to Buy Affordable Original Art")',
    ],
    outcome: [
      'The platform now does three jobs at once without compromise. It sells one-of-one originals with an architecture that treats permanent sell-out as normal rather than broken; it launches 288-work exhibitions as browsable curated experiences; and it runs a full editorial operation that feeds discovery instead of sitting in a neglected blog tab.',
      'The price ladder is quietly the most important commercial decision. Originals from £55, prints, boxsets and gifts under £150 give a first-time buyer a way in — which matters enormously for an organisation whose mission is making original art accessible and whose sales support charitable causes.',
      'The editorial engine compounds. Artist interviews and buyer guides attract collectors researching before they purchase, and that content is exactly what search engines and AI answer engines cite — turning the mission-driven content into a discovery channel rather than a cost centre.',
    ],
    stack: ['Shopify', 'Online Store 2.0', 'Liquid', 'Shopify Blogs', 'Cart drawer', 'Discount campaigns', 'Shopify Markets'],
    serviceLink: {
      to: '/shopify-theme-customization',
      label: 'Explore Theme Customization',
      desc: 'Editorial-plus-commerce platforms need custom sections and content architecture the theme editor alone cannot deliver — that is exactly what theme customization is for.',
    },
    faqs: [
      {
        q: 'How is selling original art different from normal ecommerce?',
        a: 'Every work is a single unit that is gone permanently once sold — no restock, no variants, no reorder. Standard product architecture assumes the opposite, so selling out has to be a normal, well-designed state rather than an inventory error. Artist attribution also becomes first-class product data, because in art the artist is a core part of what the collector is buying.',
      },
      {
        q: 'How do you launch an exhibition of 288 artworks at once?',
        a: 'As a curated, browsable collection rather than an undifferentiated grid. When a collector faces 288 unfamiliar artists simultaneously, an unstructured wall of thumbnails causes paralysis. The collection experience has to support discovery and navigation, and the underlying product data has to carry artist attribution and pricing consistently across every single work.',
      },
      {
        q: 'Why does editorial content matter for an art store?',
        a: 'Because in art, the story is the product. Collectors buy artists and narratives, not just objects, so interviews, films and podcasts directly support sales rather than being marketing overhead. That content also captures search traffic that collection pages never could, and it is exactly the kind of substantive material search engines and AI answer engines cite.',
      },
      {
        q: 'What role does the price ladder play?',
        a: 'It removes the intimidation barrier. Traditional galleries feel unwelcoming and rarely list prices, so a first-time buyer has no safe way in. Offering originals from £55 alongside prints, boxsets and gifts under £150 gives newcomers an accessible entry point — which is both a commercial decision and a direct expression of the organisation\u2019s accessibility mission.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'east-and-south-interiors',
    client: 'East and South Interiors',
    liveUrl: 'https://eastandsouthinteriors.com/',
    industry: 'Furniture & Home Decor',
    platform: 'Shopify',
    metaTitle: 'East & South Interiors: Furniture Shopify Case Study | eCeez',
    metaDescription:
      'How we built East and South Interiors — a Shopify furniture and home decor store bridging an online catalog with a physical showroom and appointment sales.',
    badge: 'Shopify · Furniture & Showroom',
    h1Lead: 'Bridging Showroom and Storefront for',
    h1Accent: 'Luxury Home Decor',
    subtitle:
      'East and South Interiors sells luxury furniture, lighting, mirrors and decor from a Pennsylvania showroom. Their business is not pure ecommerce — it is a hybrid where the website drives discovery and inspiration, and the sale often completes in person or by appointment. We built a Shopify store designed for exactly that reality, rather than fighting it.',
    cardImage: 'https://eastandsouthinteriors.com/cdn/shop/files/IMG_2683_b.jpg?v=1743431543&width=800',
    cardTags: ['Shopify', 'Furniture', 'Showroom Hybrid'],
    cardSummary:
      'A luxury furniture and home decor Shopify store built around a showroom-hybrid model — deep category taxonomy, special orders, and appointment-driven sales.',
    heroImage: {
      src: 'https://eastandsouthinteriors.com/cdn/shop/files/IMG_2683_b.jpg?v=1743431543&width=1500',
      alt: 'East and South Interiors Shopify storefront — luxury furniture and home decor showroom',
    },
    gallery: [
      {
        src: 'https://eastandsouthinteriors.com/cdn/shop/files/IMG_2676_a.jpg?v=1743432909&width=800',
        alt: 'East and South Interiors curated furniture pieces on the Shopify store',
        caption: 'Curated showroom pieces presented online for discovery',
      },
      {
        src: 'https://eastandsouthinteriors.com/cdn/shop/files/5E662B31-237E-45FA-835E-6911657EFBA4.jpg?v=1774024851&width=800',
        alt: 'Organic wall mirror product photography on the East and South Interiors store',
        caption: 'Product presentation across a deep home-decor taxonomy',
      },
    ],
    atAGlance: [
      { label: 'Platform', value: 'Shopify' },
      { label: 'Category', value: 'Furniture & decor' },
      { label: 'Model', value: 'Showroom hybrid' },
      { label: 'Location', value: 'Export, PA' },
    ],
    challenge: [
      'Most Shopify advice assumes the checkout is the finish line. For a furniture retailer with a physical showroom, that assumption is simply wrong. Large pieces are bought after being seen, touched, and measured, and much of the business completes in person, by phone, or by appointment — not with an add-to-cart.',
      'That creates a design problem, not just a technical one. The website has to earn its place by driving discovery and inspiration and getting people into the showroom, while still presenting a deep, constantly rotating inventory of one-off and special-order pieces across furniture, lighting, mirrors, rugs, art, and mattresses.',
      'The business also runs on sale events and appointments promoted through social channels, which meant the site needed to communicate constantly changing dates and availability without a developer touching it each time.',
    ],
    approach: [
      {
        title: 'Designed for the real sales path',
        desc: 'The site is built to drive showroom visits and appointment requests rather than forcing every transaction through checkout — because for large furniture pieces, that is genuinely how the sale completes.',
      },
      {
        title: 'Deep, shoppable taxonomy',
        desc: 'A full category architecture — sofas, coffee tables, dining, sideboards, accent chairs, mirrors, rugs, lighting, art, pillows, mattresses — so browsers can navigate a broad catalog the way an interior shopper actually thinks.',
      },
      {
        title: 'Special order as a product',
        desc: 'A dedicated special-order path, because in furniture a large share of revenue is pieces that do not exist in stock yet — a flow standard ecommerce templates have no answer for.',
      },
      {
        title: 'Merchant-controlled campaigns',
        desc: 'Announcement bars and sale-event messaging the team updates themselves, so constantly changing sale dates and new markdowns never require a developer.',
      },
      {
        title: 'Curated merchandising',
        desc: 'Personality-led collections such as "Gina\u2019s Favorites" that carry the showroom\u2019s human curation onto the website, which is precisely what differentiates an independent retailer from a faceless furniture warehouse.',
      },
      {
        title: 'Appointment and local conversion',
        desc: 'Request-an-appointment flows, prominent showroom address and phone, and social integration — because the conversion that matters here is a visit, and the site is measured on producing them.',
      },
    ],
    delivered: [
      'Shopify storefront architected around a showroom-hybrid sales model',
      'Deep furniture and decor category taxonomy across 12+ collection groups',
      'Special order request flow for made-to-order and non-stock pieces',
      'Request-an-appointment conversion path for showroom visits',
      'Merchant-editable announcement bar for rotating sale events and markdowns',
      'Curated personality-led collections ("Gina\u2019s Favorites") and seasonal collections',
      'Mattress and lifestyle landing pages outside the standard product structure',
      'Email capture for new arrivals and exclusive offers',
      'Instagram and Facebook integration reflecting the social-first sale cadence',
      'Local business presentation with showroom address, hours, and contact',
    ],
    outcome: [
      'The website now works with the business model instead of against it. Rather than pretending a $3,000 sofa is an impulse add-to-cart, it does the job it is actually best at — inspiring, informing, and getting qualified people into the showroom or onto an appointment.',
      'The team controls their own campaigns. Sale dates, markdowns, and new arrivals change constantly and are promoted through social channels, and the announcement and collection structure means none of that requires a developer.',
      'The curation carries through. An independent showroom competes with warehouse retailers on taste and personal service, not price or scale, so keeping that human curation visible online — right down to a collection of the owner\u2019s own favourites — is a commercial asset, not a decoration.',
    ],
    stack: ['Shopify', 'Online Store 2.0', 'Liquid', 'Collection taxonomy', 'Announcement campaigns', 'Appointment flows'],
    serviceLink: {
      to: '/shopify-web-development',
      label: 'Explore Shopify Development',
      desc: 'Hybrid showroom-and-online retail needs an architecture built around the real sales path — that is Shopify development applied to how a business actually operates.',
    },
    faqs: [
      {
        q: 'Why not build a standard ecommerce checkout flow for furniture?',
        a: 'Because that is not how furniture is bought. Large pieces are purchased after being seen, touched and measured, and much of the revenue completes in the showroom, by phone, or by appointment. Forcing every sale through checkout would fight the business model. The site is instead built to drive discovery and get qualified buyers into the showroom, which is the conversion that actually matters here.',
      },
      {
        q: 'How do you handle constantly changing inventory and sale events?',
        a: 'By giving the merchant control. Sale dates, markdowns and new arrivals change constantly and are promoted through social channels, so we built announcement bars and collection structures the team updates themselves. Anything that would otherwise require a developer for a routine content change is built wrong.',
      },
      {
        q: 'What is a special order flow and why does furniture need one?',
        a: 'A significant share of furniture revenue comes from pieces that are not in stock — made-to-order items configured for a customer\u2019s space, fabric, or finish. Standard ecommerce templates have no concept of this, so it needs a dedicated request path. Without one, the retailer either loses those sales or handles them entirely off-site.',
      },
      {
        q: 'How does an independent showroom compete with large furniture retailers online?',
        a: 'On taste and personal service rather than price or scale. That means keeping the human curation visible — personality-led collections, an owner\u2019s favourites, and a genuine point of view — instead of presenting an anonymous catalog. Combined with appointment-based service, it is a differentiator large warehouse retailers structurally cannot copy.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'nishiyama-ramen',
    client: 'Sapporo Nishiyama Europe GmbH',
    liveUrl: 'https://nishiyama-ramen.com/',
    industry: 'B2B Food Manufacturing',
    platform: 'Custom static site',
    metaTitle: 'Nishiyama Ramen: B2B Bilingual Website Case Study | eCeez',
    metaDescription:
      'How we built the European site for Sapporo Nishiyama — a bilingual JA/EN B2B lead-generation website for a 70-year-old Japanese ramen noodle manufacturer.',
    badge: 'B2B · Bilingual Corporate',
    h1Lead: 'A Bilingual B2B Site for a',
    h1Accent: '70-Year-Old Japanese Manufacturer',
    subtitle:
      'Sapporo Nishiyama has made ramen noodles for seventy years and supplies over 3,000 ramen shops in Japan. Expanding into Europe meant a completely different brief from an ecommerce build: no cart, no checkout — a bilingual credibility and lead-generation site whose single job is convincing European restaurateurs to request a free noodle sample.',
    cardImage: 'https://nishiyama-ramen.com/assets/images/home/kv.png',
    cardTags: ['Custom Build', 'B2B Lead Gen', 'Bilingual JA/EN'],
    cardSummary:
      'A bilingual Japanese/English B2B lead-generation site for a 70-year-old Sapporo ramen noodle manufacturer expanding into the European restaurant market.',
    heroImage: {
      src: 'https://nishiyama-ramen.com/assets/images/home/kv.png',
      alt: 'Sapporo Nishiyama Europe website hero — authentic Japanese ramen noodles',
    },
    gallery: [
      {
        src: 'https://nishiyama-ramen.com/assets/images/home/quality-1.jpg',
        alt: 'Nishiyama noodle production — flour blending and Hokkaido groundwater',
        caption: 'Craft storytelling: 60 flour types and Hokkaido snowmelt water',
      },
      {
        src: 'https://nishiyama-ramen.com/assets/images/home/quality-2.jpg',
        alt: 'Nishiyama noodle factory and noodle masters at work',
        caption: 'Manufacturing credibility told through scroll-driven narrative',
      },
    ],
    atAGlance: [
      { label: 'Type', value: 'B2B corporate' },
      { label: 'Languages', value: 'Japanese / English' },
      { label: 'Heritage', value: '70 years' },
      { label: 'Goal', value: 'Sample requests' },
    ],
    challenge: [
      'This project had no cart, no products, and no checkout — which made it harder, not easier. The entire site exists to convert a specific, sceptical audience: a European restaurateur deciding whether to trust a Japanese noodle supplier they have never heard of with a core ingredient on their menu.',
      'The company\u2019s credibility is enormous in Japan — seventy years of history, over 3,000 ramen shops served, one of the highest concentrations of certified noodle masters, FSSC 22000 food-safety qualification — and almost entirely unknown in Europe. All of that authority had to be translated, literally and culturally, for an audience with no prior context.',
      'It also had to work in both Japanese and English, serving the parent company and the European market with equal fluency, while carrying craft storytelling that a generic corporate template would flatten into nothing.',
    ],
    approach: [
      {
        title: 'One conversion goal, relentlessly',
        desc: 'Every section drives toward a single action: requesting free noodle samples. With no cart to optimise, the entire information architecture exists to build enough trust for a restaurateur to raise their hand.',
      },
      {
        title: 'Craft as the credibility engine',
        desc: 'Scroll-driven storytelling covering the 60 flour blends, Hokkaido snowmelt groundwater drawn from 200m, certified noodle masters, and FSSC 22000 — because in B2B food supply, provenance and process are the product.',
      },
      {
        title: 'True bilingual architecture',
        desc: 'Japanese and English built as first-class parallel experiences rather than a bolt-on translation layer, serving both the parent company and the European market without either feeling secondary.',
      },
      {
        title: 'Proof over adjectives',
        desc: 'Concrete, verifiable facts — 70 years, 3,000+ ramen shops, 45 years of frozen export experience — instead of marketing language, because a sceptical B2B buyer discounts adjectives and weighs evidence.',
      },
      {
        title: 'Static build for speed',
        desc: 'A lightweight static architecture rather than a heavy CMS, because the site is a credibility instrument that must load instantly for an international audience on any connection. No ecommerce weight it does not need.',
      },
      {
        title: 'De-risking the first step',
        desc: 'Free samples plus free recipe development and cooking training, presented prominently — removing the cost and risk from the first move so a curious restaurateur has no reason not to make it.',
      },
    ],
    delivered: [
      'Custom bilingual (Japanese / English) B2B website architecture',
      'Scroll-driven craft and provenance storytelling across materials, manufacture and export',
      'Company and 70-year history sections translating Japanese authority for a European audience',
      'Sample-request lead generation as the site\u2019s single conversion goal',
      'Credibility framing around FSSC 22000 certification and noodle master craftsmanship',
      'Frozen-export capability narrative (45 years of cold-chain experience)',
      'Consulting and recipe-development offer presented as a risk-reducer',
      'Lightweight static build optimised for fast international loading',
      'Full Open Graph and social metadata for both language versions',
      'Corporate site and social channel integration',
    ],
    outcome: [
      'The site does one job and does it deliberately. A European restaurateur arrives knowing nothing about a seventy-year-old Sapporo institution and leaves with enough evidence — provenance, process, certification, export track record — to request samples. That single conversion is the entire brief, and every section serves it.',
      'The bilingual architecture means the same asset serves the Japanese parent company and the European expansion without either audience getting a second-class experience — an outcome that translation bolted onto a monolingual site never achieves.',
      'The strategic decision was refusing to make it a generic corporate brochure. In B2B food supply, craft and provenance are the product, so the storytelling — 60 flour blends, snowmelt water from 200 metres down, certified noodle masters — is not decoration. It is the argument.',
    ],
    stack: ['Custom static build', 'Bilingual JA/EN', 'Scroll storytelling', 'Lead-gen forms', 'Performance-first architecture'],
    serviceLink: {
      to: '/website-development-for-businesses',
      label: 'Explore Website Development',
      desc: 'Not every business needs a store. B2B credibility and lead-generation sites are a distinct discipline — this is what that looks like done properly.',
    },
    faqs: [
      {
        q: 'Why build a static site instead of Shopify or WordPress?',
        a: 'Because the requirements demanded it. There is no cart, no checkout, and no frequently changing catalog — the site is a credibility instrument that must load instantly for an international audience. A static build delivers exactly that with none of the weight an ecommerce platform or heavy CMS would add for features this project genuinely does not need.',
      },
      {
        q: 'What makes a B2B site different from an ecommerce site?',
        a: 'The conversion is a relationship, not a transaction. Nobody impulse-buys a wholesale noodle supply contract, so the site\u2019s job is building enough trust for a qualified buyer to start a conversation. Every element serves one goal — in this case a free sample request — rather than optimising an add-to-cart that does not exist.',
      },
      {
        q: 'How do you handle a genuinely bilingual site?',
        a: 'By treating both languages as first-class from the architecture up, not bolting a translation layer onto a monolingual build. Japanese and English each need to feel native, with correct metadata and structure for both. Here that also served two distinct audiences — the Japanese parent company and the European market — without either feeling secondary.',
      },
      {
        q: 'Why lead so heavily with craft and heritage?',
        a: 'Because in B2B food supply, provenance and process are the product. A restaurateur choosing a noodle supplier is making a menu-defining decision, and specifics — 60 flour blends, Hokkaido snowmelt groundwater, certified noodle masters, FSSC 22000, 45 years of frozen export — are verifiable evidence. Sceptical B2B buyers discount adjectives and weigh facts, so we led with facts.',
      },
    ],
  },
];

export const getCaseStudy = (slug?: string) =>
  clientCaseStudies.find((c) => c.slug === slug);
