import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, Layers, Shield, Globe, Zap, BarChart3, 
  Clock, Search, TrendingUp, CheckCircle2, ArrowRight, 
  Settings, Rocket, Heart, HelpCircle, Star, 
  Smartphone, MousePointer2, Layout, Code2, 
  Package, Truck, CreditCard, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ShopifyServicePage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* SEO Metadata & Schema (Conceptual) */}
      <section className="sr-only">
        <h1>Shopify Store Setup Service</h1>
        <p>Expert Shopify Store Setup Service for small businesses. Launch your high-converting ecommerce store in 5 days with our professional Shopify development team.</p>
      </section>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6 uppercase tracking-wider">
          Official Shopify Partners
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black tracking-tight leading-[1.1]">
          Professional <span className="text-indigo-600">Shopify Store Setup Service</span>
        </h1>
        <p className="text-zinc-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          Launch your ready-to-sell store in just 5 days. We handle the design, technical configuration, and optimization so you can focus on growing your brand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-indigo-600/20">
            Get Started in 5 Days
          </Link>
          <a href="#process" className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-10 py-4 rounded-full font-bold transition-all">
            View Our Process
          </a>
        </div>
      </motion.div>

      {/* Section 1: Introduction - The Problem & Solution */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
              Stop Wasting Weeks on <span className="text-indigo-600">DIY Store Setup</span>
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              Starting an ecommerce business is exciting, but the technical hurdles of setting up a Shopify store can quickly become overwhelming. From choosing the right theme and configuring shipping zones to integrating payment gateways and optimizing for mobile—the list of tasks is endless.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Many entrepreneurs spend weeks watching tutorials, only to end up with a store that looks unprofessional or, worse, doesn't convert. Our Shopify Store Setup Service is designed to eliminate this friction.
            </p>
            <p className="text-zinc-700 leading-relaxed font-medium">
              We don't just "install" a theme. We architect a high-performance sales machine tailored to your specific niche and audience.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <CheckCircle2 className="text-indigo-600" size={16} />
                <span>Zero Technical Headaches</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <CheckCircle2 className="text-indigo-600" size={16} />
                <span>Conversion-First Design</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <CheckCircle2 className="text-indigo-600" size={16} />
                <span>SEO-Ready Foundation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <CheckCircle2 className="text-indigo-600" size={16} />
                <span>Mobile Optimized</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-600/10 rounded-[3rem] blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000" 
              alt="Shopify Store Setup Service Dashboard" 
              className="relative rounded-[3rem] border border-zinc-200 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Our Services - Comprehensive Breakdown */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Complete <span className="text-indigo-600">Shopify Development</span> Solutions</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We cover every aspect of your store launch, ensuring a seamless experience for you and your customers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Store Design",
              desc: "We select and customize high-converting Shopify themes that align perfectly with your brand identity and product catalog.",
              icon: <Layout className="text-indigo-600" />
            },
            {
              title: "Product Catalog Setup",
              desc: "Seamless bulk or manual product entry with optimized titles, descriptions, and high-quality image placement.",
              icon: <Package className="text-blue-600" />
            },
            {
              title: "Payment & Checkout",
              desc: "Secure integration of Shopify Payments, PayPal, and local gateways to ensure a friction-less buying experience.",
              icon: <CreditCard className="text-emerald-600" />
            },
            {
              title: "Shipping & Tax Logic",
              desc: "Configuring accurate shipping zones, real-time rates, and automated tax rules based on your business location.",
              icon: <Truck className="text-orange-600" />
            },
            {
              title: "Essential App Stack",
              desc: "We install and configure the must-have apps for SEO, marketing, reviews, and inventory management.",
              icon: <Zap className="text-pink-600" />
            },
            {
              title: "Mobile Optimization",
              desc: "Ensuring your store looks and performs flawlessly on smartphones and tablets, where most shopping happens.",
              icon: <Smartphone className="text-purple-600" />
            }
          ].map((service, i) => (
            <div key={i} className="bg-white border border-zinc-200 p-8 rounded-[2.5rem] hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Benefits / Results */}
      <section className="mb-32 py-20 bg-indigo-600 rounded-[4rem] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Why Our Shopify Setup Wins</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <p className="text-5xl font-bold mb-2">5 Days</p>
              <p className="text-indigo-100 font-medium">Average Launch Time</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-indigo-100 font-medium">Ownership Transfer</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">SEO</p>
              <p className="text-indigo-100 font-medium">Ready from Day 1</p>
            </div>
          </div>
          <p className="mt-16 text-indigo-50 text-lg leading-relaxed max-w-2xl mx-auto">
            We don't just build websites; we build businesses. Our comprehensive setup covers every technical detail so you can start generating revenue immediately.
          </p>
        </div>
      </section>

      {/* Section 4: Process - Step by Step */}
      <section id="process" className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Our <span className="text-indigo-600">5-Day Launch</span> Framework</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">A streamlined, efficient process to get your brand live without the wait.</p>
        </div>
        <div className="space-y-12">
          {[
            {
              step: '01',
              title: 'Discovery & Strategy',
              desc: 'We learn about your brand, products, and target audience to select the best theme and app configuration.',
              icon: <Search className="text-indigo-600" />
            },
            {
              step: '02',
              title: 'Design & Branding',
              desc: 'We customize your chosen theme, setting up your logo, color palette, typography, and homepage layout.',
              icon: <Layout className="text-indigo-600" />
            },
            {
              step: '03',
              title: 'Technical Configuration',
              desc: 'Setting up products, categories, shipping zones, tax rules, and payment gateways.',
              icon: <Settings className="text-indigo-600" />
            },
            {
              step: '04',
              title: 'App Integration & SEO',
              desc: 'Installing essential apps and performing basic SEO optimization (meta tags, alt text, URL structure).',
              icon: <Zap className="text-indigo-600" />
            },
            {
              step: '05',
              title: 'Testing & Handover',
              desc: 'Rigorous testing of the checkout flow and mobile responsiveness, followed by a full dashboard walkthrough.',
              icon: <Rocket className="text-indigo-600" />
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-start p-8 bg-zinc-50 rounded-[3rem] border border-zinc-100">
              <div className="text-4xl font-black text-indigo-600/20 shrink-0">{item.step}</div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-xl border border-zinc-200">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                </div>
                <p className="text-zinc-700 leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Why Choose Us */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Why We Are the Best <span className="text-indigo-600">Shopify Experts</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We combine technical mastery with a deep understanding of ecommerce psychology.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Official Partners',
              desc: 'As certified Shopify Partners, we have deep access to the latest tools and platform updates.',
              icon: <Star className="text-indigo-600" />
            },
            {
              title: 'Conversion Focused',
              desc: 'Every design choice we make is backed by data and conversion rate optimization principles.',
              icon: <TrendingUp className="text-indigo-600" />
            },
            {
              title: 'Speed Optimized',
              desc: 'We ensure your store loads lightning-fast, reducing bounce rates and improving Google rankings.',
              icon: <Zap className="text-indigo-600" />
            },
            {
              title: 'Post-Launch Support',
              desc: 'We don\'t just disappear. We provide training and support to ensure you\'re confident managing your store.',
              icon: <Heart className="text-indigo-600" />
            }
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: FAQs */}
      <section className="mb-32 py-20 bg-zinc-50 rounded-[4rem] border border-zinc-200 px-8 md:px-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-bold uppercase tracking-widest mb-6">
            <HelpCircle size={14} /> Common Questions
          </div>
          <h2 className="text-4xl font-bold text-black tracking-tight">Expert Shopify Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              q: 'How long does a Shopify store setup take?',
              a: 'Our standard Shopify Store Setup Service typically takes 3 to 5 business days. This includes design, product upload, and technical configuration. More complex custom builds may take longer.'
            },
            {
              q: 'Do I need to buy a theme separately?',
              a: 'You can choose a free Shopify theme or purchase a premium one. We can recommend the best themes for your specific industry and help you with the purchase process.'
            },
            {
              q: 'Will I be able to manage the store myself?',
              a: 'Absolutely. Part of our handover process includes a comprehensive walkthrough of the Shopify dashboard. You\'ll know exactly how to add products, process orders, and view reports.'
            },
            {
              q: 'Is SEO included in the setup?',
              a: 'Yes. We perform basic on-page SEO, including optimizing meta titles, descriptions, and image alt tags for your main pages and products.'
            },
            {
              q: 'Can you help with migrating from another platform?',
              a: 'Yes, we have extensive experience migrating stores from WooCommerce, Magento, and BigCommerce to Shopify while preserving your data and SEO rankings.'
            },
            {
              q: 'What do I need to provide to get started?',
              a: 'To begin, we\'ll need your branding assets (logo, colors), product information (titles, prices, descriptions), and high-quality product images.'
            }
          ].map((faq, i) => (
            <div key={i} className="space-y-3">
              <h3 className="text-xl font-bold text-black">{faq.q}</h3>
              <p className="text-zinc-700 leading-relaxed text-sm">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Strong CTA */}
      <div className="bg-indigo-600 rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <ShoppingBag className="w-16 h-16 text-indigo-200 mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Launch Your Brand?</h2>
        <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Don't let technical hurdles stop your growth. Partner with the Shopify Store Setup Service that gets you live and selling in record time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:bg-zinc-100">
            Start Your Project Today
          </Link>
          <Link to="/case-studies" className="bg-indigo-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-indigo-800">
            View Our Portfolio
          </Link>
        </div>
      </div>

      {/* Internal Linking Footer */}
      <div className="mt-20 pt-10 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p className="font-bold text-black mb-4">Related Services</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/seo" className="hover:text-indigo-600">Ecommerce SEO</Link></li>
            <li><Link to="/cro" className="hover:text-indigo-600">Conversion Optimization</Link></li>
            <li><Link to="/automation" className="hover:text-indigo-600">Store Automation</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Case Studies</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/case-studies/jewelry-store" className="hover:text-indigo-600">Jewelry Store Success</Link></li>
            <li><Link to="/case-studies/clothing-store" className="hover:text-indigo-600">Clothing Store Scale</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Resources</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/blog" className="hover:text-indigo-600">Ecommerce Growth Blog</Link></li>
            <li><Link to="/blog/shopify-vs-woocommerce" className="hover:text-indigo-600">Shopify vs WooCommerce</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Company</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/about-us" className="hover:text-indigo-600">About eCeez</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-600">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
