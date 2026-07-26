import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const locations = [
  {
    name: "Gurunanak Colony",
    city: "Vijayawada",
    status: "Flagship",
    address: "Gurunanak Colony Rd, beside Food Court, Vijayawada, Andhra Pradesh 520008",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=2811&auto=format&fit=crop"
  },
  {
    name: "Bhavanipuram",
    city: "Vijayawada",
    status: "Premium",
    address: "Bhavanipuram Main Rd, Vijayawada, Andhra Pradesh",
    image: "https://images.unsplash.com/photo-1629363447385-e6f7902d4f24?q=80&w=2938&auto=format&fit=crop"
  },
  {
    name: "Rajahmundry",
    city: "Andhra Pradesh",
    status: "Upcoming",
    address: "Opening soon in the heart of Rajahmundry",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2940&auto=format&fit=crop"
  }
];

export default function Locations() {
  return (
    <section id="locations" className="py-32 bg-ivory border-t border-charcoal/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-gold-rich text-[11px] tracking-[0.3em] uppercase mb-4 block font-bold">Our Presence</span>
          <h2 className="text-4xl lg:text-6xl font-serif text-black-matte mb-6 tracking-tighter">Find Your Sanctuary</h2>
          <p className="max-w-2xl mx-auto text-charcoal/60 font-light text-sm">
            Step into our beautifully designed spaces crafted for your ultimate comfort and luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group cursor-pointer bg-white p-6 border border-charcoal/10 hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden mb-8 relative border border-charcoal/5">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors duration-500 mix-blend-multiply" />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-[9px] uppercase tracking-[0.2em] font-bold text-black-matte shadow-sm">
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
