
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, ArrowRight, MessageSquare, Clock, Shield, Globe, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  const CONTACT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSecd8M7ki7GTCBKOb0shSgZVEoiA6QMcqyvbK3K4GTumiR16g/viewform?usp=publish-editor";

  useEffect(() => {
    document.title = "Contact eCeez | Expert Ecommerce Consulting Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get in touch with eCeez for expert ecommerce consulting services. We help brands scale through technical excellence, SEO, and conversion optimization.");
    }
  }, []);

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* SEO Metadata & Schema (Conceptual) */}
      <section className="sr-only">
        <h1>Contact eCeez - Ecommerce Consulting Services</h1>
        <p>Connect with our team of ecommerce experts for strategic consulting, high-performance development, and growth-focused marketing solutions.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-32">
        {/* Contact Information Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6 uppercase tracking-wider">
            Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1] tracking-tight text-black">
            Let's build <br /> <span className="text-indigo-600">something elite</span>.
          </h1>
          <p className="text-zinc-700 text-base sm:text-lg mb-8 sm:mb-12 max-w-md leading-relaxed">
            Ready to scale your brand? Our **ecommerce consulting services** are designed to provide you with the technical and strategic edge you need to dominate your market.
          </p>
          
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-indigo-600 shrink-0">
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-zinc-600 uppercase tracking-widest font-bold mb-0.5">Email us</p>
                <p className="text-black font-bold text-base sm:text-lg break-all">support@eceez.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-purple-600 shrink-0">
                <Phone size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-zinc-600 uppercase tracking-widest font-bold mb-0.5">Strategy Call</p>
                <p className="text-black font-bold text-base sm:text-lg">+1 (555) 000-1234</p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-blue-600 shrink-0">
                <MapPin size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-zinc-600 uppercase tracking-widest font-bold mb-0.5">Headquarters</p>
                <p className="text-black font-bold text-base sm:text-lg">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Live Trustpilot Proof near CTA contact points */}
          <div className="mt-12 p-6 rounded-2xl bg-zinc-50 border border-zinc-200/60 max-w-sm flex items-center gap-4">
            <div className="bg-[#00b67a] text-white p-3 rounded-xl font-bold flex items-center justify-center shrink-0 w-11 h-11 text-xl">
              ★
            </div>
            <div>
              <p className="text-xs font-black text-black">Verified 5.0 Rating on Trustpilot</p>
              <a 
                href="https://www.trustpilot.com/review/eceez.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 font-bold text-xs hover:underline flex items-center gap-1 mt-0.5"
              >
                Read our brand reviews <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Redirect Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full bg-zinc-50 p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] border border-zinc-200 shadow-2xl shadow-indigo-500/5 flex flex-col items-center justify-center text-center gap-8 min-h-[400px]"
        >
          {/* Host Profile Badge */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl bg-zinc-100">
              <img 
                src="https://i.ibb.co/pB3NQpRm/Untitled-design.png" 
                alt="Lead Solutions Designer" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Green glowing active status dot */}
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full animate-pulse shadow-md"></span>
          </div>

          <div className="space-y-3">
            <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-extrabold uppercase tracking-widest rounded-full">
              Your Call Host
            </div>
            <h2 className="text-3xl font-black text-black">Lead Growth Strategist</h2>
            <p className="text-zinc-500 font-bold text-xs uppercase tracking-wider">Founder & Chief Solutions Designer</p>
            <p className="text-zinc-600 max-w-sm text-sm leading-relaxed mt-2">
              Book a scaling strategy inquiry. You will meet with our lead growth strategist to discuss raw site metrics, latency reports, and automated CRM conversion tunnels.
            </p>
          </div>
          
          <a 
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-black text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all active:scale-[0.98] group"
          >
            Apply for Strategy Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black flex items-center gap-1.5 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span> Ready to analyze your store performance
          </p>
        </motion.div>
      </div>

      {/* Section 2: Why Contact Us? */}
      <div className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">Why Partner With <span className="text-indigo-600">eCeez Experts</span>?</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">We provide more than just technical support; we provide a roadmap to digital dominance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Strategy",
              desc: "Our consultants have scaled brands from zero to millions in revenue. We know what works and what doesn't.",
              icon: <Globe className="text-indigo-600" />
            },
            {
              title: "Technical Mastery",
              desc: "From headless commerce to complex API integrations, our engineers handle the heavy lifting with ease.",
              icon: <Shield className="text-indigo-600" />
            },
            {
              title: "Rapid Response",
              desc: "We value your time. Our team responds to all inquiries within 24 hours with actionable insights.",
              icon: <Clock className="text-indigo-600" />
            }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-zinc-200 p-10 rounded-[3rem] hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">{item.title}</h3>
              <p className="text-zinc-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: What to Expect */}
      <div className="mb-32 py-20 bg-zinc-50 rounded-[4rem] border border-zinc-200 px-8 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">What to Expect <span className="text-indigo-600">After You Reach Out</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">A transparent, efficient process designed to get your project moving quickly.</p>
        </div>
        <div className="space-y-8">
          {[
            {
              step: '01',
              title: 'Initial Review',
              desc: 'Our strategy team reviews your inquiry and digital footprint to prepare for our first conversation.'
            },
            {
              step: '02',
              title: 'Discovery Call',
              desc: 'A 30-minute deep dive into your goals, challenges, and technical requirements.'
            },
            {
              step: '03',
              title: 'Strategic Proposal',
              desc: 'We present a tailored roadmap and transparent pricing based on your specific ROI objectives.'
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start p-8 bg-white rounded-[2rem] border border-zinc-200">
              <div className="text-3xl font-black text-indigo-600/20 shrink-0">{item.step}</div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internal Linking Footer */}
      <div className="mt-20 pt-10 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p className="font-bold text-black mb-4">Our Services</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/seo" className="hover:text-indigo-600">Ecommerce SEO</Link></li>
            <li><Link to="/cro" className="hover:text-indigo-600">Conversion Optimization</Link></li>
            <li><Link to="/automation" className="hover:text-indigo-600">Store Automation</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Success Stories</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/case-studies" className="hover:text-indigo-600">View All Projects</Link></li>
            <li><Link to="/case-studies/jewelry-store" className="hover:text-indigo-600">Jewelry Success</Link></li>
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
            <li><Link to="/careers" className="hover:text-indigo-600">Careers</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
