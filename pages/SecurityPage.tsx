import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Lock, Eye, Server, Zap, ShieldAlert, 
  FileCheck, Activity, ArrowRight, Search, Shield, 
  FileText, Database, Globe, Share2, Award, HelpCircle, 
  Layout, Smartphone, UserCheck, Terminal, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const SecurityPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* SEO Metadata & Schema (Conceptual for React) */}
      <section className="sr-only">
        <h1>Ecommerce Security Agency</h1>
        <p>As a leading Ecommerce Security Agency, we provide enterprise-grade protection, PCI compliance, and sub-second performance optimization to keep your store safe and fast.</p>
      </section>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-semibold mb-6 uppercase tracking-wider">
          Enterprise Protection & Performance
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black tracking-tight leading-[1.1]">
          The <span className="text-emerald-600">Ecommerce Security Agency</span> for Global Brands
        </h1>
        <p className="text-zinc-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          Protect your brand reputation and customer trust. As a specialized **Ecommerce Security Agency**, we perform rigorous audits and implement enterprise-grade protection while optimizing for sub-second load times.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-emerald-600/20">
            Get Your Free Security Audit
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
              Why Security is the Foundation of <span className="text-emerald-600">Ecommerce Trust</span>
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              In the digital age, a single security breach can destroy years of brand building. If your store is not protected against modern threats, you are risking your customers' data and your business's future. Security is not just a technical requirement; it is a promise of trust to your customers.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              That is where a specialized **Ecommerce Security Agency** makes the difference. We don't just install SSL certificates. We architect multi-layered defense systems that protect against DDoS attacks, SQL injections, and data breaches, all while ensuring your site remains lightning-fast.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Our approach is built for high-volume brands that cannot afford a single second of downtime or a single byte of data loss. We bridge the gap between ironclad security and sub-second performance.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-600/10 rounded-[3rem] blur-2xl"></div>
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-[3rem] p-12 shadow-2xl overflow-hidden">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs font-mono text-zinc-500">security_audit.sh</div>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <p className="text-emerald-400">$ scanning vulnerabilities...</p>
                  <p className="text-zinc-400">Checking SSL certificates... [OK]</p>
                  <p className="text-zinc-400">Verifying PCI compliance... [OK]</p>
                  <p className="text-zinc-400">Testing DDOS mitigation... [OK]</p>
                  <p className="text-emerald-400">$ system secure. 0 threats detected.</p>
                </div>
                <div className="pt-8 flex justify-center">
                  <Lock className="w-32 h-32 text-emerald-500/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Services */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Comprehensive <span className="text-emerald-600">Security Services</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We provide the technical infrastructure and strategic protection needed to secure your growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Vulnerability Testing',
              desc: 'Continuous scanning and penetration testing to identify and neutralize potential threats before they can be exploited.',
              icon: <ShieldAlert className="text-emerald-600" />
            },
            {
              title: 'Compliance Enforcement',
              desc: 'Ensuring your store meets SSL, PCI-DSS, GDPR, and CCPA standards. We handle the technical complexity of data privacy.',
              icon: <FileCheck className="text-blue-600" />
            },
            {
              title: 'DDoS Mitigation',
              desc: 'Advanced strategies that keep your store online during high-traffic events or targeted attacks. Sub-second response times.',
              icon: <Activity className="text-orange-600" />
            },
            {
              title: 'Asset Optimization',
              desc: 'Sub-second performance through minification, lazy loading, and advanced caching. Security and speed are two sides of the same coin.',
              icon: <Zap className="text-indigo-600" />
            },
            {
              title: 'Secure Cloud Hosting',
              desc: 'We architect secure, scalable cloud environments on AWS or Google Cloud, optimized for ecommerce performance.',
              icon: <Server className="text-pink-600" />
            },
            {
              title: 'Real-Time Monitoring',
              desc: '24/7 threat intelligence and anomaly detection. We identify and block malicious traffic before it reaches your server.',
              icon: <Eye className="text-emerald-600" />
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
      <section className="mb-32 py-20 bg-emerald-600 rounded-[4rem] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Ironclad Protection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-emerald-100 font-medium">Uptime During Attacks</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">Sub-1s</p>
              <p className="text-emerald-100 font-medium">Global Load Times</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">PCI-L1</p>
              <p className="text-emerald-100 font-medium">Compliance Standard</p>
            </div>
          </div>
          <p className="mt-16 text-emerald-50 text-lg leading-relaxed max-w-2xl mx-auto">
            Our clients sleep better knowing their brand is protected by the best in the industry. By securing your infrastructure, you protect your revenue and your brand's long-term value.
          </p>
        </div>
      </section>

      {/* Section 4: Process */}
      <section id="process" className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Our <span className="text-emerald-600">Security Framework</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We follow a structured process to ensure your digital infrastructure is ironclad.</p>
        </div>
        <div className="space-y-12">
          {[
            {
              step: '01',
              title: 'Threat Assessment & Audit',
              desc: 'We perform a deep audit of your current infrastructure. We identify vulnerabilities, compliance gaps, and performance bottlenecks.',
              icon: <Search className="text-emerald-600" />
            },
            {
              step: '02',
              title: 'Security Architecture',
              desc: 'We design a multi-layered defense strategy tailored to your specific needs. We focus on both protection and performance.',
              icon: <Shield className="text-emerald-600" />
            },
            {
              step: '03',
              title: 'Technical Hardening',
              desc: 'Our engineers implement the security protocols, firewalls, and encryption. We ensure every entry point is locked down.',
              icon: <Terminal className="text-emerald-600" />
            },
            {
              step: '04',
              title: 'Performance Optimization',
              desc: 'We implement advanced caching and edge computing. We ensure your security measures don\'t slow down your store.',
              icon: <Zap className="text-emerald-600" />
            },
            {
              step: '05',
              title: 'Continuous Monitoring',
              desc: 'We provide 24/7 monitoring and threat intelligence. We identify and block threats in real-time, before they can cause damage.',
              icon: <Activity className="text-emerald-600" />
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-start p-8 bg-zinc-50 rounded-[3rem] border border-zinc-100">
              <div className="text-4xl font-black text-emerald-600/20 shrink-0">{item.step}</div>
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
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-600/20 border border-emerald-600/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              Success Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How We Protected <span className="text-emerald-400">Global Retailer</span> During Black Friday</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              By implementing advanced DDoS mitigation and edge caching, we ensured 100% uptime and sub-second performance during their highest traffic event of the year.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-zinc-500 text-sm">Uptime</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">0.8s</p>
                <p className="text-zinc-500 text-sm">Average Load Time</p>
              </div>
            </div>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors">
              Read More Success Stories <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-600/20 rounded-[3rem] blur-3xl"></div>
            <div className="relative bg-zinc-800 border border-zinc-700 rounded-[3rem] p-8 aspect-video flex items-center justify-center">
              <ShieldCheck className="w-32 h-32 text-emerald-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1.2, opacity: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="w-24 h-24 bg-emerald-500 rounded-full blur-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose Us */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Why We Are the Best <span className="text-emerald-600">Ecommerce Security Agency</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We combine technical mastery with a deep understanding of ecommerce performance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Technical Mastery',
              desc: 'We are experts in cyber security and cloud architecture. We handle the complex technical setup so you don\'t have to.',
              icon: <Award className="text-emerald-600" />
            },
            {
              title: 'Performance Focus',
              desc: 'We don\'t sacrifice speed for security. Our solutions are designed to make your store both ironclad and lightning-fast.',
              icon: <Zap className="text-emerald-600" />
            },
            {
              title: 'Compliance Experts',
              desc: 'We handle the complexity of PCI, GDPR, and CCPA. We ensure your store meets the highest standards of data privacy.',
              icon: <FileCheck className="text-emerald-600" />
            },
            {
              title: '24/7 Protection',
              desc: 'We are your long-term security partner. We provide continuous monitoring and threat intelligence for your brand.',
              icon: <CheckCircle2 className="text-emerald-600" />
            }
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
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
          <h2 className="text-4xl font-bold text-black tracking-tight">Expert Security Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              q: 'Why should I hire an Ecommerce Security Agency instead of using a plugin?',
              a: 'Plugins provide basic protection but often slow down your site and can have their own vulnerabilities. As an **Ecommerce Security Agency**, we provide custom, multi-layered defense strategies that are both more secure and more performant.'
            },
            {
              q: 'What is PCI compliance and why do I need it?',
              a: 'PCI-DSS is a set of security standards designed to ensure that all companies that accept, process, store, or transmit credit card information maintain a secure environment. It is mandatory for any ecommerce business.'
            },
            {
              q: 'How do you mitigate DDoS attacks?',
              a: 'We use advanced edge computing and global CDNs to identify and block malicious traffic before it reaches your server. This ensures your store remains online even during massive attacks.'
            },
            {
              q: 'Will security measures slow down my site?',
              a: 'Not with our approach. We optimize for both security and performance. In fact, many of our security measures (like edge caching) actually make your site faster.'
            },
            {
              q: 'How often should I perform a security audit?',
              a: 'We recommend a full security audit at least once a quarter. However, we provide 24/7 monitoring to identify and neutralize threats in real-time.'
            },
            {
              q: 'What is the most common security threat for ecommerce?',
              a: 'The most common threats include SQL injections, cross-site scripting (XSS), and DDoS attacks. We implement specific defenses against all of these and more.'
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
      <div className="bg-emerald-600 rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <ShieldCheck className="w-16 h-16 text-emerald-200 mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Protect Your Brand Today.</h2>
        <p className="text-emerald-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Stop leaving your security to chance. Partner with the **Ecommerce Security Agency** that protects the world\'s leading brands. Let\'s audit your infrastructure today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-white text-emerald-600 px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:bg-zinc-100">
            Request Your Free Security Audit
          </Link>
          <Link to="/automation" className="bg-emerald-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-emerald-800">
            Explore Automation Services
          </Link>
        </div>
      </div>

      {/* Internal Linking Footer */}
      <div className="mt-20 pt-10 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p className="font-bold text-black mb-4">Related Services</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/seo" className="hover:text-emerald-600">Ecommerce SEO</Link></li>
            <li><Link to="/cro" className="hover:text-emerald-600">Conversion Optimization</Link></li>
            <li><Link to="/analytics" className="hover:text-emerald-600">Advanced Analytics</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Case Studies</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/case-studies/jewelry-store" className="hover:text-emerald-600">Jewelry Store Success</Link></li>
            <li><Link to="/case-studies/clothing-store" className="hover:text-emerald-600">Clothing Store Scale</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Resources</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/blog" className="hover:text-emerald-600">Security Strategy Blog</Link></li>
            <li><Link to="/blog/ecommerce-security-checklist-2026" className="hover:text-emerald-600">Security Checklist</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Company</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/about-us" className="hover:text-emerald-600">About eCeez</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-600">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
