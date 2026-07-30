import React, { useEffect, useRef, useState } from 'react';

/**
 * ReviewWidgets — Clutch, DesignRush and GoodFirms social proof in the footer.
 *
 * ============================================================================
 * WHY THIS IS MORE COMPLICATED THAN IT LOOKS (read before changing anything)
 * ============================================================================
 * Two separate problems break these widgets in this codebase:
 *
 * 1. DOMContentLoaded timing. Both scripts scan the DOM and initialise on
 *    DOMContentLoaded. Injecting them later (on idle, on scroll, from a
 *    useEffect) means that event has already fired and they silently render
 *    nothing. So they load from index.html with `defer` — which runs after
 *    HTML parsing but immediately BEFORE DOMContentLoaded, keeping them
 *    non-blocking while still catching the event.
 *
 * 2. React hydration. This app calls hydrateRoot() against prerendered HTML.
 *    If a widget script injects an iframe into the container before React
 *    hydrates, React can remove that iframe because it is DOM React does not
 *    know about. That is why the widgets can appear briefly and vanish.
 *
 * The recovery below therefore runs AFTER hydration, in three passes:
 *    pass 1 — call each vendor's init function directly
 *    pass 2 — re-inject the script for any container still empty
 *    pass 3 — fall back to a plain profile link so the footer is never blank
 *
 * ============================================================================
 * WANT GUARANTEED-EXACT OFFICIAL BADGES INSTEAD? (recommended, zero JS)
 * ============================================================================
 * Save the official badge images into /public/badges/ and set the paths below.
 * When a path is set, that static badge renders instead of the live widget:
 * identical official artwork, no third-party script, no hydration risk, and
 * faster. This is how the GoodFirms badge already works.
 */
const STATIC_BADGES = {
  clutch: '',      // e.g. '/badges/clutch.png'
  designrush: '',  // e.g. '/badges/designrush.png'
};

const CLUTCH_SRC = 'https://widget.clutch.co/static/js/widget.js';
const RUSH_SRC = 'https://www.designrush.com/topbest/js/widgets/agency-reviews.js';

const CLUTCH_PROFILE = 'https://clutch.co/profile/eceez';
const DESIGNRUSH_PROFILE = 'https://www.designrush.com/agency/profile/eceez-agency#reviews';
const GOODFIRMS_PROFILE = 'https://www.goodfirms.co/company/eceez';
const TRUSTPILOT_PROFILE = 'https://www.trustpilot.com/review/eceez.com';


const TrustpilotBadge: React.FC = () => (
  <a
    href={TRUSTPILOT_PROFILE}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="See eCeez reviews on Trustpilot"
    className="group inline-flex h-11 items-center gap-2.5 rounded-lg bg-white px-3.5 transition-opacity hover:opacity-90"
  >
    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#00b67a] text-white">
      <span className="text-xs font-black leading-none">&#9733;</span>
    </span>
    <span className="flex flex-col leading-tight">
      <span className="flex items-center gap-1.5">
        <span className="text-[12px] font-extrabold tracking-tight text-zinc-900">Trustpilot</span>
        <span className="rounded bg-emerald-50 px-1 text-[9px] font-bold uppercase tracking-wider text-[#00b67a]">
          Excellent
        </span>
      </span>
      <span className="mt-0.5 flex items-center gap-1">
        <span className="flex gap-0.5" aria-hidden="true">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className="text-[10px] text-[#00b67a]">&#9733;</span>
          ))}
        </span>
        <span className="text-[9px] text-zinc-500 transition-colors group-hover:text-zinc-700">Reviews &#8599;</span>
      </span>
    </span>
  </a>
);

const BadgeImage: React.FC<{ src: string; href: string; alt: string }> = ({ src, href, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={alt}
    className="inline-block rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
  >
    <img src={src} alt={alt} loading="lazy" decoding="async" className="h-11 w-auto object-contain" />
  </a>
);

const ProfileLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2 hover:border-zinc-700 transition-colors"
  >
    <span className="text-[11px] font-extrabold tracking-tight text-white">{label}</span>
    <span className="text-[10px] text-zinc-400">Reviews</span>
  </a>
);

