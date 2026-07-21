import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Quote } from 'lucide-react';
import { Magnetic, TiltCard } from '../fx/Interactions';

const AUDIT_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSecd8M7ki7GTCBKOb0shSgZVEoiA6QMcqyvbK3K4GTumiR16g/viewform?usp=publish-editor';

const fade = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export interface IndustryContent {
  slug: string;
  industry: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  h1Lead: string;
  h1Accent: string;
  subtitle: string;
  heroImage: { src: string; alt: string };
  intro: React.ReactNode[];
  challenges: { title: string; desc: string }[];
  approach: { title: string; desc: string }[];
  features: string[];
  proof?: { text: React.ReactNode; caseLink?: { to: string; label: string } };
  serviceLinks: { to: string; label: string }[];
  faqs: { q: string; a: string }[];
}

export const IndustryTemplate: React.FC<{ c: IndustryContent }> = ({ c }) => {
  useEffect(() => {
    document.title = c.metaTitle;
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', c.metaDescription);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://eceez.com/${c.slug}`);

    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = `ld-ind-${c.slug}`;
    s.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: c.metaTitle,
          description: c.metaDescription,
          provider: { '@type': 'Organization', name: 'eCeez', url: 'https://eceez.com' },
          areaServed: 'Worldwide',
          serviceType: `Shopify development for ${c.industry}`,
          url: `https://eceez.com/${c.slug}`,
        },
        { '@type': 'FAQPage', mainEntity: c.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eceez.com/' },
            { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://eceez.com/industries' },
            { '@type': 'ListItem', position: 3, name: c.industry, item: `https://eceez.com/${c.slug}` },
          ],
        },
      ],
    });
    document.head.appendChild(s);
    return () => { document.getElementById(`ld-ind-${c.slug}`)?.remove(); };
  }, [c]);

  return (
    <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* HERO */}
      <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 uppercase tracking-wider">
          {c.badge}
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-black tracking-tight leading-[1.1]">
          {c.h1Lead} <span className="text-indigo-600">{c.h1Accent}</span>
        </h1>
        <p className="text-zinc-700 text-lg md:text-xl leading-relaxed">{c.subtitle}</p>
      </motion.header>

      <motion.figure {...fade} className="mb-16 relative max-w-5xl mx-auto">
        <div className="absolute -inset-3 bg-indigo-600/10 rounded-[3rem] blur-2xl" aria-hidden="true" />
        <img src={c.heroImage.src} alt={c.heroImage.alt} width={1200} height={675} loading="eager"
          className="relative rounded-[2rem] border border-zinc-200 shadow-2xl w-full object-cover aspect-video bg-zinc-100"
          referrerPolicy="no-referrer" />
      </motion.figure>

      {/* INTRO */}
      <motion.section {...fade} className="mb-16 max-w-3xl mx-auto">
        <div className="space-y-5">{c.intro.map((p, i) => <p key={i} className="text-zinc-700 leading-relaxed text-lg">{p}</p>)}</div>
      </motion.section>

      {/* CHALLENGES */}
      <motion.section {...fade} className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-black tracking-tight mb-8 text-center">
          What {c.industry} Stores <span className="text-indigo-600">Need to Get Right</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {c.challenges.map((ch) => (
            <TiltCard key={ch.title} max={5} className="bg-white border border-zinc-200 rounded-3xl p-6 h-full">
              <h3 className="font-bold text-black mb-2">{ch.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{ch.desc}</p>
            </TiltCard>
          ))}
        </div>
      </motion.section>

      {/* APPROACH */}
      <motion.section {...fade} className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-black tracking-tight mb-8">
          How We Build <span className="text-indigo-600">{c.industry} Stores</span>
        </h2>
        <div className="space-y-6">
          {c.approach.map((a) => (
            <div key={a.title} className="flex gap-4">
              <CheckCircle2 className="text-indigo-600 shrink-0 mt-1" size={20} aria-hidden="true" />
              <div>
                <h3 className="font-bold text-black mb-1">{a.title}</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* FEATURES */}
      <motion.section {...fade} className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-black tracking-tight mb-6">What We Deliver</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {c.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-zinc-700 text-sm">
              <CheckCircle2 className="text-indigo-600 shrink-0 mt-0.5" size={16} aria-hidden="true" /><span>{f}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* PROOF */}
      {c.proof && (
        <motion.section {...fade} className="mb-16 max-w-3xl mx-auto">
          <TiltCard max={4} className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8">
            <Quote className="text-indigo-600 mb-4" size={28} aria-hidden="true" />
            <p className="text-zinc-800 leading-relaxed mb-4">{c.proof.text}</p>
            {c.proof.caseLink && (
              <Link to={c.proof.caseLink.to} className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all">
                {c.proof.caseLink.label} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            )}
          </TiltCard>
        </motion.section>
      )}

      {/* SERVICE LINKS */}
      <motion.section {...fade} className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-black mb-5">Services for {c.industry} brands</h2>
        <div className="flex flex-wrap gap-3">
          {c.serviceLinks.map((s) => (
            <Link key={s.to} to={s.to} className="px-5 py-2.5 rounded-full bg-white border border-zinc-200 text-sm font-semibold text-zinc-700 hover:border-indigo-300 hover:text-indigo-600 transition-all">
              {s.label}
            </Link>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section {...fade} className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-black tracking-tight mb-8 text-center">
          Frequently Asked <span className="text-indigo-600">Questions</span>
        </h2>
        <div className="space-y-3">
          {c.faqs.map((f) => (
            <details key={f.q} className="group bg-white border border-zinc-200 rounded-2xl p-5 open:shadow-md transition-shadow">
              <summary className="cursor-pointer list-none font-bold text-black">{f.q}</summary>
              <p className="text-zinc-600 leading-relaxed mt-3 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section {...fade} className="bg-indigo-600 rounded-[2.5rem] p-8 md:p-14 text-center text-white max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">Ready to grow your {c.industry.toLowerCase()} store?</h2>
        <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
          Start with a free audit &mdash; we&rsquo;ll show you exactly where your store is leaking speed, rankings, and conversions.
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
