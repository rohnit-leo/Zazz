import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Sparkles, Award, Droplet, Clock, Heart } from 'lucide-react';
import { cn } from '../lib/utils';

const features = [
  { icon: Sparkles, title: "Luxury Interiors", desc: "A serene ambiance designed for ultimate relaxation." },
  { icon: Award, title: "International Techniques", desc: "Global standards brought to your local luxury experience." },
  { icon: ShieldCheck, title: "Certified Professionals", desc: "Highly trained artists dedicated to perfection." },
  { icon: Droplet, title: "Premium Products", desc: "We use only the finest, globally acclaimed brands." },
  { icon: Star, title: "Latest Technology", desc: "State-of-the-art equipment for superior results." },
  { icon: Heart, title: "Luxury Hygiene", desc: "Uncompromising cleanliness and sanitization." },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-ivory text-black-matte overflow-hidden border-t border-charcoal/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Split Layout: Brand Story */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[3/4] overflow-hidden bg-beige border border-charcoal/5 relative">
              <img
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2864&auto=format&fit=crop"
                alt="ZAZZ Luxury Interior"
                className="w-full h-full object-cover grayscale transition-all duration-[5000ms] hover:grayscale-0 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black-matte/5" />
            </div>
            {/* Floating founder quote block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-12 -right-6 lg:-right-12 bg-white p-8 lg:p-12 shadow-xl max-w-sm border border-charcoal/10"
            >
              <Quote className="w-8 h-8 text-gold-rich mb-6 opacity-40" />
              <p className="font-serif text-lg leading-relaxed mb-6 italic text-charcoal/90">
                "Our goal is to redefine beauty standards by merging world-class luxury with unparalleled expertise."
              </p>
              <div>
                <p className="font-bold text-[10px] tracking-[0.2em] uppercase">M. Khaja Meeravali</p>
                <p className="text-[9px] text-charcoal/50 mt-1 uppercase tracking-[0.3em]">Founder, ZAZZ</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <span className="text-gold-rich text-[11px] tracking-[0.3em] uppercase mb-6 block font-bold">The ZAZZ Story</span>
            <h2 className="text-5xl lg:text-7xl font-serif mb-8 leading-[0.9] tracking-tighter">
              An Unforgettable <br/> <span className="italic text-charcoal/70">Experience</span>
            </h2>
            <div className="space-y-6 text-charcoal/80 font-light leading-relaxed text-sm">
              <p>
                ZAZZ is a premium luxury unisex salon brand offering world-class beauty experiences through exceptional service, luxurious interiors, modern salon technology, and highly trained professionals.
              </p>
              <p>
                We blend fashion, beauty, skincare, wellness, and luxury hospitality into one seamless journey. Our mission is to elevate the salon experience, making every visit a moment of pure indulgence and transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-charcoal/10">
              <div>
                <h3 className="font-serif text-2xl mb-3 text-black-matte">Our Vision</h3>
                <p className="text-[11px] uppercase tracking-widest text-charcoal/60 font-bold leading-relaxed">
                  To become India's most premium & trusted salon franchise.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-3 text-black-matte">Our Mission</h3>
                <p className="text-[11px] uppercase tracking-widest text-charcoal/60 font-bold leading-relaxed">
                  Unparalleled artistry & personalized wellness.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose ZAZZ */}
        <div className="mt-40 text-center mb-20">
          <span className="text-gold-rich text-[11px] tracking-[0.3em] uppercase mb-4 block font-bold">The ZAZZ Difference</span>
          <h2 className="text-4xl lg:text-6xl font-serif mb-6 tracking-tighter">Why Choose Us</h2>
          <p className="max-w-2xl mx-auto text-charcoal/60 font-light text-sm">
            Every detail is meticulously crafted to ensure your time with us is nothing short of extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-charcoal/10 bg-charcoal/5">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={cn(
                "group bg-white p-10 border-b border-r border-charcoal/10 hover:bg-ivory transition-all duration-500 relative overflow-hidden flex flex-col justify-between",
                idx >= 3 ? "lg:border-b-0" : "",
                (idx + 1) % 3 === 0 ? "lg:border-r-0" : ""
              )}
            >
              <div>
                <feature.icon className="w-8 h-8 text-black-matte mb-8 group-hover:text-gold-rich transition-colors duration-500" strokeWidth={1.5} />
                <h3 className="text-xl font-serif mb-3 relative z-10">{feature.title}</h3>
                <p className="text-sm text-charcoal/60 font-light leading-relaxed relative z-10">
                  {feature.desc}
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-rich italic opacity-0 group-hover:opacity-100 transition-opacity mt-8 block">0{idx + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
