import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin top-of-page scroll progress indicator. Pure additive; no layout impact. */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[9999] origin-left bg-gradient-to-r from-[#03AED2] to-indigo-600"
      style={{ scaleX }}
    />
  );
};
