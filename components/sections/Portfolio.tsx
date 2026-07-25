import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  impact: string;
  pages: string[];
  image: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Blu Nile Luxury",
    category: "High-End Jewelry E-commerce",
    impact: "+28% Conversion Rate",
    pages: ["Home", "Product Detail", "Collection"],
    image: "https://cdn.dribbble.com/userupload/14626585/file/original-3e3ecedf67c37a85f10393ae27c3c432.png?resize=1600x1200&vertical=center",
    color: "#F2F4F3"
  },
  {
    id: 2,
    title: "Yucca Rewards",
    category: "Custom Loyalty Experience",
    impact: "35% Increase in Repeat Purchase",
    pages: ["Rewards Dashboard"],
    image: "https://cdn.dribbble.com/userupload/46575359/file/73e2582813260fc5334a01ab8bc25451.png?resize=1600x1200&vertical=center",
    color: "#F5F5F0"
  },
  {
    id: 3,
    title: "David Performance",
    category: "Special Product Landing Page",
    impact: "8.2% Conversion Rate",
    pages: ["Landing Page"],
    image: "https://cdn.dribbble.com/userupload/17436381/file/original-247f7d290322cd0318611196014d6cc2.jpeg?resize=752x&vertical=center",
    color: "#F8F8F8"
  },
  {
    id: 4,
    title: "Dimito Snow Tech",
    category: "Technical Apparel Store",
    impact: "+40% Mobile Revenue",
    pages: ["Sidebar Navigation"],
    image: "https://cdn.dribbble.com/userupload/46510144/file/0f42f6436c607c33e360676e30b7cb86.png?resize=752x&vertical=center",
    color: "#EBEBEB"
  },
  {
    id: 5,
    title: "Blue Bottle Lifestyle",
    category: "Minimalist Grid Design",
    impact: "+18% Avg. Session Duration",
    pages: ["Collection Grid"],
    image: "https://cdn.dribbble.com/userupload/43014000/file/original-e70810a59c84755c57910e4a6d1377b0.jpeg?resize=752x&vertical=center",
    color: "#F9F9F9"
  },
  {
    id: 6,
    title: "Winter Layer Fashion",
    category: "Editorial E-commerce Experience",
    impact: "+55% Overall Conversion",
    pages: ["Home"],
    image: "https://cdn.dribbble.com/userupload/46285096/file/884958e1628001fb94c259a13977d0a0.png?resize=2048x1536&vertical=center",
    color: "#B91C1C"
  }
];

const ProjectCard = ({ project, index, total }: { project: Project; index: number; total: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });
  
  // Offset for stacked effect
  const initialX = (index - (total - 1) / 2) * 40;
  const initialY = (index - (total - 1) / 2) * 12;
  const initialRotate = (index - (total - 1) / 2) * 4;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set((x / width) - 0.5);
    mouseY.set((y / height) - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: initialX, y: initialY, rotate: initialRotate }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ 
        zIndex: 100, 
        scale: 1.1, 
        x: initialX * 0.1, 
        y: initialY - 140,
        rotate: 0,
        transition: { duration: 0.5, type: "spring", stiffness: 200, damping: 20 }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        backgroundColor: project.color,
      }}
      className="absolute w-[320px] md:w-[550px] aspect-[4/3] rounded-[3rem] shadow-2xl overflow-hidden cursor-pointer border border-black/5 group"
    >
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-8 py-4 bg-black text-white rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl"
          onClick={() => window.location.href = '#/case-studies'}
        >
          View Case Study
        </motion.button>
      </div>

      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ translateZ: 20 }}
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-700"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </motion.div>
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none group-hover:from-black/40 transition-all duration-500" />
    </motion.div>
  );
};

export const Portfolio: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-50 overflow-hidden relative min-h-[100vh] flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-4 relative z-10 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest mb-6"
        >
          Selected Works
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl font-bold tracking-tighter text-black mb-8"
        >
          Crafting Digital <br />
          <span className="italic font-serif text-zinc-400">Masterpieces.</span>
        </motion.h2>
      </div>

      <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} total={projects.length} />
        ))}
      </div>
    </section>
  );
};
