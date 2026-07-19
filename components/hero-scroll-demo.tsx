
import React, { useEffect, useState } from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GrowthField3D } from "./fx/GrowthField3D";

const logos = [
  { 
    name: "Shopify", 
    url: "https://cdn.simpleicons.org/shopify/95BF47", 
    top: "8%", left: "2%", 
    mTop: "12%", mLeft: "4%", 
    factor: 35, size: "md:w-28 md:h-28", rotate: -8 
  },
  { 
    name: "WordPress", 
    url: "https://cdn.simpleicons.org/wordpress/21759B", 
    top: "8%", right: "2%", 
    mTop: "12%", mRight: "4%", 
    factor: -35, size: "md:w-24 md:h-24", rotate: 12 
  },
  { 
    name: "Stripe", 
    url: "https://cdn.iconscout.com/icon/free/png-512/free-stripe-logo-icon-svg-download-png-498440.png?f=webp&w=512", 
    top: "42%", left: "4%", 
    mTop: "32%", mLeft: "2%", 
    factor: 45, size: "md:w-26 md:h-26", rotate: 15 
  },
  { 
    name: "Figma", 
    url: "https://cdn.simpleicons.org/figma/F24E1E", 
    top: "42%", right: "4%", 
    mTop: "32%", mRight: "2%", 
    factor: -45, size: "md:w-24 md:h-24", rotate: -15 
  },
  { 
    name: "Google", 
    url: "https://www.vectorlogo.zone/logos/google/google-icon.svg", 
    top: "72%", left: "8%", 
    mTop: "48%", mLeft: "6%", 
    factor: 30, size: "md:w-24 md:h-24", rotate: -10 
  },
];

const FloatingLogo = ({ logo, mouseX, mouseY, isMobile }: { logo: any, mouseX: any, mouseY: any, isMobile: boolean }) => {
  const x = useTransform(mouseX, [0, 1], [-logo.factor, logo.factor]);
  const y = useTransform(mouseY, [0, 1], [-logo.factor, logo.factor]);
  
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: logo.rotate }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "absolute",
        top: isMobile ? logo.mTop : logo.top,
        left: isMobile ? logo.mLeft : logo.left,
        right: isMobile ? logo.mRight : logo.right,
        x: springX,
        y: springY,
        rotate: logo.rotate,
        zIndex: 10,
      }}
      className="flex items-center justify-center pointer-events-auto"
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 8, 0],
          rotate: [logo.rotate, logo.rotate + 5, logo.rotate],
        }}
        transition={{
          duration: 5 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1, zIndex: 50, rotate: 0 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full group-hover:bg-indigo-500/30 transition-all duration-700 scale-150" />
        <div className={`relative w-12 h-12 ${logo.size} bg-white/95 backdrop-blur-md rounded-full shadow-[0_10px_40px_rgb(0,0,0,0.08)] border border-white/40 flex items-center justify-center p-3 md:p-6 overflow-hidden transition-all duration-500 group-hover:shadow-[0_25px_60px_rgba(79,70,229,0.25)] group-hover:border-indigo-500/40`}>
          <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_6px_rgba(0,0,0,0.03)] pointer-events-none" />
          <img
            src={logo.url}
            alt={logo.name}
            className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export function HeroScrollDemo() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth);
      mouseY.set(clientY / innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="flex flex-col overflow-hidden bg-background relative min-h-[52rem] md:min-h-[68rem]">
      {/* Signature interactive layer: 3D growth field, cursor-reactive */}
      <div className="absolute inset-x-0 top-0 h-[52rem] md:h-[64rem] pointer-events-none" aria-hidden="true">
        <GrowthField3D />
        {/* soft fade so the field dissolves into the page, never competing with content */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-background" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100 mb-8 shadow-sm"
            >
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=120&auto=format&fit=crop&facepad=2&crop=faces",
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=120&auto=format&fit=crop&facepad=2&crop=faces",
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=120&auto=format&fit=crop&facepad=2&crop=faces"
                ].map((src, i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-indigo-50 overflow-hidden shadow-sm">
                    <img src={src} alt="Client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] md:text-xs font-bold text-indigo-600 tracking-wider uppercase">
                Trusted by 90+ Global Brands
              </span>
            </motion.div>
            <h1 className="text-4xl font-semibold text-black">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.55, delay: 0, ease: [0.22, 1, 0.36, 1] }}
                >
                  Unleash the power of
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  className="block text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  Digital Excellence
                </motion.span>
              </span>
            </h1>
          </div>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=75&w=1200&auto=format&fm=webp&fit=crop"
          alt="eCeez team building premium e-commerce software and brand websites"
          className="mx-auto rounded-2xl object-cover h-full object-center w-full shadow-2xl"
          draggable={false}
          loading="eager"
        />
      </ContainerScroll>

      <div className="absolute inset-0 pointer-events-none z-50">
        <div className="max-w-7xl mx-auto h-full relative pointer-events-none">
          {logos.map((logo, idx) => (
            <FloatingLogo key={idx} logo={logo} mouseX={mouseX} mouseY={mouseY} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </div>
  );
}
