import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, DollarSign, Users, Percent, ArrowRight, Info } from 'lucide-react';
import { Magnetic } from '../components/fx/Interactions';

const AUDIT_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSecd8M7ki7GTCBKOb0shSgZVEoiA6QMcqyvbK3K4GTumiR16g/viewform?usp=publish-editor';

const fmt = (n: number, currency = '$') =>
  currency + Math.round(n).toLocaleString('en-US');

export const ConversionCalculatorPage: React.FC = () => {
  const [visitors, setVisitors] = useState(20000);
  const [conversion, setConversion] = useState(1.8);
  const [aov, setAov] = useState(65);
  const [targetConversion, setTargetConversion] = useState(2.5);
  const [currency, setCurrency] = useState('$');

  useEffect(() => {
    document.title = 'Free Shopify Conversion Rate ROI Calculator | eCeez';
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content',
      'Free Shopify conversion rate calculator: see how much extra monthly and annual revenue a higher conversion rate would generate for your store. No signup required.');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://eceez.com/tools/shopify-conversion-calculator');

    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'ld-calc';
    s.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebApplication',
          name: 'Shopify Conversion Rate ROI Calculator',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          url: 'https://eceez.com/tools/shopify-conversion-calculator',
          description: 'Calculate the revenue impact of improving your Shopify store\u2019s conversion rate.',
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is a good conversion rate for a Shopify store?',
              acceptedAnswer: { '@type': 'Answer', text: 'Average ecommerce conversion rates sit broadly between 2% and 3%, with top performers exceeding 3.2%. But the right benchmark depends heavily on your niche, price point, and traffic source; high-consideration or high-price products convert lower, and cold traffic converts far below branded search. The number that matters most is your own store improving over time.' },
            },
            {
              '@type': 'Question',
              name: 'How is the revenue impact of conversion rate calculated?',
              acceptedAnswer: { '@type': 'Answer', text: 'Monthly revenue equals monthly visitors multiplied by conversion rate multiplied by average order value. Improving the conversion rate while holding traffic constant raises revenue proportionally, which is why conversion optimization is often the highest-ROI growth lever: you earn more from traffic you already have.' },
            },
          ],
        },
      ],
    });
    document.head.appendChild(s);
    return () => { document.getElementById('ld-calc')?.remove(); };
  }, []);

  const results = useMemo(() => {
    const currentMonthly = visitors * (conversion / 100) * aov;
    const targetMonthly = visitors * (targetConversion / 100) * aov;
    const monthlyGain = targetMonthly - currentMonthly;
    const annualGain = monthlyGain * 12;
    const currentOrders = visitors * (conversion / 100);
    const targetOrders = visitors * (targetConversion / 100);
    const pctLift = conversion > 0 ? ((targetConversion - conversion) / conversion) * 100 : 0;
    return { currentMonthly, targetMonthly, monthlyGain, annualGain, currentOrders, targetOrders, pctLift };
  }, [visitors, conversion, aov, targetConversion]);

  const Field: React.FC<{
    label: string; icon: React.ReactNode; value: number; onChange: (n: number) => void;
    min: number; max: number; step: number; prefix?: string; suffix?: string;
  }> = ({ label, icon, value, onChange, min, max, step, prefix, suffix }) => (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-semibold text-zinc-700">
        <span className="text-indigo-600">{icon}</span> {label}
      </label>
      <div className="flex items-center gap-3">
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="flex-1 accent-indigo-600"
          aria-label={label}
        />
        <div className="w-28 shrink-0 flex items-center gap-1 bg-white border border-zinc-200 rounded-lg px-2 py-1.5">
          {prefix && <span className="text-zinc-400 text-sm">{prefix}</span>}
          <input
            type="number" min={min} max={max} step={step} value={value}
            onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
            className="w-full text-sm font-bold text-black outline-none bg-transparent"
            aria-label={`${label} value`}
          />
          {suffix && <span className="text-zinc-400 text-sm">{suffix}</span>}
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="max-w-3xl mx-auto mb-4">
        <Link to="/tools/ecommerce-taxonomy-mapper" className="text-sm text-zinc-500 hover:text-indigo-600 transition-colors">
          &larr; More free tools
        </Link>
      </div>

      <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 max-w-3xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold mb-5 uppercase tracking-wider">
          Free Tool
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-5 text-black tracking-tight leading-[1.1]">
          Shopify Conversion Rate <span className="text-indigo-600">ROI Calculator</span>
        </h1>
        <p className="text-zinc-700 text-lg leading-relaxed">
          See exactly how much extra revenue a higher conversion rate would put in your pocket, from the same traffic you already have. Adjust the sliders to match your store.
        </p>
      </motion.header>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* INPUTS */}
        <motion.section
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 sm:p-8 space-y-6"
          aria-label="Your store numbers"
        >
          <h2 className="text-lg font-bold text-black">Your store today</h2>
          <Field label="Monthly visitors" icon={<Users size={16} />} value={visitors} onChange={setVisitors} min={500} max={500000} step={500} />
          <Field label="Current conversion rate" icon={<Percent size={16} />} value={conversion} onChange={setConversion} min={0.1} max={10} step={0.1} suffix="%" />
          <Field label="Average order value" icon={<DollarSign size={16} />} value={aov} onChange={setAov} min={5} max={1000} step={5} prefix={currency} />
          <div className="pt-2 border-t border-zinc-200">
            <h2 className="text-lg font-bold text-black mt-4 mb-4">Your target</h2>
            <Field label="Target conversion rate" icon={<TrendingUp size={16} />} value={targetConversion} onChange={setTargetConversion} min={0.1} max={10} step={0.1} suffix="%" />
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>Currency:</span>
            {['$', '£', '€'].map((c) => (
              <button key={c} onClick={() => setCurrency(c)}
                className={`px-2.5 py-1 rounded-md border transition-colors ${currency === c ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white border-zinc-200 text-zinc-600'}`}>
                {c}
              </button>
            ))}
          </div>
        </motion.section>

        {/* RESULTS */}
        <motion.section
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
          aria-label="Results"
        >
          <div className="bg-indigo-600 rounded-3xl p-6 sm:p-8 text-white">
            <div className="text-sm text-indigo-100 mb-1">Extra annual revenue</div>
            <div className="text-4xl sm:text-5xl font-bold mb-1">{fmt(results.annualGain, currency)}</div>
            <div className="text-indigo-200 text-sm">
              from the same traffic, at a {results.pctLift > 0 ? '+' : ''}{Math.round(results.pctLift)}% conversion lift
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-zinc-200 rounded-2xl p-5">
              <div className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Extra monthly revenue</div>
              <div className="text-2xl font-bold text-emerald-600">{fmt(results.monthlyGain, currency)}</div>
            </div>
            <div className="bg-white border border-zinc-200 rounded-2xl p-5">
              <div className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Extra monthly orders</div>
              <div className="text-2xl font-bold text-black">{Math.round(results.targetOrders - results.currentOrders).toLocaleString()}</div>
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-2xl p-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-500">Current monthly revenue</span>
              <span className="font-semibold text-zinc-700">{fmt(results.currentMonthly, currency)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-zinc-500">Target monthly revenue</span>
              <span className="font-semibold text-indigo-600">{fmt(results.targetMonthly, currency)}</span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-xs text-zinc-500 bg-zinc-50 rounded-xl p-4">
            <Info size={14} className="shrink-0 mt-0.5" aria-hidden="true" />
            <span>Estimates use revenue = visitors × conversion rate × average order value. Real results vary by store, traffic mix, and starting point. Use this as a directional guide to the value of conversion work, not a guarantee.</span>
          </div>
        </motion.section>
      </div>

      {/* CONTEXT / SEO CONTENT */}
      <section className="max-w-3xl mx-auto mt-16 space-y-5">
        <h2 className="text-2xl font-bold text-black tracking-tight">Why conversion rate is your highest-ROI lever</h2>
        <p className="text-zinc-700 leading-relaxed">
          Most stores obsess over getting more traffic, which is expensive and competitive. Conversion optimization does the opposite: it earns more revenue from the visitors you already have. As the calculator shows, moving from a 1.8% to a 2.5% conversion rate isn\u2019t a small tweak, it\u2019s often a 30\u201340% revenue increase on identical traffic, and unlike paid ads, that gain keeps paying every month.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The levers that move the number are rarely cosmetic. Faster page loads (Core Web Vitals directly affect conversion), a frictionless mobile experience with a sticky add-to-cart, trust signals and visible reviews, a streamlined checkout, and clear, benefit-led product pages all compound. Diagnosing which of these is costing you most requires looking at your actual funnel, not guessing.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          That\u2019s what a proper <Link to="/shopify-cro" className="text-indigo-600 underline underline-offset-2">Shopify CRO</Link> process does: find where your funnel leaks, form hypotheses, and test changes measured on revenue per visitor. Paired with <Link to="/shopify-speed-optimization" className="text-indigo-600 underline underline-offset-2">speed optimization</Link>, it\u2019s the most reliable way to grow revenue without spending more on traffic.
        </p>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="max-w-3xl mx-auto mt-14 bg-zinc-900 rounded-3xl p-8 md:p-12 text-center text-white"
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
          Want to know what\u2019s actually costing you conversions?
        </h2>
        <p className="text-zinc-300 max-w-xl mx-auto mb-7">
          A free audit shows you exactly where your store is leaking conversions, and what the highest-impact fixes are for your specific store.
        </p>
        <Magnetic>
          <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-9 py-4 rounded-full font-bold text-lg transition-colors">
            Get a Free CRO Audit <ArrowRight size={18} aria-hidden="true" />
          </a>
        </Magnetic>
      </motion.section>
    </main>
  );
};
