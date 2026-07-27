import { motion } from 'motion/react';
import { Check, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const memberships = [
  {
    tier: "Silver",
    price: "₹10,000",
    period: "/ year",
    benefits: [
      "10% off on all services",
      "Complimentary Hair Spa on Birthday",
      "Priority Booking",
      "Exclusive offers via email"
    ],
    color: "bg-ivory text-black-matte border-charcoal/10",
    btn: "bg-black-matte text-white hover:bg-gold-rich"
  },
  {
    tier: "Gold",
    price: "₹25,000",
    period: "/ year",
    popular: true,
    benefits: [
      "15% off on all services",
      "Complimentary Facial on Birthday",
      "Priority VIP Booking",
      "1 Free Haircut every quarter",
      "Exclusive event invites"
    ],
    color: "bg-white text-black-matte border-gold-rich shadow-xl",
    btn: "bg-gold-rich text-white hover:bg-black-matte"
  },
  {
    tier: "Platinum",
    price: "₹50,000",
    period: "/ year",
    benefits: [
      "20% off on all services",
      "Complimentary Premium Spa on Birthday",
      "Always Priority VIP Booking",
      "1 Free Service of choice quarterly",
      "Bring a friend pass (2x/year)",
      "Exclusive VIP lounge access"
    ],
    color: "bg-ivory text-black-matte border-charcoal/10",
    btn: "bg-black-matte text-white hover:bg-gold-rich"
  }
];

export default function Memberships() {
  const handleJoinMembership = (tier: string, price: string) => {
    const formattedMessage = `Hello ZAZZ Salon! I am interested in acquiring the *ZAZZ Luxury ${tier} Membership* (${price}/year). Please share registration and payment details.`;
    const whatsappUrl = `https://wa.me/918686121420?text=${formattedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="memberships" className="py-32 bg-white border-t border-charcoal/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-gold-rich text-[11px] tracking-[0.3em] uppercase mb-4 block font-bold">ZAZZ Exclusive</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-black-matte mb-6 tracking-tighter">Luxury Memberships</h2>
          <p className="max-w-2xl mx-auto text-charcoal/60 font-light text-sm">
            Unlock a world of unparalleled benefits, priority services, and exclusive privileges designed for our most valued clientele.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {memberships.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={cn(
                "relative p-10 flex flex-col h-full border transition-transform hover:-translate-y-2 duration-500",
                m.color,
                m.popular ? "md:scale-105 z-10" : ""
              )}
            >
              {m.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-rich text-white text-[9px] tracking-[0.2em] uppercase py-2 px-6 font-bold shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-serif text-3xl mb-2">{m.tier}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl font-bold">{m.price}</span>
                  <span className="text-sm font-light text-charcoal/50">
                    {m.period}
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {m.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-gold-rich" />
                    <span className="text-sm font-light leading-relaxed text-charcoal/80">
                      {b}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleJoinMembership(m.tier, m.price)}
                className={cn("w-full py-4 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 font-bold flex items-center justify-center gap-2 shadow-md", m.btn)}
              >
                <MessageCircle className="w-4 h-4" /> Join via WhatsApp
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
