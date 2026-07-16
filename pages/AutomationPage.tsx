import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Workflow, Zap, MessageSquare, Mail, CheckCircle2, 
  ArrowRight, Settings, Bot, Search, ShieldCheck, 
  FileText, Database, Globe, Share2, Award, HelpCircle, 
  Eye, Layout, Smartphone, UserCheck, Activity, Layers, 
  Repeat, ZapOff, BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AutomationPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* SEO Metadata & Schema (Conceptual for React) */}
      <section className="sr-only">
        <h1>Ecommerce Automation Agency</h1>
        <p>As a leading Ecommerce Automation Agency, we build intelligent workflows, AI-driven customer support, and seamless backend integrations to help your brand scale without limits.</p>
      </section>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6 uppercase tracking-wider">
          Intelligent Process Automation
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black tracking-tight leading-[1.1]">
          The <span className="text-indigo-600">Ecommerce Automation Agency</span> for Scaling Brands
        </h1>
        <p className="text-zinc-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          Scale your operations without scaling your headcount. As a specialized **Ecommerce Automation Agency**, we build custom workflows that handle the heavy lifting, from order fulfillment to personalized marketing flows.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-indigo-600/20">
            Get Your Free Automation Audit
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
              Why Automation is the Key to <span className="text-indigo-600">Ecommerce Efficiency</span>
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              In the fast-paced world of ecommerce, manual tasks are bottlenecks. If your team is spending hours on data entry, order syncing, or repetitive customer support, you are losing money. Every manual touchpoint is an opportunity for error and a delay in your growth.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              That is where a specialized **Ecommerce Automation Agency** makes the difference. We don't just set up simple triggers. We architect intelligent systems that connect your entire tech stack, from Shopify and Klaviyo to your ERP and 3PL.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Our approach is built for high-growth brands that need to scale their operations efficiently. We help you build a "hands-off" business that runs 24/7, allowing your team to focus on high-level strategy instead of low-level tasks.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-600/10 rounded-[3rem] blur-2xl"></div>
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-[3rem] p-12 shadow-2xl overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                    <span className="text-xs font-mono text-indigo-400">automation_active</span>
                  </div>
                  <Settings className="w-4 h-4 text-zinc-500 animate-spin-slow" />
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-zinc-400">Order Fulfillment</span>
                      <span className="text-[10px] text-emerald-400">Automated</span>
                    </div>
                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-full bg-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-zinc-400">Inventory Sync</span>
                      <span className="text-[10px] text-emerald-400">Automated</span>
                    </div>
                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        className="h-full bg-emerald-500"
                      />
                    </div>
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
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Comprehensive <span className="text-indigo-600">Automation Services</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We provide the technical infrastructure and strategic workflows needed to automate your growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Order Management Automation',
              desc: 'We automate your fulfillment logic, inventory syncing, and returns processing. Reduce manual errors and speed up delivery times.',
              icon: <Layers className="text-indigo-600" />
            },
            {
              title: 'Marketing Flow Automation',
              desc: 'Build complex Klaviyo flows, personalized email sequences, and SMS triggers that react to customer behavior in real-time.',
              icon: <Mail className="text-emerald-600" />
            },
            {
              title: 'AI Customer Support',
              desc: 'Deploy intelligent chatbots and automated ticketing systems that resolve common queries instantly, freeing up your team.',
              icon: <Bot className="text-purple-600" />
            },
            {
              title: 'Inventory & Supply Chain',
              desc: 'Automate stock alerts, supplier notifications, and dynamic pricing adjustments across all your sales channels.',
              icon: <Repeat className="text-orange-600" />
            },
            {
              title: 'Custom Backend Logic',
              desc: 'Need a custom integration? We build serverless functions and middleware to connect your tech stack and automate unique processes.',
              icon: <Cpu className="text-pink-600" />
            },
            {
              title: 'Data & Reporting Automation',
              desc: 'Stop manual data entry. We automate your reporting pipelines, ensuring you always have real-time insights at your fingertips.',
              icon: <BarChart3 className="text-indigo-600" />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Efficiency That Scales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <p className="text-5xl font-bold mb-2">70%</p>
              <p className="text-indigo-100 font-medium">Reduction in Manual Tasks</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">24/7</p>
              <p className="text-indigo-100 font-medium">Operational Uptime</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">0</p>
              <p className="text-indigo-100 font-medium">Manual Data Entry Errors</p>
            </div>
          </div>
          <p className="mt-16 text-indigo-50 text-lg leading-relaxed max-w-2xl mx-auto">
            Our clients scale their revenue without scaling their overhead. By automating repetitive tasks, you free up your team to focus on what matters: strategy, creativity, and growth.
          </p>
        </div>
      </section>

      {/* Section 4: Process */}
      <section id="process" className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Our <span className="text-indigo-600">Automation Framework</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We follow a structured process to ensure your automation infrastructure is robust and scalable.</p>
        </div>
        <div className="space-y-12">
          {[
            {
              step: '01',
              title: 'Process Mapping & Audit',
              desc: 'We map out your current workflows and identify every manual bottleneck. We look for high-impact automation opportunities.',
              icon: <Search className="text-indigo-600" />
            },
            {
              step: '02',
              title: 'Workflow Architecture',
              desc: 'We design the automated workflows, selecting the best tools (like Zapier, Make, or custom code) for each task.',
              icon: <Workflow className="text-indigo-600" />
            },
            {
              step: '03',
              title: 'Technical Implementation',
              desc: 'Our engineers build the integrations, triggers, and logic. We ensure every system talks to each other flawlessly.',
              icon: <Cpu className="text-indigo-600" />
            },
            {
              step: '04',
              title: 'Rigorous Testing',
              desc: 'We test every workflow under various scenarios to ensure reliability. We focus on "edge cases" to prevent system failures.',
              icon: <ShieldCheck className="text-indigo-600" />
            },
            {
              step: '05',
              title: 'Monitoring & Optimization',
              desc: 'We provide continuous monitoring and optimization of your workflows. Automation is a journey of constant improvement.',
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How Automation Saved <span className="text-indigo-400">Fashion Brand</span> 40 Hours a Week</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              By automating their order fulfillment logic and inventory syncing across 5 channels, we eliminated manual errors and freed up their team for strategic growth.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-white">40h</p>
                <p className="text-zinc-500 text-sm">Saved Weekly</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-zinc-500 text-sm">Inventory Accuracy</p>
              </div>
            </div>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
              Read More Success Stories <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-600/20 rounded-[3rem] blur-3xl"></div>
            <div className="relative bg-zinc-800 border border-zinc-700 rounded-[3rem] p-8 aspect-video flex items-center justify-center">
              <Workflow className="w-32 h-32 text-indigo-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 border-4 border-dashed border-indigo-500/30 rounded-full"
                />
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1.2, opacity: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute w-12 h-12 bg-indigo-500 rounded-full blur-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose Us */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Why We Are the Best <span className="text-indigo-600">Ecommerce Automation Agency</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We combine technical engineering with a deep understanding of ecommerce operations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Technical Engineering',
              desc: 'We are not just "tool users." We are engineers who can build custom middleware and serverless functions for any need.',
              icon: <Award className="text-indigo-600" />
            },
            {
              title: 'Operational Expertise',
              desc: 'We understand the complexities of ecommerce operations, from 3PL integrations to complex fulfillment logic.',
              icon: <Layers className="text-indigo-600" />
            },
            {
              title: 'Tool Agnostic',
              desc: 'We use the best tool for the job. Whether it\'s Zapier, Make, or custom Node.js code, we choose what works best for you.',
              icon: <Settings className="text-indigo-600" />
            },
            {
              title: 'Scalable Architecture',
              desc: 'We build systems that grow with you. Our automations are designed to handle 10 orders a day or 10,000.',
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
          <h2 className="text-4xl font-bold text-black tracking-tight">Expert Automation Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              q: 'What is an Ecommerce Automation Agency?',
              a: 'An **Ecommerce Automation Agency** specializes in identifying manual bottlenecks in your business and replacing them with automated workflows. We use tools and custom code to connect your tech stack and streamline your operations.'
            },
            {
              q: 'Will automation replace my team?',
              a: 'No. Automation is designed to handle the repetitive, low-value tasks that drain your team\'s energy. It allows your team to focus on high-level strategy, creativity, and customer relationships.'
            },
            {
              q: 'What tools do you use for automation?',
              a: 'We use a variety of tools including Zapier, Make (formerly Integromat), Shopify Flow, and custom Node.js/Python scripts. We select the best tools based on your specific requirements and budget.'
            },
            {
              q: 'How long does it take to implement automation?',
              a: 'Simple workflows can be implemented in a few days. Complex, multi-system integrations can take 2 to 4 weeks. We provide a clear timeline after our initial audit.'
            },
            {
              q: 'Can you automate my customer support?',
              a: 'Yes. We implement intelligent chatbots (like Gorgias or custom AI) that can handle common queries like "Where is my order?" and "What is your return policy?" instantly.'
            },
            {
              q: 'How do I know what to automate first?',
              a: 'We look for tasks that are high-frequency and low-complexity. These "quick wins" provide the immediate ROI and free up the most time for your team.'
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
        
        <Zap className="w-16 h-16 text-indigo-200 mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Scale Without Limits Today.</h2>
        <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Stop doing manual work. Partner with the **Ecommerce Automation Agency** that builds the future of operations. Let\'s audit your workflows today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:bg-zinc-100">
            Request Your Free Automation Audit
          </Link>
          <Link to="/analytics" className="bg-indigo-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-indigo-800">
            Explore Analytics Services
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
            <li><Link to="/analytics" className="hover:text-indigo-600">Advanced Analytics</Link></li>
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
            <li><Link to="/blog" className="hover:text-indigo-600">Automation Strategy Blog</Link></li>
            <li><Link to="/blog/shopify-automation-guide-2026" className="hover:text-indigo-600">Shopify Automation Guide</Link></li>
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
