import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ClientTrustBar — a lightweight, text-based logo/name strip using REAL clients.
 * Uses styled brand names rather than hotlinked logo images (which would be a
 * dependency risk and a potential trademark concern). Links to case studies.
 */

const CLIENTS: { name: string; slug: string }[] = [
  { name: 'Volvik', slug: 'volvik' },
  { name: 'Swolverine', slug: 'swolverine' },
  { name: 'WrestlingMart', slug: 'wrestlingmart' },
  { name: 'Tropez', slug: 'tropez-official' },
  { name: 'Oddli', slug: 'oddli' },
  { name: 'AOAP Projects', slug: 'aoap-projects' },
  { name: 'Meows Cat Health', slug: 'meows-cat-health' },
  { name: 'Labozero', slug: 'labozero' },
];

export const ClientTrustBar: React.FC = () => (
  <section className="py-10 border-y border-zinc-100 bg-white" aria-label="Selected clients">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-zinc-400 mb-6">
        Trusted by brands we&rsquo;ve engineered for
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
        {CLIENTS.map((c) => (
          <Link
            key={c.slug}
            to={`/case-studies/${c.slug}`}
            className="text-lg sm:text-xl font-bold text-zinc-400 hover:text-zinc-900 transition-colors tracking-tight"
            title={`${c.name} — view case study`}
          >
            {c.name}
          </Link>
        ))}
      </div>
      <p className="text-center mt-6">
        <Link to="/case-studies" className="text-sm text-indigo-600 font-semibold hover:underline">
          See all case studies &rarr;
        </Link>
      </p>
    </div>
  </section>
);
