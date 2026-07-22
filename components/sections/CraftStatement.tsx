import React from 'react';
import { motion } from 'framer-motion';

/**
 * CraftStatement — oversized typographic line on a dark canvas with a
 * light-blue → indigo gradient, revealed line by line on scroll.
 * Sits directly below the client trust bar.
 */

const LINES = [
  'A love for design & code',
  'allows us to produce web',
  'experiences with lasting',
  'impact.',
];

export const CraftStatement: React.FC = () => (
  <section className="bg-[#0a1119] py-20 sm:py-28 px-4 sm:px-6 lg:px-8" aria-label="Our approach">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-[2.25rem] sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.12]">
        {LINES.map((line, i) => (
          <span key={line} className="block overflow-hidden">
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9fd8f5] via-[#6aa8f0] to-[#3b5bf5]"
              initial={{ y: '105%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h2>
    </div>
  </section>
);
