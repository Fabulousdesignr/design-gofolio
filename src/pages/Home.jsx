import Navbar from '../components/v2/Navbar';
import Hero from '../components/v2/Hero';
import Services from '../components/v2/Services';
import FeaturedWork from '../components/v2/FeaturedWork';
import Process from '../components/v2/Process';
import AboutSection from '../components/v2/AboutSection';
import Testimonials from '../components/v2/Testimonials';
import ContactSection from '../components/v2/ContactSection';
import Footer from '../components/v2/Footer';

export default function Home() {
  return (
    <div className="bg-[#09090b] text-white min-h-screen selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedWork />
        <Process />
        <AboutSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
