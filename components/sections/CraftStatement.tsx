import React from 'react';

/**
 * CraftStatement — oversized gradient statement on white.
 *
 * NOTE ON ANIMATION: this deliberately uses a CSS keyframe with
 * `animation-fill-mode: both` rather than a scroll-triggered reveal.
 * A scroll-triggered version left the text invisible in production,
 * because the prerendered HTML snapshots the lines in their hidden
 * start state and the observer never fired after hydration.
 * CSS animation always resolves to the visible end state.
 */

const LINES = [
  'A love for design & code',
  'allows us to produce web',
  'experiences with lasting',
  'impact.',
];

export const CraftStatement: React.FC = () => (
  <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8" aria-label="Our approach">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-[2.3rem] sm:text-6xl md:text-7xl font-medium tracking-[-0.02em] leading-[1.12]">
        {LINES.map((line, i) => (
          <span
            key={line}
            className="craft-line block text-transparent bg-clip-text bg-gradient-to-r from-[#38A9E0] via-[#3B82F6] to-[#2540E8]"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            {line}
          </span>
        ))}
      </h2>
    </div>
  </section>
);
