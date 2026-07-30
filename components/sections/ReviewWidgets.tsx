import React, { useEffect, useRef, useState } from 'react';

/**
 * ReviewWidgets — Clutch, DesignRush and GoodFirms social proof in the footer.
 *
 * HOW THE SCRIPTS LOAD (important, don't "optimise" this again):
 * The Clutch and DesignRush scripts live in index.html with `defer`. They must
 * be present during the initial page load because they scan the DOM and
 * initialise on DOMContentLoaded. Injecting them later from a useEffect (e.g.
 * on idle or intersection) means DOMContentLoaded has already fired and the
 * widgets silently never render — this is a well-known issue with these widgets
 * in SPAs. `defer` keeps them non-blocking while still catching the event.
 *
 * The containers below are the targets those scripts look for.
 *
 * FALLBACK: if a container is still empty after a few seconds (script blocked,
 * offline, ad-blocker, or client-side route change), we show a plain profile
 * link instead, so the footer never displays an empty gap.
 */

const CLUTCH_PROFILE = 'https://clutch.co/profile/eceez';
const DESIGNRUSH_PROFILE = 'https://www.designrush.com/agency/profile/eceez-agency#reviews';
const GOODFIRMS_PROFILE = 'https://www.goodfirms.co/company/eceez';

const FallbackLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2 hover:border-zinc-700 transition-colors"
  >
    <span className="text-[11px] font-extrabold tracking-tight text-white">{label}</span>
    <span className="text-[10px] font-semibold text-amber-400" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
    <span className="text-[10px] text-zinc-400">Reviews</span>
  </a>
);

export const ReviewWidgets: React.FC = () => {
  const clutchRef = useRef<HTMLDivElement | null>(null);
  const rushRef = useRef<HTMLDivElement | null>(null);
  const [clutchEmpty, setClutchEmpty] = useState(false);
  const [rushEmpty, setRushEmpty] = useState(false);

  useEffect(() => {
    // Give the deferred third-party scripts time to hydrate their containers,
    // then fall back to a plain link if nothing rendered.
    const t = window.setTimeout(() => {
      if (clutchRef.current && clutchRef.current.childElementCount === 0) setClutchEmpty(true);
      if (rushRef.current && rushRef.current.childElementCount === 0) setRushEmpty(true);
    }, 4000);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="pt-6 mt-6 border-t border-zinc-900/60" aria-label="Independent agency reviews">
      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4">
        Independently reviewed
      </p>

      <div className="flex flex-wrap items-center gap-4">
        {/* GoodFirms — self-hosted badge image (no external dependency) */}
        <a
          href={GOODFIRMS_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="See eCeez reviews on GoodFirms"
          className="inline-block rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
        >
          <img
            src="/badges/goodfirms-rating.png"
            alt="GoodFirms rating 4.89 out of 5 from 104 reviews for eCeez"
            width={475}
            height={112}
            loading="lazy"
            decoding="async"
            className="h-11 w-auto object-contain"
          />
        </a>

        {/* Clutch widget container (populated by the deferred script) */}
        {clutchEmpty ? (
          <FallbackLink href={CLUTCH_PROFILE} label="Clutch" />
        ) : (
          <div
            ref={clutchRef}
            className="clutch-widget"
            data-url="https://widget.clutch.co"
            data-widget-type="2"
            data-height="45"
            data-nofollow="false"
            data-expandifr="true"
            data-clutchcompany-id="2685202"
          />
        )}

        {/* DesignRush widget container (populated by the deferred script) */}
        {rushEmpty ? (
          <FallbackLink href={DESIGNRUSH_PROFILE} label="DesignRush" />
        ) : (
          <div
            ref={rushRef}
            data-designrush-widget
            data-agency-id="121743"
            data-style="light"
            aria-label="DesignRush agency reviews section"
          />
        )}

        <noscript>
          <a
            href={DESIGNRUSH_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit eCeez Agency reviews on DesignRush"
            className="text-xs font-bold text-zinc-300 hover:text-white transition-colors"
          >
            REVIEW US ON DESIGNRUSH
          </a>
        </noscript>
      </div>
    </div>
  );
};
