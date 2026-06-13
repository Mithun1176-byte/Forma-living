"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-forma-bg flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-grain z-20 opacity-30" />
      </motion.div>

      <div className="container relative z-30 px-6 mx-auto text-center flex flex-col items-center">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-[#F5F0E8] mb-6 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Furniture That <br className="hidden md:block" /> Outlives Trends.
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-[#F5F0E8]/90 max-w-2xl font-light mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          Handmade in Scandinavia. Designed for a lifetime. Blending tactile luxury with quiet confidence.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <a 
            href="#collection"
            className="px-8 py-4 bg-[#F5F0E8] text-black text-sm uppercase tracking-widest hover:bg-forma-brass hover:text-white transition-colors duration-300"
          >
            Shop the Collection
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 border border-[#F5F0E8] text-[#F5F0E8] text-sm uppercase tracking-widest hover:bg-[#F5F0E8]/10 transition-colors duration-300"
          >
            Book a Showroom Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
