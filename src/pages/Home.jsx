import Navbar from '../components/v2/Navbar';
import Footer from '../components/v2/Footer';
import Hero from '../components/v2/Hero';
import FeaturedWork from '../components/v2/FeaturedWork';
import CapabilitiesPreview from '../components/v2/CapabilitiesPreview';
import Process from '../components/v2/Process';
import AboutSection from '../components/v2/AboutSection';
import OtherWork from '../components/v2/OtherWork';
import BuildLog from '../components/v2/BuildLog';
import ContactSection from '../components/v2/ContactSection';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function Home() {
  useDocumentMeta(
    'AI Product Engineer',
    'I design and build intelligent products with AI. Product design, AI application development and full-stack product engineering.'
  );

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main id="main-content">
        <Hero />
        <FeaturedWork />
        <CapabilitiesPreview />
        <Process />
        <AboutSection />
        <OtherWork />
        <BuildLog />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
