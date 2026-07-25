
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Utensils, 
  Pizza, 
  Martini, 
  Coffee, 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  Clock, 
  Twitter, 
  Facebook, 
  Linkedin,
  ChevronDown,
  ArrowRight,
  MapPin,
  ChevronRight
} from 'lucide-react';

export const RestaurantLanding: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const services = [
    { name: "Breakfast", icon: <Coffee size={32} /> },
    { name: "Pizza & Cocktail", icon: <Pizza size={32} /> },
    { name: "Lunch", icon: <Utensils size={32} /> },
    // Martini is used instead of Cocktail as it is a standard Lucide icon
    { name: "Cuisine", icon: <Martini size={32} /> },
  ];

  return (
    <div className="bg-white min-h-screen text-zinc-800 font-sans selection:bg-teal-500 selection:text-white pt-[40px]">
      
      {/* CASE STUDY HEADER */}
      <div className="bg-[#f8f8f8] text-teal-600 text-[10px] uppercase tracking-[0.4em] py-3 px-6 font-bold flex justify-between items-center fixed top-0 left-0 right-0 z-[100] border-b border-zinc-200 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Utensils size={14} className="fill-teal-600" />
          <span>Case Study: Fine Dining & Hospitality UI</span>
        </div>
        <div className="hidden md:block italic text-zinc-500">Crafted by eCeez Agency — Performance Driven Design</div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-[40px] left-0 right-0 z-[90] bg-white/80 backdrop-blur-lg py-4 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold italic">C</div>
            <span className="text-2xl font-black text-emerald-600 tracking-tighter uppercase italic">Coltivi</span>
          </div>
          <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            <a href="#" className="text-emerald-600">Home</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Menu</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Reservation</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Our Story</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-6">
             <div className="flex gap-4 text-zinc-300">
                <Twitter size={16} className="hover:text-blue-400 cursor-pointer" />
                <Facebook size={16} className="hover:text-blue-600 cursor-pointer" />
                <Linkedin size={16} className="hover:text-blue-700 cursor-pointer" />
             </div>
             <button className="bg-emerald-600 text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-emerald-600/20">Book a Table</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen bg-[#00a89e] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-black text-white italic leading-[0.9] tracking-tighter">
              EVERY BITE IS A <br /><span className="text-orange-400">PERFORMANCE.</span>
            </h1>
            <p className="text-xl text-teal-50 font-medium italic max-w-lg leading-relaxed">
              Experience the symphony of flavors in every slice of our artisan pizzas and handcrafted cocktails.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-[#00a89e] px-12 py-5 rounded-full font-bold text-lg hover:bg-orange-400 hover:text-white transition-all shadow-2xl">
                View Our Menu
              </button>
              <button className="border-2 border-white text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Our Gallery
              </button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative">
             <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fm=webp&fit=crop&q=75&w=800" className="w-full h-auto drop-shadow-[0_50px_100px_rgba(0,0,0,0.5)] rotate-6" alt="Pizza" />
             <div className="absolute -top-10 -right-10 bg-orange-400 w-32 h-32 rounded-full flex flex-col items-center justify-center text-white border-4 border-white shadow-2xl rotate-12">
                <span className="text-[10px] font-black uppercase">Start From</span>
                <span className="text-3xl font-black">$19</span>
             </div>
          </motion.div>
        </div>

        {/* DRIP DIVIDER EFFECT */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end">
           {[...Array(12)].map((_, i) => (
             <div key={i} className="flex-1 bg-white" style={{ 
               height: `${Math.random() * 80 + 40}px`,
               borderRadius: '0 0 50% 50%',
               marginBottom: '-1px'
             }} />
           ))}
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-12">
          <div className="flex flex-col items-center">
            <span className="text-emerald-600 text-6xl font-black italic mb-2 tracking-tighter">Welcome</span>
            <div className="w-16 h-1 bg-orange-400 rounded-full" />
          </div>
          <p className="text-zinc-500 text-xl leading-relaxed italic">
            Coltivi is where tradition meets innovation. Our chefs use centuries-old sourdough techniques paired with locally-sourced, organic toppings to create the perfect bite, every single time.
          </p>
        </div>
      </section>

      {/* SERVICES HEX GRID */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group relative aspect-square bg-emerald-600 flex flex-col items-center justify-center gap-6 rounded-[2rem] text-white overflow-hidden shadow-2xl hover:-translate-y-4 transition-all duration-500">
               <div className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                 {s.icon}
               </div>
               <h4 className="relative z-10 font-black uppercase tracking-widest text-sm">{s.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white border border-zinc-200 rounded-[3rem] overflow-hidden shadow-3xl text-zinc-800">
          <div className="lg:col-span-4 bg-emerald-700 p-16 space-y-12 relative overflow-hidden text-white">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
             <div className="space-y-4">
                <h3 className="text-4xl font-black italic tracking-tighter">Time</h3>
                <p className="text-emerald-100 font-bold tracking-widest text-[10px] uppercase">We Are Open</p>
             </div>
             <div className="space-y-6 text-sm font-medium italic">
                <div className="flex justify-between border-b border-emerald-600 pb-2">
                   <span>Monday - Friday</span>
                   <span>11am - 10pm</span>
                </div>
                <div className="flex justify-between border-b border-emerald-600 pb-2">
                   <span>Saturday / Sunday</span>
                   <span>9am - 11pm</span>
                </div>
             </div>
             <div className="pt-8 flex items-center gap-4 text-orange-400">
                <Phone />
                <span className="text-2xl font-black">+984 25 558 21 21</span>
             </div>
          </div>
          <div className="lg:col-span-8 p-16 space-y-10">
             <div className="flex items-center gap-4">
                <Calendar className="text-emerald-500" />
                <h3 className="text-4xl font-black italic tracking-tighter text-black">Online Booking</h3>
             </div>
             <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">People</label>
                   <select className="w-full bg-zinc-50 border border-zinc-200 p-4 rounded-xl outline-none focus:border-emerald-500 transition-colors">
                      <option>4 People</option>
                      <option>2 People</option>
                      <option>8 People</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Date</label>
                   <input type="date" className="w-full bg-zinc-50 border border-zinc-200 p-4 rounded-xl outline-none focus:border-emerald-500 transition-colors" />
                </div>
                <input placeholder="Phone" className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl outline-none focus:border-emerald-500 transition-colors" />
                <input placeholder="Email" className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl outline-none focus:border-emerald-500 transition-colors" />
                <div className="md:col-span-2">
                   <button className="w-full bg-orange-500 py-6 rounded-xl text-xl font-black italic tracking-tighter text-white hover:bg-orange-400 transition-colors">Reserve Your Table</button>
                </div>
             </form>
          </div>
        </div>
      </section>

      {/* PIZZA HIGHLIGHTS SECTION */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
         <div className="absolute inset-0 flex">
            <div className="flex-1 bg-emerald-600" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
            <div className="flex-1 bg-white" />
         </div>
         <div className="absolute inset-0 flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fm=webp&fit=crop&q=75&w=1000" className="w-full max-w-4xl h-auto drop-shadow-3xl" alt="Pizza Spread" />
         </div>
         <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-md bg-white p-12 shadow-2xl rounded-[3rem] space-y-6">
               <h3 className="text-4xl font-black italic text-emerald-600 tracking-tighter">Macaroni And Cheese Pizza</h3>
               <div className="flex gap-8 border-y border-zinc-100 py-6">
                  <div>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase">Calorie</p>
                    <p className="text-2xl font-black">400<span className="text-xs text-emerald-500 font-bold uppercase ml-1">Cal</span></p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase">Fat</p>
                    <p className="text-2xl font-black">.9<span className="text-xs text-emerald-500 font-bold uppercase ml-1">Gr</span></p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase">Protein</p>
                    <p className="text-2xl font-black">400<span className="text-xs text-emerald-500 font-bold uppercase ml-1">Pro</span></p>
                  </div>
               </div>
               <button className="text-emerald-600 flex items-center gap-2 font-black uppercase tracking-widest text-xs">Full Details <ArrowRight size={16} /></button>
            </div>
         </div>
      </section>

      {/* FAQ & CONTACT */}
      <section className="py-32 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
         <div className="space-y-12">
            <h2 className="text-5xl font-black italic tracking-tighter leading-tight">Frequently asked question <br /> about <span className="text-emerald-600 underline">Coltivi</span></h2>
            <div className="space-y-4">
               {[
                 "What ingredients do you use for pizza?",
                 "Do you have gluten-free options?",
                 "Can I book a private event?",
                 "What is your delivery range?"
               ].map((q, i) => (
                 <div key={i} className="border-b border-zinc-100 pb-4 group cursor-pointer" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                    <div className="flex justify-between items-center text-lg font-bold group-hover:text-emerald-600 transition-colors">
                       <span>{q}</span>
                       <ChevronDown size={18} className={activeFaq === i ? 'rotate-180' : ''} />
                    </div>
                    {activeFaq === i && (
                      <p className="pt-4 text-zinc-500 leading-relaxed italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    )}
                 </div>
               ))}
            </div>
         </div>
         <div className="bg-emerald-600 p-16 rounded-[3rem] text-white space-y-10 shadow-3xl">
            <h3 className="text-4xl font-black italic tracking-tighter">Do you have questions?</h3>
            <form className="space-y-6">
               <input placeholder="Full Name" className="w-full bg-white/10 border border-white/20 p-5 rounded-2xl placeholder:text-white/50 outline-none focus:border-white transition-colors" />
               <input placeholder="Email Address" className="w-full bg-white/10 border border-white/20 p-5 rounded-2xl placeholder:text-white/50 outline-none focus:border-white transition-colors" />
               <textarea placeholder="Your Question" rows={4} className="w-full bg-white/10 border border-white/20 p-5 rounded-2xl placeholder:text-white/50 outline-none focus:border-white transition-colors resize-none" />
               <button className="w-full bg-white text-emerald-600 py-5 rounded-full text-xl font-black italic tracking-tighter hover:bg-zinc-100 transition-colors">Submit Inquiry</button>
            </form>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-24 text-zinc-800 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold italic">C</div>
              <span className="text-2xl font-black text-emerald-600 tracking-tighter uppercase italic">Coltivi</span>
            </div>
            <p className="text-zinc-500 text-sm italic">Premium Italian dining since 1998. Crafting performance on every plate.</p>
          </div>
          <div className="space-y-8">
             <h5 className="font-black uppercase tracking-widest text-xs text-black">Location</h5>
             <ul className="space-y-4 text-zinc-500 text-sm font-medium italic">
                <li className="flex gap-3"><MapPin size={16} className="text-emerald-500" /> 123 Pizza Street, Food District</li>
                <li className="flex gap-3"><Phone size={16} className="text-emerald-500" /> +984 25 558 21 21</li>
             </ul>
          </div>
          <div className="space-y-8">
             <h5 className="font-black uppercase tracking-widest text-xs text-black">Quick Links</h5>
             <ul className="space-y-4 text-zinc-500 text-sm font-medium italic">
                <li className="hover:text-emerald-500 cursor-pointer">Our Menu</li>
                <li className="hover:text-emerald-500 cursor-pointer">Reservation</li>
                <li className="hover:text-emerald-500 cursor-pointer">Reviews</li>
             </ul>
          </div>
          <div className="space-y-8">
             <h5 className="font-black uppercase tracking-widest text-xs text-black">Connect</h5>
             <div className="flex gap-6 text-zinc-400">
                <Twitter size={20} className="hover:text-emerald-500 cursor-pointer" />
                <Facebook size={20} className="hover:text-emerald-500 cursor-pointer" />
                <Linkedin size={20} className="hover:text-emerald-500 cursor-pointer" />
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 pt-12 mt-12 border-t border-zinc-100 text-center">
           <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.4em]">© 2024 COLTIVI ALL RIGHTS RESERVED | DEVELOPED BY ECEEZ AGENCY</p>
        </div>
      </footer>
    </div>
  );
};
