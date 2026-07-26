import { motion } from 'motion/react';
import { TrendingUp, Users, MapPin, Building2, Briefcase, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Franchise() {
  return (
    <section id="franchise" className="py-32 bg-ivory text-black-matte border-t border-charcoal/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.2] to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold-rich text-[11px] tracking-[0.3em] uppercase mb-4 block font-bold">Business Opportunity</span>
          <h2 className="text-4xl lg:text-6xl font-serif mb-6 tracking-tighter">Invest in Luxury</h2>
          <p className="max-w-2xl mx-auto text-charcoal/60 font-light">
            Partner with India's fastest-growing premium salon brand. We offer a proven, highly profitable business model with end-to-end support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-24 border border-charcoal/10 bg-white shadow-sm">
          {[
            { icon: TrendingUp, val: "₹6L+", label: "Avg. Monthly Revenue" },
            { icon: Users, val: "3.5k+", label: "Happy Clients Monthly" },
            { icon: Building2, val: "100%", label: "Setup Support" },
            { icon: MapPin, val: "3", label: "Upcoming Locations" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={cn(
                "p-10 text-center border-b lg:border-b-0 border-r border-charcoal/10 hover:bg-beige/30 transition-colors duration-300",
                (idx + 1) % 4 === 0 ? "lg:border-r-0" : ""
              )}
            >
              <stat.icon className="w-8 h-8 text-black-matte mx-auto mb-6 opacity-80" strokeWidth={1.5} />
              <div className="font-serif text-4xl mb-2 text-black-matte">{stat.val}</div>
              <div className="text-[10px] font-bold text-charcoal/50 tracking-[0.2em] uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-serif mb-10 tracking-tighter text-black-matte">End-to-End Support</h3>
            <div className="space-y-8">
              {[
                { title: "Location & Setup", desc: "Assistance in site selection, premium interior design architecture, and equipment sourcing." },
                { title: "Hiring & Training", desc: "Recruitment of top-tier stylists and comprehensive training in international techniques." },
                { title: "Marketing & Branding", desc: "Access to our luxury brand assets, digital marketing playbooks, and launch campaigns." },
                { title: "Operations & Tech", desc: "Integration with our custom CRM, billing systems, and standard operating procedures." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 border-b border-charcoal/10 pb-6 group">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gold-rich italic mt-1 w-6">0{idx + 1}</div>
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-black-matte group-hover:text-gold-rich transition-colors">{item.title}</h4>
                    <p className="text-sm text-charcoal/60 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-14 relative border border-charcoal/10 shadow-xl"
          >
            <h3 className="text-3xl font-serif mb-6 text-black-matte">Request Franchise Deck</h3>
            <p className="text-sm text-charcoal/60 font-light mb-10">
              Fill out the form below to receive our comprehensive investment portfolio and schedule a private consultation.
            </p>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input type="text" placeholder="FULL NAME" className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest placeholder:text-charcoal/30" />
                <input type="tel" placeholder="PHONE NUMBER" className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest placeholder:text-charcoal/30" />
              </div>
              <input type="email" placeholder="EMAIL ADDRESS" className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest placeholder:text-charcoal/30" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input type="text" placeholder="CITY OF INTEREST" className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest placeholder:text-charcoal/30" />
                <select className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest text-black-matte appearance-none">
                  <option value="" disabled selected className="text-charcoal/30">INVESTMENT BUDGET</option>
                  <option value="30-50">₹30L - ₹50L</option>
                  <option value="50-80">₹50L - ₹80L</option>
                  <option value="80+">₹80L+</option>
                </select>
              </div>
              
              <button className="w-full bg-black-matte text-white py-4 mt-8 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-gold-rich transition-colors duration-300 flex items-center justify-center gap-3">
                <Briefcase className="w-4 h-4" /> Request Details
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
