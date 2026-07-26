import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, User, Sparkles } from 'lucide-react';

export default function Booking() {
  return (
    <section id="book" className="relative py-32 overflow-hidden bg-ivory border-t border-charcoal/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white p-8 md:p-16 shadow-xl relative border border-charcoal/10">
          <div className="text-center mb-12">
            <span className="text-gold-rich text-[11px] tracking-[0.3em] uppercase mb-4 block font-bold">Reservations</span>
            <h2 className="text-4xl md:text-5xl font-serif text-black-matte mb-4 tracking-tighter">Book Your Experience</h2>
            <p className="text-charcoal/60 font-light text-sm">
              Reserve your time for unparalleled luxury and personalized artistry.
            </p>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <MapPin className="absolute left-0 bottom-2 w-4 h-4 text-charcoal/30" />
                <select className="w-full border-b border-charcoal/20 bg-transparent py-2 pl-8 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest text-black-matte appearance-none">
                  <option value="" disabled selected className="text-charcoal/30">SELECT BRANCH</option>
                  <option value="gurunanak">Gurunanak Colony</option>
                  <option value="bhavanipuram">Bhavanipuram</option>
                </select>
              </div>

              <div className="relative">
                <Sparkles className="absolute left-0 bottom-2 w-4 h-4 text-charcoal/30" />
                <select className="w-full border-b border-charcoal/20 bg-transparent py-2 pl-8 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest text-black-matte appearance-none">
                  <option value="" disabled selected className="text-charcoal/30">SELECT SERVICE</option>
                  <option value="hair">Hair Artistry</option>
                  <option value="skin">Skin & Esthetics</option>
                  <option value="bridal">Bridal Studio</option>
                  <option value="spa">Wellness & Spa</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <Calendar className="absolute left-0 bottom-2 w-4 h-4 text-charcoal/30" />
                <input 
                  type="date" 
                  className="w-full border-b border-charcoal/20 bg-transparent py-2 pl-8 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest text-black-matte"
                />
              </div>

              <div className="relative">
                <Clock className="absolute left-0 bottom-2 w-4 h-4 text-charcoal/30" />
                <select className="w-full border-b border-charcoal/20 bg-transparent py-2 pl-8 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest text-black-matte appearance-none">
                  <option value="" disabled selected className="text-charcoal/30">PREFERRED TIME</option>
                  <option value="morning">Morning (10 AM - 1 PM)</option>
                  <option value="afternoon">Afternoon (1 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <User className="absolute left-0 bottom-2 w-4 h-4 text-charcoal/30" />
                <input 
                  type="text" 
                  placeholder="FULL NAME"
                  className="w-full border-b border-charcoal/20 bg-transparent py-2 pl-8 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest text-black-matte placeholder:text-charcoal/30"
                />
              </div>

              <div className="relative">
                <input 
                  type="tel" 
                  placeholder="PHONE NUMBER"
                  className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest text-black-matte placeholder:text-charcoal/30"
                />
              </div>
            </div>

            <div className="pt-8 flex justify-center">
              <button className="bg-black-matte text-white px-12 py-4 text-[11px] tracking-[0.2em] uppercase hover:bg-gold-rich transition-colors duration-300 font-bold shadow-lg">
                Confirm Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
