import React from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingBag, Eye, Sparkles, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

export default function Products() {
  const { addToCart, setSelectedProductForModal } = useCart();

  return (
    <section id="products" className="py-32 bg-ivory border-t border-charcoal/5 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 via-transparent to-white/40 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-4 h-4 text-gold-rich" />
            <span className="text-gold-rich text-[11px] tracking-[0.3em] uppercase block font-bold">
              Exclusive Salon Collection
            </span>
            <Sparkles className="w-4 h-4 text-gold-rich" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-black-matte mb-6 tracking-tighter">
            Professional Hair Care
          </h2>
          <p className="max-w-2xl mx-auto text-charcoal/70 font-light text-sm leading-relaxed">
            Formulated by master stylists for intense hair restoration, scalp nourishment, and long-lasting glass shine. Take salon luxury home with you.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-white border border-charcoal/10 hover:border-gold-rich/50 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Image & Badge Container */}
              <div
                onClick={() => setSelectedProductForModal(product)}
                className="relative aspect-square p-8 bg-beige/20 border-b border-charcoal/5 cursor-pointer overflow-hidden flex items-center justify-center"
              >
                {product.isBestseller && (
                  <span className="absolute top-4 left-4 z-10 bg-black-matte text-gold-soft text-[9px] font-bold uppercase tracking-[0.25em] px-3 py-1 shadow-md border border-gold-rich/30">
                    Bestseller
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-108 drop-shadow-md"
                />

                {/* Quick view overlay button */}
                <div className="absolute inset-0 bg-black-matte/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <span className="bg-white text-black-matte px-4 py-2 text-[10px] font-bold uppercase tracking-widest shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5 text-gold-rich" /> View Details
                  </span>
                </div>
              </div>

              {/* Body Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold-rich">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-gold-rich text-xs">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-bold text-black-matte">{product.rating}</span>
                    </div>
                  </div>

                  <h3
                    onClick={() => setSelectedProductForModal(product)}
                    className="font-serif text-xl text-black-matte font-bold mb-2 group-hover:text-gold-amber transition-colors cursor-pointer leading-tight"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-charcoal/60 font-light line-clamp-2 mb-4 leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline gap-3 mb-6 pt-3 border-t border-charcoal/10">
                    <span className="text-2xl font-serif font-bold text-black-matte">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs line-through text-charcoal/40 font-light">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedProductForModal(product)}
                      className="border border-charcoal/20 bg-white text-black-matte py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-beige transition-colors flex items-center justify-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" /> Details
                    </button>
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="bg-black-matte text-white py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-gold-rich transition-colors flex items-center justify-center gap-1 shadow-md"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Add
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
