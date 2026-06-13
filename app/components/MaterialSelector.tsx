"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const materials = [
  {
    id: "oak",
    name: "Solid Oak",
    color: "#d2b48c",
    description:
      "Warm honey tones with visible, tactile grain. Ages gracefully to a deeper amber.",
  },
  {
    id: "walnut",
    name: "Dark Walnut",
    color: "#5c4033",
    description:
      "Rich chocolate undertones with swirling grain patterns. Our most sought-after finish.",
  },
  {
    id: "black",
    name: "Ebonized Ash",
    color: "#1a1a1a",
    description:
      "Jet-black stain that lets the ash grain whisper through. Dramatic and modern.",
  },
  {
    id: "sage",
    name: "Sage Green Lacquer",
    color: "#7C9070",
    description:
      "A hand-applied matte lacquer in our signature sage. Pairs beautifully with natural oak.",
  },
];

/** Inline SVG noise used as a grain texture overlay */
const noiseSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

export function MaterialSelector() {
  const [activeMaterial, setActiveMaterial] = useState(materials[0]);

  return (
    <section
      id="materials"
      className="py-24 bg-forma-bg relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* ── Left panel (unchanged) ── */}
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
            Our finishes are carefully developed to enhance the natural beauty
            of each piece, ensuring it complements your space perfectly. Explore
            our signature palette.
          </p>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-forma-text">
              Select Finish: {activeMaterial.name}
            </h3>
            <div className="flex gap-4">
              {materials.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setActiveMaterial(mat)}
                  className={`relative w-12 h-12 rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-forma-text focus:ring-offset-4 focus:ring-offset-forma-bg ${
                    activeMaterial.id === mat.id
                      ? "scale-110 ring-1 ring-forma-text ring-offset-4 ring-offset-forma-bg"
                      : ""
                  }`}
                  style={{ backgroundColor: mat.color }}
                  aria-label={`Select ${mat.name} finish`}
                >
                  {/* Pulsing ring on active swatch */}
                  {activeMaterial.id === mat.id && (
                    <motion.div
                      className="absolute inset-0 rounded-full border border-forma-text/60"
                      animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right panel — premium material preview ── */}
        <motion.div
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMaterial.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Material base color */}
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: activeMaterial.color }}
                />

                {/* SVG noise grain overlay */}
                <div
                  className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
                  style={{
                    backgroundImage: noiseSvg,
                    backgroundRepeat: "repeat",
                    backgroundSize: "256px 256px",
                  }}
                />

                {/* Radial depth gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.25) 100%)",
                  }}
                />

                {/* Bottom text with dark gradient for readability */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)",
                    }}
                  />
                  <div className="relative z-10">
                    <h4 className="font-heading text-3xl text-white mb-1">
                      {activeMaterial.name}
                    </h4>
                    <p className="text-sm text-white/70 max-w-sm leading-relaxed">
                      {activeMaterial.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtle background decoration — matches active material color */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl -z-10 opacity-20"
            animate={{ backgroundColor: activeMaterial.color }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

