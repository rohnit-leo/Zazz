/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Memberships from './components/Memberships';
import Gallery from './components/Gallery';
import Franchise from './components/Franchise';
import Locations from './components/Locations';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="bg-ivory min-h-screen font-sans selection:bg-gold-rich selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold-rich origin-left z-[100]"
        style={{ scaleX }}
      />
      
      {/* Floating CTAs */}
      <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-4">
        <a 
          href="https://wa.me/918686121420?text=Hello%20ZAZZ%20Salon,%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a 
          href="tel:8686121420"
          className="w-14 h-14 bg-black-matte text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-gold-rich transition-all duration-300"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Memberships />
      <Gallery />
      <Franchise />
      <Locations />
      <Booking />
      <Footer />
    </main>
  );
}
