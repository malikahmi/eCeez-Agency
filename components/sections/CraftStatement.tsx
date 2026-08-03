import React, { useRef } from 'react';

/**
 * CraftStatement — the headline quote, set across three lines with inline 3D
 * icons that respond to the cursor.
 *
 * ANIMATION: CSS-only for anything that affects visibility (keyframes with
 * fill-mode: both). A scroll-triggered reveal must never be used here — an
 * earlier version was captured mid-reveal by the prerenderer and the text
 * stayed permanently invisible in production. The 3D tilt is a progressive
 * enhancement layered on top: if the JS never runs, the icons simply sit still
 * and the quote is fully readable.
 */

const Icon: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => (
  <span className={`craft-icon3d ${className}`}>
    <img src={src} alt={alt} width={64} height={64} loading="lazy" decoding="async" />
  </span>
);

export const CraftStatement: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Cursor-driven 3D parallax on the icons (enhancement only).
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--rx', `${(-y * 14).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * 18).toFixed(2)}deg`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8" aria-label="Our approach">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="craft-stage max-w-6xl mx-auto"
      >
        <h2 className="text-[2.1rem] sm:text-5xl md:text-[4rem] font-medium leading-[1.14] tracking-[-0.025em] text-[#0d1117]">
          <span className="craft-line block" style={{ animationDelay: '0ms' }}>
            A love for design
            <Icon src="/icons/code-brackets.png" alt="" className="craft-icon-code" />
            &amp; code
          </span>
          <span className="craft-line block" style={{ animationDelay: '90ms' }}>
            allows us to produce web
          </span>
          <span className="craft-line block" style={{ animationDelay: '180ms' }}>
            experiences with
            <Icon src="/icons/network-nodes.png" alt="" className="craft-icon-net" />
            <span className="craft-grad">lasting impact.</span>
          </span>
        </h2>
      </div>
    </section>
  );
};
