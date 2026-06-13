"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const materials = [
  { id: "oak", name: "Solid Oak", color: "#d2b48c" },
  { id: "walnut", name: "Dark Walnut", color: "#5c4033" },
  { id: "black", name: "Ebonized Ash", color: "#1a1a1a" },
  { id: "sage", name: "Sage Green Lacquer", color: "#7C9070" },
];

export function MaterialSelector() {
  const [activeMaterial, setActiveMaterial] = useState(materials[0]);

  return (
    <section id="materials" className="py-24 bg-forma-bg relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading mb-6 text-forma-text">
            Make It Yours
          </h2>
          <p className="text-lg text-forma-text/70 mb-10 max-w-md">
            Our finishes are carefully developed to enhance the natural beauty of each piece, ensuring it complements your space perfectly. Explore our signature palette.
          </p>
          
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-forma-text">Select Finish: {activeMaterial.name}</h3>
            <div className="flex gap-4">
              {materials.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setActiveMaterial(mat)}
                  className={`relative w-12 h-12 rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-forma-text focus:ring-offset-4 focus:ring-offset-forma-bg ${activeMaterial.id === mat.id ? 'scale-110 ring-1 ring-forma-text ring-offset-4 ring-offset-forma-bg' : ''}`}
                  style={{ backgroundColor: mat.color }}
                  aria-label={`Select ${mat.name} finish`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 flex justify-center items-center h-[400px] md:h-[600px] relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* A pure CSS visualization of a chair silhouette changing color */}
          <div className="relative w-64 h-80 md:w-80 md:h-96">
            <motion.svg 
              viewBox="0 0 200 240" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-2xl transition-colors duration-700 ease-in-out"
              animate={{ color: activeMaterial.color }}
            >
              <path d="M40 100 L40 40 C40 20, 60 10, 100 10 C140 10, 160 20, 160 40 L160 100" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
              <path d="M20 100 L180 100 C190 100, 195 105, 195 115 L195 130 C195 140, 190 145, 180 145 L20 145 C10 145, 5 140, 5 130 L5 115 C5 105, 10 100, 20 100 Z" fill="currentColor" />
              <path d="M30 145 L20 230" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
              <path d="M170 145 L180 230" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
              <path d="M60 145 L50 210" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
              <path d="M140 145 L150 210" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
              <path d="M50 145 L150 145" stroke="currentColor" strokeWidth="8" opacity="0.3" />
            </motion.svg>
          </div>
          
          {/* Subtle background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
