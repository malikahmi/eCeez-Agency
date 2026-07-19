import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * ClientTrustBar — infinite marquee client strip (Awwwards-style).
 * One seamless line, scrolling continuously, pausing on hover.
 * Logo-ready with graceful wordmark fallback: drop files into /public/logos/
 * and set `logo: '/logos/name.svg'` to switch a brand from text to image.
 */

interface Client { name: string; slug: string; logo?: string }

const CLIENTS: Client[] = [
  { name: 'Volvik', slug: 'volvik' },
  { name: 'Swolverine', slug: 'swolverine' },
  { name: 'WrestlingMart', slug: 'wrestlingmart' },
  { name: 'Tropez', slug: 'tropez-official' },
  { name: 'Oddli', slug: 'oddli' },
  { name: 'AOAP Projects', slug: 'aoap-projects' },
  { name: 'Meows Cat Health', slug: 'meows-cat-health' },
  { name: 'Labozero', slug: 'labozero' },
  { name: 'East & South', slug: 'east-and-south-interiors' },
  { name: 'Nishiyama', slug: 'nishiyama-ramen' },
];

const ClientMark: React.FC<{ client: Client }> = ({ client }) => {
  const [failed, setFailed] = useState(false);
  const showLogo = client.logo && !failed;
  return (
    <Link
      to={`/case-studies/${client.slug}`}
      className="shrink-0 flex items-center justify-center px-6 sm:px-10 opacity-50 hover:opacity-100 transition-opacity duration-300"
      title={`${client.name} — view case study`}
    >
      {showLogo ? (
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          className="h-6 sm:h-7 w-auto object-contain grayscale hover:grayscale-0 transition-all"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-lg sm:text-xl font-bold text-zinc-600 tracking-tight whitespace-nowrap">
          {client.name}
        </span>
      )}
    </Link>
  );
};

export const ClientTrustBar: React.FC = () => (
  <section className="py-10 border-y border-zinc-100 bg-white overflow-hidden" aria-label="Selected clients">
    <p className="text-center text-[11px] uppercase tracking-[0.25em] text-zinc-400 mb-7">
      Trusted by brands we&rsquo;ve engineered for
    </p>
    <div className="marquee group relative">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" aria-hidden="true" />
      <div className="marquee-track flex items-center w-max group-hover:[animation-play-state:paused]">
        {[...CLIENTS, ...CLIENTS].map((c, i) => (
          <ClientMark key={`${c.slug}-${i}`} client={c} />
        ))}
      </div>
    </div>
    <p className="text-center mt-7">
      <Link to="/case-studies" className="text-sm text-indigo-600 font-semibold hover:underline underline-offset-4">
        See all case studies &rarr;
      </Link>
    </p>
  </section>
);
