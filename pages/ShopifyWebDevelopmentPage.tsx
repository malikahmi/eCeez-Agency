import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * eCeez — Shopify Web Development service page
 * Target keyword: "Shopify web development"
 *
 * Built to outrank Coalition Technologies structurally:
 *  - Deeper, first-hand E-E-A-T content (real store operator, not just an agency)
 *  - Review + AggregateRating schema wired to display star ratings in Google
 *  - Service, FAQPage, and BreadcrumbList schema
 *  - Contact links + external authority links (Shopify official docs)
 *
 * IMPORTANT (Google policy): The reviews below MUST be real client reviews.
 * Google prohibits self-serving invented review markup and can strip rich
 * results if it detects fabricated reviews. Replace every REVIEW_PLACEHOLDER
 * with a genuine client review before publishing.
 */

// ============================================================
//  REAL CLIENT REVIEWS — replace these with genuine reviews.
//  ratingValue must be 1–5. Do NOT invent reviews (Google policy).
// ============================================================
const REVIEWS = [
  {
    author: 'Joe',
    rating: 5,
    date: '2024-03-01',
    body:
      'Ahmer did a great job for me. He identified and fixed a significant technical issue on my Shopify site quickly and professionally. Communication was clear, turnaround was solid, and the work was done correctly. Highly recommended.',
  },
  {
    author: 'Hawthorne',
    rating: 5,
    date: '2024-09-01',
    body: 'Thank you for your help. I appreciate you.',
  },
  {
    author: 'SheBlooms',
    rating: 5,
    date: '2025-02-01',
    body:
      'Very communicative and responsive. I highly recommend him to anyone needing assistance with website difficulties.',
  },
  {
    author: 'Fur Pets Online',
    rating: 5,
    date: '2025-04-01',
    body:
      'Ahmer knows what he is doing. He is timely, and accurate with his work. Our team really enjoyed working with him!',
  },
  {
    author: 'ProLineBalls',
    rating: 5,
    date: '2025-06-01',
    body:
      "So far the best Shopify web developer we've had the privilege of working with. Over communicates, responds quickly, and gets the work done.",
  },
  {
    author: 'REMplenish',
    rating: 5,
    date: '2026-02-01',
    body:
      'Ahmer was quick to respond and very eager to troubleshoot our issue in the Shopify theme code.',
  },
];

// Only real, verified reviews should ever reach this array. Anything tagged
// REVIEW_PLACEHOLDER is automatically excluded from both the schema and the
// visible page below — replace the placeholders with genuine reviews and
// they'll appear automatically, with no other code changes needed.
const REAL_REVIEWS = REVIEWS.filter((r) => !r.author.includes('REVIEW_PLACEHOLDER'));

// Derived aggregate — recalculated from REAL_REVIEWS so it always matches
// and never publishes a rating for reviews that don't exist yet.
const REVIEW_COUNT = REAL_REVIEWS.length;
const AVG_RATING =
  REVIEW_COUNT > 0
    ? Math.round((REAL_REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEW_COUNT) * 10) / 10
    : 0;

const FAQS = [
  {
    q: 'What is Shopify web development?',
    a: 'Shopify web development is the process of designing, building, and customizing an online store on the Shopify platform — including custom theme development in Liquid, app and API integrations, inventory and checkout setup, performance optimization, and technical SEO. Done well, it produces a fast, branded, high-converting store rather than a generic template.',
  },
  {
    q: 'How much does Shopify web development cost?',
    a: 'For most small and mid-sized brands, a professional Shopify build runs roughly $3,000–$8,000, with simple launches lower and complex custom or Shopify Plus builds higher. eCeez offers tiered packages so you can start at the scope that fits your budget and grow from there.',
  },
  {
    q: 'How long does it take to build a Shopify store?',
    a: 'A focused store setup takes 2–4 weeks; a fully custom build with app integrations and multiple sales channels typically takes 4–8 weeks. We work in phases with milestones so you can see progress the whole way.',
  },
  {
    q: 'Do you work with existing Shopify stores or only new builds?',
    a: 'Both. We build new stores from scratch and also optimize, redesign, migrate, and speed up existing Shopify stores. If you already have a store that underperforms, we can audit it and fix the highest-impact issues first.',
  },
  {
    q: 'What makes eCeez different from a large Shopify agency?',
    a: 'You talk directly to the developer building your store — not a salesperson who hands you off. We also run our own live Shopify store with 9,000+ products, so our advice on catalog imports, inventory sync, apps, and conversion comes from operating a real store, not just building them for others.',
  },
];

export const ShopifyWebDevelopmentPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Shopify Web Development Services | Custom Store Development | eCeez';

    const setMeta = (attr: string, name: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    const desc =
      'Expert Shopify web development from a team that runs its own 9,000-product store. Custom themes, app integration, speed, and SEO. Get free expert advice.';
    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', 'Shopify Web Development Services | eCeez');
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', 'https://eceez.com/shopify-web-development');
    setMeta('property', 'og:type', 'website');

    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement('link');
      canon.setAttribute('rel', 'canonical');
      document.head.appendChild(canon);
    }
    canon.setAttribute('href', 'https://eceez.com/shopify-web-development');

    // ---- Structured data (Service + LocalBusiness + FAQ + Breadcrumb) ----
    // NOTE ON GOOGLE COMPLIANCE:
    // Google's review-snippet feature only supports aggregateRating/review on
    // specific types (Product, LocalBusiness and its subtypes, Course, etc.)
    // — generic "Service" is NOT supported, which is what threw the
    // "Invalid object type for field <parent_node>" error in Search Console.
    // Fix: the provider is typed as ProfessionalService (a LocalBusiness
    // subtype Google DOES support) and carries the rating instead of Service.
    // It is also only included at all once REAL_REVIEWS has entries — an
    // empty/fabricated rating is both a Google policy violation and
    // consumer-deceptive, so we simply don't publish one until it's real.
    const provider: any = {
      '@type': 'ProfessionalService',
      '@id': 'https://eceez.com/#organization',
      name: 'eCeez',
      legalName: 'Value Hub LLC',
      url: 'https://eceez.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7901 4th St N, Suite 15810',
        addressLocality: 'St. Petersburg',
        addressRegion: 'FL',
        postalCode: '33702',
        addressCountry: 'US',
      },
      areaServed: 'US',
    };
    if (REVIEW_COUNT > 0) {
      provider.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: AVG_RATING.toString(),
        reviewCount: REVIEW_COUNT.toString(),
        bestRating: '5',
        worstRating: '1',
      };
      provider.review = REAL_REVIEWS.map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.author },
        ...(r.date ? { datePublished: r.date } : {}),
        reviewRating: {
          '@type': 'Rating',
          ratingValue: r.rating.toString(),
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: r.body,
      }));
    }

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': 'https://eceez.com/shopify-web-development#service',
          serviceType: 'Shopify Web Development',
          name: 'Shopify Web Development Services',
          description: desc,
          provider,
          areaServed: 'US',
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQS.map((f) => ({
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
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Shopify Web Development',
              item: 'https://eceez.com/shopify-web-development',
            },
          ],
        },
      ],
    };
    let s = document.getElementById('swd-schema');
    if (!s) {
      s = document.createElement('script');
      s.id = 'swd-schema';
      s.setAttribute('type', 'application/ld+json');
      document.head.appendChild(s);
    }
    s.textContent = JSON.stringify(schema);
  }, []);

  const Stars = ({ n }: { n: number }) => (
    <span aria-label={`${n} out of 5 stars`} style={{ color: '#03AED2', letterSpacing: 2 }}>
      {'★'.repeat(n)}
      <span style={{ color: '#CBD5E1' }}>{'★'.repeat(5 - n)}</span>
    </span>
  );

  return (
    <main style={{ maxWidth: 1080, margin: '0 auto', padding: '0 20px', color: '#1A3945' }}>
      {/* HERO */}
      <section style={{ padding: '64px 0 40px', textAlign: 'center' }}>
        <p style={{ letterSpacing: 2, textTransform: 'uppercase', fontSize: 13, color: '#03AED2', fontWeight: 700 }}>
          Shopify Web Development
        </p>
        <h1 style={{ fontSize: 46, lineHeight: 1.1, margin: '12px 0 16px', fontWeight: 800 }}>
          Shopify Web Development That’s Built to Sell — Not Just to Launch
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.6, color: '#334155', maxWidth: 760, margin: '0 auto 12px' }}>
          Custom Shopify stores engineered for speed, conversions, and search visibility — by a
          team that runs its own live store with 9,000+ products. You work directly with the
          developer building your store, not a salesperson.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
          <Link to="/contact" style={btnPrimary}>Get Free Expert Advice</Link>
          <a href="#reviews" style={btnGhost}>Read Client Reviews</a>
        </div>
        {REVIEW_COUNT > 0 && (
          <p style={{ marginTop: 18, fontSize: 15 }}>
            <Stars n={Math.round(AVG_RATING)} /> &nbsp;
            <strong>{AVG_RATING.toFixed(1)}</strong> from {REVIEW_COUNT} client reviews
          </p>
        )}
      </section>

      {/* DIRECT-ANSWER BLOCK (AEO / featured snippet) */}
      <section style={card}>
        <h2 style={h2}>What is Shopify web development?</h2>
        <p style={p}>
          Shopify web development is the process of designing, building, and customizing an online
          store on the Shopify platform — including custom theme development in Liquid, app and API
          integrations, inventory and checkout configuration, performance optimization, and
          technical SEO. A professional build turns Shopify’s tools into a fast, branded,
          high-converting store instead of a generic template. eCeez delivers end-to-end Shopify web
          development for brands that want a store that actually performs.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section style={{ padding: '20px 0' }}>
        <h2 style={h2}>Our Shopify web development services</h2>
        <div style={grid}>
          {[
            ['Custom theme development', 'Bespoke, mobile-first Shopify themes built in Liquid — or expert customization of a premium theme — aligned to your brand and optimized to convert.'],
            ['App & API integration', 'Reviews, email, subscriptions, shipping, ERP/CRM, and custom apps integrated cleanly — without bloating your store or slowing it down.'],
            ['Store setup & catalog', 'Full store configuration and large-catalog imports done right. We routinely handle thousands of SKUs, variants, and inventory sync — from real experience.'],
            ['Speed & Core Web Vitals', 'Performance engineering that improves LCP, CLS, and INP. We have taken client stores from a 32 to a 98 page-speed score.'],
            ['Sales channels', 'Google, Instagram, TikTok Shop, and Amazon connected so you sell everywhere your customers already are.'],
            ['Technical SEO built in', 'Clean structure, schema, and metadata built into the store from day one — not bolted on after launch.'],
          ].map(([t, d]) => (
            <div key={t} style={{ background: '#F8FAFC', borderRadius: 12, padding: 20, border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: 18, margin: '0 0 8px' }}>{t}</h3>
              <p style={{ margin: 0, color: '#475569', lineHeight: 1.6, fontSize: 15 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ECEEZ — E-E-A-T differentiator */}
      <section style={card}>
        <h2 style={h2}>Why brands choose eCeez over a big agency</h2>
        <p style={p}>
          Most Shopify agencies sell you on a call, then hand your project to a junior team. With
          eCeez, you work directly with the developer building your store. And unlike agencies that
          only build stores, we <strong>operate</strong> one: our own live Shopify store carries
          9,000+ products, so our guidance on catalog imports, inventory sync, app selection, and
          conversion comes from running a real store every day — not from a pitch deck. That
          first-hand experience is why our builds avoid the operational mistakes that sink most new
          stores. Learn more about our approach on the{' '}
          <Link to="/about-us" style={link}>About eCeez</Link> page, or see how we think about{' '}
          <Link to="/seo" style={link}>ecommerce SEO</Link> and{' '}
          <Link to="/cro" style={link}>conversion optimization</Link>.
        </p>
        <p style={p}>
          Shopify itself is the backbone we build on. It powers millions of businesses worldwide and
          provides the secure, scalable infrastructure our custom work sits on top of — you can read
          more in the{' '}
          <a href="https://www.shopify.com/online" target="_blank" rel="noopener noreferrer" style={link}>
            official Shopify platform overview
          </a>{' '}
          and the{' '}
          <a href="https://shopify.dev/docs/themes" target="_blank" rel="noopener noreferrer" style={link}>
            Shopify theme development documentation
          </a>.
        </p>
      </section>

      {/* REVIEWS — visible on page + marked up for Google stars, only when real */}
      <section id="reviews" style={{ padding: '28px 0' }}>
        <h2 style={h2}>Client reviews</h2>
        {REVIEW_COUNT > 0 ? (
          <>
            <p style={{ ...p, marginTop: 0 }}>
              <Stars n={Math.round(AVG_RATING)} /> &nbsp;
              <strong>{AVG_RATING.toFixed(1)} / 5</strong> from {REVIEW_COUNT} verified client reviews
            </p>
            <div style={grid}>
              {REAL_REVIEWS.map((r, i) => (
                <figure key={i} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: 20, margin: 0 }}>
                  <Stars n={r.rating} />
                  <blockquote style={{ margin: '10px 0 12px', color: '#334155', lineHeight: 1.6, fontSize: 15 }}>
                    “{r.body}”
                  </blockquote>
                  <figcaption style={{ fontWeight: 700, fontSize: 14 }}>
                    {r.author}
                    {r.date && (
                      <span style={{ display: 'block', fontWeight: 400, color: '#94A3B8', fontSize: 13 }}>
                        {new Date(r.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                      </span>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
        ) : (
          <div style={{ background: '#fff', border: '1px dashed #CBD5E1', borderRadius: 12, padding: 28, textAlign: 'center' }}>
            <p style={{ ...p, marginBottom: 8 }}>
              We're a growing Shopify studio and are early in collecting reviews on this page —
              we'd rather show you real client feedback than none at all.
            </p>
            <p style={{ ...p, marginBottom: 0, color: '#64748B', fontSize: 14 }}>
              Ask us directly for references and examples of recent work, including our own live
              9,000-product Shopify store.
            </p>
          </div>
        )}
        <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 12 }}>
          Want references or relevant examples for your industry?{' '}
          <Link to="/contact" style={link}>Ask us</Link>.
        </p>
      </section>

      {/* FAQ — visible + schema */}
      <section style={card}>
        <h2 style={h2}>Shopify web development — FAQs</h2>
        {FAQS.map((f) => (
          <details key={f.q} style={{ borderBottom: '1px solid #E2E8F0', padding: '14px 0' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 700, fontSize: 16 }}>{f.q}</summary>
            <p style={{ margin: '10px 0 0', color: '#475569', lineHeight: 1.6 }}>{f.a}</p>
          </details>
        ))}
      </section>

      {/* CTA + contact links */}
      <section style={{ textAlign: 'center', padding: '48px 0 72px' }}>
        <h2 style={{ ...h2, textAlign: 'center' }}>Ready to build a Shopify store that performs?</h2>
        <p style={{ ...p, maxWidth: 620, margin: '0 auto 24px' }}>
          Tell us about your store and get honest, expert advice — no pressure, no sales script.
          You’ll talk directly to the developer who would build it.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" style={btnPrimary}>Contact eCeez</Link>
          <Link to="/shopify-store-setup-service" style={btnGhost}>See Store Setup Packages</Link>
        </div>
      </section>
    </main>
  );
};

// ---- inline styles (swap for your design system / Tailwind as needed) ----
const btnPrimary: React.CSSProperties = {
  background: '#1A3945', color: '#fff', padding: '13px 26px', borderRadius: 9999,
  fontWeight: 700, textDecoration: 'none', fontSize: 15,
};
const btnGhost: React.CSSProperties = {
  background: '#fff', color: '#1A3945', padding: '13px 26px', borderRadius: 9999,
  fontWeight: 700, textDecoration: 'none', fontSize: 15, border: '1.5px solid #1A3945',
};
const h2: React.CSSProperties = { fontSize: 28, fontWeight: 800, margin: '0 0 14px' };
const p: React.CSSProperties = { fontSize: 16, lineHeight: 1.7, color: '#334155', margin: '0 0 14px' };
const link: React.CSSProperties = { color: '#03AED2', fontWeight: 600, textDecoration: 'none' };
const card: React.CSSProperties = {
  background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 16, padding: 28, margin: '20px 0',
};
const grid: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 8,
};


