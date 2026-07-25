import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Globe, Zap, Shield, MessageSquare, Share2, 
  Layout, ArrowRight, CheckCircle2, Search, ShieldCheck, 
  FileText, Database, Award, HelpCircle, Eye, 
  Smartphone, UserCheck, Activity, Layers, 
  Repeat, ZapOff, Clock, Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const CollaborationPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* SEO Metadata & Schema (Conceptual for React) */}
      <section className="sr-only">
        <h1>Team Collaboration Platform</h1>
        <p>As a leading Team Collaboration Platform, we provide global sync, role-based access, and centralized asset management to help your high-velocity team stay ahead.</p>
      </section>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-semibold mb-6 uppercase tracking-wider">
          Global Sync & Collaboration
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black tracking-tight leading-[1.1]">
          The <span className="text-purple-600">Team Collaboration Platform</span> for Global Brands
        </h1>
        <p className="text-zinc-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          Break down silos and unite your global team. As a specialized **Team Collaboration Platform**, we provide the tools high-velocity teams need to stay in sync with real-time data and asset sharing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-purple-600/20">
            Request Your Free Demo
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
              Why Your Team Needs a <span className="text-purple-600">Unified Platform</span>
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              In the modern business landscape, teams are often spread across global time zones. If your team is struggling with fragmented communication, outdated assets, and siloed data, you are losing velocity. Every minute spent hunting for information is a minute lost in your growth.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              That is where a specialized **Team Collaboration Platform** makes the difference. We don't just provide chat tools. We architect unified ecosystems that connect your entire team, from design and marketing to operations and support.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Our approach is built for high-growth brands that need to maintain velocity while scaling their headcount. We help you build a "single source of truth" that keeps everyone aligned and moving in the same direction.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-purple-600/10 rounded-[3rem] blur-2xl"></div>
            <div className="relative bg-white border border-zinc-200 rounded-[3rem] p-12 shadow-2xl overflow-hidden">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">JD</div>
                  <div className="flex-1">
                    <div className="h-2 w-24 bg-zinc-200 rounded-full mb-2"></div>
                    <div className="h-2 w-48 bg-zinc-100 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <p className="text-sm text-zinc-600 italic">"The new product assets are ready for review. Check the centralized folder."</p>
                </div>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-zinc-${i * 100} flex items-center justify-center text-[10px] font-bold`}>
                      U{i}
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-600 flex items-center justify-center text-[10px] font-bold text-white">
                    +12
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
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Comprehensive <span className="text-purple-600">Collaboration Services</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We provide the technical infrastructure and strategic workflows needed to unite your global team.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Role-Based Access Control',
              desc: 'Granular permissions that ensure every team member has exactly the access they need. Secure, scalable, and easy to manage.',
              icon: <Shield className="text-purple-600" />
            },
            {
              title: 'Centralized Asset Management',
              desc: 'A single source of truth for all your digital assets. No more hunting for the latest version of a logo or product image.',
              icon: <Layers className="text-blue-600" />
            },
            {
              title: 'Integrated Feedback Loops',
              desc: 'Real-time commenting and approval workflows built directly into your dashboard. Speed up production cycles.',
              icon: <MessageSquare className="text-emerald-600" />
            },
            {
              title: 'Global Real-Time Sync',
              desc: 'Work together as if you\'re in the same room. Our infrastructure ensures sub-second data synchronization across time zones.',
              icon: <Globe className="text-orange-600" />
            },
            {
              title: 'Custom Workflow Triggers',
              desc: 'Automate your internal processes. We build custom triggers that notify the right people at the right time.',
              icon: <Zap className="text-pink-600" />
            },
            {
              title: 'Activity & Velocity Tracking',
              desc: 'Monitor your team\'s performance in real-time. We provide deep insights into project velocity and resource allocation.',
              icon: <Activity className="text-purple-600" />
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
      <section className="mb-32 py-20 bg-purple-600 rounded-[4rem] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Unite Your Global Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <p className="text-5xl font-bold mb-2">40%</p>
              <p className="text-purple-100 font-medium">Increase in Velocity</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-purple-100 font-medium">Asset Accuracy</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">0</p>
              <p className="text-purple-100 font-medium">Communication Silos</p>
            </div>
          </div>
          <p className="mt-16 text-purple-50 text-lg leading-relaxed max-w-2xl mx-auto">
            Our clients scale faster because their teams are perfectly aligned. By removing communication friction, you allow your team to focus on what matters: growing your brand.
          </p>
        </div>
      </section>

      {/* Section 4: Process */}
      <section id="process" className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Our <span className="text-purple-600">Collaboration Framework</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We follow a structured process to ensure your collaboration infrastructure is robust and scalable.</p>
        </div>
        <div className="space-y-12">
          {[
            {
              step: '01',
              title: 'Silo Audit & Gap Analysis',
              desc: 'We identify where communication is breaking down and where data is being siloed. We look for the biggest friction points.',
              icon: <Search className="text-purple-600" />
            },
            {
              step: '02',
              title: 'Platform Architecture',
              desc: 'We design the unified platform, selecting the best tools and integrations to connect your entire team.',
              icon: <Layout className="text-purple-600" />
            },
            {
              step: '03',
              title: 'Technical Implementation',
              desc: 'Our engineers build the platform, set up permissions, and implement the real-time sync infrastructure.',
              icon: <Database className="text-purple-600" />
            },
            {
              step: '04',
              title: 'Team Onboarding',
              desc: 'We provide comprehensive training to ensure your team knows how to use the new platform effectively.',
              icon: <UserCheck className="text-purple-600" />
            },
            {
              step: '05',
              title: 'Continuous Optimization',
              desc: 'We provide ongoing support and optimization to ensure your platform grows with your team.',
              icon: <Activity className="text-purple-600" />
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-start p-8 bg-zinc-50 rounded-[3rem] border border-zinc-100">
              <div className="text-4xl font-black text-purple-600/20 shrink-0">{item.step}</div>
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
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-600/20 border border-purple-600/30 text-purple-400 text-xs font-bold uppercase tracking-widest">
              Success Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How We United <span className="text-purple-400">Global Tech Team</span> Across 12 Time Zones</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              By implementing a unified collaboration platform with real-time sync and centralized asset management, we saw a massive increase in their project velocity.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-white">+40%</p>
                <p className="text-zinc-500 text-sm">Project Velocity</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-zinc-500 text-sm">Team Alignment</p>
              </div>
            </div>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-purple-400 font-bold hover:text-purple-300 transition-colors">
              Read More Success Stories <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-purple-600/20 rounded-[3rem] blur-3xl"></div>
            <div className="relative bg-zinc-800 border border-zinc-700 rounded-[3rem] p-8 aspect-video flex items-center justify-center">
              <Users className="w-32 h-32 text-purple-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1.2, opacity: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="w-24 h-24 bg-purple-500 rounded-full blur-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose Us */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Why We Are the Best <span className="text-purple-600">Team Collaboration Platform</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We combine technical mastery with a deep understanding of team dynamics.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Technical Mastery',
              desc: 'We are experts in real-time sync and cloud architecture. We handle the complex technical setup so you don\'t have to.',
              icon: <Award className="text-purple-600" />
            },
            {
              title: 'Team Dynamics',
              desc: 'We understand the human side of collaboration. Our platforms are designed to be intuitive and easy to use.',
              icon: <UserCheck className="text-purple-600" />
            },
            {
              title: 'Custom Solutions',
              desc: 'Every team is different. We build custom collaboration ecosystems tailored to your specific business model.',
              icon: <Briefcase className="text-purple-600" />
            },
            {
              title: 'Ongoing Support',
              desc: 'We are your long-term collaboration partner. We provide continuous monitoring and optimization of your platform.',
              icon: <CheckCircle2 className="text-purple-600" />
            }
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
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
          <h2 className="text-4xl font-bold text-black tracking-tight">Expert Collaboration Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              q: 'What is a Team Collaboration Platform?',
              a: 'A **Team Collaboration Platform** is a unified ecosystem that connects your entire team, providing tools for real-time communication, asset management, and workflow automation. It serves as a "single source of truth" for your business.'
            },
            {
              q: 'How does real-time sync work across time zones?',
              a: 'We use advanced cloud infrastructure and edge computing to ensure that data is synchronized across global time zones in sub-seconds. This allows your team to work together as if they were in the same room.'
            },
            {
              q: 'Can you integrate with our existing tools?',
              a: 'Yes. We are experts in building custom integrations for a variety of tools, including Slack, Microsoft Teams, Jira, and more. We ensure your new platform talks to your existing tech stack flawlessly.'
            },
            {
              q: 'What is the benefit of role-based access control?',
              a: 'Role-based access control (RBAC) ensures that every team member has exactly the access they need to perform their job, and nothing more. This improves security and simplifies management as your team grows.'
            },
            {
              q: 'How do you track team velocity?',
              a: 'We implement custom dashboards that track key performance indicators (KPIs) like project completion rates, task cycle times, and resource allocation. This allows you to identify and remove bottlenecks in real-time.'
            },
            {
              q: 'Will a new platform be difficult for my team to learn?',
              a: 'Not with our approach. We focus on building intuitive, user-friendly platforms and provide comprehensive training to ensure your team can hit the ground running.'
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
      <div className="bg-purple-600 rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <Users className="w-16 h-16 text-purple-200 mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Unite Your Team Today.</h2>
        <p className="text-purple-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Stop working in silos. Partner with the **Team Collaboration Platform** that drives real velocity. Let\'s build your unified ecosystem today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:bg-zinc-100">
            Request Your Free Demo
          </Link>
          <Link to="/services" className="bg-purple-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-purple-800">
            View All Services
          </Link>
        </div>
      </div>

      {/* Internal Linking Footer */}
      <div className="mt-20 pt-10 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p className="font-bold text-black mb-4">Related Services</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/seo" className="hover:text-purple-600">Ecommerce SEO</Link></li>
            <li><Link to="/cro" className="hover:text-purple-600">Conversion Optimization</Link></li>
            <li><Link to="/analytics" className="hover:text-purple-600">Advanced Analytics</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Case Studies</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/case-studies/jewelry-store" className="hover:text-purple-600">Jewelry Store Success</Link></li>
            <li><Link to="/case-studies/clothing-store" className="hover:text-purple-600">Clothing Store Scale</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Resources</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/blog" className="hover:text-purple-600">Collaboration Strategy Blog</Link></li>
            <li><Link to="/blog/remote-team-management-2026" className="hover:text-purple-600">Remote Team Guide</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Company</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/about-us" className="hover:text-purple-600">About eCeez</Link></li>
            <li><Link to="/contact" className="hover:text-purple-600">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
