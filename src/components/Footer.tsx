import { useState, FormEvent } from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, ArrowRight, Globe } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const formattedMessage = `Hello ZAZZ Salon! Please subscribe my email *${encodeURIComponent(email)}* to The ZAZZ Insider VIP updates and exclusive offers.`;
    const whatsappUrl = `https://wa.me/918686121420?text=${formattedMessage}`;
    window.open(whatsappUrl, '_blank');
    setEmail('');
  };

  return (
    <footer className="bg-black-matte text-white pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand */}
          <div className="lg:pr-8">
            <span className="text-4xl font-serif font-bold tracking-tighter block mb-2">ZAZZ</span>
            <span className="text-[9px] uppercase tracking-[0.4em] block mb-6 text-gold-rich font-bold">Luxury Unisex Salon</span>
            <p className="text-white/50 text-xs font-light leading-relaxed mb-6">
              Designed by the Bold. <br/>
              Experience world-class luxury beauty, hair artistry, and wellness services in Vijayawada, Guntur, Eluru, and Rajahmundry.
            </p>

            <div className="space-y-2 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-soft block">Follow Us On Instagram:</span>
              <div className="flex flex-col gap-1.5 text-xs text-white/70">
                <a 
                  href="https://instagram.com/zazzsalonsofficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-rich transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5 text-gold-rich" /> @zazzsalonsofficial
                </a>
                <a 
                  href="https://instagram.com/zazz_salons_gurunanakcolony" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-rich transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-3.5 h-3.5 text-gold-rich" /> @zazz_salons_gurunanakcolony
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold-soft">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'The Experience', href: '#about' },
                { name: 'Signature Services', href: '#services' },
                { name: 'Professional Shop', href: '#products' },
                { name: 'Luxury Memberships', href: '#memberships' },
                { name: 'Franchise Deck', href: '#franchise' },
                { name: 'Our Sanctuaries', href: '#locations' },
                { name: 'Book Appointment', href: '#book' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 text-[11px] font-bold tracking-[0.1em] uppercase hover:text-gold-rich transition-colors duration-300 block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold-soft">Contact & Salons</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-rich shrink-0 mt-0.5" />
                <span className="text-white/60 text-[11px] font-bold uppercase tracking-widest leading-relaxed">
                  Gurunanak Colony Rd, Vijayawada, AP 520008
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-rich shrink-0" />
                <a href="https://wa.me/918686121420" target="_blank" rel="noopener noreferrer" className="text-white/60 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors duration-300">
                  +91 86861 21420
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-rich shrink-0" />
                <a href="mailto:zazzsalonsindia@gmail.com" className="text-white/60 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors duration-300">
                  zazzsalonsindia@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-gold-rich shrink-0" />
                <a href="https://zazzsalonsindia.com" target="_blank" rel="noopener noreferrer" className="text-white/60 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors duration-300">
                  zazzsalonsindia.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold-soft">The ZAZZ Insider</h4>
            <p className="text-white/50 text-xs font-light mb-6 leading-relaxed">
              Subscribe to receive exclusive beauty privileges, seasonal lookbooks, and VIP event invitations directly via WhatsApp.
            </p>
            <form className="relative" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-white/20 py-3 pr-12 text-[11px] font-bold tracking-widest text-white focus:outline-none focus:border-gold-rich transition-colors placeholder:text-white/30"
              />
              <button type="submit" className="absolute right-0 top-0 bottom-0 text-gold-rich hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest font-bold text-white/40">
          <p>© 2026 ZAZZ LUXURY UNISEX SALON • ZAZZSALONSINDIA.COM</p>
          <div className="flex items-center gap-6">
            <a href="https://wa.me/918686121420" target="_blank" rel="noopener noreferrer" className="hover:text-gold-rich transition-colors">WhatsApp Support</a>
            <span className="text-white/20">|</span>
            <p>Designed by TPS Companies</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
