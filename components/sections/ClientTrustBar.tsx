import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * ClientTrustBar — single-line client strip, logo-ready with graceful fallback.
 *
 * WHY THIS DESIGN: Hotlinking 8 brand logos from 8 different CDNs is fragile
 * (the exact "images not showing" problem seen with the footer badges) and the
 * logos are mixed colors. So each brand shows its real logo IF one is provided
 * and loads; otherwise it falls back to a clean styled wordmark that never
 * breaks. To use real logos: download each brand's logo into /public/logos/
 * and set its `logo` path below (e.g. '/logos/volvik.svg').
 */

interface Client { name: string; slug: string; logo?: string }

const CLIENTS: Client[] = [
  { name: 'Volvik', slug: 'volvik' },
  { name: 'Swolverine', slug: 'swolverine' },
  { name: 'WrestlingMart', slug: 'wrestlingmart' },
  { name: 'Tropez', slug: 'tropez-official' },
  { name: 'Oddli', slug: 'oddli' },
  { name: 'AOAP', slug: 'aoap-projects' },
  { name: 'Meows', slug: 'meows-cat-health' },
  { name: 'Labozero', slug: 'labozero' },
];

const ClientMark: React.FC<{ client: Client }> = ({ client }) => {
  const [failed, setFailed] = useState(false);
  const showLogo = client.logo && !failed;
  return (
    <Link
      to={`/case-studies/${client.slug}`}
      className="shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
      title={`${client.name} — view case study`}
    >
      {showLogo ? (
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          className="h-6 sm:h-7 w-auto object-contain grayscale"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-base sm:text-lg font-bold text-zinc-500 hover:text-zinc-900 transition-colors tracking-tight whitespace-nowrap">
          {client.name}
        </span>
      )}
    </Link>
  );
};

export const ClientTrustBar: React.FC = () => (
  <section className="py-8 border-y border-zinc-100 bg-white" aria-label="Selected clients">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <p className="text-center text-[11px] uppercase tracking-[0.2em] text-zinc-400 mb-5">
        Trusted by brands we&rsquo;ve engineered for
      </p>
      {/* Single line: horizontal scroll on narrow screens, no wrapping */}
      <div className="flex items-center justify-start sm:justify-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar pb-1">
        {CLIENTS.map((c) => (
          <ClientMark key={c.slug} client={c} />
        ))}
      </div>
      <p className="text-center mt-5">
        <Link to="/case-studies" className="text-sm text-indigo-600 font-semibold hover:underline">
          See all case studies &rarr;
        </Link>
      </p>
    </div>
  </section>
);
