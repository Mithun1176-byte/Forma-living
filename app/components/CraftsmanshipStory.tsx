"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TreePine, Hammer, Truck } from "lucide-react";

export function CraftsmanshipStory() {
  const steps = [
    {
      title: "Sourced with Respect",
      description: "We partner with sustainable forests across Scandinavia, selecting only mature, responsibly harvested timber. Every piece of wood is chosen for its unique grain and strength, ensuring your furniture lives a long, beautiful life.",
      icon: <TreePine size={32} className="text-forma-brass" />,
      image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1200&h=800"
    },
    {
      title: "Crafted by Hand",
      description: "Our artisans blend traditional joinery techniques with modern precision. There are no assembly lines—just skilled hands sanding, shaping, and finishing each piece with natural oils to highlight the material's innate warmth.",
      icon: <Hammer size={32} className="text-forma-brass" />,
      image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1200&h=800"
    },
    {
      title: "Delivered with Care",
      description: "From our workshop to your home, we handle every step. White-glove delivery ensures your piece arrives in pristine condition, placed exactly where it belongs, ready to be enjoyed for generations.",
      icon: <Truck size={32} className="text-forma-brass" />,
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200&h=800"
    }
  ];

  return (
    <section id="craft" className="py-24 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading mb-6 text-forma-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The Art of the Maker
          </motion.h2>
          <motion.p 
            className="text-lg text-forma-text/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We believe that true luxury lies in the unseen details. It's in the smooth glide of a drawer, the seamless join of a corner, and the gentle patination that only comes with time.
          </motion.p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <motion.div 
                className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-forma-bg">
                  {step.icon}
                </div>
                <h3 className="text-3xl font-heading text-forma-text mb-4">{step.title}</h3>
                <p className="text-forma-text/70 leading-relaxed text-lg">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
