
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, TrendingUp, Users, Target, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: "AUREX: High-End Winter Fashion Store",
    category: "Luxury Fashion",
    description: "A bold, editorial Shopify storefront for AUREX, a premium winter apparel brand. The project focused on high-impact typography, immersive product storytelling, and a seamless mobile-first shopping experience. We implemented custom product filtering, high-fidelity video integration, and a performance-optimized checkout to handle high-volume seasonal traffic.",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fm=webp&fit=crop&q=75&w=800",
    tags: ["Fashion UI", "Shopify Plus", "Performance"],
    link: "/case-studies/aurex",
    results: ["145% Increase in Mobile Conversions", "32% Reduction in Bounce Rate", "4.2s Average Page Load Time"]
  },
  {
    title: "Shopify Product Page Design For Clothing Store",
    category: "Ecommerce Development",
    description: "Designed and optimized a high-converting Shopify product page for a clothing store. The page includes a clean, modern layout with a well-structured product description focused on clarity, branding, and SEO best practices. Improved product presentation through clear feature highlights, engaging copy, and a user-friendly structure to enhance customer experience and conversions.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fm=webp&fit=crop&q=75&w=800",
    tags: ["Shopify", "UX/UI", "SEO Optimization"],
    link: "/case-studies/clothing-store",
    results: ["88% Increase in Add-to-Cart Rate", "25% Higher Average Order Value", "Top 3 Ranking for Primary Keywords"]
  },
  {
    title: "Shopify Product Page & Store Design for Jewelry",
    category: "Luxury Jewelry",
    description: "Designed a clean, modern Shopify product page and store layout focused on visual appeal, user experience, and conversions. The project involved structuring product sections, optimizing product descriptions, and presenting products in a professional, brand-consistent way. Special attention was given to layout hierarchy, clarity, and SEO-friendly content to improve engagement and product visibility.",
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fm=webp&fit=crop&q=75&w=800",
    tags: ["Jewelry Design", "E-commerce", "Visual Appeal"],
    link: "/case-studies/jewelry-store",
    results: ["210% Growth in Organic Traffic", "15% Improvement in Customer Retention", "Seamless Multi-Currency Integration"]
  },
  {
    title: "Barber Website Design",
    category: "Local Business Service",
    description: "Shortcut: Your Mobile Barber Shop. A complete digital identity including service listings, booking prompts, and a high-performance landing page designed for conversion and local brand loyalty.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fm=webp&fit=crop&q=75&w=800",
    tags: ["Service Design", "Booking Systems", "Local SEO"],
    link: "/case-studies/barber",
    results: ["500+ Monthly Online Bookings", "1st Page Ranking for 'Mobile Barber'", "98% Positive Customer Feedback"]
  },
  {
    title: "Restaurant Website Design",
    category: "Fine Dining & Hospitality",
    description: "Coltivi: Italian Fine Dining. A vibrant, food-focused landing page featuring menu highlights, real-time reservation systems, and automated email follow-ups for guests.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fm=webp&fit=crop&q=75&w=800",
    tags: ["Hospitality UI", "Reservation Flow", "Menu Management"],
    link: "/case-studies/restaurant",
    results: ["40% Increase in Direct Reservations", "25% Higher Table Turnover Rate", "Automated Guest Loyalty Program"]
  },
  {
    title: "Meows Cat Health: DTC Supplement Store",
    category: "Pet Health & Supplements",
    description: "A vet-formulated feline supplement brand built on Shopify for a trust-first category. We engineered the storefront around evidence — clinical dosing, third-party testing and a real guarantee above the fold — with subscribe-and-save at the core, Judge.me review automation, and Shopify Markets serving over 100 currencies.",
    image: "https://meowscathealth.com/cdn/shop/t/14/assets/hero-cat.webp?v=3440726815307043551783404538",
    tags: ["Shopify", "DTC / Subscriptions", "CRO"],
    link: "/case-studies/meows-cat-health",
    results: ["Subscribe-and-save built as the default path", "100+ currency markets from launch", "Review automation surfacing photo proof"]
  },
  {
    title: "WrestlingMart: Large-Catalog Sports Retail",
    category: "Specialist Sports Retail",
    description: "A specialist wrestling retailer carrying multiple major brands across adult and youth sizing, plus a full custom team-gear operation. We built a visual mega menu that resolves brand and age in two taps, a separate configurator lane for coaches ordering team kit, and review automation across 1,100+ reviews.",
    image: "https://www.wrestlingmart.com/cdn/shop/files/NIKE_Inflict_4-600-Pink_Pink-HR.jpg?v=1783467803&width=800",
    tags: ["Shopify", "Large Catalog", "B2B / Custom Orders"],
    link: "/case-studies/wrestlingmart",
    results: ["Brand × age mega navigation", "Custom team gear configurators", "1,100+ reviews collected"]
  },
  {
    title: "AOAP Projects: Contemporary Art Platform",
    category: "Art & Charity",
    description: "A charitable contemporary art platform selling one-of-one original artworks. We built a Shopify architecture where permanent sell-out is a designed state, 288-work exhibition drops launch as browsable collections, and a full editorial engine of artist interviews, films and podcasts feeds discovery.",
    image: "https://aoapprojects.com/cdn/shop/files/IMG_06377_1.jpg?v=1733941378&width=800",
    tags: ["Shopify", "Editorial / Content", "Exhibition Drops"],
    link: "/case-studies/aoap-projects",
    results: ["288-work exhibition drops", "Multi-blog editorial engine", "Price ladder from £55 originals"]
  },
  {
    title: "East & South Interiors: Furniture & Showroom",
    category: "Furniture & Home Decor",
    description: "A luxury furniture retailer whose sale often completes in a Pennsylvania showroom, not a checkout. We built a Shopify store designed for that hybrid reality — deep category taxonomy, a special-order path, appointment-driven conversion, and merchant-controlled sale campaigns.",
    image: "https://eastandsouthinteriors.com/cdn/shop/files/IMG_2683_b.jpg?v=1743431543&width=800",
    tags: ["Shopify", "Furniture", "Showroom Hybrid"],
    link: "/case-studies/east-and-south-interiors",
    results: ["Appointment-driven conversion path", "Special order flow for non-stock pieces", "Merchant-editable sale campaigns"]
  },
  {
    title: "Sapporo Nishiyama: Bilingual B2B Site",
    category: "B2B Food Manufacturing",
    description: "A 70-year-old Japanese ramen noodle manufacturer expanding into Europe. No cart, no checkout — a bilingual Japanese/English credibility and lead-generation site whose single job is convincing European restaurateurs to request free noodle samples.",
    image: "https://nishiyama-ramen.com/assets/images/home/kv.png",
    tags: ["Custom Build", "B2B Lead Gen", "Bilingual JA/EN"],
    link: "/case-studies/nishiyama-ramen",
    results: ["Bilingual JA/EN architecture", "Sample-request lead generation", "Static build for fast global load"]
  },
