import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  TrendingUp,
  Search,
  Layout,
  BarChart3,
  ShoppingBag,
  MousePointerClick,
} from 'lucide-react';
import { TiltCard } from '../fx/Interactions';

/**
 * Services — "Core Capabilities for Scale"
 * Awwwards-style rebuild: dark premium canvas, 3D tilt cards (TiltCard),
 * cursor-following spotlight, ghosted giant numerals, per-service duotone
 * accents. All six links preserved exactly — SEO wiring untouched.
 */

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefit: string;
  link: string;
  grad: string;      // icon chip gradient
  spot: string;      // cursor spotlight rgba
  text: string;      // accent text color
  ring: string;      // hover border tint
}

const services: Service[] = [
  {
    title: 'Shopify Growth Engineering',
    description:
      'Build a high-performance, scalable foundation. We develop custom Shopify themes and architectures that prioritize speed and conversion over everything.',
    icon: <ShoppingBag className="w-6 h-6 text-white" aria-hidden="true" />,
    benefit: 'Sub-Second Page Speeds',
    link: '/shopify-web-development',
    grad: 'from-indigo-500 to-violet-600',
    spot: 'rgba(99,102,241,0.14)',
    text: 'text-indigo-400',
    ring: 'hover:border-indigo-400/40',
  },
  {
    title: 'Conversion Optimization (CRO)',
    description:
      'Turn your existing traffic into loyal customers. We identify friction points in your funnel and implement A/B tested solutions to boost your bottom line.',
    icon: <MousePointerClick className="w-6 h-6 text-white" aria-hidden="true" />,
    benefit: 'Higher Sales Velocity',
    link: '/shopify-cro',
    grad: 'from-fuchsia-500 to-purple-600',
    spot: 'rgba(217,70,239,0.13)',
    text: 'text-fuchsia-400',
    ring: 'hover:border-fuchsia-400/40',
  },
  {
    title: 'Technical E-commerce SEO',
    description:
      'Dominate organic search for your category. We combine technical audits, programmatic SEO, and semantic internal linking to put your products in front of buyers.',
    icon: <Search className="w-6 h-6 text-white" aria-hidden="true" />,
    benefit: 'High-Intent Organic Traffic',
    link: '/seo',
    grad: 'from-sky-500 to-blue-600',
    spot: 'rgba(56,189,248,0.13)',
    text: 'text-sky-400',
    ring: 'hover:border-sky-400/40',
  },
  {
    title: 'Brand Identity & UX',
    description:
      'Establish trust through elite design. We craft immersive visual experiences and intuitive user journeys that resonate with high-end audiences.',
    icon: <Layout className="w-6 h-6 text-white" aria-hidden="true" />,
    benefit: 'Increased Brand Equity',
    link: '/shopify-theme-customization',
    grad: 'from-emerald-500 to-teal-600',
    spot: 'rgba(16,185,129,0.13)',
    text: 'text-emerald-400',
    ring: 'hover:border-emerald-400/40',
  },
  {
    title: 'Data & Funnel Analytics',
    description:
      'Stop guessing and start scaling. We implement deep-funnel tracking and BI dashboards to give you total visibility over your marketing ROI.',
    icon: <BarChart3 className="w-6 h-6 text-white" aria-hidden="true" />,
    benefit: 'Clear Marketing Insights',
    link: '/analytics',
    grad: 'from-amber-500 to-orange-600',
    spot: 'rgba(251,146,60,0.13)',
    text: 'text-amber-400',
    ring: 'hover:border-amber-400/40',
  },
  {
    title: 'AI Workflow Automation',
    description:
      'Accelerate your growth through smart integrations. We connect Shopify Flow, Make, and OpenAI to automate complex back-office systems and CRM workflows.',
    icon: <TrendingUp className="w-6 h-6 text-white" aria-hidden="true" />,
    benefit: '80% Lower Ops Overhead',
    link: '/automation',
    grad: 'from-rose-500 to-pink-600',
    spot: 'rgba(244,63,94,0.13)',
    text: 'text-rose-400',
    ring: 'hover:border-rose-400/40',
  },
];

const setSpot = (e: React.MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
};

export const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Dark premium canvas */}
      <div className="relative rounded-[3rem] bg-zinc-950 border border-zinc-800/60 px-6 sm:px-10 lg:px-14 py-16 sm:py-20 overflow-hidden">
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          }}
          aria-hidden="true"
        />
        {/* ambient glows */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-[#03AED2]/10 blur-[140px] rounded-full pointer-events-none" aria-hidden="true" />

        {/* Header */}
        <div className="relative text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-semibold mb-6 uppercase tracking-[0.2em]"
          >
            Specialized Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-5 text-white"
          >
            Core Capabilities for{' '}
            <span className="font-serif italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#03AED2] to-indigo-400">
              Scale
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            We don&rsquo;t just build websites; we engineer digital profit engines tailored for the modern e-commerce landscape.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s, index) => (
            <motion.div
              key={s.link}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.07, duration: 0.5, ease: 'easeOut' }}
            >
              <TiltCard max={6} className="h-full">
                <Link
                  to={s.link}
                  aria-label={`Explore ${s.title}`}
                  onMouseMove={setSpot}
                  className={`group flex flex-col h-full p-7 sm:p-8 rounded-[2rem] bg-zinc-900/70 border border-white/10 ${s.ring} transition-colors duration-300 relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#03AED2]`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* cursor spotlight */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(480px circle at var(--mx, 50%) var(--my, 50%), ${s.spot}, transparent 65%)`,
                    }}
                    aria-hidden="true"
                  />
                  {/* ghosted numeral — more visible */}
                  <div
                    className="absolute -top-3 right-4 text-[6.5rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-white/25 to-white/5 group-hover:from-white/40 group-hover:to-white/10 transition-all duration-500 select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* icon chip — floats above the card in 3D */}
                  <div style={{ transform: 'translateZ(40px)' }} className="mb-7">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${s.grad} shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-300`}>
                      {s.icon}
                    </div>
                  </div>

                  <h3
                    style={{ transform: 'translateZ(28px)' }}
                    className="text-xl font-bold text-white tracking-tight mb-3"
                  >
                    {s.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm mb-7 flex-grow">
                    {s.description}
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-white/10">
                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${s.text} group-hover:gap-3 transition-all duration-300`}>
                      Explore
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" aria-hidden="true" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      {s.benefit}
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
