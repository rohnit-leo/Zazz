import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Sparkles, MessageCircle } from 'lucide-react';

export default function Booking() {
  const [branch, setBranch] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `Hello ZAZZ Salon! I would like to book a salon appointment.%0A%0A` +
      `*Appointment Details:*%0A` +
      `• *Branch:* ${encodeURIComponent(branch || 'Gurunanak Colony')}%0A` +
      `• *Service Required:* ${encodeURIComponent(service || 'General Service')}%0A` +
      `• *Preferred Date:* ${encodeURIComponent(date || 'As soon as possible')}%0A` +
      `• *Preferred Time:* ${encodeURIComponent(time || 'Flexible')}%0A` +
      `• *Client Name:* ${encodeURIComponent(fullName || 'Guest')}%0A` +
      `• *Phone Number:* ${encodeURIComponent(phone || 'Not provided')}%0A%0A` +
      `Please confirm my appointment slot. Thank you!`;

    const whatsappUrl = `https://wa.me/918686121420?text=${formattedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="book" className="relative py-32 overflow-hidden bg-ivory border-t border-charcoal/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white p-8 md:p-16 shadow-xl relative border border-charcoal/10">
          <div className="text-center mb-12">
            <span className="text-gold-rich text-[11px] tracking-[0.3em] uppercase mb-4 block font-bold">Reservations</span>
            <h2 className="text-4xl md:text-5xl font-serif text-black-matte mb-4 tracking-tighter">Book Your Experience</h2>
            <p className="text-charcoal/60 font-light text-sm">
              Reserve your time for unparalleled luxury and personalized artistry directly via WhatsApp.
            </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <MapPin className="absolute left-0 bottom-2 w-4 h-4 text-charcoal/30" />
                <select 
                  required
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full border-b border-charcoal/20 bg-transparent py-2 pl-8 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest text-black-matte appearance-none"
                >
                  <option value="" disabled className="text-charcoal/30">SELECT BRANCH *</option>
                  <option value="Gurunanak Colony Flagship">Gurunanak Colony (Flagship)</option>
                  <option value="Bhavanipuram Premium">Bhavanipuram (Premium)</option>
                </select>
              </div>

              <div className="relative">
                <Sparkles className="absolute left-0 bottom-2 w-4 h-4 text-charcoal/30" />
                <select 
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full border-b border-charcoal/20 bg-transparent py-2 pl-8 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest text-black-matte appearance-none"
                >
                  <option value="" disabled className="text-charcoal/30">SELECT SERVICE *</option>
                  <option value="Hair Artistry & Styling">Hair Artistry & Styling</option>
                  <option value="Skin & Advanced Esthetics">Skin & Advanced Esthetics</option>
                  <option value="Bridal Couture Studio">Bridal Couture Studio</option>
                  <option value="Wellness & Head Spa">Wellness & Head Spa</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <Calendar className="absolute left-0 bottom-2 w-4 h-4 text-charcoal/30" />
                <input 
                  type="date" 
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border-b border-charcoal/20 bg-transparent py-2 pl-8 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest text-black-matte"
                />
              </div>

              <div className="relative">
                <Clock className="absolute left-0 bottom-2 w-4 h-4 text-charcoal/30" />
                <select 
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full border-b border-charcoal/20 bg-transparent py-2 pl-8 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest text-black-matte appearance-none"
                >
                  <option value="" disabled className="text-charcoal/30">PREFERRED TIME *</option>
                  <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                  <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                  <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <User className="absolute left-0 bottom-2 w-4 h-4 text-charcoal/30" />
                <input 
                  type="text" 
                  required
                  placeholder="FULL NAME *"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border-b border-charcoal/20 bg-transparent py-2 pl-8 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest text-black-matte placeholder:text-charcoal/30"
                />
              </div>

              <div className="relative">
                <input 
                  type="tel" 
                  required
                  placeholder="PHONE NUMBER *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border-b border-charcoal/20 bg-transparent py-2 focus:outline-none focus:border-black-matte transition-colors text-[11px] font-bold tracking-widest text-black-matte placeholder:text-charcoal/30"
                />
              </div>
            </div>

            <div className="pt-8 flex justify-center">
              <button 
                type="submit"
                className="bg-[#25D366] text-white px-10 py-4 text-[11px] tracking-[0.2em] uppercase hover:bg-[#20ba5a] transition-colors duration-300 font-bold shadow-lg flex items-center gap-3"
              >
                <MessageCircle className="w-4 h-4" /> Book Appointment via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
