import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Projects from '../components/Projects';
import UIShowcase from '../components/UIShowcase';
import Process from '../components/Process';
import Tools from '../components/Tools';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <UIShowcase />
        <Process />
        <Tools />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
