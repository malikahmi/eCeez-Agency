import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';

interface ClientProject {
  id: number;
  name: string;
  image: string;
}

const clientProjects: ClientProject[] = [
  {
    id: 1,
    name: "Aurex",
    image: "https://cdn.shopify.com/s/files/1/0802/5722/0853/files/vruwrfR7-2.webp?v=1783697202"
  },
  {
    id: 2,
    name: "smartersolutions.xyz",
    image: "https://cdn.shopify.com/s/files/1/0802/5722/0853/files/5GvlM5Yt80.webp?v=1783697202"
  },
  {
    id: 3,
    name: "Oud Elixir",
    image: "https://cdn.shopify.com/s/files/1/0802/5722/0853/files/skin_care_1.webp?v=1783697202"
  },
  {
    id: 4,
    name: "Cleanfit",
    image: "https://cdn.shopify.com/s/files/1/0802/5722/0853/files/Clothing_1.webp?v=1783697201"
  },
  {
    id: 5,
    name: "Enlighten",
    image: "https://cdn.shopify.com/s/files/1/0802/5722/0853/files/0f42f6436c607c33e360676e30b7cb86.webp?v=1783697201"
  },
  {
    id: 6,
    name: "Givenchy",
    image: "https://cdn.shopify.com/s/files/1/0802/5722/0853/files/original-e70810a59c84755c57910e4a6d1377b0.webp?v=1783697202"
  },
  {
    id: 7,
    name: "Blue Nile",
    image: "https://cdn.shopify.com/s/files/1/0802/5722/0853/files/884958e1628001fb94c259a13977d0a0.webp?v=1783697744"
  },
  {
    id: 8,
    name: "Eluxee Jewelry",
    image: "https://cdn.shopify.com/s/files/1/0802/5722/0853/files/original-3e3ecedf67c37a85f10393ae27c3c432.webp?v=1783697201"
  }
];

const ProjectItem = ({ project, isActive, onInView }: {
  project: ClientProject;
  isActive: boolean;
  onInView: (id: number) => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) onInView(project.id);
  }, [isInView, project.id, onInView]);

  return (
    <div ref={ref} className="py-10 md:py-24">
      <motion.h3
        className={`text-4xl md:text-8xl font-medium tracking-tight transition-all duration-700 cursor-default ${
          isActive
            ? 'text-black translate-x-6 opacity-100'
            : 'text-zinc-300 translate-x-0 opacity-50'
        }`}
      >
        {project.name}
      </motion.h3>

      {/* Mobile: large inline image beneath each name (desktop uses the sticky pane) */}
      <div className="lg:hidden mt-6">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-zinc-100">
          <img
            src={project.image}
            alt={`${project.name} — eCeez Shopify client project`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};

export const ClientWork: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(clientProjects[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(containerRef, { margin: "-10% 0px -10% 0px" });
  void isSectionInView;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="bg-[#f8f8f8] relative min-h-screen">
      <div className="container mx-auto px-6 pt-12 flex justify-between items-baseline border-b border-zinc-200 pb-4">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">WORK</h2>
        <div className="text-sm font-medium tracking-widest uppercase opacity-60">ABOUT</div>
      </div>

      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-sm font-medium tracking-widest uppercase opacity-40">Clients</div>
        <div className="text-sm font-medium tracking-widest uppercase cursor-pointer hover:opacity-100 transition-opacity">
          + MORE WORK
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row relative">
          <div className="lg:w-1/2 lg:pb-[80vh] lg:pt-[40vh]">
            {clientProjects.map((project) => (
              <ProjectItem
                key={project.id}
                project={project}
                isActive={activeId === project.id}
                onInView={setActiveId}
              />
            ))}
          </div>

          <div className="hidden lg:flex lg:w-1/2 h-screen sticky top-24 items-center justify-center pointer-events-none">
            <motion.div
              style={{ scale: imageScale, opacity: imageOpacity }}
              className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white"
            >
              <AnimatePresence>
                {clientProjects.map(project => project.id === activeId && (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 1.1, filter: "blur(15px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <motion.img
                      src={project.image}
                      alt={project.name}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1 }}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
