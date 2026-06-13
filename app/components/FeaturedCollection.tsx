"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { toast } from "sonner";
import { products, type Product } from "../data/products";
import { useCartStore } from "../store/cartStore";

export function FeaturedCollection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (selectedProduct) {
      addItem(selectedProduct);
      toast.success("Added to Cart", {
        description: `${selectedProduct.name} has been added to your cart.`,
      });
      setSelectedProduct(null);
    }
  };

  return (
    <section id="collection" className="py-24 bg-forma-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading mb-4 text-forma-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Featured Collection
          </motion.h2>
          <motion.p 
            className="text-forma-text/70 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A curated selection of our most loved pieces, balancing form and function.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-white/5 rounded-sm">
                <Image
                  src={product.primaryImage}
                  alt={product.name}
                  fill
                  className="object-cover transition-opacity duration-700 group-hover:opacity-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Image
                  src={product.secondaryImage}
                  alt={`${product.name} alternate view`}
                  fill
                  className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-heading text-2xl text-forma-text mb-1">{product.name}</h3>
                  <p className="text-sm text-forma-text/60 uppercase tracking-wider">{product.material}</p>
                </div>
                <span className="text-lg text-forma-text">${product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div 
              className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
              onClick={() => setSelectedProduct(null)} 
            />
            <motion.div
              className="relative w-full max-w-4xl bg-forma-bg shadow-2xl overflow-hidden flex flex-col md:flex-row"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button 
                className="absolute top-4 right-4 z-10 p-2 text-forma-text bg-forma-bg/50 rounded-full hover:bg-forma-bg transition-colors"
                onClick={() => setSelectedProduct(null)}
              >
                <X size={20} />
              </button>
              
              <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto h-64 md:h-[600px]">
                <Image
                  src={selectedProduct.primaryImage}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-forma-sage mb-4 block">
                  {selectedProduct.category}
                </span>
                <h3 className="font-heading text-4xl mb-2 text-forma-text">{selectedProduct.name}</h3>
                <p className="text-2xl text-forma-text/80 mb-8">${selectedProduct.price}</p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between border-b border-forma-text/10 pb-2">
                    <span className="text-forma-text/60">Materials</span>
                    <span className="text-forma-text">{selectedProduct.material}</span>
                  </div>
                  <div className="flex justify-between border-b border-forma-text/10 pb-2">
                    <span className="text-forma-text/60">Dimensions</span>
                    <span className="text-forma-text text-right">{selectedProduct.dimensions}</span>
                  </div>
                  <div className="flex justify-between border-b border-forma-text/10 pb-2">
                    <span className="text-forma-text/60">Lead Time</span>
                    <span className="text-forma-text">{selectedProduct.leadTime}</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-forma-text text-forma-bg uppercase tracking-widest text-sm hover:bg-forma-brass transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
