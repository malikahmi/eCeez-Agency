import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { 
  TrendingUp, 
  Search, 
  Layout, 
  BarChart3, 
  ShoppingBag, 
  MousePointerClick 
} from 'lucide-react';

const services = [
  {
    title: 'Shopify Growth Engineering',
    description: 'Build a high-performance, scalable foundation. We develop custom Shopify themes and architectures that prioritize speed and conversion over everything.',
    icon: <ShoppingBag className="w-10 h-10 text-indigo-600" />,
    benefit: 'Sub-Second Page Speeds',
    link: '/shopify-web-development',
    color: 'bg-indigo-50/50',
    borderColor: 'border-indigo-100',
    accentColor: 'text-indigo-600'
  },
  {
    title: 'Conversion Optimization (CRO)',
    description: 'Turn your existing traffic into loyal customers. We identify friction points in your funnel and implement A/B tested solutions to boost your bottom line.',
    icon: <MousePointerClick className="w-10 h-10 text-purple-600" />,
    benefit: 'Higher Sales Velocity',
    link: '/shopify-cro',
    color: 'bg-purple-50/50',
    borderColor: 'border-purple-100',
    accentColor: 'text-purple-600'
  },
  {
    title: 'Technical E-commerce SEO',
    description: 'Dominate organic search for your category. We combine technical audits, programmatic SEO, and semantic internal linking to put your products in front of buyers.',
    icon: <Search className="w-10 h-10 text-blue-600" />,
    benefit: 'High-Intent Organic Traffic',
    link: '/seo',
    color: 'bg-blue-50/50',
    borderColor: 'border-blue-100',
    accentColor: 'text-blue-600'
  },
  {
    title: 'Brand Identity & UX',
    description: 'Establish trust through elite design. We craft immersive visual experiences and intuitive user journeys that resonate with high-end audiences.',
    icon: <Layout className="w-10 h-10 text-emerald-600" />,
    benefit: 'Increased Brand Equity',
    link: '/shopify-theme-customization',
    color: 'bg-emerald-50/50',
    borderColor: 'border-emerald-100',
    accentColor: 'text-emerald-600'
  },
  {
    title: 'Data & Funnel Analytics',
    description: 'Stop guessing and start scaling. We implement deep-funnel tracking and BI dashboards to give you total visibility over your marketing ROI.',
    icon: <BarChart3 className="w-10 h-10 text-orange-600" />,
    benefit: 'Clear Marketing Insights',
    link: '/analytics',
    color: 'bg-orange-50/50',
    borderColor: 'border-orange-100',
    accentColor: 'text-orange-600'
  },
  {
    title: 'AI Workflow Automation',
    description: 'Accelerate your growth through smart integrations. We connect Shopify Flow, Make, and OpenAI to automate complex back-office systems and CRM workflows.',
    icon: <TrendingUp className="w-10 h-10 text-pink-600" />,
    benefit: '80% Lower Ops Overhead',
    link: '/automation',
    color: 'bg-pink-50/50',
    borderColor: 'border-pink-100',
    accentColor: 'text-pink-600'
  },
];

export const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6"
        >
          Specialized Expertise
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4 text-black"
        >
          Core Capabilities for <span className="text-indigo-600">Scale</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-600 text-lg max-w-2xl mx-auto"
        >
          We don't just build websites; we engineer digital profit engines tailored for the modern e-commerce landscape.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={service.link}
              aria-label={`Explore ${service.title}`}
              className={`group flex flex-col h-full p-8 rounded-[2.5rem] ${service.color} border ${service.borderColor} hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`}
            >
              <div className="absolute top-6 right-6 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className={`w-5 h-5 ${service.accentColor}`} />
              </div>
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                {service.icon}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className={`text-xl font-bold group-hover:${service.accentColor} transition-colors text-black`}>
                  {service.title}
                </h3>
              </div>
              <p className="text-zinc-700 leading-relaxed text-sm mb-6 flex-grow">
                {service.description}
              </p>
              <div className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.accentColor} mb-6 group-hover:gap-2.5 transition-all duration-300`}>
                Learn more
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="pt-4 border-t border-zinc-200/50 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-black transition-colors">Key Result:</span>
                <span className={`text-xs font-bold ${service.accentColor}`}>{service.benefit}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};