,
  {
    title: "Swolverine: Sports Nutrition Brand",
    category: "Sports Nutrition & Supplements",
    description: "A research-driven sports supplement brand on Shopify. We built goal-based navigation (build strength, lose fat, energy, sleep), stack bundling with tiered savings, subscribe-and-save layered on top, free macro/BMR/TDEE calculators as link-earning tools, and a B2B wholesale portal alongside DTC across 130+ markets.",
    image: "https://swolverine.com/cdn/shop/files/homepage-hero-mobile.jpg?v=1783707075&width=800",
    tags: ["Shopify", "Subscriptions / Bundles", "B2B + DTC"],
    link: "/case-studies/swolverine",
    results: ["Goal-based navigation architecture", "Stack + subscribe savings engine", "130+ markets, EN/ES/FR"]
  },
  {
    title: "Volvik USA: Golf Brand Store",
    category: "Golf Equipment",
    description: "A 40-year golf ball innovator on Shopify. We structured the range by performance characteristic (tour urethane, premium color, 360° alignment, night glow), built a comparison tool for undecided golfers, a custom personalization path, licensed collection architecture, and a dealer locator bridging DTC with retail.",
    image: "https://volvik.com/cdn/shop/files/volvik_2025_collection_white_bg.png?v=1747252888&width=800",
    tags: ["Shopify", "Product Taxonomy", "Personalization"],
    link: "/case-studies/volvik",
    results: ["Performance-based ball taxonomy", "Comparison tool + personalization", "1,200+ reviews collected"]
  },
  {
    title: "Tropez Official: UK Premium Fashion",
    category: "Premium Fashion & Streetwear",
    description: "A UK premium fashion brand on Shopify. We built drop-based seasonal merchandising with editorial presentation, coordinated sets as an AOV engine, and a cart drawer engineered with free-shipping progress, 'pair with' cross-sells and gift notes — selling worldwide from a UK base.",
    image: "https://tropezofficial.com/cdn/shop/files/Activewear_Image_2.png?v=1780238729&width=800",
    tags: ["Shopify", "Drops / Seasonal", "AOV Engineering"],
    link: "/case-studies/tropez-official",
    results: ["Drop-based seasonal architecture", "Cart drawer AOV engineering", "Worldwide market coverage"]
  },
  {
    title: "Oddli: Design-Led DTC Fashion",
    category: "Fashion & Apparel",
    description: "A community fashion brand where restraint was the strategy. We built a deliberately minimal editorial storefront — no badges, no countdowns, no interruption — letting photography and typography carry the sale, with transparency and the Oddli Club as real destinations rather than a policy link and an email popup.",
    image: "https://cdn.shopify.com/s/files/1/0515/3662/5860/files/Untitled-1.jpg?v=1733761067",
    tags: ["Shopify", "Minimal / Editorial", "Community"],
    link: "/case-studies/oddli",
    results: ["Minimal design-led storefront", "Transparency as a buying reason", "Community club destination"]
  },
  {
    title: "Labozero: Italian Multi-Brand Streetwear",
    category: "Streetwear & Sneakers Retail",
    description: "A Bari-based streetwear and sneaker retailer carrying 40+ brands. We built three parallel navigation paths (gender, category, brand), individual collections per label, outlet architecture for permanent inventory churn, Italian-language editorial, and Shopify Markets across 30 European countries.",
    image: "https://labozero.it/cdn/shop/files/anteprimasocial.png?v=1676026605",
    tags: ["Shopify", "Multi-Brand Catalog", "European Markets"],
    link: "/case-studies/labozero",
    results: ["40+ brand architecture", "Three parallel navigation paths", "30 European markets"]
  },
  {
    title: "Express Wholesalers: B2B Produce Supply",
    category: "B2B Fresh Produce Wholesale",
    description: "A family-owned Sydney Markets produce providore supplying restaurants since 1979. No cart, no consumer checkout — a trade credibility and ordering front door built around HACCP credentials, heritage, a produce catalog for commercial kitchens, and weekly market reporting that keeps chefs coming back.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200",
    tags: ["WordPress", "B2B Lead Gen", "Trade Ordering"],
    link: "/case-studies/express-wholesalers",
    results: ["Trade ordering funnel", "HACCP + heritage credibility", "Weekly market reporting"]
  }
];

