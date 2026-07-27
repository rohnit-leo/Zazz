import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, MapPin, Building2, Briefcase } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Franchise() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formattedMessage = `Hello ZAZZ Salon! I am interested in a Franchise Business Opportunity.%0A%0A` +
      `*Franchise Enquiry Details:*%0A` +
      `• *Name:* ${encodeURIComponent(name || 'Not specified')}%0A` +
      `• *Phone:* ${encodeURIComponent(phone || 'Not specified')}%0A` +
      `• *Email:* ${encodeURIComponent(email || 'Not specified')}%0A` +
      `• *City of Interest:* ${encodeURIComponent(city || 'Not specified')}%0A` +
      `• *Investment Budget:* ${encodeURIComponent(budget || 'Not specified')}%0A%0A` +
      `Please send me the comprehensive Franchise Deck and financial details.`;

    const whatsappUrl = `https://wa.me/918686121420?text=${formattedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

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
            { icon: TrendingUp, val: "8 Lac +", label: "Avg. Monthly Revenue" },
            { icon: Users, val: "3.5k+", label: "Happy Clients Monthly" },
            { icon: Building2, val: "100%", label: "Setup Support" },
            { icon: MapPin, val: "3+", label: "Expansion Cities (Guntur, Eluru, Rajahmundry)" }
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
              <div className="font-serif text-3xl md:text-4xl mb-2 text-black-matte">{stat.val}</div>
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
            <h3 className="text-4xl font-serif mb-8 tracking-tighter text-black-matte">End-to-End Turnkey Support</h3>
            
            {/* Real Floor Plan Preview Card */}
            <div className="mb-8 p-4 bg-white border border-charcoal/10 shadow-sm flex items-center gap-4">
              <div className="w-28 h-20 bg-beige overflow-hidden shrink-0 border border-charcoal/10">
                <img 
                  src="https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/saloonimagesss/04_floor_plan.jpg" 
                  alt="ZAZZ Salon Architectural Layout"
                  className="w-full h-full object-contain p-1 bg-white" 
                />
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gold-rich block">Architectural Precision</span>
                <h4 className="font-serif text-sm font-bold text-black-matte">Bespoke 3D Floor Plans & Layout Architecture</h4>
                <p className="text-[11px] text-charcoal/60 mt-1">We provide complete architectural blueprints and interior design execution.</p>
              </div>
            </div>

            <div className="space-y-6">
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
              Fill out the form below to receive our comprehensive investment portfolio directly via WhatsApp.
            </p>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input 
                  type="text" 
                  required
                  placeholder="FULL NAME *" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest placeholder:text-charcoal/30 text-black-matte" 
                />
                <input 
                  type="tel" 
                  required
                  placeholder="PHONE NUMBER *" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest placeholder:text-charcoal/30 text-black-matte" 
                />
              </div>
              <input 
                type="email" 
                required
                placeholder="EMAIL ADDRESS *" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest placeholder:text-charcoal/30 text-black-matte" 
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input 
                  type="text" 
                  required
                  placeholder="CITY OF INTEREST *" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest placeholder:text-charcoal/30 text-black-matte" 
                />
                <select 
                  required
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest text-black-matte appearance-none"
                >
                  <option value="" disabled className="text-charcoal/30">INVESTMENT BUDGET *</option>
                  <option value="₹30L - ₹50L">₹30L - ₹50L</option>
                  <option value="₹50L - ₹80L">₹50L - ₹80L</option>
                  <option value="₹80L+">₹80L+</option>
                </select>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#25D366] text-white py-4 mt-8 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#20ba5a] transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <Briefcase className="w-4 h-4" /> Request Details via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
