import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingBag, Scissors, Utensils, Sparkles } from 'lucide-react';

const projects = [
  {
    title: "Shopify Product Page Design For Clothing Store",
    description: "Designed and optimized a high-converting Shopify product page for a clothing store. The page includes a clean, modern layout with a well-structured product description focused on clarity, branding, and SEO best practices. Improved product presentation through clear feature highlights, engaging copy, and a user-friendly structure to enhance customer experience and conversions.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
    icon: <ShoppingBag className="w-6 h-6 text-indigo-600" />,
    tags: ["Shopify", "UX/UI", "SEO"],
    bgColor: "bg-indigo-50/30",
    borderColor: "border-indigo-100",
    accentColor: "text-indigo-600"
  },
  {
    title: "Shopify Product Page & Store Design for Jewelry",
    description: "Designed a clean, modern Shopify product page and store layout focused on visual appeal, user experience, and conversions. The project involved structuring product sections, optimizing product descriptions, and presenting products in a professional, brand-consistent way. Special attention was given to layout hierarchy, clarity, and SEO-friendly content to improve engagement and product visibility.",
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=2070&auto=format&fit=crop",
    icon: <Sparkles className="w-6 h-6 text-amber-600" />,
    tags: ["Jewelry", "E-commerce", "Branding"],
    bgColor: "bg-amber-50/30",
    borderColor: "border-amber-100",
    accentColor: "text-amber-600"
  },
  {
    title: "Barber Website Design",
    description: "Build a professional and visually appealing website for a barber shop, focusing on showcasing services, appointment booking, and brand identity. Integrated a seamless scheduling system and a gallery of styles to drive local customer engagement.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
    icon: <Scissors className="w-6 h-6 text-zinc-600" />,
    tags: ["Local Business", "Booking", "Web Design"],
    bgColor: "bg-zinc-50/50",
    borderColor: "border-zinc-200",
    accentColor: "text-zinc-600"
  },
  {
    title: "Restaurant Website Design",
    description: "Create a modern and engaging website for a restaurant, highlighting the menu, ambiance, location, and online ordering capabilities. Focused on appetizing visual storytelling and an intuitive menu interface for both mobile and desktop users.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7ed9d421bb?auto=format&fit=crop&q=80&w=800",
    icon: <Utensils className="w-6 h-6 text-emerald-600" />,
    tags: ["Hospitality", "Online Ordering", "Visuals"],
    bgColor: "bg-emerald-50/30",
    borderColor: "border-emerald-100",
    accentColor: "text-emerald-600"
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6"
        >
          Our Portfolio
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-4 text-black"
        >
          Success Stories & <span className="text-indigo-500">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-600 text-lg max-w-2xl mx-auto"
        >
          Explore how we help brands scale with precision design and high-performance digital solutions.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative ${project.bgColor} border ${project.borderColor} rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 shadow-xl`}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 ${project.bgColor} rounded-2xl border ${project.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`px-3 py-1 ${project.bgColor} ${project.accentColor} text-[10px] font-bold uppercase tracking-wider rounded-full border ${project.borderColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-4 group-hover:${project.accentColor} transition-colors text-black`}>
                {project.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                {project.description}
              </p>
              <button className={`flex items-center gap-2 text-black font-bold text-sm hover:gap-3 transition-all ${project.accentColor}`}>
                View Project <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};