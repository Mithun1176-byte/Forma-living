"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-forma-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center">
            <h1 className="font-heading text-4xl md:text-6xl tracking-[0.3em] uppercase text-forma-text">
              FORMA
            </h1>

            <motion.div
              className="h-px bg-forma-brass mt-4 mb-3"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            <span className="text-xs tracking-[0.5em] uppercase text-forma-text/50">
              LIVING
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
