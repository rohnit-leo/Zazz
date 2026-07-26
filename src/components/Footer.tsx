import { motion } from 'motion/react';
import { Instagram, Facebook, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black-matte text-white pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand */}
          <div className="lg:pr-8">
            <span className="text-4xl font-serif font-bold tracking-tighter block mb-2">ZAZZ</span>
            <span className="text-[9px] uppercase tracking-[0.4em] block mb-8 text-white/50">Luxury Unisex Salon</span>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
              Designed by the Bold. <br/>
              Experience world-class luxury beauty and wellness services in an environment of absolute sophistication.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gold-rich hover:border-gold-rich transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gold-rich hover:border-gold-rich transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['The Experience', 'Signature Services', 'Luxury Memberships', 'Franchise Opportunities', 'Careers', 'Gift Vouchers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 text-[11px] font-bold tracking-[0.1em] uppercase hover:text-gold-rich transition-colors duration-300 block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-gold-rich shrink-0 mt-0.5" />
                <span className="text-white/50 text-[11px] font-bold uppercase tracking-widest leading-relaxed">
                  Gurunanak Colony, Vijayawada, AP
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-gold-rich shrink-0" />
                <a href="tel:8686121420" className="text-white/50 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors duration-300">
                  +91 86861 21420
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-gold-rich shrink-0" />
                <a href="mailto:zazzsalonsindia@gmail.com" className="text-white/50 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors duration-300">
                  zazzsalonsindia@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl mb-6">The ZAZZ Insider</h4>
            <p className="text-white/50 text-sm font-light mb-6">
              Subscribe to receive exclusive offers, beauty insights, and VIP event invitations.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-white/20 py-3 pr-12 text-[11px] font-bold tracking-widest text-white focus:outline-none focus:border-gold-rich transition-colors placeholder:text-white/30"
              />
              <button className="absolute right-0 top-0 bottom-0 text-gold-rich hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest font-bold text-white/40">
          <p>© 2026 ZAZZ LUXURY UNISEX SALON.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span className="text-white/20">|</span>
            <p>Designed by TPS Companies</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
