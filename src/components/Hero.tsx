import { motion } from 'motion/react';
import { Star, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col lg:flex-row pt-20 bg-ivory overflow-hidden">
      
      {/* LEFT CONTENT: STORY & TYPOGRAPHY */}
      <div className="w-full lg:w-3/5 p-8 lg:p-16 flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-[1px] w-12 bg-gold-rich"></div>
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-rich">Designed by the Bold</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[80px] lg:text-[96px] font-serif leading-[0.9] font-normal tracking-tighter text-black-matte mb-8"
        >
          Luxury <br className="hidden md:block" />
          <span className="italic text-gold-rich">Meets</span> <br className="hidden md:block" />
          Affordability
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md text-sm leading-relaxed text-charcoal/70 font-light mb-12"
        >
          Experience world-class hair, beauty, skin, bridal and wellness services crafted with elegance, precision and luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 items-center mb-16"
        >
          <a
            href="#book"
            className="border border-black-matte px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-black-matte hover:text-white transition-all text-black-matte"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="px-8 py-3 text-[11px] font-bold uppercase tracking-widest text-charcoal/60 hover:text-gold-rich transition-colors"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap items-center gap-8 pt-6 border-t border-charcoal/10"
        >
          <div className="flex flex-col">
            <span className="text-3xl font-serif text-black-matte">15+</span>
            <span className="text-[10px] uppercase tracking-widest opacity-60 font-bold text-black-matte">Daily Clients</span>
          </div>
          <div className="w-[1px] h-10 bg-charcoal/20 hidden md:block"></div>
          <div className="flex flex-col">
            <span className="text-3xl font-serif text-black-matte">₹6L</span>
            <span className="text-[10px] uppercase tracking-widest opacity-60 font-bold text-black-matte">Avg. Monthly Rev.</span>
          </div>
          <div className="w-[1px] h-10 bg-charcoal/20 hidden md:block"></div>
          <div className="flex flex-col flex-row items-center gap-2">
            <div className="flex text-gold-rich">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="w-4 h-4" fill="currentColor" />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif text-black-matte">5.0</span>
              <span className="text-[10px] uppercase tracking-widest opacity-60 font-bold text-black-matte">Google Rating</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT CONTENT: EDITORIAL LAYOUT (Image) */}
      <div className="w-full lg:w-2/5 min-h-[50vh] lg:min-h-screen relative flex flex-col border-l border-charcoal/5">
        <div className="flex-1 bg-beige relative group overflow-hidden">
           <motion.div 
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] group-hover:scale-105"
             style={{
               backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2874&auto=format&fit=crop")',
             }}
           />
           <div className="absolute inset-0 bg-black-matte/20 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
           <div className="absolute bottom-8 left-8 right-8 text-white z-10">
             <span className="text-[9px] uppercase tracking-[0.4em] font-bold block mb-2 opacity-80">Editorial Highlight</span>
             <h3 className="text-3xl font-serif leading-none italic">The Sculpted Cut</h3>
           </div>
        </div>
      </div>

      {/* FLOATING WATERMARK */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 rotate-180 flex items-center h-48 py-8 overflow-hidden z-0 pointer-events-none opacity-[0.02]">
         <span className="text-[140px] md:text-[200px] font-serif font-bold whitespace-nowrap leading-none text-black-matte">DESIGNED BY THE BOLD</span>
      </div>

    </section>
  );
}
