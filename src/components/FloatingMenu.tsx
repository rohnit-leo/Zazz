import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, Calendar, Plus, X, Instagram, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/918686121420?text=Hello%20ZAZZ%20Salon,%20I%20would%20like%20to%20book%20an%20appointment.",
      color: "bg-[#25D366] text-white"
    },
    {
      icon: Phone,
      label: "Call Us",
      href: "tel:8686121420",
      color: "bg-charcoal text-white"
    },
    {
      icon: Calendar,
      label: "Book Now",
      href: "#book",
      color: "bg-gold-rich text-white"
    },
    {
      icon: MapPin,
      label: "Locations",
      href: "#locations",
      color: "bg-white text-charcoal border border-charcoal/10"
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
            transition={{ duration: 0.2, staggerChildren: 0.1 }}
            className="flex flex-col gap-3 items-end mb-2"
          >
            {menuItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: (menuItems.length - 1 - idx) * 0.05 }}
                className="flex items-center gap-3 group"
                onClick={() => setIsOpen(false)}
              >
                <span className="bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-charcoal shadow-sm rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110", item.color)}>
                  <item.icon className="w-5 h-5" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300",
          isOpen ? "bg-black-matte text-white rotate-45" : "bg-gold-rich text-white hover:scale-110"
        )}
        aria-label="Toggle Menu"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}
