import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Code2, Globe, Shield, BarChart3, Rocket, CheckCircle2, Zap, LayoutGrid, SearchCheck, ArrowRight, Users } from 'lucide-react';

const fullServices = [
  {
    title: 'Shopify Plus & Ecommerce Development',
    description: 'Specializing in enterprise-grade Shopify Plus and high-performance WordPress stores. We build high-converting online stores that look great, load fast, and generate real sales. Our service includes full store setup, app integration, custom headless architectures, and ongoing virtual management.',
    icon: <ShoppingBag className="w-12 h-12 text-indigo-500" />,
    features: ['Custom Shopify Theme Development', 'Headless Commerce with Hydrogen', 'Platform Migrations (Magento/Woo)', 'ERP & CRM System Integrations', 'Checkout Extensibility Optimization'],
    seoKeywords: 'Shopify Plus Developer, Custom Ecommerce Design, Headless Shopify Experts',
    link: '/shopify-store-setup-service'
  },
  {
    title: 'Advanced Conversion Rate Optimization (CRO)',
    description: 'Immersive user experiences that balance aesthetics with conversion logic. We don\'t just design; we architect for human behavior. By analyzing heatmaps and user recordings, we eliminate friction in your checkout funnel and increase Average Order Value (AOV).',
    icon: <BarChart3 className="w-12 h-12 text-orange-500" />,
    features: ['A/B Split Testing & Multivariate Tests', 'UX/UI Friction Point Audits', 'Mobile-First Checkout Design', 'Personalization Strategy', 'Post-Purchase Upsell Integration'],
    seoKeywords: 'Ecommerce CRO Agency, Conversion Optimization Specialists',
    link: '/cro'
  },
  {
    title: 'Ecommerce SEO & Search Excellence',
    description: 'Dominate organic search with our proprietary "Ecommerce Content Engine." We perform rigorous technical audits, competitive keyword research, and high-authority link building to place your products in front of active buyers without the recurring cost of ads.',
    icon: <SearchCheck className="w-12 h-12 text-blue-500" />,
    features: ['Technical SEO Audits & Core Web Vitals', 'Category & Product Page SEO', 'Topic Cluster Content Strategy', 'High-Authority Backlink Acquisition', 'Local SEO for Brick-and-Mortar Brands'],
    seoKeywords: 'Ecommerce SEO Agency, Shopify SEO Experts, Rank on Google',
    link: '/seo'
  },
  {
    title: 'Cyber Security & Performance Audits',
    description: 'Protect your brand reputation and customer trust. We perform rigorous security audits and implement enterprise-grade protection while simultaneously optimizing server-side performance for sub-second load times.',
    icon: <Shield className="w-12 h-12 text-green-500" />,
    features: ['Vulnerability & Penetration Testing', 'SSL & PCI Compliance Enforcement', 'DDOS Protection Strategy', 'Asset Minification & Lazy Loading', 'Advanced Caching Implementations'],
    seoKeywords: 'Ecommerce Security Audit, Website Speed Optimization',
    link: '/security'
  },
  {
    title: 'Seamless Team Collaboration Tools',
    description: 'Break down silos and unite your team. Our platform tools are built for high-velocity teams that need to stay in sync across global time zones with real-time data and asset sharing.',
    icon: <Users className="w-12 h-12 text-purple-500" />,
    features: ['Granular Role-Based Access', 'Centralized Asset Management', 'Integrated Feedback Systems', 'Real-Time Global Sync', 'Team Velocity Analytics'],
    seoKeywords: 'Team Collaboration Platform, Digital Asset Management',
    link: '/collaboration'
  },
  {
    title: 'Data Intelligence & Analytics',
    description: 'Turn raw data into actionable insights. We implement advanced tracking, predictive modeling, and custom dashboards to help you make data-driven decisions that fuel growth.',
    icon: <BarChart3 className="w-12 h-12 text-rose-500" />,
    features: ['Predictive Customer Modeling', 'Multi-Touch Attribution', 'Custom BI Dashboards', 'Server-Side GTM Setup', 'Retention & LTV Analysis'],
    seoKeywords: 'Ecommerce Analytics Agency, Data Intelligence Experts',
    link: '/analytics'
  },
  {
    title: 'Intelligent Process Automation',
    description: 'Scale your operations without scaling your headcount. We build custom automation workflows that handle the heavy lifting, from order fulfillment to personalized marketing flows.',
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
    features: ['Automated Order Fulfillment', 'Inventory Syncing Logic', 'AI-Powered Support Bots', 'Custom API Integrations', 'Marketing Flow Automation'],
    seoKeywords: 'Ecommerce Automation Agency, Workflow Optimization',
    link: '/automation'
  },
  {
    title: 'Business Website Development',
    description: 'Beyond ecommerce, we build high-performance corporate and service-based websites that establish authority and generate high-quality leads for your business.',
    icon: <Globe className="w-12 h-12 text-emerald-500" />,
    features: ['Corporate Identity Design', 'Lead Generation Funnels', 'CMS Integration & Training', 'Technical SEO Foundation', 'Ongoing Support & Maintenance'],
    seoKeywords: 'Business Website Design, Corporate Web Development',
    link: '/website-development-for-businesses'
  }
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Schema for FAQ or Service could be added via script tags here if needed */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-black">
          Elite <span className="text-indigo-600">Ecommerce Engineering</span> & SEO
        </h1>
        <p className="text-zinc-700 text-lg max-w-3xl mx-auto leading-relaxed">
          eCeez provides the technical depth and design precision required to outscale competitors in the modern digital landscape. We focus on speed, security, and search visibility.
        </p>
      </motion.div>

      <div className="space-y-32">
        {fullServices.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest">
                <Zap size={14} /> {s.seoKeywords.split(',')[0]}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">{s.title}</h2>
              <p className="text-zinc-700 text-lg leading-relaxed">
                {s.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                {s.features.map(f => (
                  <div key={f} className="flex items-center gap-3 text-zinc-800 font-medium">
                    <CheckCircle2 size={18} className="text-indigo-600 shrink-0" /> {f}
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <Link 
                  to={s.link}
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-indigo-600/20"
                >
                  Explore {s.title.split(' ')[0]} <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="relative group">
               <div className="absolute -inset-4 bg-indigo-600/20 rounded-[3rem] blur-2xl group-hover:bg-indigo-600/30 transition-all"></div>
               <div className="relative bg-white border border-zinc-200 rounded-[3rem] p-12 aspect-square flex flex-col items-center justify-center text-center gap-8 shadow-2xl overflow-hidden">
                  <div className="p-8 rounded-full bg-indigo-50 border border-indigo-100 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <div className="space-y-4">
                    <p className="text-indigo-600 font-black text-xs uppercase tracking-[0.3em]">Technical Specialty</p>
                    <p className="text-zinc-600 italic text-sm">{s.seoKeywords}</p>
                  </div>
                  {/* Abstract Background Elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 opacity-10 pointer-events-none">
                    <LayoutGrid size={128} className="text-black" />
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Topical Authority & Deep Dives Section */}
      <section className="mt-40">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Topical Authority & <span className="text-indigo-600">Deep Dives</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">Explore our technical guides and strategic insights designed to help high-growth brands dominate their niche.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 'shopify-speed-optimization-guide-2026', title: 'Shopify Speed Optimization', desc: 'Technical strategies for sub-1s load times and Core Web Vitals mastery.' },
            { id: 'google-merchant-center-seo-strategy', title: 'Google Merchant Center SEO', desc: 'Optimize your product feeds to dominate free listings and shopping results.' },
            { id: 'ecommerce-link-building-guide-2026', title: 'Ecommerce Link Building', desc: 'Proven strategies for earning high-authority backlinks in the ecommerce niche.' }
          ].map((post, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white border border-zinc-200 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                  <Rocket size={24} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{post.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">{post.desc}</p>
              </div>
              <a href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm group">
                Read Full Guide <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO Optimized FAQ Section */}
      <section className="mt-40 py-20 bg-zinc-50 rounded-[4rem] border border-zinc-200 px-8 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
          <p className="text-zinc-600">Expert insights for growing brands.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-black">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Why choose Shopify for high-growth brands?</h3>
            <p className="text-zinc-700 leading-relaxed">Shopify provides the stability, security, and scalability that modern brands need. With Shopify Plus, we can customize every aspect of the customer journey while maintaining industry-leading uptimes.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">How long does it take to see Ecommerce SEO results?</h3>
            <p className="text-zinc-700 leading-relaxed">Typically, high-intent keywords start moving within 3-6 months. Our data-driven approach focuses on "low hanging fruit" first to generate ROI quickly while building long-term topical authority.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">What are Accelerated Mobile Pages (AMP)?</h3>
            <p className="text-zinc-700 leading-relaxed">Accelerated Mobile Pages (AMP) are an open-source initiative to provide web pages that load fast and look good on mobile devices, even over slow networks.</p>
          </div>
        </div>
      </section>

      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Ecommerce Engineering & SEO Services",
          "provider": {
            "@type": "Organization",
            "name": "eCeez",
            "url": "https://eceez.com"
          },
          "description": "Elite ecommerce development, Shopify Plus scaling, CRO, and SEO services for high-growth brands.",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Ecommerce Services",
            "itemListElement": fullServices.map(s => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": s.title,
                "description": s.description
              }
            }))
          }
        })}
      </script>
    </div>
  );
};
