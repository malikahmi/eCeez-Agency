
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Instagram, Twitter, Youtube, Facebook, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || loading) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email.trim() })
      });
      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 4000);
      }
    } catch (err) {
      console.error('Subscription error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="w-full bg-white px-4 md:px-8 py-12 md:py-16">
      <div id="agency-footer" className="max-w-7xl mx-auto bg-[#0a0a0a] text-white rounded-[3rem] p-8 md:p-16 border border-zinc-900 shadow-2xl relative overflow-hidden">
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Newsletter and Socials Column */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Stay updated with eCeez news
            </h3>
            
            <form onSubmit={handleSubmit} className="relative max-w-md w-full">
              <input
                type="email"
                placeholder={subscribed ? "Thanks for subscribing!" : loading ? "Connecting..." : "Enter your email"}
                disabled={subscribed || loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full bg-[#121212] text-white rounded-full px-6 py-4 pr-16 border ${
                  subscribed ? 'border-emerald-600' : 'border-zinc-800 hover:border-zinc-700'
                } focus:outline-none focus:border-zinc-600 text-sm placeholder-zinc-500 transition-all`}
                required
              />
              <button
                type="submit"
                disabled={subscribed || loading}
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  subscribed ? 'bg-emerald-600 text-white' : 'bg-white text-black hover:bg-zinc-200'
                }`}
                aria-label="Subscribe to newsletter"
              >
                {subscribed ? <Check size={16} /> : <ArrowUpRight size={18} />}
              </button>
            </form>

            {/* Social Grid matching Reference style [in ↗] [ig ↗] */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { label: 'in', name: 'LinkedIn', icon: <Linkedin size={11} />, url: 'https://www.linkedin.com/company/eceez/' },
                { label: 'ig', name: 'Instagram', icon: <Instagram size={11} />, url: 'https://www.instagram.com/eceezagency/' },
                { label: 'fb', name: 'Facebook', icon: <Facebook size={11} />, url: 'https://www.facebook.com/eCeezagency/' },
                { label: 'x', name: 'Twitter', icon: <Twitter size={11} />, url: 'https://x.com' },
                { label: 'yt', name: 'YouTube', icon: <Youtube size={11} />, url: 'https://youtube.com' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#141414] border border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-900 px-3.5 py-2 rounded-full transition-all text-xs font-semibold group"
                  title={social.name}
                >
                  <span className="shrink-0">{social.icon}</span>
                  <span className="text-[10px] text-zinc-500 group-hover:text-zinc-300 font-bold">↗</span>
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-zinc-900/60">
              {/* Trustpilot Badge */}
              <a 
                href="https://www.trustpilot.com/evaluate/eceez.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-[#121212]/60 hover:bg-[#121212] border border-zinc-800/40 hover:border-zinc-700/80 rounded-xl px-4 py-2.5 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center bg-[#00b67a] text-white w-6 h-6 rounded-md">
                  <span className="text-xs font-black">★</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-extrabold tracking-tight text-white">Trustpilot</span>
                    <span className="text-[9px] bg-emerald-950 text-emerald-400 font-bold px-1 rounded uppercase tracking-wider scale-90">Excellent</span>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((s) => (
                        <span key={s} className="text-[#00b67a] text-[10px]">★</span>
                      ))}
                    </div>
                    <span className="text-[9px] text-zinc-500 group-hover:text-zinc-300 transition-colors">Evaluate ↗</span>
                  </div>
                </div>
              </a>

              {/* Shopify Partner Badge */}
              <div className="flex items-center bg-[#121212]/60 border border-zinc-800/40 rounded-lg px-3 py-1.5 transition-all duration-300 hover:border-zinc-700/80 select-none">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0802/5722/0853/files/shopify_partners_logo.png?v=1782923241"
                  alt="Shopify Partners Logo"
                  className="h-4 w-auto object-contain brightness-110 opacity-80"
                />
              </div>

              {/* Google Partner Badge */}
              <div className="flex items-center bg-[#121212]/60 border border-zinc-800/40 rounded-lg px-3 py-1.5 transition-all duration-300 hover:border-zinc-700/80 select-none">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0802/5722/0853/files/images.png?v=1782923469"
                  alt="Google Partner Badge"
                  className="h-4 w-auto object-contain brightness-110 opacity-80"
                />
              </div>

              {/* Meta Partner Badge */}
              <div className="flex items-center bg-[#121212]/60 border border-zinc-800/40 rounded-lg px-3 py-1.5 transition-all duration-300 hover:border-zinc-700/80 select-none">
                <img 
                  src="https://cdn.shopify.com/s/files/1/0802/5722/0853/files/Meta_lockup_positive-primary_RGB_scaled2.webp?v=1782923646"
                  alt="Meta Partner Badge"
                  className="h-4 w-auto object-contain brightness-110 opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Links Columns. Zero headers like reference screenshot */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-4">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              {[
                { title: 'Home', path: '/' },
                { title: 'Services', path: '/services' },
                { title: 'Projects', path: '/case-studies' },
                { title: 'Blog Insights', path: '/blog' },
                { title: 'Contact', path: '/contact' }
              ].map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="text-zinc-300 hover:text-white font-semibold text-sm transition-colors text-left"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              {[
                { title: 'Shopify SEO', path: '/shopify-seo' },
                { title: 'SEO Growth', path: '/seo' },
                { title: 'CRO Audit', path: '/cro' },
                { title: 'Analytics', path: '/analytics' },
                { title: 'Growth Automation', path: '/automation' },
                { title: 'Shopify for Fashion', path: '/shopify-for-fashion-brands' },
                { title: 'Shopify for Jewelry', path: '/shopify-for-jewelry-stores' },
                { title: 'Shopify for Perfume', path: '/shopify-for-perfume-brands' },
                { title: 'Shopify for Supplements', path: '/shopify-for-supplement-brands' },
                { title: 'Shopify for Beauty', path: '/shopify-for-beauty-brands' },
                { title: 'Shopify for Electronics', path: '/shopify-for-electronics-brands' },
                { title: 'Shopify for Furniture', path: '/shopify-for-furniture-brands' },
                { title: 'Shopify for Food & Beverage', path: '/shopify-for-food-and-beverage-brands' }
              ].map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="text-zinc-300 hover:text-white font-semibold text-sm transition-colors text-left"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Column 3 — Shopify Pillar Services */}
            <div className="flex flex-col gap-3">
              {[
                { title: 'Speed Optimization', path: '/shopify-speed-optimization' },
                { title: 'Shopify CRO', path: '/shopify-cro' },
                { title: 'Shopify Migration', path: '/shopify-migration' },
                { title: 'Maintenance Plans', path: '/shopify-maintenance' },
                { title: 'Theme Customization', path: '/shopify-theme-customization' },
                { title: 'Shopify Plus', path: '/shopify-plus-development' },
                { title: 'App Development', path: '/shopify-app-development' },
                { title: 'Custom Liquid Development', path: '/shopify-custom-liquid-development' },
                { title: 'Headless Commerce', path: '/shopify-headless-commerce' },
                { title: 'WooCommerce Development', path: '/woocommerce-development' },
                { title: 'Development Company', path: '/shopify-development-company' }
              ].map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="text-zinc-300 hover:text-white font-semibold text-sm transition-colors text-left"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
              {[
                { title: 'Conversion Calculator', path: '/tools/shopify-conversion-calculator' },
                { title: 'Taxonomy Mapper', path: '/tools/ecommerce-taxonomy-mapper' },
                { title: 'Ecommerce UX Guide', path: '/ecommerce-ux' },
                { title: 'About Us', path: '/about-us' },
                { title: 'Company Careers', path: '/careers' },
                { title: 'Store Security', path: '/security' },
                { title: 'Privacy Policy', path: '/privacy-policy' }
              ].map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="text-zinc-300 hover:text-white font-semibold text-sm transition-colors text-left"
                >
                  {link.title}
                </Link>
              ))}
            </div>

          </div>
        </div>

        {/* Big Agency Typography */}

        {/* Divider */}
        <div className="border-t border-zinc-900/80 my-8"></div>

        {/* Legal Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
          <div>
            Copyright © 2026 eCeez | Designed for Elite Commerce - Built with Precision
          </div>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>

        {/* Giant brand name — Symbol Studio style: last element, cropped at footer edge */}
        <div className="select-none w-full pt-14 -mb-12 md:-mb-24" aria-hidden="true">
          <h2 className="text-[13vw] md:text-[12vw] font-black tracking-tighter uppercase leading-[0.8] whitespace-nowrap block w-full text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-white/60 to-white/5">
            ECEEZ&reg;
          </h2>
        </div>

      </div>
    
        <p style={{fontSize:"12px",opacity:0.7,textAlign:"center",marginTop:"16px"}}>Value Hub LLC · 7901 4th St N, Suite 15810, St. Petersburg, FL 33702, USA</p>
</footer>
  );
};

