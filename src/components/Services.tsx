import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    category: "Hair Artistry",
    image: "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/02_hair_studio.jpg",
    items: [
      { name: "Hair Styling & Cuts", duration: "60 mins", price: "From ₹1,500", desc: "Precision cuts and styling tailored to your facial structure and lifestyle." },
      { name: "Luxury Hair Coloring", duration: "120+ mins", price: "From ₹4,000", desc: "Balayage, ombre, and global coloring using premium ammonia-free products." },
      { name: "Keratin / Botox / Nanoplastia", duration: "180+ mins", price: "From ₹6,000", desc: "Intensive smoothing treatments that restore shine, eliminate frizz, and repair damage." },
      { name: "Luxury Hair Spa", duration: "90 mins", price: "From ₹2,500", desc: "Deep conditioning and scalp therapy for ultimate hair health and relaxation." },
    ]
  },
  {
    category: "Skin & Esthetics",
    image: "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/saloon%20images/02_Facial_Treatment_Room.jpg",
    items: [
      { name: "Luxury & Korean Facials", duration: "90 mins", price: "From ₹3,500", desc: "Advanced glass-skin facials using authentic Korean formulations." },
      { name: "Hydra Facial", duration: "75 mins", price: "From ₹4,500", desc: "Medical-grade resurfacing that clears out your pores and hydrates your skin." },
      { name: "Advanced Skin Treatments", duration: "Varies", price: "Consult", desc: "Targeted therapies for pigmentation, anti-aging, and acne using modern tech." },
    ]
  },
  {
    category: "Bridal & Makeup",
    image: "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/12_bridal_studio.jpg",
    items: [
      { name: "Bridal Studio Experiences", duration: "Half/Full Day", price: "Packages", desc: "Comprehensive bridal packages including pre-wedding prep and day-of styling." },
      { name: "Luxury Makeup Artistry", duration: "120 mins", price: "From ₹5,000", desc: "HD and Airbrush makeup by master artists for your most important events." },
    ]
  },
  {
    category: "Wellness & Spa",
    image: "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/03_wash_area.jpg",
    items: [
      { name: "Luxury Spa Therapies", duration: "60-120 mins", price: "From ₹3,000", desc: "Bespoke body massages using aromatic oils to melt away stress." },
      { name: "Foot Reflexology", duration: "45 mins", price: "From ₹1,200", desc: "Targeted pressure point therapy to restore balance and energy." },
      { name: "Premium Beauty Services", duration: "Varies", price: "Varies", desc: "Luxury manicures, pedicures, and essential grooming delivered with elegance." },
    ]
  }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [selectedService, setSelectedService] = useState<any | null>(null);

  return (
    <section id="services" className="py-32 bg-white text-black-matte border-t border-charcoal/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-rich text-xs tracking-[0.3em] uppercase mb-4 block font-bold">Signature Offerings</span>
            <h2 className="text-4xl lg:text-5xl font-serif leading-none tracking-tighter">
              Curated for <span className="italic text-charcoal/70">Excellence</span>
            </h2>
          </div>
          <p className="text-charcoal/60 font-light max-w-sm text-sm">
            Discover our comprehensive menu of premium treatments, each designed to elevate your natural beauty and provide profound relaxation.
          </p>
        </div>

        {/* Categories Nav */}
        <div className="flex overflow-x-auto no-scrollbar gap-8 mb-16 border-b border-charcoal/10 pb-4">
          {services.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={cn(
                "whitespace-nowrap text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 pb-4 relative",
                activeCategory === idx ? "text-gold-rich" : "text-black-matte/40 hover:text-black-matte/80"
              )}
            >
              {cat.category}
              {activeCategory === idx && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-rich"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start min-h-[600px]">
          {/* Image */}
          <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden bg-beige group">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeCategory}
                src={services[activeCategory].image}
                alt={services[activeCategory].category}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-105"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black-matte/5 mix-blend-multiply transition-opacity group-hover:opacity-0" />
            <div className="absolute bottom-8 left-8 right-8 text-white z-10 drop-shadow-md">
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold block mb-2 opacity-90">{services[activeCategory].category}</span>
            </div>
          </div>

          {/* List */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col border-t border-charcoal/10"
              >
                {services[activeCategory].items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="group border-b border-charcoal/10 py-6 cursor-pointer hover:bg-charcoal/5 px-4 -mx-4 transition-colors duration-300"
                    onClick={() => setSelectedService(item)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex gap-4 items-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gold-rich italic opacity-0 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                        <h3 className="text-xl font-serif text-black-matte group-hover:text-gold-rich transition-colors duration-300">{item.name}</h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-charcoal/20 group-hover:text-gold-rich transition-colors duration-300" />
                    </div>
                    <p className="text-charcoal/50 font-light text-sm line-clamp-1 ml-[34px]">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black-matte/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-ivory text-black-matte w-full max-w-2xl relative shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 z-10 hover:rotate-90 transition-transform duration-300"
              >
                <X className="w-6 h-6 text-charcoal/50 hover:text-black-matte" />
              </button>
              
              <div className="p-10 md:p-16">
                <span className="text-gold-rich text-[11px] tracking-[0.2em] uppercase font-bold mb-4 block">Service Details</span>
                <h3 className="text-3xl md:text-4xl font-serif mb-6">{selectedService.name}</h3>
                <p className="text-charcoal/70 font-light leading-relaxed mb-8">
                  {selectedService.desc}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-8 py-8 border-y border-charcoal/10 mb-10">
                  <div>
                    <span className="text-[10px] text-charcoal/40 font-bold uppercase tracking-widest block mb-1">Duration</span>
                    <span className="font-serif text-xl">{selectedService.duration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-charcoal/40 font-bold uppercase tracking-widest block mb-1">Pricing</span>
                    <span className="font-serif text-xl">{selectedService.price}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="#book" onClick={() => setSelectedService(null)} className="flex-1 bg-black-matte text-white text-center py-4 text-[11px] font-bold tracking-widest uppercase hover:bg-gold-rich transition-colors duration-300">
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
