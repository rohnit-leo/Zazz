import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Experience', href: '#about' },
    { name: 'Signature Services', href: '#services' },
    { name: 'Franchise', href: '#franchise' },
    { name: 'Artistry', href: '#gallery' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b glass-nav',
          isScrolled ? 'py-4' : 'py-6 border-transparent bg-transparent backdrop-blur-none'
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#home" className="flex flex-col group overflow-hidden">
            <span className="text-3xl font-serif font-bold tracking-tighter text-black-matte">ZAZZ</span>
            <span className="text-[8px] uppercase tracking-[0.4em] mt-[-4px] opacity-60 text-black-matte">Luxury Unisex Salon</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-semibold uppercase tracking-widest text-black-matte/80 hover:text-gold-rich transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#book"
              className="border border-black-matte px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-black-matte hover:text-white transition-all text-black-matte"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsOpen(true)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6 text-black-matte" />
          </button>
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
            <div className="p-6 md:px-12 flex items-center justify-between">
              <span className="text-2xl font-serif font-bold tracking-wide text-charcoal">ZAZZ</span>
              <button
                className="p-2 -mr-2"
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
              >
                <X className="w-6 h-6 text-charcoal" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="text-2xl font-serif tracking-widest text-charcoal"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#book"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * navLinks.length, duration: 0.5 }}
                className="mt-8 px-8 py-4 bg-charcoal text-white text-sm tracking-widest uppercase hover:bg-gold-rich transition-colors w-full max-w-sm text-center"
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
