import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, ShoppingBag, Sparkles, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductDetailModal() {
  const { selectedProductForModal, setSelectedProductForModal, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'howToUse'>('benefits');

  if (!selectedProductForModal) return null;

  const product = selectedProductForModal;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setSelectedProductForModal(null);
    setQuantity(1);
  };

  const handleDirectBuyWhatsApp = () => {
    const formattedMessage = `Hello ZAZZ Salon! I want to buy *${encodeURIComponent(
      product.name
    )}* (Qty: ${quantity}) for ₹${(
      product.price * quantity
    ).toLocaleString('en-IN')}. Please help me complete this order.`;
    const whatsappUrl = `https://wa.me/918686121420?text=${formattedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 bg-black-matte/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-ivory text-black-matte shadow-2xl border border-gold-rich/30 overflow-hidden my-auto"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedProductForModal(null)}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 border border-charcoal/10 flex items-center justify-center text-black-matte hover:bg-black-matte hover:text-white transition-all shadow-md"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Image Section */}
            <div className="relative bg-white p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-charcoal/10 min-h-[380px]">
              {product.isBestseller && (
                <span className="absolute top-6 left-6 z-10 bg-black-matte text-gold-soft text-[9px] uppercase tracking-[0.25em] font-bold px-3 py-1 shadow-md border border-gold-rich/30">
                  Salon Bestseller
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="max-h-[400px] w-auto object-contain transition-transform duration-500 hover:scale-105 drop-shadow-xl"
              />
            </div>

            {/* Right Product Info Section */}
            <div className="p-8 md:p-10 flex flex-col justify-between max-h-[85vh] overflow-y-auto no-scrollbar">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gold-rich text-[10px] font-bold uppercase tracking-[0.3em]">
                    {product.category}
                  </span>
                  <span className="text-charcoal/30">•</span>
                  <span className="text-charcoal/50 text-[10px] font-semibold tracking-wider">
                    {product.size}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif text-black-matte mb-3 leading-tight">
                  {product.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex text-gold-rich">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-black-matte">{product.rating}</span>
                  <span className="text-xs text-charcoal/40">({product.reviewsCount} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-4 mb-6 py-3 border-y border-charcoal/10">
                  <span className="text-3xl font-serif font-bold text-black-matte">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg line-through text-charcoal/40 font-light">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="text-[10px] font-bold text-gold-amber bg-gold-soft/20 px-2 py-0.5 rounded uppercase tracking-wider">
                      Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                    </span>
                  )}
                </div>

                <p className="text-sm text-charcoal/70 font-light leading-relaxed mb-6">
                  {product.fullDesc}
                </p>

                {/* Tabs */}
                <div className="flex border-b border-charcoal/10 mb-4 gap-6">
                  <button
                    onClick={() => setActiveTab('benefits')}
                    className={`pb-2 text-[11px] font-bold uppercase tracking-wider transition-colors relative ${
                      activeTab === 'benefits'
                        ? 'text-gold-amber border-b-2 border-gold-amber'
                        : 'text-charcoal/50 hover:text-black-matte'
                    }`}
                  >
                    Key Benefits
                  </button>
                  <button
                    onClick={() => setActiveTab('ingredients')}
                    className={`pb-2 text-[11px] font-bold uppercase tracking-wider transition-colors relative ${
                      activeTab === 'ingredients'
                        ? 'text-gold-amber border-b-2 border-gold-amber'
                        : 'text-charcoal/50 hover:text-black-matte'
                    }`}
                  >
                    Ingredients
                  </button>
                  <button
                    onClick={() => setActiveTab('howToUse')}
                    className={`pb-2 text-[11px] font-bold uppercase tracking-wider transition-colors relative ${
                      activeTab === 'howToUse'
                        ? 'text-gold-amber border-b-2 border-gold-amber'
                        : 'text-charcoal/50 hover:text-black-matte'
                    }`}
                  >
                    How To Use
                  </button>
                </div>

                <div className="min-h-[100px] mb-8 text-xs text-charcoal/70 leading-relaxed font-light">
                  {activeTab === 'benefits' && (
                    <ul className="space-y-2">
                      {product.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-gold-rich shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {activeTab === 'ingredients' && <p>{product.ingredients}</p>}
                  {activeTab === 'howToUse' && <p>{product.howToUse}</p>}
                </div>
              </div>

              {/* Action buttons */}
              <div>
                {/* Quantity selector */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/60">
                    Quantity:
                  </span>
                  <div className="flex items-center border border-charcoal/20 bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 text-sm hover:bg-beige/50 font-bold"
                    >
                      -
                    </button>
                    <span className="px-4 py-1.5 text-sm font-bold min-w-[36px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 text-sm hover:bg-beige/50 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-black-matte text-white py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gold-rich transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add To Cart
                  </button>
                  <button
                    onClick={handleDirectBuyWhatsApp}
                    className="w-full border border-black-matte bg-white text-black-matte py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black-matte hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    Buy via WhatsApp <ArrowRight className="w-4 h-4 text-gold-rich" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
