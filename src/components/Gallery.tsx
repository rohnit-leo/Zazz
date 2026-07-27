import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Styling' | 'Skincare' | 'Bridal & VIP' | 'Wellness' | 'Architecture';
  url: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Grand Reception Lounge',
    category: 'Architecture',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/01_reception_lounge.jpg',
  },
  {
    id: '2',
    title: 'Main Hair Styling Studio',
    category: 'Styling',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/02_hair_studio.jpg',
  },
  {
    id: '3',
    title: 'Hair Wash & Scalp Spa Station',
    category: 'Styling',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/03_wash_area.jpg',
  },
  {
    id: '4',
    title: 'Pedicure & Foot Care Suite',
    category: 'Wellness',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/saloon%20images/01_Pedicure_Room.jpg',
  },
  {
    id: '5',
    title: 'Facial & Skincare Suite',
    category: 'Skincare',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/saloon%20images/02_Facial_Treatment_Room.jpg',
  },
  {
    id: '6',
    title: 'Head Spa & Shampoo Bar',
    category: 'Styling',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/saloon%20images/03_Hair_Wash_Area.jpg',
  },
  {
    id: '7',
    title: 'Bridal Makeup Studio',
    category: 'Bridal & VIP',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/saloon%20images/04_Bridal_Makeup_Studio.jpg',
  },
  {
    id: '8',
    title: 'Glass Skin Facial Suite 1',
    category: 'Skincare',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/05_facial_room1.jpg',
  },
  {
    id: '9',
    title: 'Aesthetic Skincare Suite 2',
    category: 'Skincare',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/06_facial_room2.jpg',
  },
  {
    id: '10',
    title: 'Permanent Makeup (PMU) Room',
    category: 'Skincare',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/07_pmu_room.jpg',
  },
  {
    id: '11',
    title: 'Men\'s Grooming Lounge',
    category: 'Styling',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/08_grooming_lounge.jpg',
  },
  {
    id: '12',
    title: 'Couture Nail Bar',
    category: 'Wellness',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/09_nail_bar.jpg',
  },
  {
    id: '13',
    title: 'Hair & Skin Retail Lounge',
    category: 'Architecture',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/10_retail_display.jpg',
  },
  {
    id: '14',
    title: 'VIP Private Salon Suite',
    category: 'Bridal & VIP',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/11_vip_suite.jpg',
  },
  {
    id: '15',
    title: 'Luxury Bridal Suite',
    category: 'Bridal & VIP',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/12_bridal_studio.jpg',
  },
  {
    id: '16',
    title: 'Stylist Operations & Training Lounge',
    category: 'Architecture',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/13_staff_room.jpg',
  },
  {
    id: '17',
    title: 'Complimentary Hospitality Pantry',
    category: 'Wellness',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/14_pantry.jpg',
  },
  {
    id: '18',
    title: 'Salon Architectural Layout & Floor Plan',
    category: 'Architecture',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/04_floor_plan.jpg',
  },
  {
    id: '19',
    title: 'Mirror Styling Station',
    category: 'Styling',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/saloon%20images/WhatsApp%20Image%202026-07-27%20at%2012.18.57%20PM%20%283%29.jpeg',
  },
  {
    id: '20',
    title: 'Executive Styling Bay',
    category: 'Styling',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/saloon%20images/WhatsApp%20Image%202026-07-27%20at%2012.18.57%20PM%20%284%29.jpeg',
  },
  {
    id: '21',
    title: 'Ambient Luxury Corridor',
    category: 'Architecture',
    url: 'https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/saloon%20images/WhatsApp%20Image%202026-07-27%20at%2012.18.58%20PM%20%282%29.jpeg',
  },
];

const CATEGORIES = ['All', 'Styling', 'Skincare', 'Bridal & VIP', 'Wellness', 'Architecture'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-32 bg-white text-black-matte border-t border-charcoal/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-charcoal/10 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-gold-rich" />
              <span className="text-gold-rich text-[11px] tracking-[0.3em] uppercase block font-bold">
                Real Salon Tour & Spaces
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-serif text-black-matte leading-none tracking-tighter">
              ZAZZ <span className="italic text-charcoal/70">Sanctuary Gallery</span>
            </h2>
          </div>
          <p className="text-charcoal/60 font-light max-w-sm text-sm">
            Step inside our actual luxury salon spaces in Vijayawada. Explore our dedicated styling bays, facial suites, bridal studio, nail bar, and floor layouts.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-4 mb-12 border-b border-charcoal/10 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'whitespace-nowrap px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 border',
                activeCategory === cat
                  ? 'bg-black-matte text-white border-black-matte'
                  : 'bg-white text-charcoal/60 border-charcoal/10 hover:border-gold-rich hover:text-black-matte'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className="group relative bg-beige/30 border border-charcoal/10 overflow-hidden cursor-pointer flex flex-col"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                  <img
                    src={item.url}
                    alt={item.title}
                    className={cn(
                      "w-full h-full transition-transform duration-700 group-hover:scale-105",
                      item.url.includes('04_floor_plan.jpg') ? "object-contain p-2 bg-white" : "object-cover"
                    )}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black-matte/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-black-matte px-4 py-2 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-gold-rich" /> View Space
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white flex flex-col justify-between border-t border-charcoal/5 flex-1">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gold-rich mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-sm font-bold text-black-matte group-hover:text-gold-amber transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black-matte/90 backdrop-blur-md p-4 md:p-12"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-black-matte max-w-4xl max-h-[90vh] w-full border border-gold-rich/30 shadow-2xl relative flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-charcoal/10 flex items-center justify-between bg-ivory">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gold-rich">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-black-matte">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 text-charcoal hover:text-black-matte transition-colors rounded-full hover:bg-black-matte/5"
                  aria-label="Close image"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-hidden bg-black flex items-center justify-center p-2">
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>

              <div className="p-4 bg-ivory border-t border-charcoal/10 flex items-center justify-between text-xs">
                <span className="text-charcoal/60 font-serif italic">
                  ZAZZ Luxury Unisex Salon • Real Location Photo
                </span>
                <a
                  href="#book"
                  onClick={() => setSelectedItem(null)}
                  className="bg-black-matte text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-gold-rich transition-colors"
                >
                  Book Appointment in this Space
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
