import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * BrandStatement — oversized typographic statement with staggered word reveal,
 * in the style of award-winning studio sites. Standalone section; safely removable.
 */

const LINE_1 = 'We engineer Shopify stores';
const LINE_2 = 'built to rank, convert & scale.';

const Word: React.FC<{ children: string; index: number }> = ({ children, index }) => (
  <span className="inline-block overflow-hidden align-bottom">
    <motion.span
      className="inline-block"
      initial={{ y: '110%' }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}&nbsp;
    </motion.span>
  </span>
);

export const BrandStatement: React.FC = () => {
  const words1 = LINE_1.split(' ');
  const words2 = LINE_2.split(' ');
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-white" aria-label="What we do">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 mb-8"
        >
          Growth engineering, not just development
        </motion.p>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.06]">
          <span className="block">
            {words1.map((w, i) => <Word key={i} index={i}>{w}</Word>)}
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1A3945] via-indigo-600 to-[#03AED2]">
            {words2.map((w, i) => <Word key={i} index={words1.length + i}>{w}</Word>)}
          </span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-zinc-600 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Speed, SEO, and conversion aren&rsquo;t afterthoughts here &mdash; they&rsquo;re the
          architecture. Proven on 90+ brands and our own 9,000-product store.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10"
        >
          <Link
            to="/case-studies"
            className="inline-block text-indigo-600 font-semibold border-b-2 border-indigo-200 hover:border-indigo-600 transition-colors pb-0.5"
          >
            See the proof &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
