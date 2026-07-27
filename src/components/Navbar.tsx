import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '../lib/utils';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Experience', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Shop Products', href: '#products' },
    { name: 'Memberships', href: '#memberships' },
    { name: 'Franchise', href: '#franchise' },
    { name: 'Locations', href: '#locations' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b glass-nav',
          isScrolled ? 'py-4 shadow-sm' : 'py-6 border-transparent bg-transparent backdrop-blur-none'
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#home" className="flex flex-col group overflow-hidden">
            <span className="text-3xl font-serif font-bold tracking-tighter text-black-matte">ZAZZ</span>
            <span className="text-[8px] uppercase tracking-[0.4em] mt-[-4px] text-gold-amber font-bold">Luxury Unisex Salon</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-bold uppercase tracking-widest text-black-matte/80 hover:text-gold-amber transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Shopping Bag Icon Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full border border-charcoal/10 hover:border-gold-rich hover:bg-white transition-all text-black-matte flex items-center gap-2"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-gold-rich" />
              <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">Bag</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-black-matte text-gold-soft text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-gold-rich shadow-md">
                  {totalItems}
                </span>
              )}
            </button>

            <a
              href="#book"
              className="border border-black-matte px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-black-matte hover:text-white transition-all text-black-matte shadow-sm"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-black-matte"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-gold-rich" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-black-matte text-gold-soft text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-gold-rich">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              className="p-2"
              onClick={() => setIsOpen(true)}
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6 text-black-matte" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-ivory flex flex-col"
          >
            <div className="p-6 md:px-12 flex items-center justify-between border-b border-charcoal/10">
              <span className="text-2xl font-serif font-bold tracking-wide text-black-matte">ZAZZ</span>
              <button
                className="p-2 -mr-2"
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
              >
                <X className="w-6 h-6 text-black-matte" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  className="text-xl font-serif tracking-widest text-black-matte hover:text-gold-amber"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#book"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * navLinks.length, duration: 0.4 }}
                className="mt-6 px-8 py-4 bg-black-matte text-white text-xs font-bold tracking-widest uppercase hover:bg-gold-rich transition-colors w-full max-w-sm text-center shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
