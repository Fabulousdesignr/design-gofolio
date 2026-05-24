import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExperimentCard from '../components/ExperimentCard';
import { experiments } from '../data/experiments';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experiments() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Header */}
        <section className="container-custom mb-20 scroll-reveal">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest mb-6">
              Experimental Builds
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
              AI Playground & Labs
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary font-medium leading-relaxed max-w-2xl">
              A space for fast AI-assisted product experiments, vibe-coded builds, and emotionally-driven ideas outside the traditional enterprise design constraints.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="container-custom pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {experiments.map((exp) => (
              <div key={exp.id} className="scroll-reveal">
                <ExperimentCard experiment={exp} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
