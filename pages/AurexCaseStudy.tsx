
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Zap, Shield, Search, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AurexCaseStudy: React.FC = () => {
  const [subEmail, setSubEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subLoading, setSubLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
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

  return (
    <div className="bg-white min-h-screen font-sans text-black">
      {/* Navigation Bar (Mockup from Image) */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/case-studies" className="text-zinc-500 hover:text-black transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-tighter">
            <ArrowLeft size={16} /> Back
          </Link>
          <div className="hidden md:flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="cursor-pointer hover:text-indigo-600 transition-colors">Home</span>
            <span className="cursor-pointer hover:text-indigo-600 transition-colors">Catalog</span>
            <span className="cursor-pointer hover:text-indigo-600 transition-colors">Contact</span>
          </div>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2">
           <span className="text-2xl font-black tracking-tighter italic">AUREX</span>
        </div>

        <div className="flex items-center gap-4">
          <Search size={18} className="cursor-pointer" />
          <User size={18} className="cursor-pointer" />
          <ShoppingBag size={18} className="cursor-pointer" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#D12621]">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=75&w=1600&auto=format&fm=webp&fit=crop" 
            alt="Aurex Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest mb-6">New Arrival</span>
            <h1 className="text-[15vw] md:text-[12vw] font-black leading-[0.8] text-white tracking-tighter uppercase italic">
              THE WINTER<br />LAYER
            </h1>
            <div className="mt-8 flex flex-col items-center gap-4">
               <p className="text-white/80 text-sm font-medium tracking-widest uppercase">Aurex Premium Collection 2026</p>
               <button className="text-white border-b border-white pb-1 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
                 View Our Collection
               </button>
            </div>
          </motion.div>
        </div>

        {/* Big Background Text */}
        <div className="absolute bottom-10 left-10 z-0">
          <span className="text-[20vw] font-black text-black/20 leading-none tracking-tighter italic uppercase">AUREX</span>
        </div>
      </section>

      {/* Product Grid 1 */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            { name: "Puffer Jacket", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=75&w=600&auto=format&fm=webp&fit=crop" },
            { name: "Leni", img: "https://sam-nyc.com/cdn/shop/files/LUMI_CAVIAR_017_600x.jpg?v=1763608180&format=webp" },
            { name: "Sherpa Denver", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=75&w=600&auto=format&fm=webp&fit=crop" },
            { name: "Sherpa Denver", img: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?q=75&w=600&auto=format&fm=webp&fit=crop" },
            { name: "Freedom Vest", img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=75&w=600&auto=format&fm=webp&fit=crop" },
            { name: "Sherpa Coat", img: "https://m.media-amazon.com/images/I/51o5qTw1OhL._AC_SX679_.jpg" },
          ].map((p, i) => (
            <div key={i} className="text-center group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-zinc-100 mb-4">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">{p.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Split Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-[80vh] bg-zinc-900 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=75&w=1000&auto=format&fm=webp&fit=crop" 
            alt="Leather Jacket" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="h-[80vh] bg-zinc-50 flex flex-col items-center justify-center p-12 relative">
          <div className="max-w-md w-full">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">Hoodie Anorak</h2>
              <span className="text-zinc-500 font-medium">$230.00</span>
            </div>
            <div className="aspect-[3/4] bg-white shadow-2xl overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=75&w=800&auto=format&fm=webp&fit=crop" 
                alt="Hoodie" 
                className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">Puffer Jacket</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { name: "Stormi", price: "$595.00", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=75&w=600&auto=format&fm=webp&fit=crop" },
            { name: "Phoenix", price: "$800.00", img: "https://eurostore.wearephoenix.com/cdn/shop/files/PhoenixBomberJacketblackBACK.png?v=1725542251&width=600&format=webp" },
            { name: "Freestyle", price: "$500.00", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=75&w=600&auto=format&fm=webp&fit=crop" },
            { name: "Freedom Vest", price: "$350.00", img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=75&w=600&auto=format&fm=webp&fit=crop" },
          ].map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-zinc-100 mb-6">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-black uppercase tracking-widest">{p.name}</h3>
                <p className="text-zinc-500 text-[10px] font-bold">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop Now Banner */}
      <section className="bg-black py-12 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-6xl md:text-9xl font-black text-white uppercase italic tracking-tighter">Shop Now</span>
          ))}
        </motion.div>
      </section>

      {/* Lookbook Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="aspect-[3/4] overflow-hidden bg-zinc-100">
            <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=75&w=800&auto=format&fm=webp&fit=crop" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xs font-black uppercase tracking-widest">Puffer Jacket</h3>
        </div>
        <div className="space-y-6">
          <div className="aspect-[3/4] overflow-hidden bg-zinc-100">
            <img src="https://sam-nyc.com/cdn/shop/files/Sherpa_Denver_Camel_5335_800x.jpg?v=1772050069&format=webp" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xs font-black uppercase tracking-widest">Sherpa Coat</h3>
        </div>
        <div className="space-y-6">
          <div className="aspect-[3/4] overflow-hidden bg-zinc-100">
            <img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=75&w=800&auto=format&fm=webp&fit=crop" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xs font-black uppercase tracking-widest">Sherpa Denver</h3>
        </div>
      </section>

      {/* Giant Footer Text */}
      <section className="py-20 px-6 overflow-hidden">
         <h2 className="text-[25vw] font-black text-black leading-none tracking-tighter italic uppercase text-center">AUREX</h2>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-100 py-20 px-10 border-t border-zinc-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em]">Shop</h4>
            <p className="text-xs text-zinc-600 cursor-pointer hover:text-black">Search</p>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em]">Brand</h4>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em]">Connect</h4>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em]">Get on the list</h4>
            <form onSubmit={handleSubscribe} className="flex border-b border-black pb-2">
              <input 
                type="email" 
                placeholder={subscribed ? "Thanks!" : subLoading ? "..." : "Email address"}
                disabled={subscribed || subLoading}
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                className="bg-transparent text-xs w-full outline-none placeholder-zinc-500" 
                required
              />
              <button 
                type="submit" 
                disabled={subscribed || subLoading}
                className="text-[10px] font-black uppercase min-w-[30px] disabled:opacity-50"
              >
                {subscribed ? "✓" : "OK"}
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
          <p>© 2026 AUREX, Powered by Shopify</p>
          <p>Terms and Policies</p>
        </div>
      </footer>
    </div>
  );
};
