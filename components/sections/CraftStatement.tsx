import React, { useRef } from 'react';

/**
 * CraftStatement — oversized statement with a continuously flowing gradient,
 * per-line hover response, and a soft ambient aurora.
 *
 * SAFETY: every animation here is CSS-only with `fill-mode: both` or infinite.
 * Nothing depends on a scroll observer, because a scroll-triggered version
 * left this text invisible in the prerendered build.
 */

const LINES = ['A love for design & code', 'allows us to produce web', 'experiences with lasting'];

export const CraftStatement: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--sx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--sy', `${e.clientY - r.top}px`);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="craft-section relative bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Our approach"
    >
      {/* ambient aurora — drifts slowly, purely decorative */}
      <div className="craft-aurora craft-aurora-a" aria-hidden="true" />
      <div className="craft-aurora craft-aurora-b" aria-hidden="true" />

      {/* cursor spotlight */}
      <div className="craft-spot" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-[2.3rem] sm:text-6xl md:text-7xl font-medium tracking-[-0.025em] leading-[1.12]">
          {LINES.map((line, i) => (
            <span
              key={line}
              className="craft-line group block cursor-default"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className="craft-grad inline-block transition-transform duration-500 ease-out group-hover:translate-x-2">
                {line}
              </span>
            </span>
          ))}

          {/* accent line — serif italic, same flowing gradient */}
          <span className="craft-line group block cursor-default" style={{ animationDelay: `${LINES.length * 90}ms` }}>
            <span className="craft-grad craft-accent inline-block font-serif italic font-normal transition-transform duration-500 ease-out group-hover:translate-x-2">
              impact.
            </span>
          </span>
        </h2>
      </div>
    </section>
  );
};
