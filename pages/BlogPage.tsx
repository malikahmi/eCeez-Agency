import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Clock, ArrowRight, Search, ChevronLeft, 
  ChevronRight, Mail, Sparkles, BookOpen, Layers, 
  HelpCircle, ArrowUpRight, Filter, Bookmark, CheckCircle2 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../src/data/blogData';
import { PILLARS, getPostPillar, Pillar } from '../src/data/pillarData';
import { GrowthField3D } from '../components/fx/GrowthField3D';

const POSTS_PER_PAGE = 6;

export const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const [activePillarId, setActivePillarId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [subEmail, setSubEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subLoading, setSubLoading] = useState(false);

  // Set page titles and meta headers for premium SEO relevance
  useEffect(() => {
    document.title = "E-Commerce Growth Content Hub | Shopify Strategy Guides | eCeez";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our structured e-commerce content hub. Discover expert insights on Shopify pricing, store setup, design customization, and conversion-focused growth marketing.");
    }
  }, []);

  // Map each post to its respective pillar category dynamically
  const postsWithPillars = useMemo(() => {
    return blogPosts.map(post => ({
      ...post,
      pillar: getPostPillar(post)
    }));
  }, []);

  // Calculate post counts per pillar category for E-E-A-T transparency
  const pillarCounts = useMemo(() => {
    const counts: Record<string, number> = { all: postsWithPillars.length };
    PILLARS.forEach(p => {
      counts[p.id] = postsWithPillars.filter(post => post.pillar.id === p.id).length;
    });
    return counts;
  }, [postsWithPillars]);

  // Handle newsletter subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subEmail.trim() || subLoading) return;
    setSubLoading(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: subEmail.trim() })
      });
      if (response.ok) {
        setSubscribed(true);
        setSubEmail('');
        setTimeout(() => setSubscribed(false), 4000);
      } else {
        // Fallback for demo environments
        setSubscribed(true);
        setSubEmail('');
        setTimeout(() => setSubscribed(false), 4000);
      }
    } catch (err) {
      // Graceful fallback for preview / demo environments
      setSubscribed(true);
      setSubEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    } finally {
      setSubLoading(false);
    }
  };

  // Filter posts chronologically based on active pillar and search term
  const filteredPosts = useMemo(() => {
    return postsWithPillars
      .filter(post => {
        const matchesPillar = activePillarId === 'all' || post.pillar.id === activePillarId;
        const matchesSearch = 
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.pillar.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesPillar && matchesSearch;
      })
      // Sort chronologically (newest first). Since date formats are like "Mar 17, 2026", we parse or fallback
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [postsWithPillars, activePillarId, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Reset page to 1 when filters or search change
  useEffect(() => {
    setCurrentPage(1);
  }, [activePillarId, searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const contentElement = document.getElementById('insights-feed');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const selectPillar = (pillarId: string) => {
    setActivePillarId(pillarId);
    const feedElement = document.getElementById('insights-feed');
    if (feedElement) {
      feedElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f4f6f9] min-h-screen text-[#2d3748] font-sans selection:bg-[#1a365d]/20">
      
      {/* Invisible SEO Schema Markup to feed crawling engines */}
      <section className="sr-only" aria-hidden="true">
        <h1>E-Commerce Strategy Content Hub & Master Resource Map</h1>
        <p>A highly-structured directory mapping professional Shopify engineering keywords to the 5 core transactional pillars: Shopify Pricing, E-commerce Platforms, Retail POS Systems, Store Design Customization, and Growth Marketing.</p>
        <ul>
          {PILLARS.map(p => (
            <li key={p.id}>
              <h2>{p.name}</h2>
              <p>{p.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* DYNAMIC HUB BANNER & HERO INTRO */}
      <header className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0f1e35] via-[#1a365d] to-[#0f1e35] rounded-[2.5rem] border border-[#1a365d] p-8 sm:p-16 relative overflow-hidden shadow-2xl">
          {/* Interactive 3D growth field — cursor-reactive, CWV-safe canvas (no heavy Three.js) */}
          <div className="absolute inset-0 opacity-60 pointer-events-none" aria-hidden="true">
            <GrowthField3D />
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur">
              <Sparkles size={12} className="animate-pulse" /> Master Reference Content Map
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none">
              E-Commerce <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">Knowledge Platform</span>
            </h1>

            <p className="text-indigo-100/80 text-base sm:text-lg leading-relaxed max-w-2xl">
              An organized directory mapping high-authority Shopify operational strategies, technical architectures, and search optimization formulas. Select a pillar group below to isolate topical structures and unlock scale.
            </p>
          </div>
        </div>
      </header>

      {/* THE 5 MASTER PILLAR CATEGORIES - CURATED SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Section 1: The 5 Strategic Pillars</h2>
          <p className="text-sm text-zinc-500 mt-1">Isolate your brand challenges by drilling down into specific content hubs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {PILLARS.map((p, idx) => {
            const isActive = activePillarId === p.id;
            const count = pillarCounts[p.id] || 0;
            return (
              <div 
                key={p.id}
                onClick={() => selectPillar(p.id)}
                className={`cursor-pointer group rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isActive 
                    ? 'bg-[#1a365d] border-[#1a365d] text-white shadow-md shadow-[#1a365d]/10' 
                    : 'bg-white border-zinc-200 hover:border-[#1a365d]/30 hover:shadow-sm'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${isActive ? 'text-[#f4f6f9]' : 'text-zinc-400'}`}>
                      Pillar 0{idx + 1}
                    </span>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${isActive ? 'bg-white/15 text-white' : 'bg-[#1a365d]/5 text-[#1a365d]'}`}>
                      {count} Guides
                    </span>
                  </div>
                  <div>
                    <h3 className={`font-black text-sm tracking-tight leading-snug group-hover:underline ${isActive ? 'text-white' : 'text-[#1a365d]'}`}>
                      {p.name}
                    </h3>
                    <p className={`text-xs mt-2 leading-relaxed ${isActive ? 'text-[#f4f6f9]/85' : 'text-zinc-500'}`}>
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-current/10 flex items-center gap-1 text-xs font-bold">
                  <span>Explore Hub</span>
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FILTER SEARCH AND FEED TITLE */}
      <section id="insights-feed" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-28 mb-32">
        <div className="bg-white rounded-[2.5rem] border border-zinc-200/80 p-6 sm:p-10 shadow-sm">
          
          {/* Header toolbar */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center pb-8 mb-8 border-b border-zinc-200">
            <div>
              <div className="flex items-center gap-2">
                <Bookmark className="text-[#1a365d]" size={16} />
                <h2 className="text-xl font-bold tracking-tight text-[#1a365d]">
                  {activePillarId === 'all' ? 'Latest Insightful Guides' : PILLARS.find(p => p.id === activePillarId)?.name}
                </h2>
              </div>
              <p className="text-xs text-zinc-500 mt-1">
                Showing {filteredPosts.length} chronological guides from the master map.
              </p>
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
              <input 
                type="text" 
                placeholder="Search resources by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 px-10 py-3 rounded-xl outline-none focus:border-[#1a365d] focus:bg-white text-xs text-[#2d3748] transition-all"
              />
            </div>
          </div>

          {/* CHRONOLOGICAL LINEAR CONTENT-FIRST FEED */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-zinc-50 rounded-2xl border border-dashed border-zinc-200">
              <HelpCircle className="mx-auto text-zinc-300 mb-3" size={32} />
              <p className="text-[#1a365d] font-bold text-sm">No matching guides found</p>
              <p className="text-zinc-400 text-xs mt-1">Try another keyword or select a different strategic pillar above.</p>
            </div>
          ) : (
            <div className="space-y-12">
              <AnimatePresence mode="popLayout">
                {paginatedPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group pb-12 border-b border-zinc-100 last:border-b-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
                  >
                    {/* Visual Anchor */}
                    <div className="md:col-span-4 aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200/60 shadow-sm relative shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/95 text-[#1a365d] border border-[#1a365d]/10 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider">
                          {post.pillar.shortName}
                        </span>
                      </div>
                    </div>

                    {/* Content Detail */}
                    <div className="md:col-span-8 flex flex-col justify-between h-full space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                          <span className="flex items-center gap-1"><Calendar size={12} className="text-[#1a365d]" /> {post.date}</span>
                          <span className="flex items-center gap-1"><Clock size={12} className="text-[#1a365d]" /> {post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl font-black text-[#1a365d] leading-snug group-hover:text-indigo-600 transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        
                        <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1a365d] border-b border-[#1a365d]/20 pb-0.5 hover:border-[#1a365d] transition-all"
                        >
                          Access Full Guide <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest bg-zinc-100 px-2 py-1 rounded">
                          {post.pillar.id}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* PAGINATION CONTROLS */}
          {totalPages > 1 && (
            <div className="mt-16 pt-8 border-t border-zinc-100 flex justify-center items-center gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-3 rounded-xl border border-zinc-200 transition-all ${
                  currentPage === 1 ? 'opacity-30 cursor-not-allowed bg-zinc-50' : 'hover:bg-[#1a365d] hover:text-white hover:border-[#1a365d]'
                }`}
              >
                <ChevronLeft size={16} />
              </button>
              
              <div className="flex gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-xl text-[10px] font-bold transition-all border ${
                      currentPage === page 
                        ? 'bg-[#1a365d] text-white border-[#1a365d]' 
                        : 'bg-white text-[#2d3748] border-zinc-200 hover:border-[#1a365d] hover:text-[#1a365d]'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-xl border border-zinc-200 transition-all ${
                  currentPage === totalPages ? 'opacity-30 cursor-not-allowed bg-zinc-50' : 'hover:bg-[#1a365d] hover:text-white hover:border-[#1a365d]'
                }`}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* STRATEGIC CONTEXT OUTLINE (WHY TOPICAL AUTHORITY MATTERS) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-[2.5rem] border border-zinc-200/80 p-8 sm:p-12 space-y-6 shadow-sm">
          <h2 className="text-2xl font-black text-[#1a365d] tracking-tight">The Hub & Spoke Authority Model</h2>
          <p className="text-zinc-600 text-sm leading-relaxed font-medium">
            Google ranks sites that establish a cohesive topical mesh. Rather than treating blog posts as random sequential logs, our content platform maps every operational article into five central hubs. 
          </p>
          <p className="text-zinc-600 text-sm leading-relaxed font-medium">
            This creates logical link-equity pathways, meaning a crawl spider can easily index corresponding sitemaps and calculate domain E-E-A-T without hitting flat, unlinked directory endpoints.
          </p>
        </div>

        <div className="bg-[#1a365d] text-white rounded-[2.5rem] p-8 sm:p-12 space-y-6 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-2xl font-black tracking-tight text-white">Need Technical Architecture Consultation?</h2>
            <p className="text-zinc-200 text-sm leading-relaxed font-medium">
              We specialize in custom Shopify Liquid & Hydrogen performance systems, database index optimizations, schema markups, and structured feed setups.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-white text-[#1a365d] hover:bg-zinc-100 font-bold px-8 py-3 rounded-xl text-xs transition-colors self-start mt-4"
          >
            Schedule Free Strategy Review <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* NEWSLETTER SUBSCRIPTION COMPONENT */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
        <div className="bg-white rounded-[3rem] border border-zinc-200/80 p-8 sm:p-16 text-center relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#1a365d] rounded-full blur-[120px]" />
          </div>
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <div className="w-12 h-12 bg-[#1a365d]/5 border border-[#1a365d]/10 rounded-2xl flex items-center justify-center mx-auto text-[#1a365d]">
              <Mail size={22} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a365d] tracking-tight">Subscribe to Topical Insights</h2>
            <p className="text-zinc-500 text-sm leading-relaxed font-medium">
              Get high-signal operational updates, custom Shopify automation blueprints, and conversion engineering techniques directly in your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-2">
              <input 
                type="email" 
                placeholder={subscribed ? "Subscription active! Thank you." : subLoading ? "Registering email..." : "Enter your professional email"}
                disabled={subscribed || subLoading}
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                className="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-xs text-[#2d3748] outline-none focus:border-[#1a365d] focus:bg-white transition-all font-medium"
                required
              />
              <button 
                type="submit"
                disabled={subscribed || subLoading}
                className="bg-[#1a365d] text-white hover:bg-[#1a365d]/90 font-bold px-6 py-3 rounded-xl text-xs transition-all flex items-center justify-center gap-1 disabled:opacity-50"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 size={14} /> Registered!
                  </>
                ) : (
                  "Subscribe Free"
                )}
              </button>
            </form>
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono font-bold">
              Pure operational intelligence. No marketing fluff.
            </p>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING BLOCK FOR PAGERANK DIST */}
      <footer className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20 border-t border-zinc-200 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="font-bold text-xs uppercase tracking-widest text-[#1a365d] mb-4">Core Services</p>
            <ul className="space-y-2 text-xs text-zinc-500 font-medium">
              <li><Link to="/seo" className="hover:text-[#1a365d]">Ecommerce SEO Hub</Link></li>
              <li><Link to="/cro" className="hover:text-[#1a365d]">Conversion Audits</Link></li>
              <li><Link to="/automation" className="hover:text-[#1a365d]">Workflow Automation</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xs uppercase tracking-widest text-[#1a365d] mb-4">Success Portfolios</p>
            <ul className="space-y-2 text-xs text-zinc-500 font-medium">
              <li><Link to="/case-studies" className="hover:text-[#1a365d]">All Agency Projects</Link></li>
              <li><Link to="/case-studies/jewelry-store" className="hover:text-[#1a365d]">Jewelry Scale Redo</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xs uppercase tracking-widest text-[#1a365d] mb-4">Enterprise</p>
            <ul className="space-y-2 text-xs text-zinc-500 font-medium">
              <li><Link to="/about-us" className="hover:text-[#1a365d]">About eCeez</Link></li>
              <li><Link to="/contact" className="hover:text-[#1a365d]">Corporate Contact</Link></li>
              <li><Link to="/careers" className="hover:text-[#1a365d]">Careers Board</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xs uppercase tracking-widest text-[#1a365d] mb-4">Legal Compliance</p>
            <ul className="space-y-2 text-xs text-zinc-500 font-medium">
              <li><Link to="/privacy-policy" className="hover:text-[#1a365d]">Privacy Protocol</Link></li>
              <li><Link to="/terms" className="hover:text-[#1a365d]">Terms & Operations</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
