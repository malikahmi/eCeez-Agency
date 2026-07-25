import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, ExternalLink, Layers } from 'lucide-react';
import { Magnetic, TiltCard } from '../fx/Interactions';

const AUDIT_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSecd8M7ki7GTCBKOb0shSgZVEoiA6QMcqyvbK3K4GTumiR16g/viewform?usp=publish-editor';

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export interface ClientCaseStudy {
  slug: string;
  client: string;
  liveUrl: string;
  industry: string;
  platform: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  h1Lead: string;
  h1Accent: string;
  subtitle: string;
  cardImage: string;
  cardTags: string[];
  cardSummary: string;
  heroImage: { src: string; alt: string };
  gallery?: { src: string; alt: string; caption: string }[];
  atAGlance: { label: string; value: string }[];
  challenge: string[];
  approach: { title: string; desc: string }[];
  delivered: string[];
  outcome: string[];
  stack: string[];
  serviceLink: { to: string; label: string; desc: string };
  faqs: { q: string; a: string }[];
}

export const CaseStudyTemplate: React.FC<{ c: ClientCaseStudy }> = ({ c }) => {
  useEffect(() => {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = `ld-case-${c.slug}`;
    s.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: c.metaTitle,
          description: c.metaDescription,
          image: c.heroImage.src,
          author: { '@type': 'Organization', name: 'eCeez', url: 'https://eceez.com/about-us' },
          publisher: { '@type': 'Organization', name: 'eCeez', logo: { '@type': 'ImageObject', url: 'https://eceez.com/og-image.png' } },
          datePublished: '2026-07-15',
          dateModified: '2026-07-15',
          url: `https://eceez.com/case-studies/${c.slug}`,
          about: { '@type': 'Organization', name: c.client, url: c.liveUrl },
        },
        { '@type': 'FAQPage', mainEntity: c.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eceez.com/' },
            { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://eceez.com/case-studies' },
            { '@type': 'ListItem', position: 3, name: c.client, item: `https://eceez.com/case-studies/${c.slug}` },
          ],
        },
      ],
    });
    document.head.appendChild(s);
    return () => { document.getElementById(`ld-case-${c.slug}`)?.remove(); };
  }, [c]);

  return (
    <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="max-w-4xl mx-auto mb-8">
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-indigo-600 transition-colors">
          <ArrowLeft size={15} aria-hidden="true" /> All case studies
        </Link>
      </div>

      <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 uppercase tracking-wider">
          {c.badge}
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-black tracking-tight leading-[1.1]">
          {c.h1Lead} <span className="text-indigo-600">{c.h1Accent}</span>
        </h1>
        <p className="text-zinc-700 text-lg leading-relaxed mb-6">{c.subtitle}</p>
        <a href={c.liveUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all">
          Visit the live site <ExternalLink size={15} aria-hidden="true" />
        </a>
      </motion.header>

      <motion.figure {...fade} className="mb-14 relative max-w-5xl mx-auto">
        <div className="absolute -inset-3 bg-indigo-600/10 rounded-[3rem] blur-2xl" aria-hidden="true" />
        <img src={c.heroImage.src} alt={c.heroImage.alt} width={1200} height={675} loading="eager"
          className="relative rounded-[2rem] border border-zinc-200 shadow-2xl w-full object-cover aspect-video bg-zinc-100"
          referrerPolicy="no-referrer" />
      </motion.figure>

      <motion.section {...fade} className="mb-16 max-w-4xl mx-auto" aria-label="Project at a glance">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {c.atAGlance.map((m) => (
            <TiltCard key={m.label} max={6} className="bg-white border border-zinc-200 rounded-2xl p-5 text-center h-full">
              <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">{m.label}</div>
              <div className="text-sm font-bold text-black leading-snug">{m.value}</div>
            </TiltCard>
          ))}
        </div>
      </motion.section>

      <motion.section {...fade} className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-black tracking-tight mb-5">The <span className="text-indigo-600">Challenge</span></h2>
        <div className="space-y-4">{c.challenge.map((p, i) => <p key={i} className="text-zinc-700 leading-relaxed">{p}</p>)}</div>
      </motion.section>

      <motion.section {...fade} className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-black tracking-tight mb-8">Our <span className="text-indigo-600">Approach</span></h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {c.approach.map((a) => (
            <TiltCard key={a.title} max={5} className="bg-white border border-zinc-200 rounded-3xl p-6 h-full">
              <h3 className="font-bold text-black mb-2 flex items-center gap-2">
                <Layers size={16} className="text-indigo-600" aria-hidden="true" /> {a.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{a.desc}</p>
            </TiltCard>
          ))}
        </div>
      </motion.section>

      {c.gallery && c.gallery.length > 0 && (
        <motion.section {...fade} className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-black tracking-tight mb-6 text-center">Inside the build</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {c.gallery.map((g) => (
              <figure key={g.src} className="group">
                <img src={g.src} alt={g.alt} loading="lazy" decoding="async" width={800} height={600}
                  className="rounded-2xl border border-zinc-200 shadow-md w-full object-cover aspect-[4/3] bg-zinc-100 group-hover:shadow-xl transition-shadow"
                  referrerPolicy="no-referrer" />
                <figcaption className="text-xs text-zinc-500 mt-2 text-center">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </motion.section>
      )}

      <motion.section {...fade} className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-black tracking-tight mb-6">What We <span className="text-indigo-600">Delivered</span></h2>
        <ul className="space-y-3">
          {c.delivered.map((d) => (
            <li key={d} className="flex items-start gap-3 text-zinc-700">
              <CheckCircle2 className="text-indigo-600 shrink-0 mt-1" size={18} aria-hidden="true" /><span>{d}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section {...fade} className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-black tracking-tight mb-5">The <span className="text-indigo-600">Outcome</span></h2>
        <div className="space-y-4">{c.outcome.map((p, i) => <p key={i} className="text-zinc-700 leading-relaxed">{p}</p>)}</div>
      </motion.section>

      <motion.section {...fade} className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-black mb-4">Stack &amp; tooling</h2>
        <div className="flex flex-wrap gap-2">
          {c.stack.map((s) => (
            <span key={s} className="px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-sm font-medium text-zinc-700">{s}</span>
          ))}
        </div>
      </motion.section>

      <motion.section {...fade} className="mb-16 max-w-3xl mx-auto">
        <TiltCard max={4} className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8">
          <div className="flex items-start gap-4">
            <TrendingUp className="text-indigo-600 shrink-0 mt-1" size={24} aria-hidden="true" />
            <div>
              <h2 className="text-lg font-bold text-black mb-2">The service behind this build</h2>
              <p className="text-zinc-700 mb-4 text-sm leading-relaxed">{c.serviceLink.desc}</p>
              <Link to={c.serviceLink.to} className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all">
                {c.serviceLink.label} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </TiltCard>
      </motion.section>

      <motion.section {...fade} className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-black tracking-tight mb-6">Project <span className="text-indigo-600">FAQs</span></h2>
        <div className="space-y-3">
          {c.faqs.map((f) => (
            <details key={f.q} className="group bg-white border border-zinc-200 rounded-2xl p-5 open:shadow-md transition-shadow">
              <summary className="cursor-pointer list-none font-bold text-black text-sm">{f.q}</summary>
              <p className="text-zinc-600 leading-relaxed mt-3 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </motion.section>

      <motion.section {...fade} className="bg-indigo-600 rounded-[2.5rem] p-8 md:p-14 text-center text-white max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">Want a store built like this?</h2>
        <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
          Start with a free audit — we&rsquo;ll show you exactly where your store is leaking speed, rankings, and conversions.
        </p>
        <Magnetic>
          <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl">
            Get a Free Shopify Audit
          </a>
        </Magnetic>
      </motion.section>
    </article>
  );
};
