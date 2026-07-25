import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, Target, Zap, CheckCircle2, ArrowRight, 
  MousePointer2, Search, ShieldCheck, FileText, 
  ShoppingCart, Users, Award, HelpCircle, Eye, 
  Split, Layout, Smartphone, UserCheck, TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const CROPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* SEO Metadata & Schema (Conceptual for React) */}
      <section className="sr-only">
        <h1>Ecommerce CRO Agency</h1>
        <p>As a leading Ecommerce CRO Agency, we specialize in maximizing your store's conversion rate through data-driven A/B testing, UX audits, and personalization strategies.</p>
      </section>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-semibold mb-6 uppercase tracking-wider">
          Conversion Rate Optimization & UX
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black tracking-tight leading-[1.1]">
          The <span className="text-orange-600">Ecommerce CRO Agency</span> That Drives Revenue
        </h1>
        <p className="text-zinc-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          Stop wasting money on traffic that doesn't convert. As a specialized Ecommerce CRO Agency, we turn your existing visitors into loyal customers. We don't just guess; we use data to architect high-converting user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-orange-600/20">
            Get Your Free CRO Audit
          </Link>
          <a href="#process" className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-10 py-4 rounded-full font-bold transition-all">
            Explore Our Process
          </a>
        </div>
      </motion.div>

      {/* Section 1: Introduction */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
              Why Your Store Needs an <span className="text-orange-600">Ecommerce CRO Agency</span>
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              Traffic is expensive. If your conversion rate is stagnant, you are essentially pouring money into a leaky bucket. Most brands focus on getting more visitors, but the real growth happens when you optimize the journey for the visitors you already have.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              That is where a specialized Ecommerce CRO Agency makes the difference. We don't just change button colors. We analyze deep-funnel data, perform psychological audits, and implement rigorous A/B testing to eliminate friction at every touchpoint.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Our approach is built for high-growth brands that need to maximize their Return on Ad Spend (ROAS) and increase their Average Order Value (AOV). If you are ready to stop guessing and start scaling, you are in the right place.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-600/10 rounded-[3rem] blur-2xl"></div>
            <div className="relative bg-white border border-zinc-200 rounded-[3rem] p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                  <ShoppingCart className="text-orange-600" size={24} />
                  <div>
                    <p className="text-xs font-bold text-orange-600 uppercase">Problem</p>
                    <p className="text-sm text-zinc-800 font-medium">High traffic but low conversion rates.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <TrendingUp className="text-emerald-600" size={24} />
                  <div>
                    <p className="text-xs font-bold text-emerald-600 uppercase">Solution</p>
                    <p className="text-sm text-zinc-800 font-medium">Data-driven CRO strategy that scales profit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Services */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Comprehensive <span className="text-orange-600">CRO Services</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We offer a full suite of services designed to cover every aspect of your store's conversion funnel.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'A/B & Multivariate Testing',
              desc: 'We launch rigorous tests to find the winning variations. We focus on elements that move the needle, from headlines to checkout flows.',
              icon: <Split className="text-orange-600" />
            },
            {
              title: 'UX/UI Friction Audits',
              desc: 'We identify where users are getting stuck. We use heatmaps and session recordings to find and fix usability issues.',
              icon: <Eye className="text-indigo-600" />
            },
            {
              title: 'Mobile-First Optimization',
              desc: 'Most ecommerce traffic is mobile. We ensure your mobile experience is lightning-fast and frictionless for thumb-driven shopping.',
              icon: <Smartphone className="text-emerald-600" />
            },
            {
              title: 'Personalization Strategy',
              desc: 'We deliver the right message to the right user. We implement dynamic content and personalized offers based on user behavior.',
              icon: <UserCheck className="text-purple-600" />
            },
            {
              title: 'Checkout Funnel Revamps',
              desc: 'We optimize the most critical part of your store. We reduce cart abandonment by simplifying the path to purchase.',
              icon: <ShoppingCart className="text-orange-600" />
            },
            {
              title: 'Psychological Triggers',
              desc: 'We leverage behavioral science to drive action. We implement scarcity, social proof, and urgency in a way that builds trust.',
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
      <section className="mb-32 py-20 bg-orange-600 rounded-[4rem] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Maximize Your Traffic Value</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <p className="text-5xl font-bold mb-2">48%</p>
              <p className="text-orange-100 font-medium">Average CR Increase</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">22%</p>
              <p className="text-orange-100 font-medium">Increase in AOV</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">3.5x</p>
              <p className="text-orange-100 font-medium">Return on Ad Spend</p>
            </div>
          </div>
          <p className="mt-16 text-orange-50 text-lg leading-relaxed max-w-2xl mx-auto">
            Our clients see immediate improvements in their bottom line. By optimizing your conversion rate, you effectively lower your customer acquisition cost and increase your profit margins on every sale.
          </p>
        </div>
      </section>

      {/* Section 4: Process */}
      <section id="process" className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Our <span className="text-orange-600">CRO Framework</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We follow a scientific, iterative process to ensure every optimization is backed by data.</p>
        </div>
        <div className="space-y-12">
          {[
            {
              step: '01',
              title: 'Data Discovery & Analysis',
              desc: 'We dive deep into your GA4 data, heatmaps, and session recordings. We identify exactly where users are getting stuck and why.',
              icon: <Search className="text-orange-600" />
            },
            {
              step: '02',
              title: 'Hypothesis Generation',
              desc: 'We develop a prioritized list of optimization hypotheses. We focus on the changes that will have the biggest impact on your revenue.',
              icon: <Target className="text-indigo-600" />
            },
            {
              step: '03',
              title: 'Design & Development',
              desc: 'Our design team crafts high-converting variations. We build the tests using industry-standard tools like VWO or Optimizely.',
              icon: <Layout className="text-emerald-600" />
            },
            {
              step: '04',
              title: 'Rigorous A/B Testing',
              desc: 'We launch the tests and monitor them until they reach statistical significance. We ensure every "win" is a real win.',
              icon: <Split className="text-purple-600" />
            },
            {
              step: '05',
              title: 'Implementation & Iteration',
              desc: 'We implement the winning variations and start the cycle again. CRO is a continuous process of improvement.',
              icon: <BarChart3 className="text-orange-600" />
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-start p-8 bg-zinc-50 rounded-[3rem] border border-zinc-100">
              <div className="text-4xl font-black text-orange-600/20 shrink-0">{item.step}</div>
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
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-600/20 border border-orange-600/30 text-orange-400 text-xs font-bold uppercase tracking-widest">
              Success Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How We Boosted <span className="text-orange-400">Jewelry Store</span> Revenue by 52%</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              By optimizing their product pages and simplifying their mobile checkout, we saw a massive increase in their conversion rate and average order value.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-white">+52%</p>
                <p className="text-zinc-500 text-sm">Conversion Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">+18%</p>
                <p className="text-zinc-500 text-sm">Average Order Value</p>
              </div>
            </div>
            <Link to="/case-studies/jewelry-store" className="inline-flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors">
              Read the Full Case Study <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-600/20 rounded-[3rem] blur-3xl"></div>
            <div className="relative bg-zinc-800 border border-zinc-700 rounded-[3rem] p-8 aspect-video flex items-center justify-center">
              <BarChart3 className="w-32 h-32 text-orange-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '50%' }}
                  className="w-4 bg-orange-500 rounded-t-lg mx-1"
                />
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '70%' }}
                  className="w-4 bg-orange-400 rounded-t-lg mx-1"
                />
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  className="w-4 bg-orange-300 rounded-t-lg mx-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose Us */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Why We Are the Best <span className="text-orange-600">Ecommerce CRO Agency</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We combine behavioral science with a deep understanding of ecommerce UX.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Psychological Expertise',
              desc: 'We understand the "Why" behind user behavior. We use behavioral science to drive action.',
              icon: <Award className="text-orange-600" />
            },
            {
              title: 'Data-Driven Decisions',
              desc: 'We don\'t guess. Every optimization is backed by rigorous data analysis and A/B testing.',
              icon: <BarChart3 className="text-indigo-600" />
            },
            {
              title: 'Mobile-First Focus',
              desc: 'We optimize for the majority of your users. Our mobile experiences are second to none.',
              icon: <Smartphone className="text-emerald-600" />
            },
            {
              title: 'Full-Funnel Strategy',
              desc: 'We optimize the entire journey, from the first landing page to the post-purchase upsell.',
              icon: <CheckCircle2 className="text-purple-600" />
            }
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center">
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
          <h2 className="text-4xl font-bold text-black tracking-tight">Expert CRO Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              q: 'What is a good conversion rate for an ecommerce store?',
              a: 'While it varies by niche, a "good" conversion rate is typically between 2% and 4%. However, our goal as an Ecommerce CRO Agency is to help you beat your own historical benchmarks and outperform your competitors.'
            },
            {
              q: 'How long does an A/B test need to run?',
              a: 'A test should run until it reaches statistical significance, which usually takes 2 to 4 weeks depending on your traffic volume. We ensure every result is reliable before making permanent changes.'
            },
            {
              q: 'Do you work with Shopify Plus?',
              a: 'Yes, we are experts in Shopify Plus checkout extensibility and theme optimization. We know how to push the platform to its limits to drive maximum conversions.'
            },
            {
              q: 'What is the most important part of CRO?',
              a: 'The most important part is the "Hypothesis." Without a clear, data-backed hypothesis, you are just guessing. We focus on identifying the "Why" before we start testing the "What."'
            },
            {
              q: 'Can CRO help reduce my ad spend?',
              a: 'Absolutely. By increasing your conversion rate, you effectively lower your cost per acquisition. This allows you to either scale your ad spend more profitably or maintain your revenue with a lower budget.'
            },
            {
              q: 'What tools do you use for CRO?',
              a: 'We use a variety of tools including Hotjar for heatmaps, GA4 for funnel analysis, and VWO or Optimizely for A/B testing. We select the best tools based on your specific needs and budget.'
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
      <div className="bg-orange-600 rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <Zap className="w-16 h-16 text-orange-200 mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Stop Guessing?</h2>
        <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Stop leaving money on the table. Partner with the Ecommerce CRO Agency that drives real results. Let's optimize your growth today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:bg-zinc-100">
            Request Your Free CRO Audit
          </Link>
          <Link to="/seo" className="bg-orange-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-orange-800">
            Explore SEO Services
          </Link>
        </div>
      </div>

      {/* Internal Linking Footer */}
      <div className="mt-20 pt-10 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p className="font-bold text-black mb-4">Related Services</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/seo" className="hover:text-orange-600">Ecommerce SEO</Link></li>
            <li><Link to="/analytics" className="hover:text-orange-600">Advanced Analytics</Link></li>
            <li><Link to="/automation" className="hover:text-orange-600">Intelligent Automation</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Case Studies</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/case-studies/jewelry-store" className="hover:text-orange-600">Jewelry Store Success</Link></li>
            <li><Link to="/case-studies/clothing-store" className="hover:text-orange-600">Clothing Store Scale</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Resources</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/blog" className="hover:text-orange-600">CRO Strategy Blog</Link></li>
            <li><Link to="/blog/shopify-speed-optimization-guide-2026" className="hover:text-orange-600">Shopify Speed Guide</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Company</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/about-us" className="hover:text-orange-600">About eCeez</Link></li>
            <li><Link to="/contact" className="hover:text-orange-600">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Structured Schema.org JSON-LD for Technical CRO/UX strength */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://eceez.com/cro#service",
              "name": "Ecommerce Conversion Rate Optimization (CRO)",
              "provider": {
                "@type": "Organization",
                "name": "eCeez",
                "url": "https://eceez.com",
                "logo": "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=75&w=600&auto=format&fm=webp&fit=crop"
              },
              "description": "Premium ecommerce A/B testing, user experience audit, and funnel optimization to scale Shopify conversion rates.",
              "serviceType": "Conversion Rate Optimization Agency",
              "areaServed": "Worldwide",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD"
              }
            },
            {
              "@type": "FAQPage",
              "@id": "https://eceez.com/cro#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is a good conversion rate for an ecommerce store?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While it varies by niche, a \"good\" conversion rate is typically between 2% and 4%. However, our goal as an Ecommerce CRO Agency is to help you beat your own historical benchmarks and outperform your competitors."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does an A/B test need to run?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A test should run until it reaches statistical significance, which usually takes 2 to 4 weeks depending on your traffic volume. We ensure every result is reliable before making permanent changes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you work with Shopify Plus?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we are experts in Shopify Plus checkout extensibility and theme optimization. We know how to push the platform to its limits to drive maximum conversions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the most important part of CRO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The most important part is the \"Hypothesis.\" Without a data-backed hypothesis, you are just guessing. We focus on identifying the \"Why\" before we start testing the \"What.\""
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can CRO help reduce my ad spend?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. By increasing your conversion rate, you effectively lower your cost per acquisition. This allows you to either scale your ad spend more profitably or maintain your revenue with a lower budget."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What tools do you use for CRO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use a variety of tools including Hotjar for heatmaps, GA4 for funnel analysis, and VWO or Optimizely for A/B testing. We select the best tools based on your specific needs and budget."
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
