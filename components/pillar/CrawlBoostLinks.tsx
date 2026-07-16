import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../../src/data/blogData';

/**
 * CrawlBoostLinks — internal links from high-authority pages (pillars, homepage)
 * down to blog posts, to accelerate their crawling and indexation.
 *
 * WHY: GSC showed dozens of posts stuck in "Discovered/Crawled – not indexed."
 * Pages that receive more internal links from crawled pages get crawled sooner.
 * Placing these blocks on the most-crawled pages (service pillars) is the fastest
 * lever to get orphaned posts indexed — no backlinks required.
 *
 * By default it prioritizes the NEWEST posts (most likely to be un-indexed) but
 * can be pointed at a specific set of slugs via `prioritySlugs`.
 */
export const CrawlBoostLinks: React.FC<{
  heading?: string;
  count?: number;
  prioritySlugs?: string[];
  excludeSlug?: string;
}> = ({ heading = 'Latest Shopify Guides', count = 6, prioritySlugs, excludeSlug }) => {
  let picks = blogPosts.filter((p) => p.id !== excludeSlug);

  if (prioritySlugs && prioritySlugs.length) {
    const priority = prioritySlugs
      .map((s) => picks.find((p) => p.id === s))
      .filter(Boolean) as typeof picks;
    const rest = picks.filter((p) => !prioritySlugs.includes(p.id));
    picks = [...priority, ...rest];
  }

  const items = picks.slice(0, count);
  if (!items.length) return null;

  return (
    <section className="my-16" aria-label={heading}>
      <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight mb-6">
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((p) => (
          <Link
            key={p.id}
            to={`/blog/${p.id}`}
            className="group bg-white border border-zinc-200 rounded-2xl p-5 hover:border-indigo-300 hover:shadow-md transition-all"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">
              {p.category || 'Guide'}
            </span>
            <h3 className="font-bold text-black mt-2 mb-1 leading-snug flex items-start gap-1.5">
              <span className="group-hover:text-indigo-600 transition-colors">{p.title}</span>
              <ArrowUpRight
                size={15}
                className="text-indigo-600 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </h3>
            <p className="text-sm text-zinc-600 line-clamp-2">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
