import React, { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/* =========================================================================
   Micro-interaction layer — shared across the homepage and pillar pages.

   <Magnetic>  — wraps a button/link; it leans toward the cursor and snaps
                 back on leave. Disabled on touch and reduced-motion.
   <TiltCard>  — wraps a card; 3D perspective tilt following the cursor with
                 a soft light glare. Disabled on touch and reduced-motion.
   ========================================================================= */

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const isTouch = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

export const Magnetic: React.FC<{ children: React.ReactNode; strength?: number; className?: string }> = ({
  children,
  strength = 0.35,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });

  const onMove = useCallback(
    (e: React.PointerEvent) => {
      if (isTouch() || prefersReduced() || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
      y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
    },
    [strength, x, y]
  );

  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const TiltCard: React.FC<{ children: React.ReactNode; className?: string; max?: number }> = ({
  children,
  className = '',
  max = 7,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spx = useSpring(px, { stiffness: 180, damping: 20 });
  const spy = useSpring(py, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(spy, [0, 1], [max, -max]);
  const rotateY = useTransform(spx, [0, 1], [-max, max]);
  const glareX = useTransform(spx, [0, 1], ['20%', '80%']);
  const glareY = useTransform(spy, [0, 1], ['15%', '85%']);

  const onMove = useCallback(
    (e: React.PointerEvent) => {
      if (isTouch() || prefersReduced() || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      px.set((e.clientX - rect.left) / rect.width);
      py.set((e.clientY - rect.top) / rect.height);
    },
    [px, py]
  );

  const onLeave = useCallback(() => {
    px.set(0.5);
    py.set(0.5);
  }, [px, py]);

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{
        rotateX: prefersReduced() || isTouch() ? 0 : rotateX,
        rotateY: prefersReduced() || isTouch() ? 0 : rotateY,
        transformStyle: 'preserve-3d',
        perspective: 900,
      }}
      whileHover={prefersReduced() ? undefined : { y: -6, transition: { duration: 0.35, ease: 'easeOut' } }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {/* light glare that tracks the cursor */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(420px circle at ${gx} ${gy}, rgba(99,102,241,0.10), transparent 65%)`
          ),
        }}
      />
    </motion.div>
  );
};
