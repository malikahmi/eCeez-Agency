
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../src/data/blogData';

export const BlogSection: React.FC = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6"
            >
              The Digital Profit Library
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-black"
            >
              Expert Insights for <span className="text-indigo-600">Scale.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/blog" 
              className="group flex items-center gap-2 text-black font-bold text-sm uppercase tracking-widest hover:text-indigo-600 transition-colors"
            >
              View All Insights <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-zinc-50 border border-zinc-200 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/50 transition-all"
            >
              <Link to={`/blog/${post.id}`} className="block aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-indigo-600" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-indigo-600" /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6 line-clamp-3 italic">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-zinc-200">
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-black font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group/btn"
                  >
                    Read Deep Dive <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
