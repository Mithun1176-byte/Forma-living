"use client";

import { motion } from "framer-motion";
import { showrooms } from "../data/showrooms";
import { MapPin, Clock, Phone } from "lucide-react";

export function ShowroomLocator() {
  return (
    <section id="showrooms" className="py-24 bg-forma-bg border-t border-forma-text/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading mb-4 text-forma-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Experience Forma
          </motion.h2>
          <motion.p 
            className="text-forma-text/70 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visit one of our showrooms to feel the materials and test the comfort of our pieces in person.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showrooms.map((showroom, index) => (
            <motion.div
              key={showroom.id}
              className="bg-white/5 backdrop-blur-md p-10 border border-forma-text/10 hover:border-forma-brass/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h3 className="font-heading text-3xl mb-6 text-forma-text">{showroom.city}</h3>
              
              <div className="space-y-4 mb-8 text-forma-text/80">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 text-forma-brass shrink-0" />
                  <span>{showroom.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="mt-1 text-forma-brass shrink-0" />
                  <span>{showroom.hours}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 text-forma-brass shrink-0" />
                  <span>{showroom.phone}</span>
                </div>
              </div>
              
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(showroom.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b border-forma-text pb-1 text-sm uppercase tracking-widest hover:text-forma-brass hover:border-forma-brass transition-colors duration-300"
              >
                Get Directions
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
