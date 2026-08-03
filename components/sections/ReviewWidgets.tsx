import React from 'react';

/**
 * ReviewWidgets — independent review badges in the footer.
 *
 * All badges are static, self-hosted images linked to the live profiles.
 * This deliberately avoids third-party widget scripts: those repeatedly failed
 * to render here (they initialise on DOMContentLoaded and fight React's
 * hydration of the prerendered HTML), and each one added an external script
 * plus an iframe to every page load. Static badges are exact, reliable and fast.
 *
 * To add another: drop the image in /public/badges/ and add an entry below.
 */

interface Badge { src: string; href: string; alt: string }

const BADGES: Badge[] = [
  {
    src: '/badges/goodfirms-rating.png',
    href: 'https://www.goodfirms.co/company/eceez',
    alt: 'GoodFirms rating 4.89 out of 5 from 104 reviews for eCeez',
  },
  {
    src: '/badges/clutch.avif',
    href: 'https://clutch.co/profile/eceez',
    alt: 'eCeez reviews on Clutch',
  },
];

const TRUSTPILOT_PROFILE = 'https://www.trustpilot.com/review/eceez.com';

export const ReviewWidgets: React.FC = () => (
  <div className="pt-6 mt-6 border-t border-zinc-900/60" aria-label="Independent agency reviews">
    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-4">
      Independently reviewed
    </p>

    <div className="flex flex-wrap items-center gap-4">
      {/* Trustpilot */}
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

      {BADGES.map((b) => (
        <a
          key={b.href}
          href={b.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={b.alt}
          className="inline-block rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
        >
          <img
            src={b.src}
            alt={b.alt}
            loading="lazy"
            decoding="async"
            className="h-11 w-auto object-contain"
          />
        </a>
      ))}
    </div>
  </div>
);
