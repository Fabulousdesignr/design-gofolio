import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExperimentCard from '../components/ExperimentCard';
import FeaturedExperimentCard from '../components/FeaturedExperimentCard';
import { experiments } from '../data/experiments';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experiments() {
  useScrollReveal();

  const featuredExperiments = experiments.filter((exp) => exp.featured);
  const otherExperiments = experiments.filter((exp) => !exp.featured);

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
            <h1 className="text-detail-title font-black tracking-tighter mb-6 uppercase">
              AI Playground & Labs
            </h1>
            <p className="text-body-base text-text-secondary font-medium max-w-2xl">
              A space for fast AI-assisted product experiments, vibe-coded builds, and emotionally-driven ideas outside the traditional enterprise design constraints.
            </p>
          </div>
        </section>

        {/* Featured Experiments Showcase */}
        {featuredExperiments.length > 0 && (
          <section className="container-custom pb-20">
            <div className="flex flex-col gap-12">
              {featuredExperiments.map((exp) => (
                <div key={exp.id} className="scroll-reveal">
                  <FeaturedExperimentCard experiment={exp} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Visual Divider if both sections exist */}
        {featuredExperiments.length > 0 && otherExperiments.length > 0 && (
          <div className="container-custom mb-20">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-card-border to-transparent" />
          </div>
        )}

        {/* Other Experiments Grid */}
        {otherExperiments.length > 0 && (
          <section className="container-custom pb-20">
            <div className="mb-10">
              <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary">
                Other Concepts
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {otherExperiments.map((exp) => (
                <div key={exp.id} className="scroll-reveal">
                  <ExperimentCard experiment={exp} />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
