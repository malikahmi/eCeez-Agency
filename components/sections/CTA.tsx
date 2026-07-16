
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTA: React.FC = () => {
  const CONTACT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSecd8M7ki7GTCBKOb0shSgZVEoiA6QMcqyvbK3K4GTumiR16g/viewform?usp=publish-editor";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden bg-zinc-50 border border-zinc-200 rounded-[3rem] px-8 py-20 md:p-24 text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <defs>
               <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                 <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
               </pattern>
             </defs>
             <rect width="100" height="100" fill="url(#grid)" />
           </svg>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight"
          >
            Ready to scale your <br /> <span className="text-indigo-600">digital presence?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 text-lg mb-10"
          >
            Join 50+ industry-leading brands that trust eCeez to build and scale their digital products. Get a free consultation today.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href={CONTACT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto pl-8 pr-4 py-3 bg-black text-white rounded-full font-bold text-lg hover:bg-zinc-900 transition-all flex items-center justify-center gap-5 active:scale-95 group shadow-xl"
            >
              <span className="text-zinc-100 group-hover:text-white transition-colors">Free Expert Advice</span>
              <div className="flex items-center">
                {/* Avatar image - "liitle small" */}
                <div className="w-8 h-8 rounded-full border border-zinc-800 overflow-hidden bg-zinc-200 relative z-10">
                  <img 
                    src="https://i.ibb.co/pB3NQpRm/Untitled-design.png" 
                    alt="Ahmer Ameer" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* White circle with arrow overlapping */}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center -ml-3 relative z-20 shadow-md border border-zinc-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight size={16} className="text-black stroke-[3]" />
                </div>
              </div>
            </a>
            <Link 
              to="/case-studies" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg border border-zinc-200 hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
