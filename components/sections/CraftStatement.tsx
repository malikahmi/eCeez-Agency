import React, { useRef } from 'react';

/**
 * CraftStatement — the headline quote in the brand blue gradient, with a
 * mirrored reflection beneath and inline 3D icons that respond to the cursor.
 *
 * ANIMATION: anything affecting visibility is CSS-only (keyframes with
 * fill-mode: both). A scroll-triggered reveal must never be used here — an
 * earlier version was captured mid-reveal by the prerenderer and the text
 * stayed permanently invisible in production. The 3D tilt is progressive
 * enhancement: with no JS the icons sit still and the quote reads fine.
 */


const Icon: React.FC<{ src: string; className?: string }> = ({ src, className = '' }) => (
  <span className={`craft-icon3d ${className}`} aria-hidden="true">
    <img src={src} alt="" width={64} height={64} loading="lazy" decoding="async" />
  </span>
);

/** The quote, rendered once for the headline and once for the reflection. */
const QuoteLines: React.FC<{ reflected?: boolean }> = ({ reflected = false }) => (
  <>
    <span className={reflected ? 'block' : 'craft-line block'} style={reflected ? undefined : { animationDelay: '0ms' }}>
      A love for design
      <Icon src="/icons/code-brackets.png" className="craft-icon-code" />
      &amp; code
    </span>
    <span className={reflected ? 'block' : 'craft-line block'} style={reflected ? undefined : { animationDelay: '90ms' }}>
      allows us to produce web
    </span>
    <span className={reflected ? 'block' : 'craft-line block'} style={reflected ? undefined : { animationDelay: '180ms' }}>
      experiences with
      <Icon src="/icons/network-nodes.png" className="craft-icon-net" />
      lasting impact.
    </span>
  </>
);

export const CraftStatement: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

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

  const typeClasses =
    'text-[2.1rem] sm:text-5xl md:text-[4rem] font-medium leading-[1.14] tracking-[-0.025em] craft-grad';

  return (
    <section className="bg-white pt-12 sm:pt-16 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8" aria-label="Our approach">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="craft-stage max-w-6xl mx-auto"
      >
        <h2 className={typeClasses}>
          <QuoteLines />
        </h2>

        {/* Mirrored reflection — decorative, hidden from assistive tech */}
        <div className="craft-reflection" aria-hidden="true">
          <div className={typeClasses}>
            <QuoteLines reflected />
          </div>
        </div>
      </div>
    </section>
  );
};
