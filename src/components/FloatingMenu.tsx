import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, Calendar, Plus, MapPin, ShoppingBag } from 'lucide-react';
import { cn } from '../lib/utils';
import { useCart } from '../context/CartContext';

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  const menuItems = [
    {
      icon: MessageCircle,
      label: "WhatsApp Direct",
      href: "https://wa.me/918686121420?text=Hello%20ZAZZ%20Salon,%20I%20have%20an%20enquiry.",
      color: "bg-[#25D366] text-white"
    },
    {
      icon: ShoppingBag,
      label: `Shopping Bag ${totalItems > 0 ? `(${totalItems})` : ''}`,
      onClick: () => {
        setIsCartOpen(true);
        setIsOpen(false);
      },
      color: "bg-black-matte text-gold-soft border border-gold-rich/30"
    },
    {
      icon: Phone,
      label: "Call Us",
      href: "tel:8686121420",
      color: "bg-charcoal text-white"
    },
    {
      icon: Calendar,
      label: "Book Slot",
      href: "#book",
      color: "bg-gold-amber text-white"
    },
    {
      icon: MapPin,
      label: "Salons",
      href: "#locations",
      color: "bg-white text-black-matte border border-charcoal/10"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2, staggerChildren: 0.08 }}
            className="flex flex-col gap-3 items-end mb-2"
          >
            {menuItems.map((item, idx) => {
              const content = (
                <>
                  <span className="bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-black-matte shadow-md rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </span>
                  <div className={cn("w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 relative", item.color)}>
                    <item.icon className="w-5 h-5" />
                    {item.icon === ShoppingBag && totalItems > 0 && (
                      <span className="absolute -top-1 -right-1 bg-gold-amber text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                        {totalItems}
                      </span>
                    )}
                  </div>
                </>
              );

              if (item.onClick) {
                return (
                  <motion.button
                    key={idx}
                    onClick={item.onClick}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: (menuItems.length - 1 - idx) * 0.04 }}
                    className="flex items-center gap-3 group"
                  >
                    {content}
                  </motion.button>
                );
              }

              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: (menuItems.length - 1 - idx) * 0.04 }}
                  className="flex items-center gap-3 group"
                  onClick={() => setIsOpen(false)}
                >
                  {content}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 relative",
          isOpen ? "bg-black-matte text-white rotate-45" : "bg-gold-amber text-white hover:scale-110 shadow-gold-rich/40"
        )}
        aria-label="Toggle Menu"
      >
        <Plus className="w-6 h-6" />
        {!isOpen && totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-black-matte text-gold-soft text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-gold-rich shadow-md">
            {totalItems}
          </span>
        )}
      </button>
    </div>
  );
}
