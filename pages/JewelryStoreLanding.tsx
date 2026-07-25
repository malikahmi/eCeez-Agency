
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ShoppingBag, 
  Star, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
  ShieldCheck,
  Gem,
  Sparkles,
  Award,
  Crown,
  Maximize2,
  Heart,
  User,
  Truck,
  RotateCcw,
  Percent,
  Headphones,
  Mail
} from 'lucide-react';

export const JewelryStoreLanding: React.FC = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [subEmail, setSubEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subLoading, setSubLoading] = useState(false);

  const handleSubscribeForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subEmail.trim() || subLoading) return;
    
    setSubLoading(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: subEmail.trim() })
      });
      if (response.ok) {
        setSubscribed(true);
        setSubEmail('');
        setTimeout(() => setSubscribed(false), 4000);
      }
    } catch (err) {
      console.error('Subscription error:', err);
    } finally {
      setSubLoading(false);
    }
  };

  const heroImages = [
    "https://www.catbirdnyc.com/media/catalog/product/c/b/cbj-2.3and2.8mmtennisnecklace-yg-on183_2_1.jpg",
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fm=webp&fit=crop&q=75&w=1600",
    "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fm=webp&fit=crop&q=75&w=1600"
  ];

  const nextHero = useCallback(() => {
    setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
  }, [heroImages.length]);

  const prevHero = useCallback(() => {
    setCurrentHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, [heroImages.length]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let interval: number;
    if (isAutoPlaying) {
      interval = window.setInterval(nextHero, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextHero]);

  const products = [
    { name: "Erina Solitaire Ring", price: "$180.00", oldPrice: null, rating: 4, tag: null, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fm=webp&fit=crop&q=75&w=600" },
    { name: "Esra Floral Pendant", price: "$250.00", oldPrice: null, rating: 5, tag: "SOLD OUT", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fm=webp&fit=crop&q=75&w=600" },
    { name: "Diamond Bangles", price: "$370.00", oldPrice: "$390.00", rating: 3, tag: "-5%", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fm=webp&fit=crop&q=75&w=600" },
    { name: "Lohan Pendant", price: "$17.00", oldPrice: "$19.00", rating: 4, tag: "-11%", img: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fm=webp&fit=crop&q=75&w=600" }
  ];

  const valueProps = [
    { icon: <Truck size={32} strokeWidth={1} />, title: "Worldwide Shipping", desc: "For all Orders Over $100" },
    { icon: <RotateCcw size={32} strokeWidth={1} />, title: "Money Back Guarantee", desc: "Guarante With In 30 Days" },
    { icon: <Percent size={32} strokeWidth={1} />, title: "Offers And Discounts", desc: "Back Returns In 7 Days" },
    { icon: <Headphones size={32} strokeWidth={1} />, title: "24/7 Support Services", desc: "Contact us Anytime" }
  ];

  return (
    <div className="bg-[#fff] min-h-screen text-[#333] font-sans selection:bg-[#c9a388] selection:text-white pb-0">
      
      {/* CASE STUDY HEADER (eCeez Branding) */}
      <div className="bg-[#f8f8f8] text-[#c9a388] text-[9px] uppercase tracking-[0.4em] py-3 px-6 font-bold flex justify-between items-center fixed top-0 left-0 right-0 z-[100] border-b border-zinc-200">
        <div className="flex items-center gap-3">
          <Crown size={12} className="fill-[#c9a388]" />
          <span>Case Study: Premium Jewelry E-commerce</span>
        </div>
        <div className="hidden md:block text-zinc-500">Engineered by eCeez Agency © 2024</div>
      </div>

      {/* TOP PROMO BAR */}
      <div className="mt-[37px] bg-[#f8f8f8] border-b border-zinc-100 py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[11px] font-medium text-zinc-500 tracking-tight">Free shipping world wide for all orders over $199 <span className="underline cursor-pointer">Shop Now</span></p>
          <div className="flex items-center gap-6 text-[11px] font-medium text-zinc-500">
            <span className="cursor-pointer hover:text-black transition-colors">Track Order</span>
            <span className="cursor-pointer hover:text-black transition-colors">Help Center</span>
            <div className="flex items-center gap-1 cursor-pointer hover:text-black">English <ChevronDown size={10} /></div>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <nav className={`sticky top-[37px] z-50 bg-white border-b border-zinc-100 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-3xl font-bold tracking-widest uppercase">JUBILEE</div>
          
          <div className="hidden lg:flex items-center gap-8 text-[12px] font-semibold uppercase tracking-wider">
            <span className="text-[#c9a388] cursor-pointer">Home</span>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#c9a388] transition-colors">Shop <ChevronDown size={12} /></div>
            <span className="cursor-pointer hover:text-[#c9a388] transition-colors">Collections</span>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#c9a388] transition-colors">Necklaces <ChevronDown size={12} /></div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#c9a388] transition-colors">More <ChevronDown size={12} /></div>
          </div>

          <div className="flex items-center gap-5">
            <Search size={20} className="text-zinc-500 hover:text-black cursor-pointer transition-colors" />
            <User size={20} className="text-zinc-500 hover:text-black cursor-pointer transition-colors" />
            <div className="relative cursor-pointer group">
              <Heart size={20} className="text-zinc-500 group-hover:text-black transition-colors" />
              <span className="absolute -top-2 -right-2 bg-[#c9a388] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </div>
            <div className="relative cursor-pointer group">
              <ShoppingBag size={20} className="text-zinc-500 group-hover:text-black transition-colors" />
              <span className="absolute -top-2 -right-2 bg-[#c9a388] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">1</span>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section 
        className="relative h-[80vh] bg-[#f4f1ef] overflow-hidden group/hero"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentHeroIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center px-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-[#c9a388] text-xs font-bold uppercase tracking-[0.3em]">Rubans 925 Sterling</p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-zinc-800">
                  Rubans Modern Minimal <br /> Ring Hoop Earrings
                </h1>
                <p className="text-zinc-500 text-lg max-w-md font-medium">Awesome products for the dynamic urban lifestyle</p>
                <button className="bg-[#c9a388] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl">
                  Shop Now
                </button>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="hidden lg:block relative"
              >
                <img 
                  src={heroImages[currentHeroIndex]} 
                  className="w-full h-auto rounded-[10rem] shadow-2xl"
                  alt="Jewelry Hero"
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <button onClick={prevHero} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-white transition-all opacity-0 group-hover/hero:opacity-100"><ChevronLeft size={20} /></button>
        <button onClick={nextHero} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-white transition-all opacity-0 group-hover/hero:opacity-100"><ChevronRight size={20} /></button>
      </section>

      {/* VALUE PROPS BAR */}
      <section className="py-16 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {valueProps.map((prop, i) => (
            <div key={i} className="flex items-center gap-5">
              <div className="text-[#c9a388]">{prop.icon}</div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold uppercase tracking-tight">{prop.title}</h4>
                <p className="text-[11px] font-medium text-zinc-400">{prop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROMOTIONAL GRID */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 group relative h-[500px] bg-[#f8f8f8] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fm=webp&fit=crop&q=75&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Ring" />
            <div className="absolute top-12 left-12 space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-widest">Diamond Ring</p>
              <h3 className="text-4xl font-bold leading-tight">Yellow Gold & <br /> Diamond Ring</h3>
              <button className="text-[10px] font-black uppercase tracking-widest border-b border-black pb-1 hover:text-[#c9a388] hover:border-[#c9a388] transition-all">Shop Now</button>
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="group relative h-[237px] bg-[#f8f8f8] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fm=webp&fit=crop&q=75&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Bracelet" />
              <div className="absolute top-8 left-8 space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest">Diamond Bracelets</p>
                <h3 className="text-2xl font-bold">Infinity Diamond <br /> Bracelet</h3>
                <button className="text-[10px] font-black uppercase tracking-widest border-b border-black pb-1 hover:text-[#c9a388] hover:border-[#c9a388] transition-all">Shop Now</button>
              </div>
            </div>
            <div className="group relative h-[237px] bg-[#f8f8f8] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fm=webp&fit=crop&q=75&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Pendant" />
              <div className="absolute top-8 left-8 space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest">Diamond Pendant</p>
                <h3 className="text-2xl font-bold">Teardrop Diamond <br /> Pendant</h3>
                <button className="text-[10px] font-black uppercase tracking-widest border-b border-black pb-1 hover:text-[#c9a388] hover:border-[#c9a388] transition-all">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST PRODUCTS */}
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-3 tracking-tight">Latest Products</h2>
          <p className="text-zinc-400 text-xs mb-12">There are many variations of passages of lorem Ipsum available</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square bg-[#f8f8f8] mb-5 overflow-hidden">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {p.tag && (
                    <span className={`absolute top-4 left-4 text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${p.tag === 'SOLD OUT' ? 'bg-zinc-800 text-white' : 'bg-[#c9a388] text-white'}`}>
                      {p.tag}
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-white/80 backdrop-blur-sm border-t border-zinc-100">
                    <button className="w-full text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#c9a388] transition-colors">Quick Add</button>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Bellagio Jewelers</p>
                  <h4 className="text-sm font-bold tracking-tight">{p.name}</h4>
                  <div className="flex justify-center gap-0.5 mb-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={10} className={idx < p.rating ? "fill-[#c9a388] text-[#c9a388]" : "text-zinc-200"} />
                    ))}
                  </div>
                  <div className="flex justify-center items-baseline gap-3">
                    <span className="text-sm font-bold">{p.price}</span>
                    {p.oldPrice && <span className="text-[11px] text-zinc-300 line-through">{p.oldPrice}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES CIRCLES (Simulated) */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Flower Necklace", items: "4 Items", img: "https://img.drz.lazcdn.com/static/pk/p/5e58d55d06224052e08d253dd798ca1c.jpg_720x720q80.jpg_.webp" },
            { label: "Rose Gold Ring", items: "5 Items", img: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fm=webp&fit=crop&q=75&w=500" },
            { label: "Drops Earring", items: "5 Items", img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fm=webp&fit=crop&q=75&w=500" },
            { label: "Butterfly Pendant", items: "3 Items", img: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fm=webp&fit=crop&q=75&w=500" }
          ].map((cat, i) => (
            <div key={i} className="group relative aspect-[4/5] overflow-hidden bg-white shadow-sm border border-zinc-100 p-6 flex flex-col justify-end">
              <img src={cat.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="relative z-10 bg-white p-4 inline-block max-w-[150px]">
                <h5 className="text-sm font-bold tracking-tight">{cat.label}</h5>
                <p className="text-[10px] text-zinc-400 font-medium">{cat.items}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="py-32 text-center bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-3 tracking-tight">What Our Clients Say</h2>
          <p className="text-zinc-400 text-xs mb-16">Authentic feedback from our archival community</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Becca", role: "Founder", text: "Reliable product, consistently delivers. The craftsmanship is simply unparalleled in the industry.", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" },
              { name: "Augusta Wind", role: "Web Designer", text: "Excellent product, A+ customer service. Every piece tells a unique story that resonates with my style.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" },
              { name: "Reema Ghurde", role: "Manager", text: "Impressive quality, durable and reliable. I've been wearing my heritage band daily for years.", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop" }
            ].map((test, i) => (
              <div key={i} className="p-10 border border-zinc-100 bg-[#fdfdfd] text-left space-y-6 relative">
                <p className="text-sm font-medium text-zinc-500 italic leading-relaxed">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={test.avatar} className="w-12 h-12 rounded-full grayscale" alt={test.name} />
                  <div>
                    <h6 className="text-xs font-bold uppercase tracking-wider">{test.name}</h6>
                    <p className="text-[10px] text-zinc-400 font-medium uppercase">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS */}
      <section className="py-20 border-y border-zinc-100 opacity-40 hover:opacity-100 transition-opacity">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-16 items-center">
          <div className="text-xl font-black uppercase tracking-tighter">Jewelry</div>
          <div className="text-xl font-black uppercase tracking-tighter">Howard's</div>
          <div className="text-xl font-black uppercase tracking-tighter">Aurea</div>
          <div className="text-xl font-black uppercase tracking-tighter">EVM</div>
          <div className="text-xl font-black uppercase tracking-tighter">Simon G</div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="relative py-24 overflow-hidden bg-zinc-50 text-black border-y border-zinc-200">
        <img src="https://images.unsplash.com/photo-1515562141207-7a18b5ce31f3?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-5" alt="BG" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">Subscribe To Our Newsletter</h2>
          <p className="text-zinc-500 text-sm">Subscribe to our latest newsletter to get news about special discounts and upcoming sales</p>
          <form onSubmit={handleSubscribeForm} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder={subscribed ? "Thanks for subscribing!" : subLoading ? "Connecting..." : "Your email address"}
              disabled={subscribed || subLoading}
              value={subEmail}
              onChange={(e) => setSubEmail(e.target.value)}
              className="flex-1 bg-white border border-zinc-200 px-8 py-5 text-black text-sm outline-none focus:ring-2 focus:ring-[#c9a388]"
              required
            />
            <button 
              type="submit"
              disabled={subscribed || subLoading}
              className="bg-[#c9a388] text-white px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-black transition-all disabled:opacity-50"
            >
              {subscribed ? "Subscribed!" : subLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-widest">About Our Store</h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Welcome to our store, where we pride ourselves on providing exceptional products and unparalleled customer service. Our store is a haven for those who appreciate quality, style, and innovation.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-black hover:border-black transition-all cursor-pointer"><User size={14} /></div>
              <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-black hover:border-black transition-all cursor-pointer"><Mail size={14} /></div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-xs text-zinc-500 font-medium">
              <li className="hover:text-black transition-colors cursor-pointer">Contact Us</li>
              <li className="hover:text-black transition-colors cursor-pointer">Shipping</li>
              <li className="hover:text-black transition-colors cursor-pointer">Sitemap</li>
              <li className="hover:text-black transition-colors cursor-pointer">FAQs</li>
              <li className="hover:text-black transition-colors cursor-pointer">About Us</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-widest">Your Account</h4>
            <ul className="space-y-3 text-xs text-zinc-500 font-medium">
              <li className="hover:text-black transition-colors cursor-pointer">Search</li>
              <li className="hover:text-black transition-colors cursor-pointer">Delivery Information</li>
              <li className="hover:text-black transition-colors cursor-pointer">Locality</li>
              <li className="hover:text-black transition-colors cursor-pointer">Order Tracking</li>
              <li className="hover:text-black transition-colors cursor-pointer">Shipping & Refund</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4 text-xs text-zinc-500 font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#c9a388] shrink-0" />
                <span>Jubilee - Jewellery Store <br /> 507-Union Trade Ipsum <br /> Centre France</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#c9a388] shrink-0" />
                <span>hello@blocks.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#c9a388] shrink-0" />
                <span>(+91) 9876-543-210</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest">© 2024, Jubilee - Jewellery Store (Password: demo) Powered by Shopify</p>
          <div className="flex gap-4 opacity-30">
            <img src="https://cdn.worldvectorlogo.com/logos/visa.svg" className="h-4" />
            <img src="https://cdn.worldvectorlogo.com/logos/mastercard-6.svg" className="h-4" />
            <img src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg" className="h-4" />
          </div>
        </div>
      </footer>

      {/* FINAL CASE STUDY NAVIGATION (Consistent with eCeez) */}
      <div className="bg-[#f8f8f8] py-12 px-6 text-center text-black relative overflow-hidden border-t border-zinc-200">
        <div className="absolute inset-0 bg-[#c9a388]/5 opacity-30" />
        <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#c9a388] mb-8 relative z-10">Next Exploration</p>
        <div className="flex justify-center items-center gap-12 relative z-10">
          <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#c9a388] transition-colors">
            <ChevronLeft size={16} /> Previous Project
          </button>
          <div className="w-[1px] h-8 bg-zinc-200" />
          <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#c9a388] transition-colors">
            Next Project <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

function ChevronDown({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}

function MapPin({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function Phone({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
