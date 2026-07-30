import React, { useEffect, useRef } from 'react';

/**
 * ReviewWidgets — Clutch, DesignRush and GoodFirms social proof in the footer.
 *
 * PERFORMANCE NOTE (important):
 * These are third-party scripts. PageSpeed showed third-party JS (GTM 179KiB,
 * Clarity 25KiB) was the single biggest remaining drag on LCP, so these are
 * injected on IDLE after hydration rather than as blocking <script> tags in the
 * HTML. The widget containers render immediately; the scripts hydrate them a
 * moment later. Net effect: full social proof, no cost to first paint.
 *
 * Loading is also deferred until the footer is near the viewport where the
 * browser supports it, with a guaranteed idle-timeout fallback so the widgets
 * always load even if the observer never fires (the prerendered build cannot
 * rely on scroll events).
 */

interface ScriptSpec { id: string; src: string }

const SCRIPTS: ScriptSpec[] = [
  { id: 'clutch-widget-js', src: 'https://widget.clutch.co/static/js/widget.js' },
  { id: 'designrush-widget-js', src: 'https://www.designrush.com/topbest/js/widgets/agency-reviews.js' },
];

const injectOnce = ({ id, src }: ScriptSpec) => {
  if (document.getElementById(id)) return;
  const s = document.createElement('script');
  s.id = id;
  s.src = src;
  s.async = true;
  s.type = 'text/javascript';
  document.body.appendChild(s);
};

export const ReviewWidgets: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const loaded = useRef(false);

  useEffect(() => {
    const load = () => {
      if (loaded.current) return;
      loaded.current = true;
      SCRIPTS.forEach(injectOnce);
    };

    // Preferred path: load when the footer approaches the viewport.
    let observer: IntersectionObserver | undefined;
    if (ref.current && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            load();
            observer?.disconnect();
          }
        },
        { rootMargin: '600px' }
      );
      observer.observe(ref.current);
    }

    // Guaranteed fallback: load on idle regardless, so the widgets never fail
    // to appear if the observer doesn't fire.
    const win = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    let idleId: number | undefined;
    let timeoutId: number | undefined;
    if (typeof win.requestIdleCallback === 'function') {
      idleId = win.requestIdleCallback(load, { timeout: 4000 });
    } else {
      timeoutId = window.setTimeout(load, 2500);
    }

    return () => {
      observer?.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
      const w = window as Window & { cancelIdleCallback?: (id: number) => void };
      if (idleId && typeof w.cancelIdleCallback === 'function') w.cancelIdleCallback(idleId);
    };
  }, []);

  return (
    <div ref={ref} className="pt-6 mt-6 border-t border-zinc-900/60" aria-label="Independent agency reviews">
      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4">
        Independently reviewed
      </p>

      <div className="flex flex-wrap items-center gap-4">
        {/* Clutch */}
        <div
          className="clutch-widget [color-scheme:light]"
          data-url="https://widget.clutch.co"
          data-widget-type="2"
          data-height="45"
          data-nofollow="false"
          data-expandifr="true"
          data-clutchcompany-id="2685202"
        />

        {/* DesignRush */}
        <div
          data-designrush-widget
          data-agency-id="121743"
          data-style="light"
          aria-label="DesignRush agency reviews section"
        />
        <noscript>
          <a
            href="https://www.designrush.com/agency/profile/eceez-agency#reviews"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit eCeez Agency reviews on DesignRush"
            className="text-xs font-bold text-zinc-300 hover:text-white transition-colors"
          >
            REVIEW US ON DESIGNRUSH
          </a>
        </noscript>

        {/* GoodFirms — swap this link for the official badge/widget when available.
            To use the real badge: upload it to the Shopify CDN and replace this
            anchor's contents with an <img>, or paste the GoodFirms embed code. */}
        <a
          href="https://www.goodfirms.co/company/eceez"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2 hover:border-zinc-700 transition-colors"
          aria-label="See eCeez reviews on GoodFirms"
        >
          <span className="text-[11px] font-extrabold tracking-tight text-white">GoodFirms</span>
          <span className="text-[10px] font-semibold text-amber-400" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span className="text-[10px] text-zinc-400">Reviews</span>
        </a>
      </div>
    </div>
  );
};
