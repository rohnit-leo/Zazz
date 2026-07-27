import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CheckoutDetails } from '../types';

export default function CartDrawer() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
    checkoutWhatsApp,
  } = useCart();

  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [formData, setFormData] = useState<CheckoutDetails>({
    fullName: '',
    phone: '',
    address: '',
    city: 'Vijayawada',
    pincode: '',
    notes: '',
  });

  if (!isCartOpen) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert('Please fill in your name, phone number, and delivery address.');
      return;
    }
    checkoutWhatsApp(formData);
    setStep('cart');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-black-matte/70 backdrop-blur-sm"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="w-screen max-w-md bg-ivory text-black-matte shadow-2xl flex flex-col justify-between border-l border-gold-rich/30"
          >
            {/* Header */}
            <div className="p-6 border-b border-charcoal/10 flex items-center justify-between bg-white">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-gold-rich" />
                <h3 className="font-serif text-xl font-bold">
                  {step === 'cart' ? 'Your Shopping Bag' : 'Delivery Details'}
                </h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full border border-charcoal/10 flex items-center justify-center hover:bg-black-matte hover:text-white transition-colors"
                aria-label="Close cart"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {step === 'cart' ? (
                cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-charcoal/50 py-16">
                    <ShoppingBag className="w-16 h-16 text-gold-rich/40 mb-4 stroke-1" />
                    <p className="font-serif text-2xl mb-2 text-black-matte">Your bag is empty</p>
                    <p className="text-xs font-light max-w-xs mb-8">
                      Explore our professional salon hair care collection and indulge in luxury formulas.
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="bg-black-matte text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-gold-rich transition-colors"
                    >
                      Browse Store
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="bg-white p-4 border border-charcoal/10 flex gap-4 items-center relative group"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-20 h-20 object-contain p-2 bg-beige/30 border border-charcoal/5 shrink-0"
                        />

                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm font-bold text-black-matte truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-xs text-gold-amber font-semibold mt-0.5">
                            ₹{item.product.price.toLocaleString('en-IN')}
                          </p>

                          {/* Quantity selector */}
                          <div className="flex items-center gap-3 mt-3">
                            <div className="flex items-center border border-charcoal/20 text-xs">
                              <button
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity - 1)
                                }
                                className="px-2 py-0.5 hover:bg-beige/50 font-bold"
                              >
                                -
                              </button>
                              <span className="px-3 py-0.5 font-bold min-w-[24px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity + 1)
                                }
                                className="px-2 py-0.5 hover:bg-beige/50 font-bold"
                              >
                                +
                              </button>
                            </div>

                            <span className="text-xs font-serif font-bold text-black-matte ml-auto">
                              ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-charcoal/30 hover:text-red-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                /* Checkout Form Step */
                <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-5">
                  <div className="bg-white p-4 border border-gold-rich/30 text-xs space-y-1 mb-6">
                    <p className="font-serif font-bold text-sm text-black-matte">
                      Order Summary ({cart.reduce((a, b) => a + b.quantity, 0)} Items)
                    </p>
                    <p className="text-gold-amber font-semibold text-base">
                      Total: ₹{totalPrice.toLocaleString('en-IN')}
                    </p>
                    <p className="text-[10px] text-charcoal/50">
                      Free express salon delivery to your doorstep.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-black-matte mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-charcoal/20 px-3 py-2.5 text-xs text-black-matte focus:outline-none focus:border-gold-rich"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-black-matte mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-charcoal/20 px-3 py-2.5 text-xs text-black-matte focus:outline-none focus:border-gold-rich"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-black-matte mb-1">
                      Delivery Address *
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="House/Flat No, Street, Landmark"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-white border border-charcoal/20 px-3 py-2.5 text-xs text-black-matte focus:outline-none focus:border-gold-rich"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-black-matte mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-white border border-charcoal/20 px-3 py-2.5 text-xs text-black-matte focus:outline-none focus:border-gold-rich"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-black-matte mb-1">
                        Pincode
                      </label>
                      <input
                        type="text"
                        placeholder="520008"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        className="w-full bg-white border border-charcoal/20 px-3 py-2.5 text-xs text-black-matte focus:outline-none focus:border-gold-rich"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-black-matte mb-1">
                      Order Notes (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Special instructions..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-white border border-charcoal/20 px-3 py-2.5 text-xs text-black-matte focus:outline-none focus:border-gold-rich"
                    />
                  </div>
                </form>
              )}
            </div>

            {/* Footer Total & Actions */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-charcoal/10 bg-white space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs uppercase tracking-widest font-bold text-charcoal/60">
                    Subtotal
                  </span>
                  <span className="font-serif text-2xl font-bold text-black-matte">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                {step === 'cart' ? (
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep('checkout')}
                      className="w-full bg-black-matte text-white py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gold-rich transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      Proceed to Checkout <ArrowRight className="w-4 h-4 text-gold-rich" />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep('cart')}
                      className="px-4 py-3 border border-charcoal/20 text-[11px] font-bold uppercase tracking-widest text-black-matte hover:bg-beige"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      form="checkout-form"
                      className="flex-1 bg-[#25D366] text-white py-4 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" /> Place Order via WhatsApp
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
