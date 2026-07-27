import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const locations = [
  {
    name: "Gurunanak Colony",
    city: "Vijayawada",
    status: "Flagship",
    address: "Gurunanak Colony Rd, beside Food Court, Vijayawada, AP 520008",
    image: "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/01_reception_lounge.jpg"
  },
  {
    name: "Bhavanipuram",
    city: "Vijayawada",
    status: "Premium",
    address: "Bhavanipuram Main Rd, Vijayawada, Andhra Pradesh",
    image: "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/saloon%20images/WhatsApp%20Image%202026-07-27%20at%2012.18.57%20PM%20%283%29.jpeg"
  },
  {
    name: "Guntur",
    city: "Andhra Pradesh",
    status: "Upcoming",
    address: "Opening soon in the luxury commercial avenue of Guntur",
    image: "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/11_vip_suite.jpg"
  },
  {
    name: "Eluru",
    city: "Andhra Pradesh",
    status: "Upcoming",
    address: "Opening soon in prime Eluru city center",
    image: "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/saloon%20images/WhatsApp%20Image%202026-07-27%20at%2012.18.57%20PM%20%284%29.jpeg"
  },
  {
    name: "Rajahmundry",
    city: "Andhra Pradesh",
    status: "Upcoming",
    address: "Opening soon in the heart of Rajahmundry",
    image: "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/saloon%20images/WhatsApp%20Image%202026-07-27%20at%2012.18.58%20PM%20%282%29.jpeg"
  }
];

export default function Locations() {
  return (
    <section id="locations" className="py-32 bg-ivory border-t border-charcoal/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-gold-rich text-[11px] tracking-[0.3em] uppercase mb-4 block font-bold">Our Presence & Expansion</span>
          <h2 className="text-4xl lg:text-6xl font-serif text-black-matte mb-6 tracking-tighter">Find Your Sanctuary</h2>
          <p className="max-w-2xl mx-auto text-charcoal/60 font-light text-sm">
            Step into our beautifully designed spaces in Vijayawada or look out for our upcoming luxury salons in Guntur, Eluru, and Rajahmundry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group cursor-pointer bg-white p-6 border border-charcoal/10 hover:border-gold-rich/40 hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden mb-8 relative border border-charcoal/5">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className={`absolute top-4 right-4 px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-bold shadow-sm ${
                  loc.status === 'Upcoming' ? 'bg-gold-amber text-white' : 'bg-white text-black-matte'
                }`}>
                  {loc.status}
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-1 text-black-matte group-hover:text-gold-rich transition-colors">{loc.name}</h3>
              <p className="text-gold-rich text-[10px] uppercase tracking-widest mb-4 font-bold">{loc.city}</p>
              <div className="flex items-start gap-3 text-charcoal/60 pt-4 border-t border-charcoal/10">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-black-matte" />
                <p className="text-[11px] font-bold tracking-widest uppercase leading-relaxed text-charcoal/50">{loc.address}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
