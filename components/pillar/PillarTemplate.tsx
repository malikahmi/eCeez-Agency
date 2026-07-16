import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, HelpCircle, Quote, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Magnetic, TiltCard } from '../fx/Interactions';
import { CrawlBoostLinks } from './CrawlBoostLinks';

/* =========================================================================
   PillarTemplate — shared renderer for the 7 SEO pillar landing pages.
   SEO features baked in:
   - Semantic HTML5 (article, section, h1→h2→h3 hierarchy)
   - JSON-LD: Service + FAQPage + BreadcrumbList (injected per page)
   - Images: explicit width/height (CLS-safe), loading="lazy",
     decoding="async", descriptive alt text
   - Internal linking (related services) + external authoritative links
   - Free Shopify Audit CTA (Google Form) on every page
   ========================================================================= */

export const AUDIT_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSecd8M7ki7GTCBKOb0shSgZVEoiA6QMcqyvbK3K4GTumiR16g/viewform?usp=publish-editor';

export interface PillarFAQ { q: string; a: string }
export interface PillarFeature { icon: React.ReactNode; title: string; desc: string }
export interface PillarStep { title: string; desc: string }
export interface PillarProse {
  heading: string;
  accent?: string;
  paragraphs: React.ReactNode[];
  bullets?: string[];
  image?: { src: string; alt: string };
}
export interface PillarContent {
  slug: string;                       // e.g. "shopify-speed-optimization"
  serviceName: string;                // Schema.org Service name
  serviceDescription: string;         // Schema.org Service description
  badge: string;
  h1Lead: string;                     // plain part of H1
  h1Accent: string;                   // indigo part of H1 (primary keyword)
  subtitle: string;
  heroBullets: string[];
  heroImage: { src: string; alt: string };
  stats?: { value: string; label: string }[];
  problems?: { heading: string; accent: string; sub: string; items: PillarFeature[] };
  guide: PillarProse[];
  method: { heading: string; accent: string; sub: string; items: PillarFeature[] };
  process?: { heading: string; accent: string; steps: PillarStep[] };
  beforeAfter?: { heading: string; before: string; beforeLabel: string; after: string; afterLabel: string; note: string };
  checklist?: { heading: string; accent: string; intro: string; items: string[] };
  testimonial?: { quote: string; author: string; role: string };
  faqs: PillarFAQ[];
  related: { to: string; label: string; desc: string }[];
  sources: { href: string; label: string }[];
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

export const PillarTemplate: React.FC<{ content: PillarContent }> = ({ content }) => {
  const c = content;

  /* ---- JSON-LD: Service + FAQPage + BreadcrumbList ---- */
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = `ld-${c.slug}`;
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `https://eceez.com/${c.slug}#service`,
          name: c.serviceName,
          description: c.serviceDescription,
          serviceType: c.serviceName,
          areaServed: 'Worldwide',
          provider: {
            '@type': 'Organization',
            name: 'eCeez',
            url: 'https://eceez.com/',
            logo: 'https://eceez.com/og-image.png',
          },
          url: `https://eceez.com/${c.slug}`,
        },
        {
          '@type': 'FAQPage',
          '@id': `https://eceez.com/${c.slug}#faq`,
          mainEntity: c.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eceez.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://eceez.com/services' },
            { '@type': 'ListItem', position: 3, name: c.serviceName, item: `https://eceez.com/${c.slug}` },
          ],
        },
      ],
    });
    document.head.appendChild(script);
    return () => { document.getElementById(`ld-${c.slug}`)?.remove(); };
  }, [c]);

  return (
    <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* ================= HERO ================= */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6 uppercase tracking-wider">
          {c.badge}
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-black tracking-tight leading-[1.1]">
          {c.h1Lead} <span className="text-indigo-600">{c.h1Accent}</span>
        </h1>
        <p className="text-zinc-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
          {c.subtitle}
        </p>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 text-sm text-zinc-600">
          {c.heroBullets.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <CheckCircle2 className="text-indigo-600 shrink-0" size={16} aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Magnetic>
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:shadow-indigo-600/30"
            >
              Get a Free Shopify Audit
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="#guide" className="inline-block bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-10 py-4 rounded-full font-bold transition-all">
              Read the Guide
            </a>
          </Magnetic>
        </div>
      </motion.header>

      {/* ================= STATS ================= */}
      {c.stats && (
        <motion.section {...fadeUp} className="mb-28" aria-label="Key results">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {c.stats.map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-3xl p-8 text-center">
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{s.value}</div>
                <div className="text-sm text-zinc-600">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* ================= PROBLEMS ================= */}
      {c.problems && (
        <motion.section {...fadeUp} className="mb-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-4">
              {c.problems.heading} <span className="text-indigo-600">{c.problems.accent}</span>
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">{c.problems.sub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.problems.items.map((item) => (
              <TiltCard key={item.title} className="bg-card border border-border rounded-3xl p-8 hover:shadow-xl hover:border-indigo-200 transition-[box-shadow,border-color] duration-500">
                <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center mb-5" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </TiltCard>
            ))}
          </div>
        </motion.section>
      )}

      {/* ================= HERO IMAGE ================= */}
      <motion.figure {...fadeUp} className="mb-28 relative">
        <div className="absolute -inset-4 bg-indigo-600/10 rounded-[3rem] blur-2xl" aria-hidden="true"></div>
        <img
          src={c.heroImage.src}
          alt={c.heroImage.alt}
          width={1200}
          height={675}
          loading="lazy"
          decoding="async"
          className="relative rounded-[3rem] border border-zinc-200 shadow-2xl w-full object-cover aspect-video"
          referrerPolicy="no-referrer"
        />
      </motion.figure>

      {/* ================= MINI-GUIDE ================= */}
      <div id="guide">
        {c.guide.map((sec, i) => (
          <motion.section {...fadeUp} key={sec.heading} className="mb-24 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-6">
              {sec.heading}{sec.accent && <> <span className="text-indigo-600">{sec.accent}</span></>}
            </h2>
            <div className="space-y-5">
              {sec.paragraphs.map((p, j) => (
                <p key={j} className="text-zinc-700 leading-relaxed">{p}</p>
              ))}
            </div>
            {sec.bullets && (
              <ul className="mt-6 space-y-3">
                {sec.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-zinc-700">
                    <CheckCircle2 className="text-indigo-600 shrink-0 mt-1" size={18} aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {sec.image && (
              <img
                src={sec.image.src}
                alt={sec.image.alt}
                width={1000}
                height={563}
                loading="lazy"
                decoding="async"
                className="mt-8 rounded-3xl border border-zinc-200 shadow-lg w-full object-cover aspect-video"
                referrerPolicy="no-referrer"
              />
            )}
            {i === 0 && (
              <div className="mt-8 p-6 bg-indigo-50 border border-indigo-100 rounded-2xl text-sm text-zinc-700">
                <strong className="text-indigo-700">Not sure where your store stands?</strong>{' '}
                <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline underline-offset-2">
                  Request a free Shopify audit
                </a>{' '}
                and we'll benchmark it for you — no strings attached.
              </div>
            )}
          </motion.section>
        ))}
      </div>

      {/* ================= METHOD GRID ================= */}
      <motion.section {...fadeUp} className="mb-28">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-4">
            {c.method.heading} <span className="text-indigo-600">{c.method.accent}</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">{c.method.sub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.method.items.map((item) => (
            <TiltCard key={item.title} className="bg-white border border-border rounded-3xl p-6 hover:border-indigo-200 hover:shadow-lg transition-[box-shadow,border-color] duration-500">
              <div className="mb-4" aria-hidden="true">{item.icon}</div>
              <h3 className="font-bold text-black mb-2">{item.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
            </TiltCard>
          ))}
        </div>
      </motion.section>

      {/* ================= PROCESS ================= */}
      {c.process && (
        <motion.section {...fadeUp} className="mb-28 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-12 text-center">
            {c.process.heading} <span className="text-indigo-600">{c.process.accent}</span>
          </h2>
          <ol className="space-y-6">
            {c.process.steps.map((s, i) => (
              <li key={s.title} className="flex gap-5 bg-card border border-border rounded-3xl p-6">
                <div className="w-10 h-10 shrink-0 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center" aria-hidden="true">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">{s.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>
      )}

      {/* ================= BEFORE / AFTER ================= */}
      {c.beforeAfter && (
        <motion.section {...fadeUp} className="mb-28 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-10 text-center">
            {c.beforeAfter.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-6">
            <div className="bg-red-50 border border-red-100 rounded-3xl p-10 text-center">
              <div className="text-xs uppercase tracking-wider text-red-500 font-semibold mb-2">{c.beforeAfter.beforeLabel}</div>
              <div className="text-4xl md:text-5xl font-bold text-red-600">{c.beforeAfter.before}</div>
            </div>
            <ArrowRight className="text-indigo-600 mx-auto rotate-90 sm:rotate-0" size={32} aria-hidden="true" />
            <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-10 text-center">
              <div className="text-xs uppercase tracking-wider text-emerald-600 font-semibold mb-2">{c.beforeAfter.afterLabel}</div>
              <div className="text-4xl md:text-5xl font-bold text-emerald-600">{c.beforeAfter.after}</div>
            </div>
          </div>
          <p className="text-center text-zinc-600 text-sm mt-6 max-w-2xl mx-auto">{c.beforeAfter.note}</p>
        </motion.section>
      )}

      {/* ================= CHECKLIST ================= */}
      {c.checklist && (
        <motion.section {...fadeUp} className="mb-28 max-w-4xl mx-auto bg-zinc-950 rounded-[3rem] p-10 md:p-14 text-white">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {c.checklist.heading} <span className="text-indigo-400">{c.checklist.accent}</span>
          </h2>
          <p className="text-zinc-400 mb-8">{c.checklist.intro}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {c.checklist.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-zinc-200 text-sm leading-relaxed">
                <CheckCircle2 className="text-indigo-400 shrink-0 mt-0.5" size={17} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* ================= TESTIMONIAL ================= */}
      {c.testimonial && (
        <motion.section {...fadeUp} className="mb-28 max-w-3xl mx-auto text-center">
          <Quote className="text-indigo-600 mx-auto mb-6" size={40} aria-hidden="true" />
          <blockquote className="text-2xl md:text-3xl font-medium text-black leading-snug mb-6">
            &ldquo;{c.testimonial.quote}&rdquo;
          </blockquote>
          <cite className="not-italic">
            <span className="font-bold text-black">{c.testimonial.author}</span>
            <span className="text-zinc-500"> — {c.testimonial.role}</span>
          </cite>
        </motion.section>
      )}

      {/* ================= FAQ ================= */}
      <motion.section {...fadeUp} className="mb-28 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-12 text-center">
          Frequently Asked <span className="text-indigo-600">Questions</span>
        </h2>
        <div className="space-y-4">
          {c.faqs.map((f) => (
            <details key={f.q} className="group bg-card border border-border rounded-3xl p-6 open:shadow-md transition-shadow">
              <summary className="flex items-center gap-3 cursor-pointer list-none font-bold text-black">
                <HelpCircle className="text-indigo-600 shrink-0" size={20} aria-hidden="true" />
                <h3 className="text-base md:text-lg">{f.q}</h3>
              </summary>
              <p className="text-zinc-700 leading-relaxed mt-4 pl-8">{f.a}</p>
            </details>
          ))}
        </div>
      </motion.section>

      {/* ================= RELATED (internal links) ================= */}
      <motion.section {...fadeUp} className="mb-28">
        <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight mb-8 text-center">
          Related <span className="text-indigo-600">Shopify Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {c.related.map((r) => (
            <Link key={r.to} to={r.to} className="group bg-card border border-border rounded-3xl p-6 hover:border-indigo-300 hover:shadow-md transition-all">
              <h3 className="font-bold text-black mb-2 flex items-center gap-2">
                {r.label}
                <ArrowRight size={16} className="text-indigo-600 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{r.desc}</p>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* ========= CRAWL-BOOST: internal links to speed indexation of thin/new posts ========= */}
      <CrawlBoostLinks
        heading="More Shopify Guides"
        count={6}
        prioritySlugs={[
          'ai-seo-for-ecommerce',
          'best-shopify-apps-for-ecommerce-growth',
          'best-shopify-seo-structure-for-ecommerce',
          'technical-seo-fixes-for-shopify',
          'shopify-seo-checklist-for-2026',
          'how-to-rank-shopify-collection-pages',
          'how-to-optimise-shopify-product-pages',
          'programmatic-seo-for-shopify',
          'shopify-internal-linking-strategy',
        ]}
      />

      {/* ================= SOURCES (external authority links) ================= */}
      <motion.section {...fadeUp} className="mb-28 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-black mb-4">Further reading &amp; sources</h2>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {c.sources.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-2 inline-flex items-center gap-1">
                {s.label} <ExternalLink size={13} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* ================= FINAL AUDIT CTA ================= */}
      <motion.section {...fadeUp} className="bg-indigo-600 rounded-[3rem] p-10 md:p-16 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Get a Free Shopify Audit
        </h2>
        <p className="text-indigo-100 max-w-2xl mx-auto mb-10 text-lg">
          No sales pitch — a genuinely useful teardown of your store, delivered by the team that runs its own 9,000-product Shopify store.
        </p>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-sm text-indigo-100">
          {['Store speed score', 'SEO issues', 'UX review', 'CRO opportunities', 'Personalized recommendations'].map((x) => (
            <li key={x} className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-white" aria-hidden="true" /> {x}
            </li>
          ))}
        </ul>
        <Magnetic>
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 px-12 py-5 rounded-full font-bold text-lg transition-all shadow-xl"
          >
            Request My Free Audit
          </a>
        </Magnetic>
        <p className="text-indigo-200 text-xs mt-6">Takes 60 seconds. Delivered within 2 business days.</p>
      </motion.section>
    </article>
  );
};
