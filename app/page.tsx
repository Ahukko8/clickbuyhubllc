import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PricingCards from '@/components/PricingCards';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PricingCards />
      </main>
      <Footer />
    </>
  );
}