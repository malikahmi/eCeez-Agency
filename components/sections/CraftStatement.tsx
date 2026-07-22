import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * CraftStatement — oversized editorial statement on a white canvas.
 * Award-site treatment: hairline-ruled header, masked line reveals,
 * a serif italic accent, a scroll-parallax accent word, and a fine
 * metric row. Sits directly below the client trust bar.
 */

const LINES: { text: string; accent?: boolean }[] = [
  { text: 'A love for design & code' },
  { text: 'allows us to produce web' },
  { text: 'experiences with lasting' },
];

export const CraftStatement: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const driftX = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8" aria-label="Our approach">
      <div className="max-w-6xl mx-auto">
        {/* hairline header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-5 mb-10 sm:mb-14"
        >
          <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-400 whitespace-nowrap">
            Our craft
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-zinc-200 to-transparent" aria-hidden="true" />
          <span className="text-[11px] tracking-[0.28em] text-zinc-300 tabular-nums" aria-hidden="true">
            01
          </span>
        </motion.div>

        {/* statement */}
        <h2 className="text-[2.15rem] sm:text-6xl md:text-7xl font-medium tracking-[-0.02em] leading-[1.1] text-[#0d1520]">
          {LINES.map((line, i) => (
            <span key={line.text} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '106%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.62, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}

          {/* accent line: serif italic + gradient + subtle scroll drift */}
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '106%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.62, delay: LINES.length * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                style={{ x: driftX }}
                className="inline-block font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1A3945] via-indigo-600 to-[#03AED2] pr-2"
              >
                impact
              </motion.span>
              <span className="text-[#0d1520]">.</span>
            </motion.span>
          </span>
        </h2>

        {/* metric row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="mt-14 sm:mt-20 pt-8 border-t border-zinc-100 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { v: '90+', l: 'Brands engineered' },
            { v: '11', l: 'Documented case studies' },
            { v: '9,000+', l: 'Products on our own store' },
            { v: '<2.5s', l: 'LCP target every build' },
          ].map((m) => (
            <div key={m.l}>
              <div className="text-2xl sm:text-3xl font-bold text-[#0d1520] tracking-tight mb-1.5 tabular-nums">{m.v}</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-zinc-400 leading-relaxed">{m.l}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0d1520] hover:text-indigo-600 transition-colors"
          >
            <span className="border-b border-zinc-300 group-hover:border-indigo-600 transition-colors pb-0.5">
              See the work
            </span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
