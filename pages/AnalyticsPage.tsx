import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, PieChart, TrendingUp, Target, Zap, CheckCircle2, 
  ArrowRight, LineChart, MousePointer2, Search, ShieldCheck, 
  FileText, Database, Globe, Share2, Award, HelpCircle, 
  Eye, Layout, Smartphone, UserCheck, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnalyticsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* SEO Metadata & Schema (Conceptual for React) */}
      <section className="sr-only">
        <h1>Ecommerce Analytics Agency</h1>
        <p>As a leading Ecommerce Analytics Agency, we provide advanced data intelligence, GA4 implementation, and predictive modeling to help your brand scale with precision.</p>
      </section>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6 uppercase tracking-wider">
          Data Intelligence & Analytics
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black tracking-tight leading-[1.1]">
          The <span className="text-indigo-600">Ecommerce Analytics Agency</span> for High-Growth Brands
        </h1>
        <p className="text-zinc-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          Stop guessing and start growing. As a specialized **Ecommerce Analytics Agency**, we implement enterprise-grade tracking that gives you a 360-degree view of your customer journey. We turn raw data into actionable growth strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-indigo-600/20">
            Get Your Free Data Audit
          </Link>
          <a href="#process" className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-10 py-4 rounded-full font-bold transition-all">
            See Our Framework
          </a>
        </div>
      </motion.div>

      {/* Section 1: Introduction */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
              Why Data is the Lifeblood of Your <span className="text-indigo-600">Ecommerce Scale</span>
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              In the modern ecommerce landscape, data is not just a luxury; it is a necessity. If you are not tracking your customer journey with 100% accuracy, you are flying blind. Most brands have data, but very few have *intelligence*.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              That is where a specialized **Ecommerce Analytics Agency** comes in. We don't just set up dashboards. We architect data ecosystems that allow you to understand your Customer Lifetime Value (CLV), optimize your Customer Acquisition Cost (CAC), and predict future trends.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Our approach is built for brands that have outgrown basic reporting and need sophisticated insights to drive their next phase of growth. We bridge the gap between technical tracking and strategic business decisions.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-600/10 rounded-[3rem] blur-2xl"></div>
            <div className="relative bg-white border border-zinc-200 rounded-[3rem] p-8 shadow-2xl overflow-hidden">
              <div className="space-y-8">
                <div className="flex items-end gap-2 h-32">
                  {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex-1 bg-indigo-500 rounded-t-lg"
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Data Accuracy</p>
                    <p className="text-2xl font-bold text-emerald-600">99.9%</p>
                  </div>
                  <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Insights Generated</p>
                    <p className="text-2xl font-bold text-indigo-600">500+</p>
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
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Comprehensive <span className="text-indigo-600">Analytics Services</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We provide the technical infrastructure and strategic insights needed to master your data.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'GA4 & GTM Implementation',
              desc: 'We ensure your Google Analytics 4 and Tag Manager setup is flawless. We track every event, from product views to complex checkout steps.',
              icon: <Target className="text-indigo-600" />
            },
            {
              title: 'Server-Side Tracking',
              desc: 'Bypass ad blockers and browser restrictions. We implement server-side GTM to ensure 100% data accuracy and improved site speed.',
              icon: <Database className="text-orange-600" />
            },
            {
              title: 'Predictive CLV Modeling',
              desc: 'Understand the future value of your customers. We use machine learning to predict which segments will drive the most long-term revenue.',
              icon: <TrendingUp className="text-emerald-600" />
            },
            {
              title: 'Multi-Touch Attribution',
              desc: 'Stop over-valuing the last click. We implement attribution models that show the true impact of every marketing channel.',
              icon: <Share2 className="text-purple-600" />
            },
            {
              title: 'Custom BI Dashboards',
              desc: 'Real-time data visualization that actually makes sense. We build custom Looker Studio or PowerBI dashboards tailored to your KPIs.',
              icon: <BarChart3 className="text-indigo-600" />
            },
            {
              title: 'User Behavior Analysis',
              desc: 'We go beyond the numbers. We use heatmaps and session recordings to understand the "Why" behind user actions.',
              icon: <Activity className="text-pink-600" />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Data That Drives Growth</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-indigo-100 font-medium">Tracking Accuracy</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">35%</p>
              <p className="text-indigo-100 font-medium">Lower CAC</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">50%</p>
              <p className="text-indigo-100 font-medium">Higher CLV</p>
            </div>
          </div>
          <p className="mt-16 text-indigo-50 text-lg leading-relaxed max-w-2xl mx-auto">
            Our clients scale faster because they have the data to make confident decisions. By understanding your true unit economics, you can scale your ad spend with zero guesswork.
          </p>
        </div>
      </section>

      {/* Section 4: Process */}
      <section id="process" className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Our <span className="text-indigo-600">Analytics Framework</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We follow a structured process to ensure your data infrastructure is robust and insightful.</p>
        </div>
        <div className="space-y-12">
          {[
            {
              step: '01',
              title: 'Audit & Gap Analysis',
              desc: 'We perform a deep audit of your current tracking setup. We identify missing events, data leaks, and inaccuracies.',
              icon: <Search className="text-indigo-600" />
            },
            {
              step: '02',
              title: 'Measurement Strategy',
              desc: 'We define your core KPIs and develop a measurement plan. We ensure every business goal has a corresponding data point.',
              icon: <Target className="text-indigo-600" />
            },
            {
              step: '03',
              title: 'Technical Implementation',
              desc: 'Our engineers implement the tracking code, GTM containers, and server-side infrastructure. We ensure everything is "clean."',
              icon: <Database className="text-indigo-600" />
            },
            {
              step: '04',
              title: 'Dashboard Creation',
              desc: 'We build custom, real-time dashboards that visualize your data. We focus on clarity and actionable insights.',
              icon: <Layout className="text-indigo-600" />
            },
            {
              step: '05',
              title: 'Ongoing Optimization',
              desc: 'We provide monthly strategy sessions to review your data and identify new growth opportunities. Data is a living asset.',
              icon: <Activity className="text-indigo-600" />
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

      {/* Section 5: Case Study Preview */}
      <section className="mb-32">
        <div className="bg-zinc-900 rounded-[4rem] p-12 md:p-20 text-white grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-600/20 border border-indigo-600/30 text-indigo-400 text-xs font-bold uppercase tracking-widest">
              Success Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How Data Intelligence Scaled <span className="text-indigo-400">Aurex</span> by 300%</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              By implementing advanced attribution and CLV modeling, we identified their most profitable customer segments and optimized their ad spend accordingly.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-white">3x</p>
                <p className="text-zinc-500 text-sm">Revenue Growth</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">-40%</p>
                <p className="text-zinc-500 text-sm">Customer Acquisition Cost</p>
              </div>
            </div>
            <Link to="/case-studies/aurex" className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
              Read the Full Case Study <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-600/20 rounded-[3rem] blur-3xl"></div>
            <div className="relative bg-zinc-800 border border-zinc-700 rounded-[3rem] p-8 aspect-video flex items-center justify-center">
              <BarChart3 className="w-32 h-32 text-indigo-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '50%' }}
                  className="w-4 bg-indigo-500 rounded-t-lg mx-1"
                />
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '70%' }}
                  className="w-4 bg-indigo-400 rounded-t-lg mx-1"
                />
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  className="w-4 bg-indigo-300 rounded-t-lg mx-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose Us */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Why We Are the Best <span className="text-indigo-600">Ecommerce Analytics Agency</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We combine technical mastery with strategic business intelligence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Technical Mastery',
              desc: 'We are experts in GTM, GA4, and server-side tracking. We handle the complex technical setup so you don\'t have to.',
              icon: <Award className="text-indigo-600" />
            },
            {
              title: 'Strategic Insights',
              desc: 'We don\'t just give you numbers. We give you a roadmap for growth based on what those numbers actually mean.',
              icon: <TrendingUp className="text-indigo-600" />
            },
            {
              title: 'Custom Solutions',
              desc: 'Every brand is different. We build custom analytics ecosystems tailored to your specific business model.',
              icon: <Database className="text-indigo-600" />
            },
            {
              title: 'Ongoing Support',
              desc: 'We are your long-term data partner. We provide continuous monitoring and optimization of your tracking.',
              icon: <CheckCircle2 className="text-indigo-600" />
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

      {/* Section 7: FAQs */}
      <section className="mb-32 py-20 bg-zinc-50 rounded-[4rem] border border-zinc-200 px-8 md:px-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-bold uppercase tracking-widest mb-6">
            <HelpCircle size={14} /> Common Questions
          </div>
          <h2 className="text-4xl font-bold text-black tracking-tight">Expert Analytics Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              q: 'Why should I hire an Ecommerce Analytics Agency instead of doing it myself?',
              a: 'Advanced tracking (like server-side GTM and custom attribution) requires specialized technical skills. As an **Ecommerce Analytics Agency**, we have the expertise to ensure your data is accurate and your insights are actionable, saving you months of trial and error.'
            },
            {
              q: 'What is the benefit of server-side tracking?',
              a: 'Server-side tracking improves data accuracy by bypassing ad blockers and browser restrictions (like ITP). it also improves your site speed by reducing the amount of JavaScript running in the browser.'
            },
            {
              q: 'How do you calculate Customer Lifetime Value (CLV)?',
              a: 'We use historical purchase data to build predictive models. We look at purchase frequency, average order value, and churn rates to estimate the future value of your customer segments.'
            },
            {
              q: 'Can you help with GA4 migration?',
              a: 'Absolutely. We have migrated hundreds of brands to GA4. We ensure your historical data is preserved (where possible) and your new setup is optimized for the future.'
            },
            {
              q: 'What dashboards do you recommend for ecommerce?',
              a: 'We typically recommend a "Growth Dashboard" that tracks CAC, CLV, and ROAS in real-time. We also build specific dashboards for inventory management, customer behavior, and channel performance.'
            },
            {
              q: 'How often should we review our data?',
              a: 'We recommend a deep-dive review at least once a month. However, your core KPIs should be monitored daily. Our custom dashboards make this easy for your entire team.'
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
      <div className="bg-indigo-600 rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <BarChart3 className="w-16 h-16 text-indigo-200 mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Master Your Data Today.</h2>
        <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Stop leaving your growth to chance. Partner with the **Ecommerce Analytics Agency** that turns data into revenue. Let's audit your tracking today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:bg-zinc-100">
            Request Your Free Data Audit
          </Link>
          <Link to="/cro" className="bg-indigo-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-indigo-800">
            Explore CRO Services
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
            <li><Link to="/automation" className="hover:text-indigo-600">Intelligent Automation</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Case Studies</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/case-studies/aurex" className="hover:text-indigo-600">Aurex Scale Story</Link></li>
            <li><Link to="/case-studies/jewelry-store" className="hover:text-indigo-600">Jewelry Store Success</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Resources</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/blog" className="hover:text-indigo-600">Data Strategy Blog</Link></li>
            <li><Link to="/blog/ga4-ecommerce-guide-2026" className="hover:text-indigo-600">GA4 Migration Guide</Link></li>
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
