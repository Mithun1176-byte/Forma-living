"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Image from "next/image";
import { blurDataURL } from "../utils/blur";
import { useCartStore } from "../store/cartStore";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { items, clearCart } = useCartStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      interest: formData.get("interest"),
      message: formData.get("message"),
      cartItems: items.map(item => ({ id: item.id, name: item.name, quantity: item.quantity }))
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Request Sent", {
          description: "We'll review your cart and be in touch within 24 hours.",
        });
        (e.target as HTMLFormElement).reset();
        clearCart();
      } else {
        toast.error("Error", { description: "Failed to send request." });
      }
    } catch (error) {
      toast.error("Error", { description: "An unexpected error occurred." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black/40 backdrop-blur-sm relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        <motion.div 
          className="w-full lg:w-1/2 relative aspect-[4/5] max-w-md lg:max-w-none"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000&h=1200"
            alt="Showroom interior"
            fill
            className="object-cover rounded-sm"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading mb-4 text-forma-text">
            Book a Consultation
          </h2>
          <p className="text-forma-text/70 mb-10">
            Whether you're furnishing a single room or planning a complete redesign, our team is here to assist you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-forma-text/80">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required 
                  className="w-full border-b border-forma-text/20 py-2 bg-transparent focus:outline-none focus:border-forma-text transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-forma-text/80">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required 
                  className="w-full border-b border-forma-text/20 py-2 bg-transparent focus:outline-none focus:border-forma-text transition-colors"
                />
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <label className="text-xs font-bold uppercase tracking-widest text-forma-text/80 block">Inquiry Type</label>
              <div className="flex flex-wrap gap-6">
                {['New Purchase', 'Custom Order', 'Trade Inquiry'].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="interest" value={type} required className="accent-forma-brass" />
                    <span className="text-sm text-forma-text/80 group-hover:text-forma-text">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-forma-text/80">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows={4} 
                required 
                className="w-full border-b border-forma-text/20 py-2 bg-transparent focus:outline-none focus:border-forma-text transition-colors resize-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-8 px-10 py-4 bg-forma-text text-black uppercase tracking-widest text-sm hover:bg-forma-brass hover:text-white transition-colors duration-300 disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Request"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
