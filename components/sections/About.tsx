
import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6">
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Crafting the next generation of <span className="text-indigo-600">digital experiences</span>.
          </h2>
          <p className="text-zinc-700 text-lg mb-8 leading-relaxed">
            At eCeez, we believe that technology should be invisible yet impactful. Founded in 2024, our mission has been to bridge the gap between complex engineering and human-centric design.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-zinc-100 flex items-center justify-center flex-shrink-0">
                <span className="text-indigo-600 font-bold">01</span>
              </div>
              <div>
                <h4 className="font-bold mb-1 text-black">Elite Engineering</h4>
                <p className="text-zinc-600 text-sm">We only hire the top 1% of talent to ensure your code is performant, secure, and clean.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-zinc-100 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-bold">02</span>
              </div>
              <div>
                <h4 className="font-bold mb-1 text-black">Human-Centric Design</h4>
                <p className="text-zinc-600 text-sm">Design is not just how it looks, but how it works and feels for your actual users.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-20 blur-2xl"></div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Team working"
            className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute -bottom-8 -right-8 z-20 bg-white border border-zinc-200 p-8 rounded-2xl shadow-2xl hidden md:block">
            <div className="text-4xl font-bold text-black mb-1">50+</div>
            <div className="text-zinc-600 text-sm font-medium">Global Clients</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
