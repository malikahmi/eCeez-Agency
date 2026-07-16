import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const CONTACT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSecd8M7ki7GTCBKOb0shSgZVEoiA6QMcqyvbK3K4GTumiR16g/viewform?usp=publish-editor";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Project', href: '/case-studies' },
    { name: 'About Us', href: '/about-us' },
  ];

  const isLinkActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex items-center justify-between rounded-full px-6 py-2 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg border border-zinc-200 shadow-2xl' : ''}`}>
          <Link to="/" className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-indigo-600 fill-indigo-600" />
            <span className="text-xl font-bold tracking-tighter text-black">eCeez</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors ${isLinkActive(link.href) ? 'text-indigo-600' : 'text-zinc-700 hover:text-black'} relative inline-flex items-center`}
              >
                {link.name === 'Project' ? (
                  <span className="relative pr-6 flex items-center">
                    Project
                    <span className="absolute -top-1.5 -right-1.5 bg-[#e12d2d] text-white text-[10px] font-black px-1.5 py-0.5 rounded-full leading-none shadow-sm select-none">
                      05
                    </span>
                  </span>
                ) : (
                  link.name
                )}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors ${isLinkActive('/contact') ? 'text-indigo-600' : 'text-zinc-700 hover:text-black'}`}
            >
              Contact
            </Link>
            <a 
              href={CONTACT_FORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glow-border bg-black text-white pl-4 pr-2 py-1.5 rounded-full text-sm font-bold hover:bg-zinc-900 transition-all flex items-center gap-3 shadow-md active:scale-95 group"
            >
              <span className="text-zinc-100 group-hover:text-white transition-colors">Free Expert Advice</span>
              <div className="flex items-center">
                {/* Avatar image - little small */}
                <div className="w-[22px] h-[22px] rounded-full border border-zinc-800 overflow-hidden bg-zinc-200 relative z-10">
                  <img 
                    src="https://i.ibb.co/pB3NQpRm/Untitled-design.png" 
                    alt="Ahmer Ameer" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* White circle with arrow overlapping */}
                <div className="w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center -ml-2 relative z-20 shadow-sm border border-zinc-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight size={11} className="text-black stroke-[3]" />
                </div>
              </div>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-600 hover:text-black"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-white border border-zinc-200 rounded-2xl p-6 shadow-2xl z-50"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${isLinkActive(link.href) ? 'text-indigo-600' : 'text-zinc-700 hover:text-black'} relative inline-flex items-center`}
                >
                  {link.name === 'Project' ? (
                    <span className="relative pr-6 flex items-center">
                      Project
                      <span className="absolute -top-1.5 -right-1.5 bg-[#e12d2d] text-white text-[10px] font-black px-1.5 py-0.5 rounded-full leading-none shadow-sm select-none">
                        05
                      </span>
                    </span>
                  ) : (
                    link.name
                  )}
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${isLinkActive('/contact') ? 'text-indigo-600' : 'text-zinc-700 hover:text-black'}`}
              >
                Contact
              </Link>
              <a 
                href={CONTACT_FORM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)} 
                className="w-full bg-black text-white pl-5 pr-3 py-2.5 rounded-full text-sm font-bold flex items-center justify-between active:scale-95 group"
              >
                <span className="text-zinc-100 group-hover:text-white transition-colors">Free Expert Advice</span>
                <div className="flex items-center">
                  <div className="w-[22px] h-[22px] rounded-full border border-zinc-800 overflow-hidden bg-zinc-200 relative z-10">
                    <img 
                      src="https://i.ibb.co/pB3NQpRm/Untitled-design.png" 
                      alt="Ahmer Ameer" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center -ml-2 relative z-20 shadow-sm border border-zinc-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight size={11} className="text-black stroke-[3]" />
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};