import React from 'react';
import { motion } from 'framer-motion';
import { 
  SearchCheck, Rocket, Globe, BarChart3, Zap, CheckCircle2, 
  ArrowRight, Layers, Target, TrendingUp, MousePointer2, 
  Search, ShieldCheck, FileText, Link as LinkIcon, ShoppingCart,
  Users, Award, HelpCircle, Eye, Layout, Pencil
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const SEOPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* SEO Metadata & Schema (Conceptual for React) */}
      <section className="sr-only">
        <h1>Ecommerce SEO Agency</h1>
        <p>As a leading Ecommerce SEO Agency, we specialize in helping high-growth brands dominate search engine results. Our data-driven approach ensures your products are seen by active buyers.</p>
      </section>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6 uppercase tracking-wider">
          Search Excellence & Organic Growth
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black tracking-tight leading-[1.1]">
          The <span className="text-blue-600">Ecommerce SEO Agency</span> for High-Growth Brands
        </h1>
        <p className="text-zinc-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          Stop burning your budget on expensive ads. As a specialized Ecommerce SEO Agency, we build sustainable organic growth engines that turn "window shoppers" into loyal customers. We don't just chase rankings; we drive revenue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-600/20">
            Get Your Free SEO Audit
          </Link>
          <a href="#process" className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-10 py-4 rounded-full font-bold transition-all">
            See Our Process
          </a>
        </div>
      </motion.div>

      {/* Section 1: Introduction */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
              Why Your Brand Needs a Specialized <span className="text-blue-600">Ecommerce SEO Agency</span>
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              In the crowded digital marketplace, visibility is everything. However, standard SEO tactics often fail to address the unique complexities of online retail. You deal with thousands of SKUs, faceted navigation, and intense competition from giants like Amazon.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              That is where we come in. We are not just another marketing firm. We are a dedicated Ecommerce SEO Agency that understands the technical nuances of Shopify, Magento, and BigCommerce. We bridge the gap between technical excellence and creative content.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Our service is designed for brands that have outgrown basic "on-page" fixes. If you are ready to scale your organic revenue and establish long-term topical authority, you are in the right place.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl"></div>
            <div className="relative bg-white border border-zinc-200 rounded-[3rem] p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <ShoppingCart className="text-blue-600" size={24} />
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase">Problem</p>
                    <p className="text-sm text-zinc-800 font-medium">Stagnant organic traffic and high CAC.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <TrendingUp className="text-emerald-600" size={24} />
                  <div>
                    <p className="text-xs font-bold text-emerald-600 uppercase">Solution</p>
                    <p className="text-sm text-zinc-800 font-medium">Data-driven SEO strategy that scales revenue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Automated SEO Suite Features */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Our <span className="text-blue-600">Automated SEO Suite</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">Scale your SEO effortlessly with our suite of intelligent automation tools designed specifically for Shopify brands.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Image Alt Text",
              desc: "Automatically optimize all of your images Alt Text to improve accessibility and image search rankings.",
              icon: <Eye className="text-blue-600" />
            },
            {
              title: "Meta Title Sync",
              desc: "Automatically optimize all of your Meta Titles based on your product and collection hierarchies.",
              icon: <Layout className="text-indigo-600" />
            },
            {
              title: "Meta Description",
              desc: "Automatically optimize all of your Meta Descriptions to improve Click-Through Rate (CTR) from SERPs.",
              icon: <FileText className="text-emerald-600" />
            },
            {
              title: "Target Keywords",
              desc: "Automatically set the target keyword to be the title of the resource for perfect alignment.",
              icon: <Target className="text-purple-600" />
            },
            {
              title: "Broken Links",
              desc: "Automatically fix broken links by redirecting them to other relevant URLs on your store.",
              icon: <LinkIcon className="text-red-500" />
            },
            {
              title: "Image Compression",
              desc: "Automatically compress your images for lightning-fast load times without losing quality.",
              icon: <Zap className="text-orange-500" />
            },
            {
              title: "Image Rename",
              desc: "Automatically rename your images to be SEO-friendly and keyword-rich for better indexing.",
              icon: <Pencil className="text-pink-500" />
            },
            {
              title: "URL Optimization",
              desc: "Automatically optimize your URLs to be clean, readable, and perfectly keyword-optimized.",
              icon: <Globe className="text-blue-500" />
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white border border-zinc-200 p-6 rounded-[2rem] hover:border-blue-200 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">{feature.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Technical Visibility & AI Discovery */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Google Search <span className="text-indigo-600">Dominance</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">Don't let potential customers scroll over your search listings. We configure your store's backend to demand attention in Google and AI search results.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Identity & Profiles */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold px-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              Store Identity
            </h3>
            <div className="bg-zinc-50 rounded-[2rem] p-8 border border-zinc-100">
              <ul className="space-y-6">
                {[
                  { title: "Industry Alignment", desc: "Let Google know your specific industry to help improve topical relevance." },
                  { title: "Universal Brand Name", desc: "Uniform brand usage across all SEO metadata to build authority." },
                  { title: "Verified Contact Info", desc: "Display phone numbers and addresses to boost trust scores." },
                  { title: "Social Media Presence", desc: "Link your profiles to stay verified as a real, active company." }
                ].map((item, idx) => (
                  <li key={idx} className="group">
                    <h4 className="font-bold text-black group-hover:text-blue-600 transition-colors uppercase text-[10px] tracking-widest mb-1">{item.title}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Rich Snippets & Shopping */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold px-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              Rich Results
            </h3>
            <div className="bg-white rounded-[2rem] p-8 border border-zinc-100 shadow-sm">
              <ul className="space-y-6">
                {[
                  { title: "Product Review Snippets", desc: "Add star ratings and reviews to Google searches for massive CTR increases." },
                  { title: "Dynamic Logo URL", desc: "Force Google to display your high-res brand logo in Knowledge Panels." },
                  { title: "Google My Business", desc: "Seamless integration with your official Google Business Profile." },
                  { title: "Merchant Listing Policies", desc: "Structured data for Google Shopping to eliminate Search Console warnings." }
                ].map((item, idx) => (
                  <li key={idx}>
                    <div className="flex items-start gap-4">
                      <div className="mt-1"><CheckCircle2 className="w-4 h-4 text-emerald-500" /></div>
                      <div>
                        <h4 className="font-bold text-black text-sm mb-1">{item.title}</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: AI Assistant Discovery (llms.txt) */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold px-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-500" />
              AI Search Readiness
            </h3>
            <div className="bg-indigo-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Globe className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="bg-white/10 text-[10px] px-3 py-1 rounded-full uppercase tracking-tighter font-mono">llms.txt Protocol</span>
                </div>
                <h4 className="text-2xl font-bold mb-4">llms.txt for AI Assistants</h4>
                <p className="text-indigo-100 text-sm mb-8 leading-relaxed">
                  Help LLMs (Gemini, ChatGPT, Claude) discover and understand your store efficiently.
                </p>
                <ul className="space-y-4">
                  {[
                    "Store Summary Optimization",
                    "Automated Content Indexing",
                    "AI Update Schedule",
                    "Machine-Readable Metadata"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs text-indigo-100/80">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-12 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-[10px] text-indigo-200 uppercase tracking-widest font-mono mb-2">Technical Benefit</p>
                  <p className="text-xs font-semibold">Ensures your products appear in AI-driven shopping recommendations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Services */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Comprehensive <span className="text-blue-600">SEO Services</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We offer a full suite of services designed to cover every aspect of your store's organic presence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Technical SEO Audits',
              desc: 'We perform deep-dives into your site architecture. We fix indexing issues, Core Web Vitals, and faceted navigation problems.',
              icon: <Layers className="text-blue-600" />
            },
            {
              title: 'Keyword Intelligence',
              desc: 'We identify high-intent keywords that your competitors missed. We focus on terms that lead directly to a purchase.',
              icon: <Search className="text-indigo-600" />
            },
            {
              title: 'Content Architecture',
              desc: 'We build topical authority through "Content Hubs." We create guides that answer customer questions and drive links.',
              icon: <FileText className="text-emerald-600" />
            },
            {
              title: 'Authority Link Building',
              desc: 'We earn high-quality backlinks from relevant niche sites. We focus on building your domain authority safely and effectively.',
              icon: <LinkIcon className="text-purple-600" />
            },
            {
              title: 'Product Page Optimization',
              desc: 'We optimize your product descriptions and images. We ensure your SKUs rank for specific, long-tail search queries.',
              icon: <ShoppingCart className="text-orange-600" />
            },
            {
              title: 'Conversion-Led SEO',
              desc: 'We don\'t just drive traffic; we drive sales. We align our SEO strategy with your CRO goals for maximum impact.',
              icon: <Zap className="text-pink-600" />
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
      <section className="mb-32 py-20 bg-blue-600 rounded-[4rem] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Real Results for Real Brands</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <p className="text-5xl font-bold mb-2">312%</p>
              <p className="text-blue-100 font-medium">Increase in Organic Revenue</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">145k</p>
              <p className="text-blue-100 font-medium">New Monthly Organic Visitors</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">42%</p>
              <p className="text-blue-100 font-medium">Reduction in Ad Spend</p>
            </div>
          </div>
          <p className="mt-16 text-blue-50 text-lg leading-relaxed max-w-2xl mx-auto">
            Our clients see sustainable growth that lasts. By building a strong organic foundation, you reduce your reliance on paid media and increase your overall profit margins.
          </p>
        </div>
      </section>

      {/* Section 4: Process */}
      <section id="process" className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Our <span className="text-blue-600">Proven Process</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We follow a rigorous, data-driven framework to ensure every campaign is a success.</p>
        </div>
        <div className="space-y-12">
          {[
            {
              step: '01',
              title: 'Deep Discovery & Audit',
              desc: 'We start by understanding your business, your competitors, and your technical landscape. We perform a 200+ point technical SEO audit to identify every bottleneck.',
              icon: <SearchCheck className="text-blue-600" />
            },
            {
              step: '02',
              title: 'Keyword & Content Strategy',
              desc: 'We map out a comprehensive keyword strategy. We identify "money keywords" and build a content roadmap that establishes your brand as a topical authority.',
              icon: <Target className="text-indigo-600" />
            },
            {
              step: '03',
              title: 'Technical Execution',
              desc: 'Our engineering team implements the technical fixes. We optimize site speed, fix schema markup, and refine your site architecture for maximum crawlability.',
              icon: <Zap className="text-emerald-600" />
            },
            {
              step: '04',
              title: 'Authority Building',
              desc: 'We launch our outreach and link-building campaigns. We earn high-authority placements that signal trust and relevance to search engines.',
              icon: <Rocket className="text-purple-600" />
            },
            {
              step: '05',
              title: 'Continuous Optimization',
              desc: 'SEO is not a one-time project. We constantly monitor performance, analyze data, and refine our strategy to stay ahead of algorithm updates.',
              icon: <BarChart3 className="text-orange-600" />
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-start p-8 bg-zinc-50 rounded-[3rem] border border-zinc-100">
              <div className="text-4xl font-black text-blue-600/20 shrink-0">{item.step}</div>
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

      {/* Section 5: Case Study Preview */}
      <section className="mb-32">
        <div className="bg-zinc-900 rounded-[4rem] p-12 md:p-20 text-white grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-600/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
              Success Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How We Scaled <span className="text-blue-400">Aurex</span> by 240%</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Aurex was struggling with high ad costs and low organic visibility. We implemented our "Ecommerce Content Engine" and saw a massive shift in their revenue mix.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-white">+240%</p>
                <p className="text-zinc-500 text-sm">Organic Revenue</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">-35%</p>
                <p className="text-zinc-500 text-sm">Cost Per Acquisition</p>
              </div>
            </div>
            <Link to="/case-studies/aurex" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
              Read the Full Case Study <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/20 rounded-[3rem] blur-3xl"></div>
            <div className="relative bg-zinc-800 border border-zinc-700 rounded-[3rem] p-8 aspect-video flex items-center justify-center">
              <BarChart3 className="w-32 h-32 text-blue-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '60%' }}
                  className="w-4 bg-blue-500 rounded-t-lg mx-1"
                />
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '80%' }}
                  className="w-4 bg-blue-400 rounded-t-lg mx-1"
                />
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  className="w-4 bg-blue-300 rounded-t-lg mx-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose Us */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Why We Are the Best <span className="text-blue-600">Ecommerce SEO Agency</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We combine technical expertise with a deep understanding of ecommerce business models.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Specialized Expertise',
              desc: 'We only do ecommerce. We know Shopify, Magento, and BigCommerce inside out.',
              icon: <Award className="text-blue-600" />
            },
            {
              title: 'Data-First Approach',
              desc: 'We don\'t guess. Every decision is backed by rigorous data analysis and testing.',
              icon: <BarChart3 className="text-indigo-600" />
            },
            {
              title: 'Transparent Reporting',
              desc: 'You get real-time dashboards and monthly deep-dives into your performance.',
              icon: <FileText className="text-emerald-600" />
            },
            {
              title: 'Proven Results',
              desc: 'We have a track record of scaling brands from 6 to 8 figures in organic revenue.',
              icon: <CheckCircle2 className="text-purple-600" />
            }
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
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

      {/* Section 7: FAQs */}
      <section className="mb-32 py-20 bg-zinc-50 rounded-[4rem] border border-zinc-200 px-8 md:px-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-bold uppercase tracking-widest mb-6">
            <HelpCircle size={14} /> Common Questions
          </div>
          <h2 className="text-4xl font-bold text-black tracking-tight">Expert SEO Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              q: 'How long does it take to see results from an Ecommerce SEO Agency?',
              a: 'Typically, you will start to see movement in high-intent keywords within 3 to 6 months. However, SEO is a long-term investment. The most significant gains usually happen between months 6 and 12 as your domain authority grows.'
            },
            {
              q: 'Do you work with Shopify stores?',
              a: 'Yes, we are a specialized Shopify SEO agency. We understand the platform\'s technical limitations and how to overcome them using custom code and advanced app integrations.'
            },
            {
              q: 'What is the "Ecommerce Content Engine"?',
              a: 'It is our proprietary framework for building topical authority. We identify content gaps in your niche and create high-value guides that attract backlinks and drive organic traffic to your product pages.'
            },
            {
              q: 'How do you measure success?',
              a: 'We focus on "Organic Revenue" and "ROI." While rankings and traffic are important, our primary goal is to increase your store\'s bottom line. We provide transparent reporting that shows exactly how our work impacts your sales.'
            },
            {
              q: 'Is link building safe?',
              a: 'We only use "White Hat" link-building techniques. We focus on earning high-quality, relevant placements through manual outreach and high-value content. We never use PBNs or spammy tactics that could put your store at risk.'
            },
            {
              q: 'Can you help with platform migrations?',
              a: 'Absolutely. Migrating to a new platform (like Magento to Shopify) is a high-risk event for SEO. We provide comprehensive migration support to ensure you don\'t lose your hard-earned rankings.'
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

      {/* Section 8: Strong CTA */}
      <div className="bg-blue-600 rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <Rocket className="w-16 h-16 text-blue-200 mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Own Your Niche?</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Stop paying for every click. Partner with the Ecommerce SEO Agency that drives real results. Let's build your organic growth engine today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:bg-zinc-100">
            Request Your Free SEO Audit
          </Link>
          <Link to="/cro" className="bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-blue-800">
            Explore CRO Services
          </Link>
        </div>
      </div>

      {/* Internal Linking Footer */}
      <div className="mt-20 pt-10 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p className="font-bold text-black mb-4">Related Services</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/cro" className="hover:text-blue-600">Conversion Rate Optimization</Link></li>
            <li><Link to="/analytics" className="hover:text-blue-600">Advanced Analytics</Link></li>
            <li><Link to="/automation" className="hover:text-blue-600">Intelligent Automation</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Case Studies</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/case-studies/aurex" className="hover:text-blue-600">Aurex Growth Story</Link></li>
            <li><Link to="/case-studies/clothing-store" className="hover:text-blue-600">Clothing Store Scale</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Resources</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/blog" className="hover:text-blue-600">SEO Strategy Blog</Link></li>
            <li><Link to="/blog/shopify-speed-optimization-guide-2026" className="hover:text-blue-600">Shopify Speed Guide</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Company</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/about-us" className="hover:text-blue-600">About eCeez</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Structured Schema.org JSON-LD for Technical SEO Strength */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://eceez.com/seo#service",
              "name": "Ecommerce & Shopify SEO Service",
              "provider": {
                "@type": "Organization",
                "name": "eCeez",
                "url": "https://eceez.com",
                "logo": "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=75&w=600&auto=format&fm=webp&fit=crop"
              },
              "description": "Elite Shopify SEO and organic search scaling for high-growth DTC & e-commerce brands.",
              "serviceType": "Search Engine Optimization Agency",
              "areaServed": "Worldwide",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD"
              }
            },
            {
              "@type": "FAQPage",
              "@id": "https://eceez.com/seo#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does it take to see results from an Ecommerce SEO Agency?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Typically, you will start to see movement in high-intent keywords within 3 to 6 months. However, SEO is a long-term investment. The most significant gains usually happen between months 6 and 12 as your domain authority grows."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you work with Shopify stores?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we are a specialized Shopify SEO agency. We understand the platform's technical limitations and how to overcome them using custom code and advanced app integrations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the \"Ecommerce Content Engine\"?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is our proprietary framework for building topical authority. We identify content gaps in your niche and create high-value guides that attract backlinks and drive organic traffic to your product pages."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you measure success?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We focus on \"Organic Revenue\" and \"ROI.\" While rankings and traffic are important, our primary goal is to increase your store's bottom line. We provide transparent reporting that shows exactly how our work impacts your sales."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is link building safe?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We only use \"White Hat\" link-building techniques. We focus on earning high-quality, relevant placements through manual outreach and high-value content. We never use PBNs or spammy tactics that could put your store at risk."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you help with platform migrations?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Migrating to a new platform (like Magento to Shopify) is a high-risk event for SEO. We provide comprehensive migration support to ensure you don't lose your hard-earned rankings."
                  }
                }
              ]
            }
          ]
        })}
      </script>
    </div>
  );
};
