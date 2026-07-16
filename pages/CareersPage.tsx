import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Zap } from 'lucide-react';

const jobs = [
  {
    title: 'Senior Full-Stack Engineer',
    location: 'Remote / SF',
    type: 'Full-time',
    category: 'Engineering'
  },
  {
    title: 'Product Designer (UX/UI)',
    location: 'Remote',
    type: 'Full-time',
    category: 'Design'
  },
  {
    title: 'Ecommerce Strategist',
    location: 'New York / Remote',
    type: 'Full-time',
    category: 'Strategy'
  },
  {
    title: 'SEO Specialist',
    location: 'Remote',
    type: 'Full-time',
    category: 'Marketing'
  }
];

export const CareersPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6">
          Careers
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">Join the <span className="text-indigo-600">Elite.</span></h1>
        <p className="text-zinc-700 text-lg max-w-2xl mx-auto">
          We're building the next generation of digital experiences. Are you ready to push the boundaries of what's possible?
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 mb-32">
        {jobs.map((job, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white border border-zinc-200 p-8 rounded-3xl hover:border-indigo-500/50 transition-all hover:shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest">{job.category}</span>
              <h3 className="text-2xl font-bold text-black">{job.title}</h3>
              <div className="flex flex-wrap gap-4 text-zinc-500 text-sm">
                <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
                <span className="flex items-center gap-1.5"><Clock size={16} /> {job.type}</span>
              </div>
            </div>
            <button className="bg-zinc-50 group-hover:bg-indigo-600 group-hover:text-white text-black px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2">
              Apply Now <ArrowRight size={18} />
            </button>
          </motion.div>
        ))}
      </div>

      <div className="bg-black rounded-[4rem] p-16 text-center text-white">
        <Zap className="w-16 h-16 text-indigo-500 mx-auto mb-8" />
        <h2 className="text-4xl font-bold mb-6">Don't see a fit?</h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
          We're always looking for exceptional talent. Send us your portfolio and tell us why you'd be a great addition to the team.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-bold transition-all">
          General Application
        </button>
      </div>
    </div>
  );
};
