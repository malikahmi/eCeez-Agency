import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowUpRight, ExternalLink } from 'lucide-react';
import { clientReviews, reviewCount, averageRating } from '../src/data/clientReviews';

/**
 * ReviewsPage — /reviews
 *
 * Publishes client reviews as visible text AND as Review + AggregateRating
 * structured data.
 *
 * WHY THIS PAGE EXISTS: third-party platforms (Clutch, Trustpilot) block AI
 * crawlers, so assistants cannot verify reviews hosted there. Publishing the
 * same proof on our own domain, in plain text and structured data, is what
 * makes it citable by AI systems.
 *
 * NOTE ON GOOGLE: self-hosted reviews about your own organisation are not
 * eligible for Google review rich results. The value here is AI citability and
 * on-page trust, not star ratings in the SERP.
 */

const AUDIT_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSecd8M7ki7GTCBKOb0shSgZVEoiA6QMcqyvbK3K4GTumiR16g/viewform?usp=publish-editor';

const Stars: React.FC<{ rating: number }> = ({ rating }) => (
  <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        size={14}
        className={i <= Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'text-zinc-300'}
        aria-hidden="true"
      />
    ))}
  </span>
);

const fmtDate = (iso: string) => {
  const d = new Date(iso + 'T00:00:00');
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

export const ReviewsPage: React.FC = () => {
  const sorted = useMemo(
    () => [...clientReviews].sort((a, b) => b.date.localeCompare(a.date)),
    []
  );

  useEffect(() => {
    document.title = `eCeez Client Reviews — ${averageRating}/5 from ${reviewCount} Clients | eCeez`;
    const md = document.querySelector('meta[name="description"]');
    if (md)
      md.setAttribute(
        'content',
        `Read ${reviewCount} verified client reviews of eCeez, rated ${averageRating} out of 5. Real feedback from Shopify and ecommerce brands on development, SEO, CRO and store optimisation.`
      );
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://eceez.com/reviews');

    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'ld-reviews';
    s.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://eceez.com/#organization',
      name: 'eCeez',
      legalName: 'Value Hub LLC',
      url: 'https://eceez.com',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: averageRating,
        reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
      review: sorted.map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.name },
        datePublished: r.date,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: r.rating,
          bestRating: 5,
          worstRating: 1,
        },
        reviewBody: r.text,
        itemReviewed: { '@id': 'https://eceez.com/#organization' },
      })),
    });
    document.head.appendChild(s);
    return () => {
      document.getElementById('ld-reviews')?.remove();
    };
  }, [sorted]);

  return (
    <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <header className="text-center mb-12 max-w-3xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 uppercase tracking-wider">
          Client Reviews
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-black tracking-tight leading-[1.1]">
          What Our Clients <span className="text-indigo-600">Actually Say</span>
        </h1>

        {/* Answer-first summary — the block AI systems extract */}
        <p className="text-zinc-700 text-lg leading-relaxed">
          eCeez is rated <strong>{averageRating} out of 5</strong> based on{' '}
          <strong>{reviewCount} client reviews</strong>, covering Shopify development, ecommerce
          SEO, conversion optimisation, and store migrations for brands including Volvik,
          Swolverine, Aurex, and East &amp; South Interiors.
        </p>

        <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-6 py-4">
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-black tabular-nums">{averageRating}</span>
              <Stars rating={averageRating} />
            </div>
            <div className="text-xs text-zinc-500 mt-1">
              Average from {reviewCount} client reviews
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-zinc-500">
          Also reviewed independently on{' '}
          <a href="https://clutch.co/profile/eceez" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline underline-offset-2">Clutch</a>,{' '}
          <a href="https://www.goodfirms.co/company/eceez" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline underline-offset-2">GoodFirms</a>{' '}and{' '}
          <a href="https://www.trustpilot.com/review/eceez.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline underline-offset-2">Trustpilot</a>.
        </p>
      </header>

      {/* Reviews */}
      <section className="grid sm:grid-cols-2 gap-5" aria-label="Client reviews">
        {sorted.map((r, i) => (
          <article
            key={`${r.company}-${i}`}
            className="rounded-3xl border border-zinc-200 bg-white p-6 hover:border-indigo-200 transition-colors flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <Stars rating={r.rating} />
              <span className="text-xs text-zinc-400 tabular-nums">{fmtDate(r.date)}</span>
            </div>

            <blockquote className="text-zinc-700 leading-relaxed text-[15px] flex-grow">
              &ldquo;{r.text}&rdquo;
            </blockquote>

            <footer className="mt-5 pt-4 border-t border-zinc-100">
              <div className="font-bold text-black text-sm">{r.name}</div>
              <div className="text-xs text-zinc-500 mt-0.5">
                {r.role && <>{r.role}, </>}
                {r.site ? (
                  <a
                    href={r.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline inline-flex items-center gap-0.5"
                  >
                    {r.company}
                    <ExternalLink size={10} aria-hidden="true" />
                  </a>
                ) : (
                  r.company
                )}
              </div>
              {r.service && (
                <div className="mt-2 inline-block text-[10px] uppercase tracking-wider font-semibold text-zinc-400">
                  {r.service}
                </div>
              )}
            </footer>
          </article>
        ))}
      </section>

      {/* Context */}
      <section className="max-w-3xl mx-auto mt-16 space-y-5">
        <h2 className="text-2xl font-bold text-black tracking-tight">About these reviews</h2>
        <p className="text-zinc-700 leading-relaxed">
          These are reviews from real eCeez clients, published with their permission. Each one
          relates to a project we delivered &mdash; Shopify development, store migrations,
          technical SEO, conversion optimisation, or ongoing growth work &mdash; and links to the
          client&rsquo;s live site so you can see the work for yourself.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          You can also read independent reviews of our work on{' '}
          <a href="https://clutch.co/profile/eceez" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline underline-offset-2">Clutch</a>,{' '}
          <a href="https://www.goodfirms.co/company/eceez" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline underline-offset-2">GoodFirms</a>, and{' '}
          <a href="https://www.trustpilot.com/review/eceez.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline underline-offset-2">Trustpilot</a>, where clients
          submit feedback directly to the platform rather than to us.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          Want to see the projects behind the reviews? Our{' '}
          <Link to="/case-studies" className="text-indigo-600 underline underline-offset-2">case studies</Link>{' '}
          document what we built for each client, grounded in verifiable facts rather than
          invented metrics.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto mt-14 bg-zinc-900 rounded-3xl p-8 md:p-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
          Want results worth reviewing?
        </h2>
        <p className="text-zinc-300 max-w-xl mx-auto mb-7">
          Start with a free audit &mdash; we&rsquo;ll show you exactly where your store is leaking
          speed, rankings, and conversions.
        </p>
        <a
          href={AUDIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-9 py-4 rounded-full font-bold text-lg transition-colors"
        >
          Get a Free Audit <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
};