export const ReviewWidgets: React.FC = () => {
  const clutchRef = useRef<HTMLDivElement | null>(null);
  const rushRef = useRef<HTMLDivElement | null>(null);
  const [clutchFailed, setClutchFailed] = useState(false);
  const [rushFailed, setRushFailed] = useState(false);

  useEffect(() => {
    const w = window as unknown as Record<string, any>;
    const isEmpty = (el: HTMLElement | null) => !!el && el.childElementCount === 0;

    // Pass 1: ask each vendor to (re)initialise. Optional-chained and wrapped so
    // a missing/renamed global is harmless rather than throwing.
    const tryInit = () => {
      try { w.CLUTCHCO?.Init?.(); } catch { /* vendor API absent */ }
      try { w.DesignRush?.init?.(); } catch { /* vendor API absent */ }
      try { w.designRushWidget?.init?.(); } catch { /* vendor API absent */ }
      try { document.dispatchEvent(new Event('DOMContentLoaded')); } catch { /* noop */ }
    };

    // Pass 2: a freshly injected script executes on load, which recovers any
    // widget whose init only runs at execution time.
    const reinject = (src: string, key: string) => {
      if (document.querySelector(`script[data-reinjected="${key}"]`)) return;
      const s = document.createElement('script');
      s.src = `${src}${src.includes('?') ? '&' : '?'}r=${Date.now()}`;
      s.async = true;
      s.setAttribute('data-reinjected', key);
      document.body.appendChild(s);
    };

    const t1 = window.setTimeout(tryInit, 400);

    const t2 = window.setTimeout(() => {
      if (!STATIC_BADGES.clutch && isEmpty(clutchRef.current)) reinject(CLUTCH_SRC, 'clutch');
      if (!STATIC_BADGES.designrush && isEmpty(rushRef.current)) reinject(RUSH_SRC, 'designrush');
      tryInit();
    }, 1600);

    // Pass 3: give up gracefully rather than leaving an empty gap.
    const t3 = window.setTimeout(() => {
      if (!STATIC_BADGES.clutch && isEmpty(clutchRef.current)) setClutchFailed(true);
      if (!STATIC_BADGES.designrush && isEmpty(rushRef.current)) setRushFailed(true);
    }, 5200);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  return (
    <div className="pt-6 mt-6 border-t border-zinc-900/60" aria-label="Independent agency reviews">
      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4">
        Independently reviewed
      </p>

      <div className="flex flex-wrap items-center gap-4">
        {/* Trustpilot */}
        <TrustpilotBadge />

        {/* GoodFirms — official badge, self-hosted */}
        <BadgeImage
          src="/badges/goodfirms-rating.png"
          href={GOODFIRMS_PROFILE}
          alt="GoodFirms rating 4.89 out of 5 from 104 reviews for eCeez"
        />

        {/* Clutch */}
        {STATIC_BADGES.clutch ? (
          <BadgeImage src={STATIC_BADGES.clutch} href={CLUTCH_PROFILE} alt="eCeez reviews on Clutch" />
        ) : clutchFailed ? (
          <ProfileLink href={CLUTCH_PROFILE} label="Clutch" />
        ) : (
          <div className="inline-flex w-fit items-center overflow-hidden rounded-lg bg-white px-2 h-[52px] [&_iframe]:!h-[46px] [&_iframe]:!min-h-0">
            <div
              ref={clutchRef}
              suppressHydrationWarning
              className="clutch-widget min-w-[190px]"
              data-url="https://widget.clutch.co"
              data-widget-type="16"
              data-height="auto"
              data-nofollow="false"
              data-expandifr="true"
              data-clutchcompany-id="2685202"
            />
          </div>
        )}

        {/* DesignRush */}
        {STATIC_BADGES.designrush ? (
          <BadgeImage src={STATIC_BADGES.designrush} href={DESIGNRUSH_PROFILE} alt="eCeez Agency reviews on DesignRush" />
        ) : rushFailed ? (
          <ProfileLink href={DESIGNRUSH_PROFILE} label="DesignRush" />
        ) : (
          <div
            ref={rushRef}
            suppressHydrationWarning
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