export const CaseStudiesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Ecommerce Case Studies | Real Results for Scaling Brands | eCeez";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our ecommerce case studies to see how eCeez helps brands scale through technical excellence, SEO, and conversion optimization.");
    }
  }, []);

  return (
    <div className="pt-32 pb-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* SEO Metadata & Schema (Conceptual) */}
      <section className="sr-only">
        <h1>Ecommerce Case Studies - Proven Results by eCeez</h1>
        <p>Discover how our data-driven strategies and technical expertise have transformed ecommerce brands across various industries, from luxury fashion to local services.</p>
      </section>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-32"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
          Proof of Performance
        </div>
        <h1 className="text-5xl md:text-8xl font-bold mb-6 text-black tracking-tighter inline-flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          <span>Our <span className="text-indigo-600">Projects</span></span>
          <span className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 text-indigo-600 px-3.5 py-1 text-base md:text-2xl font-mono font-black rounded-2xl shadow-sm select-none">
            <Zap size={16} className="animate-pulse fill-indigo-600" /> {caseStudies.length}
          </span>
        </h1>
        <p className="text-zinc-700 text-lg max-w-2xl mx-auto italic">
          Explore how we help brands scale with precision design and high-performance engineering. Our **projects** demonstrate the real-world impact of our strategic interventions.
        </p>
      </motion.div>

      {/* Section: Why Our Case Studies Matter */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-40">
        {[
          { label: "Data-Driven", icon: <TrendingUp size={24} />, desc: "Every decision is backed by rigorous data analysis." },
          { label: "User-Centric", icon: <Users size={24} />, desc: "We design for the human on the other side of the screen." },
          { label: "ROI-Focused", icon: <Target size={24} />, desc: "Our goal is always your bottom-line growth." },
          { label: "High-Speed", icon: <Zap size={24} />, desc: "Performance is not a feature; it's a requirement." }
        ].map((item, i) => (
          <div key={i} className="bg-zinc-50 border border-zinc-200 p-8 rounded-[2.5rem] text-center">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 text-indigo-600 shadow-sm">
              {item.icon}
            </div>
            <h3 className="font-bold text-black mb-2">{item.label}</h3>
            <p className="text-zinc-600 text-xs">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-40">
        {caseStudies.map((study, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="relative group overflow-hidden rounded-[3rem] bg-zinc-100 aspect-square lg:aspect-[4/5] shadow-2xl">
              <img 
                src={study.image} 
                alt={study.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  // Client CDNs sometimes block hotlinking; fall back rather than render blank.
                  const img = e.currentTarget;
                  if (img.dataset.fallback) return;
                  img.dataset.fallback = '1';
                  img.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex flex-wrap gap-2">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-widest">
                {study.category}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight tracking-tight">{study.title}</h2>
              <p className="text-zinc-700 leading-relaxed text-lg italic">
                {study.description}
              </p>
              
              <div className="space-y-4 py-8 border-y border-zinc-200">
                <p className="font-black text-[10px] uppercase tracking-[0.3em] text-zinc-500">Key Results</p>
                <div className="grid grid-cols-1 gap-3">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-3 text-black font-bold">
                      <CheckCircle2 size={18} className="text-indigo-600 shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {study.link && (
                <Link to={study.link} className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-zinc-800 transition-all group active:scale-95 shadow-xl shadow-indigo-500/10">
                  View Full Case Study <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-40 bg-indigo-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-white rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to be our next <span className="text-indigo-200">Success Story?</span></h2>
          <p className="text-indigo-100 max-w-2xl mx-auto text-lg">
            Join the ranks of high-performance brands that have scaled their operations and revenue with eCeez.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-indigo-600 px-12 py-6 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-2xl active:scale-95">
            Start Your Project <ArrowRight size={24} />
          </Link>
        </div>
      </div>

      {/* Internal Linking Footer */}
      <div className="mt-40 pt-10 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p className="font-bold text-black mb-4">Our Services</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/seo" className="hover:text-indigo-600">Ecommerce SEO</Link></li>
            <li><Link to="/cro" className="hover:text-indigo-600">Conversion Optimization</Link></li>
            <li><Link to="/automation" className="hover:text-indigo-600">Store Automation</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Resources</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/blog" className="hover:text-indigo-600">Ecommerce Blog</Link></li>
            <li><Link to="/blog/shopify-vs-woocommerce" className="hover:text-indigo-600">Platform Comparison</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Company</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/about-us" className="hover:text-indigo-600">About eCeez</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-600">Contact Us</Link></li>
            <li><Link to="/careers" className="hover:text-indigo-600">Careers</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Legal</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/privacy" className="hover:text-indigo-600">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-indigo-600">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
