
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  BarChart3, 
  ShoppingBag, 
  Layers, 
  Code2, 
  Globe, 
  Shield, 
  Search, 
  MousePointer2, 
  Smartphone,
  Users,
  TrendingUp,
  Clock,
  MessageSquare,
  MapPin,
  Layout,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const BusinessWebsiteDevelopment: React.FC = () => {
  useEffect(() => {
    document.title = "Business Website Development | Custom High-ROI Solutions for Companies";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Elite business website development for growing companies. We build SEO-friendly, conversion-optimized websites that scale. Custom solutions for small to large enterprises.");
    }
  }, []);

  return (
    <main className="pt-24 pb-16">
      {/* SEO Metadata & Schema (Conceptual) */}
      <section className="sr-only">
        <h1>Business Website Development</h1>
        <p>Expert business website development for companies. We build high-performance, SEO-optimized websites that drive ROI and scale with your business.</p>
      </section>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} /> Elite Digital Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight tracking-tight">
            Professional <span className="text-indigo-600">Business Website Development</span>
          </h1>
          <p className="text-zinc-700 text-xl mb-10 leading-relaxed">
            Transform your digital presence with high-performance, custom website development for businesses that demand growth. We don't just build websites; we engineer profit-generating assets optimized for search engines and human behavior.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-indigo-600 text-white px-10 py-5 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2">
              Start Your Project <ArrowRight size={20} />
            </Link>
            <Link to="/case-studies" className="bg-white text-black border border-zinc-200 px-10 py-5 rounded-full font-bold hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Intro Section - The Problem & Solution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Why Every Company Needs Expert <span className="text-indigo-600">Business Website Development</span>
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              In today's hyper-competitive landscape, your website is often the first and most critical touchpoint for potential clients. A generic, slow, or outdated site isn't just a missed opportunity—it's a liability that actively drives customers to your competitors.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Professional **business website development** goes beyond aesthetics. It's about building trust, establishing authority, and creating a seamless path to conversion. Whether you're a small startup or a global enterprise, your digital infrastructure must be robust, secure, and scalable.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed font-medium">
              We focus on the metrics that matter: speed, usability, and conversion logic. Our approach ensures your site isn't just a digital brochure, but a powerful engine for lead generation and brand growth.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "First Impressions & Brand Credibility",
                "24/7 Global Accessibility & Lead Generation",
                "Competitive Advantage in Organic Search",
                "Centralized Hub for Marketing Efforts",
                "Scalable Infrastructure for Future Growth"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-800 font-semibold">
                  <CheckCircle2 className="text-indigo-600 shrink-0" size={22} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-600/10 rounded-[3rem] blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
              alt="Professional business website development agency at work" 
              className="relative rounded-[2.5rem] shadow-2xl border border-zinc-200"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Comprehensive Service Breakdown */}
      <section className="bg-zinc-50 py-32 mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Our <span className="text-indigo-600">Business Website Development</span> Services</h2>
            <p className="text-zinc-600 text-lg">We provide end-to-end digital solutions tailored to your unique business goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom UI/UX Design",
                desc: "We create intuitive, high-fidelity designs that align with your brand identity and prioritize user experience across all devices.",
                icon: <Layout className="w-8 h-8 text-indigo-600" />
              },
              {
                title: "Full-Stack Development",
                desc: "From complex backends to interactive frontends, we use modern frameworks like React and Next.js to build robust applications.",
                icon: <Code2 className="w-8 h-8 text-blue-600" />
              },
              {
                title: "E-commerce Solutions",
                desc: "Specialized Shopify and custom e-commerce development designed to scale your online sales and streamline operations.",
                icon: <ShoppingBag className="w-8 h-8 text-emerald-600" />
              },
              {
                title: "Technical SEO Optimization",
                desc: "We bake SEO into the foundation, ensuring your site is crawlable, fast, and structured for maximum search visibility.",
                icon: <Search className="w-8 h-8 text-orange-600" />
              },
              {
                title: "CMS Integration",
                desc: "Empower your team with easy-to-use content management systems like Headless CMS or WordPress, customized for your needs.",
                icon: <Layers className="w-8 h-8 text-pink-600" />
              },
              {
                title: "Performance Tuning",
                desc: "Sub-second load times are our standard. We optimize every asset and line of code for peak performance.",
                icon: <Zap className="w-8 h-8 text-yellow-600" />
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] border border-zinc-200 shadow-sm hover:shadow-xl transition-all group">
                <div className="mb-6 p-4 bg-zinc-50 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Benefits / Results */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-indigo-600 rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">The Impact of Professional Development</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <p className="text-5xl font-bold mb-2">40%</p>
              <p className="text-indigo-100 font-medium">Average Increase in Leads</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">2x</p>
              <p className="text-indigo-100 font-medium">Faster Load Times</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-indigo-100 font-medium">Mobile Responsiveness</p>
            </div>
          </div>
          <p className="mt-16 text-indigo-50 text-lg leading-relaxed max-w-2xl mx-auto">
            Our **business website development** solutions are engineered to provide a measurable return on investment, helping you capture more market share and build long-term brand equity.
          </p>
        </div>
      </section>

      {/* Section 4: Process - Step by Step */}
      <section id="process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Our <span className="text-indigo-600">Strategic Development</span> Process</h2>
          <p className="text-zinc-600 text-lg">A transparent, data-driven approach to building your digital future.</p>
        </div>
        <div className="space-y-12">
          {[
            {
              step: '01',
              title: 'Discovery & Audit',
              desc: 'We deep dive into your business goals, competitors, and current digital footprint to identify opportunities for growth.',
              icon: <Search className="text-indigo-600" />
            },
            {
              step: '02',
              title: 'Strategy & Architecture',
              desc: 'We create a technical roadmap and SEO-focused content architecture that serves as the blueprint for your success.',
              icon: <Layers className="text-indigo-600" />
            },
            {
              step: '03',
              title: 'UI/UX Design',
              desc: 'Our designers craft high-fidelity mockups that focus on brand identity, user psychology, and conversion optimization.',
              icon: <Layout className="text-indigo-600" />
            },
            {
              step: '04',
              title: 'Agile Development',
              desc: 'Our engineers build your site using clean, efficient code and modern frameworks, ensuring scalability and performance.',
              icon: <Code2 className="text-indigo-600" />
            },
            {
              step: '05',
              title: 'Launch & Optimization',
              desc: 'Rigorous testing, SEO configuration, and seamless deployment, followed by ongoing performance monitoring.',
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Why Choose Our <span className="text-indigo-600">Development Agency</span>?</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We combine technical mastery with a deep understanding of business strategy.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Data-Driven Design',
              desc: 'Every design choice we make is backed by user data and conversion rate optimization principles.',
              icon: <TrendingUp className="text-indigo-600" />
            },
            {
              title: 'Senior-Level Talent',
              desc: 'Your project is handled by experts with years of experience in high-performance development.',
              icon: <Users className="text-indigo-600" />
            },
            {
              title: 'Future-Proof Tech',
              desc: 'We use modern, scalable frameworks like React and Next.js to ensure your site grows with you.',
              icon: <Zap className="text-indigo-600" />
            },
            {
              title: 'Transparent Support',
              desc: 'We provide regular updates, clear milestones, and a dedicated project manager for every client.',
              icon: <MessageSquare className="text-indigo-600" />
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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 py-20 bg-zinc-50 rounded-[4rem] border border-zinc-200">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Frequently Asked Questions</h2>
          <p className="text-zinc-600">Expert answers to common business website development queries.</p>
        </div>
        <div className="space-y-8 px-8">
          {[
            {
              q: "How much does website development for businesses cost?",
              a: "Pricing varies based on complexity, features, and integrations. A professional business website typically ranges from $5,000 to $50,000+. We provide custom quotes based on your specific ROI goals."
            },
            {
              q: "How long does it take to build a custom business website?",
              a: "A standard business website takes 4-8 weeks. More complex enterprise solutions or e-commerce platforms can take 12-16 weeks from discovery to launch."
            },
            {
              q: "Will my website be SEO-friendly?",
              a: "Absolutely. SEO-friendly website development is a core part of our process. We optimize technical architecture, speed, and content structure to ensure maximum visibility."
            },
            {
              q: "Do you offer website maintenance for companies?",
              a: "Yes, we provide ongoing support, security updates, and performance monitoring to ensure your website remains a high-performing asset."
            },
            {
              q: "Can you help with custom website development for small businesses?",
              a: "Yes! We specialize in scalable solutions for growing companies, ensuring you get a professional presence that can expand as your business does."
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white border border-zinc-200 p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold text-black mb-4">{faq.q}</h3>
              <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Strong CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-indigo-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Scale Your Business?</h2>
            <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto">
              Partner with the **business website development** experts who focus on your bottom line. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-white text-indigo-600 px-12 py-6 rounded-full font-black text-lg hover:bg-indigo-50 transition-all shadow-2xl">
                Request a Custom Quote
              </Link>
              <Link to="/case-studies" className="bg-indigo-700 text-white px-12 py-6 rounded-full font-black text-lg hover:bg-indigo-800 transition-all">
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-10 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8">
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
    </main>
  );
};
