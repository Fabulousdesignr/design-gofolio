import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import ShopifyExperience from '../components/ShopifyExperience';
import HomeAILab from '../components/HomeAILab';
import HomeLaunchPages from '../components/HomeLaunchPages';
import AboutPreview from '../components/AboutPreview';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <div className="workspace-canvas min-h-screen">
      <Navbar />
      <main className="workspace-main">
        <Hero />

        <div className="workspace-modules">
          <Projects />
          <ShopifyExperience />
          <HomeAILab />
          <HomeLaunchPages />
          <AboutPreview />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
