"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../utils/cn";
import { Menu, X } from "lucide-react";

import { useCartStore } from "../store/cartStore";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Collection", href: "#collection" },
    { name: "Craft", href: "#craft" },
    { name: "Materials", href: "#materials" },
    { name: "Showrooms", href: "#showrooms" },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-colors duration-300",
        isScrolled ? "bg-forma-bg/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-heading text-2xl tracking-widest uppercase text-forma-text">
          Forma Living
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-wider text-forma-text hover:text-forma-brass transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-forma-brass transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a href="#contact" className="relative group flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forma-text group-hover:text-forma-brass transition-colors"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-forma-brass text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-forma-text text-sm uppercase tracking-wider hover:bg-forma-text hover:text-forma-bg transition-colors duration-300"
          >
            Checkout Request
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-forma-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-forma-bg shadow-md md:hidden flex flex-col items-center py-8 gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-heading tracking-widest uppercase text-forma-text hover:text-forma-brass transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 border border-forma-text text-sm uppercase tracking-wider hover:bg-forma-text hover:text-forma-bg transition-colors duration-300"
            >
              Visit Showroom
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
