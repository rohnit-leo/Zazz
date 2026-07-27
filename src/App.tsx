import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Memberships from './components/Memberships';
import Gallery from './components/Gallery';
import Franchise from './components/Franchise';
import Locations from './components/Locations';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingMenu from './components/FloatingMenu';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <CartProvider>
      <main className="bg-ivory min-h-screen font-sans selection:bg-gold-rich selection:text-white relative">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gold-rich origin-left z-[100]"
          style={{ scaleX }}
        />
        
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Products />
        <Memberships />
        <Gallery />
        <Franchise />
        <Locations />
        <Booking />
        <Footer />

        <FloatingMenu />
        <ProductDetailModal />
        <CartDrawer />
      </main>
    </CartProvider>
  );
}
