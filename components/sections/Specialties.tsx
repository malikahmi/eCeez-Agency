import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TiltCard } from '../fx/Interactions';

interface SpecialtyCardProps {
  title: string;
  subtitle: string;
  recommendation: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  servicePath: string;
  serviceLabel: string;
  index: number;
  bgColor?: string;
  borderColor?: string;
  accentColor?: string;
  glowColor?: string;
  gradient?: string;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({
  title,
  subtitle,
  recommendation,
  description,
  features,
  ctaText,
  ctaLink,
  servicePath,
  serviceLabel,
  index,
  bgColor = "bg-white",
  borderColor = "border-zinc-200",
  accentColor = "text-indigo-600",
  glowColor = "rgba(99,102,241,0.22)",
  gradient = "from-indigo-500 via-purple-500 to-pink-500"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
      className="h-full"
    >
      <TiltCard max={5} className="group h-full rounded-[2.5rem]">
        {/* gradient aura that breathes on hover */}
        <div
          aria-hidden="true"
          className="absolute -inset-1 rounded-[2.7rem] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"
          style={{ background: `radial-gradient(60% 60% at 50% 0%, ${glowColor}, transparent 70%)` }}
        />
        {/* gradient border ring */}
        <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} aria-hidden="true" />
        <div className={`relative flex flex-col h-full p-8 m-[1.5px] rounded-[calc(2.5rem-1.5px)] ${bgColor} border ${borderColor} group-hover:border-transparent transition-colors duration-500 bg-white/95 backdrop-blur`}
          style={{ transform: 'translateZ(24px)', transformStyle: 'preserve-3d' }}
        >
          {/* Animated black corner brackets — float above the card in 3D, draw in on hover */}
          <div aria-hidden="true" style={{ transform: 'translateZ(55px)' }} className="pointer-events-none absolute inset-4 z-10">
            <span className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-black rounded-tl-lg opacity-0 -translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
            <span className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-black rounded-tr-lg opacity-0 translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 delay-75" />
            <span className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-black rounded-bl-lg opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 delay-100" />
            <span className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-black rounded-br-lg opacity-0 translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 delay-150" />
          </div>
          <div className="mb-6">
            <div className={`inline-block px-3 py-1 rounded-full ${bgColor} border ${borderColor} ${accentColor} text-[10px] font-bold uppercase tracking-wider mb-4`}>
              {recommendation}
            </div>

            {/* Clickable title -> main service page */}
            <Link
              to={servicePath}
              className="block group/title focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
              aria-label={`Explore ${title} services`}
            >
              <h3 className={`text-2xl font-bold mb-1 text-black inline-flex items-center gap-2 transition-colors duration-300 group-hover/title:${accentColor}`}>
                <span className="bg-gradient-to-r from-current to-current bg-[length:0%_2px] group-hover/title:bg-[length:100%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-500 pb-0.5">
                  {title}
                </span>
                <ArrowUpRight className={`w-5 h-5 ${accentColor} opacity-0 -translate-x-1 translate-y-1 group-hover/title:opacity-100 group-hover/title:translate-x-0 group-hover/title:translate-y-0 transition-all duration-300`} />
              </h3>
            </Link>

            <p className="text-zinc-700 font-medium text-sm mb-4">{subtitle}</p>
            <p className="text-zinc-600 text-sm leading-relaxed mb-2">
              {description}
            </p>
            <Link
              to={servicePath}
              className={`inline-flex items-center gap-1.5 text-sm font-semibold ${accentColor} hover:gap-2.5 transition-all duration-300 mb-6`}
            >
              {serviceLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex-grow" style={{ transform: 'translateZ(12px)' }}>
            <ul className="space-y-3 mb-8">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-800">
                  <div className={`mt-1 p-0.5 rounded-full ${bgColor} border ${borderColor} ${accentColor}`}>
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-zinc-200/50" style={{ transform: 'translateZ(18px)' }}>
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-4 bg-black text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-lg group/btn"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

export const Specialties: React.FC = () => {
  const specialties = [
    {
      title: 'WordPress Development',
      subtitle: 'Professional WordPress Websites',
      recommendation: 'Recommended for Service-Based Businesses',
      description: 'From corporate websites to advanced CMS portals — fast, secure, and SEO-ready WordPress websites that you can easily manage without technical knowledge.',
      features: [
        'Custom Theme & Plugin Development',
        'WooCommerce Integration',
        'Speed Optimisation & Core Web Vitals',
        'SEO-Ready Setup + Schema Markup',
        'Multisite, Membership & Portal Systems',
        '1 Year Free Hosting + Technical Support'
      ],
      servicePath: '/website-development-for-businesses',
      serviceLabel: 'Explore WordPress services',
      glowColor: 'rgba(37,99,235,0.22)',
      gradient: 'from-blue-500 via-sky-500 to-cyan-400',
      ctaText: 'Get WordPress Quote',
      ctaLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeTLw0K2a8NJSiGyNyhCy8Qe5mT7Csi8mt5zjo8d7GSydFfMA/viewform?usp=dialog',
      bgColor: 'bg-blue-50/30',
      borderColor: 'border-blue-100',
      accentColor: 'text-blue-600'
    },
    {
      title: 'Shopify Growth Engineering',
      subtitle: 'High-Converting Storefronts & Technical SEO',
      recommendation: 'Recommended for E-Commerce Brands',
      description: 'Revenue-driven Shopify software engineered with custom fast themes, programmatic SEO structures, deep analytics, and custom CRM & AI automations.',
      features: [
        'Custom Theme Development (Liquid / Hydrogen)',
        'Advanced Technical SEO & Topical Mapping',
        'Conversion Rate Optimization & A/B Testing',
        'Shopify Plus Enterprise Setup & Migrations',
        'Third-Party App, API & ERP Integrations',
        'AI-Powered Workflow Automation Systems'
      ],
      servicePath: '/shopify-web-development',
      serviceLabel: 'Explore Shopify services',
      glowColor: 'rgba(99,102,241,0.25)',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      ctaText: 'Get Shopify Quote',
      ctaLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdADkouHK7cMBVcrICUUTFHGarpI1IykSfN0o0g7hLP4MacTA/viewform?usp=publish-editor',
      bgColor: 'bg-indigo-50/30',
      borderColor: 'border-indigo-100',
      accentColor: 'text-indigo-600'
    },
    {
      title: 'Website Maintenance & Growth Plans',
      subtitle: 'Ongoing Support. Continuous Improvement.',
      recommendation: 'Recommended for Businesses That Want Long-Term Results',
      description: 'Your website shouldn’t just launch — it should evolve, improve, and stay secure. Our maintenance and growth plans ensure your website performs at its best every month.',
      features: [
        'Core Updates & Security Monitoring',
        'Daily/Weekly Backups',
        'Speed & Performance Optimisation',
        'Bug Fixes & Technical Support',
        'Conversion Rate Improvements',
        'Monthly Performance Reporting'
      ],
      servicePath: '/shopify-maintenance',
      serviceLabel: 'Explore maintenance plans',
      glowColor: 'rgba(147,51,234,0.22)',
      gradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
      ctaText: 'Get Maintenance Plan',
      ctaLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc5RqM4lD2rv7Z0UqS06dGkQNjv0x-AKLRT8fGjwsczmkByPw/viewform?usp=dialog',
      bgColor: 'bg-purple-50/30',
      borderColor: 'border-purple-100',
      accentColor: 'text-purple-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6"
        >
          Our Core Focus
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4 text-black"
        >
          Three Specialties. <span className="text-indigo-600">One Trusted Team.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-600 text-lg max-w-2xl mx-auto"
        >
          We focus on platforms we know deeply — so you get real expertise, better performance, and long-term results.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialties.map((specialty, index) => (
          <SpecialtyCard key={index} {...specialty} index={index} />
        ))}
      </div>
    </div>
  );
};
