"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 2800);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-forma-bg"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle ambient glow behind text */}
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full bg-forma-brass/5 blur-[100px]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          <div className="flex flex-col items-center relative">
            {/* FORMA — letters stagger in */}
            <div className="overflow-hidden">
              <motion.h1
                className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-[0.3em] uppercase text-forma-text"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
              >
                FORMA
              </motion.h1>
            </div>

            {/* Brass line — expands from center */}
            <motion.div
              className="h-[0.5px] bg-gradient-to-r from-transparent via-forma-brass to-transparent mt-5 mb-4"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "120%", opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.9, ease: [0.76, 0, 0.24, 1] }}
            />

            {/* LIVING — fades up */}
            <div className="overflow-hidden">
              <motion.span
                className="block text-[10px] md:text-xs tracking-[0.5em] uppercase text-forma-text/40 font-sans"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4, ease: [0.76, 0, 0.24, 1] }}
              >
                LIVING
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
