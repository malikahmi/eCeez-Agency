import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronUp, Users, ShoppingCart, DollarSign, Percent } from 'lucide-react';

interface AnimatedCounterProps {
  value: number;
  duration?: number; // in ms
  prefix?: string;
  suffix?: string;
  decimals?: number;
  shouldLiveTick?: boolean;
  tickInterval?: number; // in ms
  onTick?: (increment: number) => void;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1800,
  prefix = '',
  suffix = '',
  decimals = 0,
  shouldLiveTick = false,
  tickInterval = 4000,
  onTick
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - percentage, 3);
            const currentCount = easeProgress * value;

            setCount(currentCount);

            if (percentage < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
              
              // Enable live ticking if specified
              if (shouldLiveTick) {
                const interval = setInterval(() => {
                  const increment = Math.floor(Math.random() * 85) + 15; // random value between $15 and $100
                  setCount(prev => {
                    const next = prev + increment;
                    if (onTick) onTick(increment);
                    return next;
                  });
                }, tickInterval);
                return () => clearInterval(interval);
              }
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration, shouldLiveTick, tickInterval, onTick]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
    <span ref={elementRef} className="tabular-nums font-black text-zinc-900 tracking-tight text-2xl">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

export const ShopifyDashboard: React.FC = () => {
  const [liveOrders, setLiveOrders] = useState(1920);

  const handleSalesTick = () => {
    // Occasionally increment orders when sales occur
    if (Math.random() > 0.4) {
      setLiveOrders(prev => prev + 1);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16" id="shopify-growth-dashboard">
      <div className="text-center mb-8 md:mb-12">
        <h3 className="text-2xl md:text-3.5xl font-extrabold tracking-tight text-zinc-950">
          Driving Real Growth for <span className="text-emerald-600 font-bold">Shopify Brands</span>
        </h3>
        <p className="text-zinc-500 text-sm max-w-2xl mx-auto mt-2 font-medium">
          Optimized stores load instantly, rank higher on search engines, and convert twice as many visitors. See our core growth metrics scale below.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden"
      >
        {/* Core Shopify Stats Grid */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center p-3 gap-2 md:gap-0 bg-zinc-50/50">
          
          {/* Sessions */}
          <div className="flex-1 flex flex-col p-4 bg-white rounded-xl border border-zinc-200/60 shadow-sm">
            <div className="flex items-center justify-between mb-2 select-none">
              <span className="text-zinc-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-zinc-400" />
                Sessions
              </span>
            </div>
            <div className="flex items-center gap-2">
              <AnimatedCounter value={95000} />
              <div className="flex items-center text-xs font-bold text-emerald-600 select-none">
                <ArrowUpRight className="w-3 h-3 mr-0.5" />
                +38%
              </div>
            </div>
          </div>

          {/* Total Sales */}
          <div className="flex-1 flex flex-col p-4 md:ml-6">
            <div className="flex items-center mb-2 select-none">
              <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-zinc-400" />
                Total sales
              </span>
            </div>
            <div className="flex items-center gap-2">
              <AnimatedCounter 
                value={86400} 
                prefix="$" 
                shouldLiveTick={true} 
                tickInterval={4500}
                onTick={handleSalesTick}
              />
              <div className="flex items-center text-xs font-bold text-emerald-600 select-none">
                <ArrowUpRight className="w-3 h-3 mr-0.5" />
                +52%
              </div>
            </div>
          </div>

          {/* Orders */}
          <div className="flex-1 flex flex-col p-4 md:ml-6">
            <div className="flex items-center mb-2 select-none">
              <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <ShoppingCart className="w-3.5 h-3.5 text-zinc-400" />
                Orders
              </span>
            </div>
            <div className="flex items-center gap-2">
              <AnimatedCounter 
                value={liveOrders} 
                key={liveOrders}
                duration={1200}
              />
              <div className="flex items-center text-xs font-bold text-emerald-600 select-none">
                <ArrowUpRight className="w-3 h-3 mr-0.5" />
                +44%
              </div>
            </div>
          </div>

          {/* Conversion Rate */}
          <div className="flex-1 flex flex-col p-4 md:ml-6">
            <div className="flex items-center mb-2 select-none">
              <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Percent className="w-3.5 h-3.5 text-zinc-400" />
                Conversion rate
              </span>
            </div>
            <div className="flex items-center gap-2">
              <AnimatedCounter 
                value={2.0} 
                suffix="%" 
                decimals={1} 
                duration={1500}
              />
              <span className="text-[11px] text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full font-bold border border-amber-100 flex items-center gap-1 select-none">
                ⚠️ Sub-optimal
              </span>
            </div>
          </div>

          <div className="px-6 hidden md:block select-none">
            <ChevronUp className="w-5 h-5 text-zinc-400 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
