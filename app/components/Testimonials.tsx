"use client";

import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-heading mb-4 text-forma-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Client Stories
          </motion.h2>
          <motion.p
            className="text-forma-text/70 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hear from the people who live with our pieces every day.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Quote size={40} className="text-forma-brass/30 mb-6" />
              <p className="text-2xl md:text-3xl font-heading text-forma-text leading-snug mb-8 flex-grow">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-sm uppercase tracking-widest text-forma-text">{testimonial.name}</p>
                <p className="text-forma-text/60 text-sm">{testimonial.city} — {testimonial.product}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
