
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scissors, 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Zap,
  Award,
  Smartphone,
  CheckCircle2,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Target,
  User,
  Star,
  Brush,
  Wind,
  Coffee,
  Play,
  Quote
} from 'lucide-react';

export const BarberLanding: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    { name: "The Executive Cut", price: "$65", time: "60 min", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fm=webp&fit=crop&q=75&w=600", desc: "Our signature service including consultation, precision cut, hot towel finish, and style." },
    { name: "Straight Razor Shave", price: "$45", time: "45 min", img: "https://cdn.prod.website-files.com/6672a2a0411fe821d4b8fd72/67b1d413c733cd8240a892cb_DSC05672_resized-p-800.jpg", desc: "Traditional multi-step shave with pre-shave oil, hot towels, and cooling balm." },
    { name: "Beard Sculpting", price: "$35", time: "30 min", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fm=webp&fit=crop&q=75&w=600", desc: "Detailed shaping and lining with straight razor finish and beard oil treatment." },
    { name: "The Refresh", price: "$25", time: "20 min", img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fm=webp&fit=crop&q=75&w=600", desc: "Neck clean-up and line-up to keep you looking sharp between full appointments." },
  ];

  const barbers = [
    { name: "Marco Rossi", role: "Master Barber", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fm=webp&fit=crop&q=75&w=300" },
    { name: "Julian Vane", role: "Stylist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fm=webp&fit=crop&q=75&w=300" },
    { name: "Sasha Grey", role: "Detail Artist", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fm=webp&fit=crop&q=75&w=300" },
  ];

  return (
    <div className="bg-[#fdfcf9] min-h-screen text-[#0a0a0a] font-sans selection:bg-[#c5a059] selection:text-white pt-[40px]">
      
      {/* CASE STUDY HEADER */}
      <div className="bg-[#fdfcf9] text-[#c5a059] text-[10px] uppercase tracking-[0.4em] py-3 px-6 font-bold flex justify-between items-center fixed top-0 left-0 right-0 z-[100] border-b border-zinc-200 backdrop-blur-md">
        <div className="flex items-center gap-3 font-sans">
          <Zap size={14} className="fill-[#c5a059]" />
          <span>Case Study: Service Commerce Optimization</span>
        </div>
        <div className="hidden md:block italic font-sans text-zinc-500">Architected by eCeez Agency</div>
      </div>

      {/* NAVIGATION */}
      <nav className="fixed top-[40px] left-0 right-0 z-50 py-6 px-10 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 bg-[#c5a059] flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <Scissors className="-rotate-45 group-hover:rotate-0 text-black transition-transform duration-500" size={16} />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic text-black">Shortcut</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
          <a href="#" className="text-[#c5a059] hover:text-black transition-colors">Experience</a>
          <a href="#" className="hover:text-[#c5a059] transition-colors">Services</a>
          <a href="#" className="hover:text-[#c5a059] transition-colors">Artisans</a>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-[#c5a059] transition-all">Book Now</button>
        </div>
      </nav>

      {/* HERO SECTION: SPLIT IMMERSIVE */}
      <section className="relative h-screen flex flex-col lg:flex-row overflow-hidden">
        <div className="w-full lg:w-[45%] h-full flex flex-col justify-center px-10 lg:px-20 z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block text-[#c5a059] text-[10px] font-black uppercase tracking-[0.5em]">Est. 2009 • San Francisco</span>
            <h1 className="text-7xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter italic uppercase text-black">
              CRAFT <br />
              <span className="text-[#c5a059]">ABOVE</span> <br />
              ALL.
            </h1>
            <p className="text-zinc-600 text-lg max-w-sm italic leading-relaxed">
              We provide an unparalleled grooming ritual that honors the heritage of barbering while embracing the precision of modern craft.
            </p>
            <div className="flex gap-6 pt-6">
              <button className="flex items-center gap-3 bg-[#c5a059] text-black px-10 py-5 rounded-full font-black uppercase text-xs hover:bg-black hover:text-white transition-all group">
                Reserve a Chair <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="flex items-center gap-3 border border-zinc-200 text-black px-10 py-5 rounded-full font-black uppercase text-xs hover:bg-zinc-50 transition-all">
                <Play size={16} className="fill-black" /> The Ritual
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full relative"
          >
            <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fm=webp&fit=crop&q=75&w=1200" className="w-full h-full object-cover grayscale" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fdfcf9] via-[#fdfcf9]/20 to-transparent" />
          </motion.div>
        </div>

        {/* Floating Stat Overlay */}
        <div className="absolute bottom-10 left-10 lg:left-20 flex gap-12 text-black/40">
           <div className="space-y-1">
              <p className="text-2xl font-black italic text-[#c5a059]">15k+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest">Rituals Completed</p>
           </div>
           <div className="space-y-1">
              <p className="text-2xl font-black italic text-[#c5a059]">4.9</p>
              <p className="text-[10px] font-bold uppercase tracking-widest">Google Reviews</p>
           </div>
        </div>
      </section>

      {/* SERVICES: ASYMMETRICAL GRID */}
      <section className="py-32 px-10 lg:px-20 bg-zinc-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12 sticky top-40 h-fit">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none text-black">The <br /><span className="text-[#c5a059]">Services.</span></h2>
              <p className="text-zinc-500 max-w-sm italic">Each service is a dedicated performance, combining traditional tools with luxury skincare products.</p>
            </div>
            
            <div className="space-y-8">
              {services.map((s, i) => (
                <div 
                  key={i} 
                  className={`cursor-pointer group border-l-2 transition-all pl-6 py-2 ${activeService === i ? 'border-[#c5a059]' : 'border-zinc-200'}`}
                  onMouseEnter={() => setActiveService(i)}
                >
                  <h4 className={`text-xl font-bold uppercase tracking-tight transition-colors ${activeService === i ? 'text-black' : 'text-zinc-400'}`}>{s.name}</h4>
                  <div className={`mt-2 text-sm text-zinc-500 transition-all duration-500 overflow-hidden ${activeService === i ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}>
                    {s.desc}
                    <div className="flex gap-4 pt-4 font-black text-[#c5a059] uppercase tracking-widest text-[10px]">
                      <span>{s.price}</span>
                      <span className="text-zinc-300">/</span>
                      <span>{s.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="bg-black text-white px-12 py-5 rounded-full font-black uppercase text-xs hover:bg-[#c5a059] transition-all">View All Services</button>
          </div>

          <div className="lg:col-span-7">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl border border-zinc-200">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeService}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                  src={services[activeService].img} 
                  className="w-full h-full object-cover grayscale"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 space-y-2">
                 <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#c5a059]">Now Visualizing</p>
                 <h3 className="text-3xl font-black italic uppercase text-white">{services[activeService].name}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-40 text-center px-10 lg:px-20 bg-white relative overflow-hidden border-y border-zinc-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-[#c5a059]" />
        <div className="max-w-4xl mx-auto space-y-12">
           <Quote size={60} className="mx-auto text-[#c5a059] opacity-20" />
           <h2 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter leading-tight text-black">
             "Grooming is the secret <br /> language of <span className="text-[#c5a059]">self-respect</span>. We just help you speak it fluently."
           </h2>
           <div className="space-y-2">
              <p className="font-black uppercase tracking-[0.4em] text-xs text-black">Vincenzo Moretti</p>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Founder & Creative Lead</p>
           </div>
        </div>
      </section>

      {/* ARTISANS SECTION */}
      <section className="py-32 px-10 lg:px-20 bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-[#c5a059] text-[10px] font-black uppercase tracking-[0.5em]">The Hands</span>
            <h2 className="text-5xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none text-black">The <span className="text-[#c5a059]">Artisans.</span></h2>
          </div>
          <p className="text-zinc-500 max-w-xs italic text-right">Our barbers are more than staff; they are craftsmen with decades of collective experience in international grooming.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {barbers.map((b, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -20 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-zinc-50 mb-8 border border-zinc-200 shadow-xl relative">
                <img src={b.img} className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                   <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Instagram size={18} />
                   </div>
                   <div className="text-right">
                     <p className="text-xs font-black uppercase tracking-widest text-[#c5a059] mb-1">{b.role}</p>
                     <h4 className="text-2xl font-black italic uppercase leading-none text-white">{b.name}</h4>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION: BENTO STYLE */}
      <section className="py-20 px-10 lg:px-20 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[600px]">
          
          <div className="lg:col-span-8 bg-[#c5a059] rounded-[3rem] p-16 flex flex-col justify-between text-black relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
            <div className="space-y-8 relative z-10">
              <h2 className="text-6xl lg:text-9xl font-black italic uppercase tracking-tighter leading-[0.85]">
                Ready for <br /> Your Next <br /> Transformation?
              </h2>
              <button className="bg-black text-[#c5a059] px-16 py-6 rounded-full font-black uppercase text-sm hover:bg-white hover:text-black transition-all shadow-2xl">
                Secure Your Slot
              </button>
            </div>
            <div className="flex justify-between items-center relative z-10 border-t border-black/10 pt-8">
               <p className="font-black uppercase tracking-widest text-[10px]">Real-time Booking Availability</p>
               <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">3 Slots Left Today</span>
               </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white rounded-[3rem] p-12 border border-zinc-200 flex flex-col justify-center gap-12 text-center">
             <div className="space-y-4">
                <MapPin size={40} className="mx-auto text-[#c5a059]" />
                <h4 className="text-2xl font-black italic uppercase text-black">The Shop</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  742 Evergreen Terrace <br /> San Francisco, CA 94103
                </p>
             </div>
             <div className="space-y-4">
                <Clock size={40} className="mx-auto text-[#c5a059]" />
                <h4 className="text-2xl font-black italic uppercase text-black">Hours</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Mon — Fri: 9am — 9pm <br /> Sat: 10am — 8pm
                </p>
             </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 bg-white text-center border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#c5a059] flex items-center justify-center rotate-45">
                <Scissors className="-rotate-45 text-black" size={16} />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase italic text-black">Shortcut</span>
            </div>

            <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
              <a href="#" className="hover:text-black transition-colors">Privacy</a>
              <a href="#" className="hover:text-black transition-colors">Accessibility</a>
              <a href="#" className="hover:text-black transition-colors">Client Login</a>
            </div>

            <div className="flex gap-6">
              <Instagram size={20} className="text-zinc-400 hover:text-[#c5a059] cursor-pointer" />
              <Facebook size={20} className="text-zinc-400 hover:text-[#c5a059] cursor-pointer" />
              <Twitter size={20} className="text-zinc-400 hover:text-[#c5a059] cursor-pointer" />
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between gap-4 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
            <p>© 2024 Shortcut Barbershop. Digital Engine by eCeez.</p>
            <p>San Francisco • London • Tokyo</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
