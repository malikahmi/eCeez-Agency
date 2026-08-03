import React from 'react';

/**
 * CraftStatement — the headline quote, set in a high-contrast display style.
 *
 * TYPOGRAPHY: mixes a condensed sans with an elegant serif for the accent
 * words, echoing the reference: normal words in tight uppercase sans, accent
 * words in a lighter serif with wide tracking. Kept to TWO lines so the
 * section stays compact.
 *
 * ANIMATION: CSS-only (keyframes with fill-mode: both). Scroll-triggered
 * reveals must not be used here — a previous version was captured mid-reveal
 * by the prerenderer and the text stayed invisible in production.
 */

const Serif: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-serif font-light tracking-[0.02em]">{children}</span>
);

export const CraftStatement: React.FC = () => (
  <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8" aria-label="Our approach">
    <div className="max-w-6xl mx-auto">
      <h2 className="craft-quote text-[2rem] sm:text-5xl md:text-[4.2rem] leading-[1.06] tracking-[-0.02em] text-[#0d1117] uppercase font-semibold">
        <span className="craft-line block" style={{ animationDelay: '0ms' }}>
          Taking brands further through{' '}
          <Serif>carefully</Serif>{' '}
          <span className="craft-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </span>
        <span className="craft-line block" style={{ animationDelay: '90ms' }}>
          <Serif>crafted</Serif> emotional experiences
          <span className="craft-icon craft-icon-box" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </span>
      </h2>
    </div>
  </section>
);
