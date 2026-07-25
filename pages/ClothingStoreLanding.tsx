
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Search, 
  ShoppingCart, 
  Heart, 
  Star, 
  Truck, 
  Package, 
  RotateCcw, 
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Check,
  ArrowRight,
  Zap,
  Leaf,
  Activity,
  Layers,
  MousePointer2,
  Smartphone
} from 'lucide-react';

export const ClothingStoreLanding: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeTab, setActiveTab] = useState('description');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  const images = [
    "https://image.hm.com/assets/hm/d2/1c/d21cf3507b0afe7ebc714be01b6444565c1d0077.jpg?imwidth=1200",
    "https://image.hm.com/assets/hm/e0/3a/e03a4b1ee84abc548d9b5ee2cd48c35a04e20703.jpg?imwidth=1200",
    "https://image.hm.com/assets/hm/13/8c/138c00352ee60eba1cffaed76a4c1351ed3a02aa.jpg?imwidth=1200",
    "https://image.hm.com/assets/hm/90/0b/900bd100ed1a0ad3f4b33a0c9fd5e6e3b21ce21d.jpg?imwidth=1200"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setShowStickyBar(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 2000);
  };

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans selection:bg-black selection:text-white pb-20">
      {/* Case Study Metadata Bar */}
      <div className="bg-indigo-600 text-white text-[10px] uppercase tracking-[0.3em] py-3 px-6 font-bold flex justify-between items-center fixed top-0 left-0 right-0 z-[60]">
        <div className="flex items-center gap-2">
          <Zap size={12} className="fill-white" />
          <span>Case Study: High-Conversion E-commerce Architecture</span>
        </div>
        <div className="hidden md:block">Built by eCeez Agency © 2024</div>
      </div>

      {/* Sticky Top Bar (Promo) - Offset by metadata bar */}
      <div className="bg-zinc-100 text-zinc-600 text-[9px] uppercase tracking-[0.2em] py-2 text-center font-bold mt-[40px]">
        Complimentary express shipping on orders over $250 — <span className="text-zinc-900 underline">Code: ECEEZ01</span>
      </div>

      {/* Secondary Navbar for Case Study */}
      <nav className={`sticky top-[40px] z-50 bg-white/80 backdrop-blur-md transition-all duration-300 border-b border-zinc-100 ${isScrolled ? 'py-3 shadow-sm' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter uppercase">Essentials</div>
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            <span className="text-zinc-900 cursor-pointer border-b-2 border-black pb-1">Men</span>
            <span className="hover:text-zinc-900 cursor-pointer transition-colors pb-1">Women</span>
            <span className="hover:text-zinc-900 cursor-pointer transition-colors pb-1">Collections</span>
            <span className="hover:text-zinc-900 cursor-pointer transition-colors pb-1">Archived</span>
          </div>
          <div className="flex items-center gap-6">
            <Search size={20} className="cursor-pointer text-zinc-400 hover:text-black transition-colors" />
            <div className="relative group cursor-pointer">
              <ShoppingCart size={20} className="text-zinc-400 group-hover:text-black transition-colors" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[9px] flex items-center justify-center rounded-full font-bold">2</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Gallery Section (Left) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-zinc-50 group shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                src={images[currentImageIndex]} 
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            <button 
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 active:scale-95 z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 active:scale-95 z-10"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 rounded-full transition-all duration-300 ${currentImageIndex === i ? 'w-8 bg-black' : 'w-2 bg-black/20'}`}
                />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {images.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setCurrentImageIndex(i)}
                className={`aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${currentImageIndex === i ? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details (Right) */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Core Collection</span>
              <div className="w-1 h-1 bg-zinc-300 rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Limited Edition</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
              PREMIUM <br /> ARCHIVAL HOODIE
            </h1>
            <div className="flex items-baseline gap-4">
              <p className="text-3xl font-bold">$145.00</p>
              <p className="text-zinc-400 line-through font-medium">$210.00</p>
            </div>
          </div>

          <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-zinc-100 transition-colors">
            <div className="flex items-center gap-3">
              <Zap size={16} className="text-indigo-500 fill-indigo-500" />
              <p className="text-xs font-bold uppercase tracking-wider">Fast Delivery</p>
            </div>
            <p className="text-[10px] text-zinc-500 font-bold">In stock - Ships in 24h</p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Select Size</p>
              <button className="text-[10px] font-black uppercase tracking-[0.2em] underline hover:text-zinc-500 transition-colors">Size Guide</button>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-5 rounded-xl font-black text-sm transition-all relative overflow-hidden ${
                    selectedSize === size 
                      ? 'bg-black text-white shadow-2xl' 
                      : 'bg-white text-zinc-900 border border-zinc-200 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full h-20 rounded-[2rem] font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-4 relative overflow-hidden ${
                isAdding ? 'bg-green-500 scale-[0.98]' : 'bg-black text-white hover:bg-zinc-800'
              }`}
            >
              <AnimatePresence mode="wait">
                {isAdding ? (
                  <motion.div key="success" initial={{ y: 20 }} animate={{ y: 0 }} className="flex items-center gap-2">
                    <Check size={20} /> Added to Cart
                  </motion.div>
                ) : (
                  <motion.div key="default" initial={{ y: -20 }} animate={{ y: 0 }} className="flex items-center gap-2">
                    <ShoppingCart size={18} /> Add to Cart — $145
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            
            <button className="w-full py-6 rounded-[2rem] border border-zinc-200 font-black uppercase tracking-widest text-[10px] hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2">
              <Heart size={14} /> Add to Wishlist
            </button>
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-2 gap-4 py-8 border-y border-zinc-100">
            <div className="flex items-center gap-3">
              <Leaf size={16} className="text-zinc-400" />
              <p className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">100% French Terry Cotton</p>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={16} className="text-zinc-400" />
              <p className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">Ethically Sourced</p>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw size={16} className="text-zinc-400" />
              <p className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">30-day Free Returns</p>
            </div>
            <div className="flex items-center gap-3">
              <Package size={16} className="text-zinc-400" />
              <p className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">Plastic-Free Shipping</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between group cursor-pointer" onClick={() => setActiveTab(activeTab === 'description' ? '' : 'description')}>
              <h4 className="text-sm font-black uppercase tracking-wider">Product Description</h4>
              <ChevronDown size={16} className={activeTab === 'description' ? 'rotate-180' : ''} />
            </div>
            <AnimatePresence>
              {activeTab === 'description' && (
                <motion.p 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="text-xs text-zinc-500 leading-relaxed font-medium overflow-hidden"
                >
                  This Premium Archival Hoodie is the pinnacle of our Season 04 collection. Crafted from 520GSM heavy-weight French Terry, it offers a distinct structured drape that holds its shape wash after wash. Features a custom drop-shoulder fit, reinforced side panels, and silk-screened minimalist branding on the left wrist.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Customer Testimonials & Photo Reviews Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-t border-zinc-100">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-16">
          {/* Reviews Score Recap Block */}
          <div className="w-full lg:w-1/3 space-y-6 bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Verified Feedback</p>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-black tracking-tight text-black">4.9</span>
                <span className="text-zinc-400 font-bold text-lg">/ 5.0</span>
              </div>
            </div>

            {/* Micro Rating Stars */}
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="fill-indigo-600 text-indigo-600" />
                ))}
              </div>
              <p className="text-xs font-bold text-zinc-900">184 Verified Reviews</p>
            </div>

            <p className="text-xs text-zinc-500 font-medium leading-relaxed">
              98% of customers recommend the Premium Archival Hoodie. Ratings are compiled from verified season buyers only.
            </p>

            {/* Rating Bars */}
            <div className="space-y-2.5 pt-4 border-t border-zinc-200/60">
              {[
                { stars: 5, pct: 92, count: 169 },
                { stars: 4, pct: 6, count: 11 },
                { stars: 3, pct: 2, count: 4 },
                { stars: 2, pct: 0, count: 0 },
                { stars: 1, pct: 0, count: 0 }
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-xs font-medium">
                  <span className="w-3 text-right font-black">{row.stars}</span>
                  <Star size={10} className="fill-zinc-400 text-zinc-400 shrink-0" />
                  <div className="flex-1 h-2 bg-zinc-200/80 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${row.pct}%` }} />
                  </div>
                  <span className="w-8 text-right text-zinc-400 font-mono text-[10px]">{row.pct}%</span>
                </div>
              ))}
            </div>

            {/* Quick Tag Recaps */}
            <div className="pt-4 border-t border-zinc-200/60 space-y-3">
              <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Fits Mentioned</p>
              <div className="flex flex-wrap gap-1.5">
                {['True to Size (88%)', 'Slightly Oversized (12%)', 'Heavy-weight Drapery'].map(fit => (
                  <span key={fit} className="text-[10px] font-bold bg-white border border-zinc-200/80 text-zinc-700 px-2.5 py-1 rounded-lg">
                    {fit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Cards & Interactions */}
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-6">
              <div>
                <h3 className="text-2xl font-black text-black tracking-tight">Community Showcase</h3>
                <p className="text-xs text-zinc-400 font-medium">See how other streetwear buyers style the hoodie.</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-black text-white rounded-xl text-xs font-bold">All Reviews</button>
                <button className="px-4 py-2 bg-zinc-100 text-zinc-600 hover:bg-zinc-200 rounded-xl text-xs font-bold">With Photos</button>
              </div>
            </div>

            {/* Interactive Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  id: "rev-1",
                  name: "Marcus K.",
                  status: "Verified Purchase",
                  date: "May 14, 2026",
                  stars: 5,
                  text: "The 520GSM fabric weight is insane. It fits exactly how a premium oversized hoodie should—structured, dropped shoulder, and sits perfectly at the waist. Best French Terry in my collection.",
                  userImg: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fm=webp&fit=crop",
                  helpfulness: 32
                },
                {
                  id: "rev-2",
                  name: "Elena R.",
                  status: "Verified Purchase",
                  date: "May 08, 2026",
                  stars: 5,
                  text: "Genuinely thick but super comfortable. The hood actually holds its shape and stands up instead of flopping. Worth every single penny. I will definitely be ordering again.",
                  userImg: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fm=webp&fit=crop",
                  helpfulness: 19
                },
                {
                  id: "rev-3",
                  name: "Tyler J.",
                  status: "Verified Purchase",
                  date: "April 29, 2026",
                  stars: 4,
                  text: "Minimalist branding is sleek. Hand-screened detailing on the wrist is a very nice touch. It shrunk just a tiny bit on a high heat wash, so I highly recommend air drying.",
                  userImg: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=600&auto=format&fm=webp&fit=crop",
                  helpfulness: 14
                },
                {
                  id: "rev-4",
                  name: "Chloe M.",
                  status: "Verified Purchase",
                  date: "April 15, 2026",
                  stars: 5,
                  text: "The color is absolutely perfect, and the drop-shoulder has that perfect slouchy but tailored silhouette. E-Commerce product layout made it extremely easy to pick my size!",
                  userImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fm=webp&fit=crop",
                  helpfulness: 25
                }
              ].map((rev) => (
                <div key={rev.id} className="group border border-zinc-200/80 rounded-3xl p-6 bg-white space-y-4 hover:shadow-lg hover:border-zinc-300 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm text-black">{rev.name}</h4>
                          <span className="text-[9px] font-black bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded uppercase tracking-wider">{rev.status}</span>
                        </div>
                        <p className="text-[10px] text-zinc-400 font-bold">{rev.date}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: rev.stars }).map((_, s) => (
                          <Star key={s} size={12} className="fill-indigo-600 text-indigo-600" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-zinc-600 font-medium leading-relaxed mt-4">"{rev.text}"</p>

                    {/* Customer Photo */}
                    <div className="mt-4 aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 relative group/photo cursor-pointer">
                      <img src={rev.userImg} className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500" alt={`${rev.name} wearing Archival Hoodie`} />
                      <div className="absolute inset-0 bg-black/10 group-hover/photo:bg-black/0 transition-colors" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1 rounded bg-zinc-900 border border-zinc-200 text-[8px] font-black uppercase tracking-wider text-black">
                        Verified Fit Photo
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-zinc-100 pt-4 mt-6">
                    <p className="text-[10px] text-zinc-400 font-bold">Verifiably Purchased size {rev.id === 'rev-1' || rev.id === 'rev-3' ? 'XL' : 'M'}</p>
                    <button className="flex items-center gap-1.5 hover:bg-zinc-50 p-2 rounded-lg transition-colors text-zinc-400 hover:text-black">
                      <Check size={12} className="text-green-500" />
                      <span className="text-[10px] font-black uppercase tracking-wider">Helpful ({rev.helpfulness})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Deep Dive - Light Section */}
      <section className="bg-zinc-50 text-black py-32 mt-20 relative overflow-hidden border-y border-zinc-200">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-indigo-500/20">
                <Activity size={12} /> Technical Strategy
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                BUILT FOR <br /><span className="text-indigo-500">CONVERSION.</span>
              </h2>
              <p className="text-lg text-zinc-600 font-medium leading-relaxed max-w-md">
                We don't just design; we architect. This product page uses React Server Components and headless Shopify logic to achieve near-instantaneous load times.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <p className="text-4xl font-black text-black">99<span className="text-indigo-500 font-normal">+</span></p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Performance Score</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-black text-black">12<span className="text-indigo-500 font-normal">%</span></p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Avg. AOV Increase</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 opacity-50">
                {['Shopify Plus', 'Headless', 'Tailwind', 'Framer Motion', 'SEO Optimized'].map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-widest border border-zinc-200 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-white border border-zinc-200 p-12 flex flex-col justify-center gap-8 shadow-2xl">
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500"><Smartphone size={24} /></div>
                    <div>
                      <h4 className="font-bold text-sm">Mobile-First UI</h4>
                      <p className="text-xs text-zinc-500">Optimized thumb-reach zones for mobile checkout.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500"><MousePointer2 size={24} /></div>
                    <div>
                      <h4 className="font-bold text-sm">Micro-Interactions</h4>
                      <p className="text-xs text-zinc-500">Fluid transitions reducing cognitive friction.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500"><Layers size={24} /></div>
                    <div>
                      <h4 className="font-bold text-sm">Design System</h4>
                      <p className="text-xs text-zinc-500">Modular component library for rapid scaling.</p>
                    </div>
                  </div>
               </div>
               
               {/* Abstract Grid Graphic */}
               <div className="absolute -bottom-20 -right-20 w-64 h-64 opacity-20 pointer-events-none">
                 <svg className="w-full h-full text-indigo-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M0 10H100M0 20H100M0 30H100M0 40H100M0 50H100M0 60H100M0 70H100M0 80H100M0 90H100" stroke="currentColor" strokeWidth="0.5"/>
                   <path d="M10 0V100M20 0V100M30 0V100M40 0V100M50 0V100M60 0V100M70 0V100M80 0V100M90 0V100" stroke="currentColor" strokeWidth="0.5"/>
                 </svg>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Review Spotlight */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-black text-black" />)}
          </div>
          <h3 className="text-2xl md:text-4xl font-black italic tracking-tight leading-relaxed">
            "eCeez transformed our storefront from a basic template into a conversion machine. Our mobile traffic finally converts at the same rate as desktop."
          </h3>
          <div className="space-y-1">
            <p className="font-black uppercase tracking-[0.2em] text-xs">Aiden Pierce</p>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Founder, Vault Streetwear</p>
          </div>
        </div>
      </section>

      {/* Cross-sell Section with Refined Layout */}
      <section className="py-24 border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-xl font-black uppercase tracking-[0.2em]">Complete the Fit</h2>
            <button className="text-[10px] font-black uppercase tracking-widest hover:text-indigo-500 transition-colors">Shop All Accessories</button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Heavyweight Sweatpants", price: "$115", img: "https://m.media-amazon.com/images/I/815kmGTrF+L._AC_SX500_.jpg" },
              { name: "Vintage Wash Beanie", price: "$55", img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fm=webp&fit=crop&q=75&w=500" },
              { name: "Ribbed Crew Socks", price: "$28", img: "https://www.sockittome.com/cdn/shop/files/PJC0018-PYC0018-BeesKnees-Laydown_600x_crop_center.jpg?v=1724931351&format=webp" },
              { name: "Tactical Canvas Tote", price: "$75", img: "https://cdn.shopify.com/s/files/1/1367/5207/files/MilitaryCanvasToteBagGSEcruWhiteI3A5C-WCC92_2a771a15-682b-4a23-a034-b4f1155b79bd_600x.jpg?v=1729175192&format=webp" }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-100 relative shadow-sm">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest">{item.name}</h4>
                    <p className="text-[9px] font-bold text-zinc-400 mt-1 uppercase">Limited Supply</p>
                  </div>
                  <p className="text-xs font-black">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Mobile Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-[70] bg-white border-t border-zinc-200 p-4 md:hidden flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
          >
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-widest truncate max-w-[150px]">Archival Hoodie</p>
              <p className="text-sm font-black">$145.00</p>
            </div>
            <button 
              onClick={handleAddToCart}
              className="bg-black text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-transform"
            >
              Add to Cart
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final Case Study Navigation */}
      <div className="bg-zinc-100 py-12 px-6 text-center border-t border-zinc-200 mt-20">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6">Explore More Work</p>
        <div className="flex justify-center gap-8">
          <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-indigo-500 transition-colors">
            <ChevronLeft size={16} /> Previous Project
          </button>
          <div className="w-px h-4 bg-zinc-300" />
          <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-indigo-500 transition-colors">
            Next Project <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
