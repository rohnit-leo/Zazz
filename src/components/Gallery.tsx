import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e72?q=80&w=2799&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2938&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521590832167-7bfc620cb651?q=80&w=2952&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600948836101-f9ff09c00bd6?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2942&auto=format&fit=crop"
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-charcoal/10 pb-12">
          <div className="max-w-2xl">
            <span className="text-gold-rich text-[11px] tracking-[0.3em] uppercase mb-4 block font-bold">Our Portfolio</span>
            <h2 className="text-4xl lg:text-6xl font-serif text-black-matte leading-none tracking-tighter">
              Artistry in <span className="italic text-charcoal/70">Motion</span>
            </h2>
          </div>
          <p className="text-charcoal/60 font-light max-w-sm text-sm">
            Explore our curated gallery showcasing the transformative power of luxury beauty and bespoke artistry.
          </p>
        </div>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-charcoal/10">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer border-b lg:border-b-0 lg:border-r border-charcoal/10 ${
                idx === 1 || idx === 4 ? 'sm:col-span-2 lg:col-span-1 aspect-[4/3] lg:aspect-[3/4]' : 'aspect-[3/4]'
              }`}
              onClick={() => setSelectedImg(src)}
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black-matte/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center mix-blend-multiply"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ivory/95 backdrop-blur-xl p-4 md:p-12"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 p-4 text-black-matte hover:text-gold-rich transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImg}
              alt="Enlarged gallery view"
              className="max-w-full max-h-full object-contain border border-charcoal/10 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
