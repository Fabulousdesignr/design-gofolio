import Navbar from '../components/v2/Navbar';
import Footer from '../components/v2/Footer';
import ExperimentCard from '../components/ExperimentCard';
import { experiments } from '../data/experiments';
import { useContactModal } from '../context/ContactModalContext';
import { Cpu } from 'lucide-react';

export default function Experiments() {
  const { openModal } = useContactModal();

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-36 pb-28">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
              <Cpu size={14} /> AI Labs & Explorations
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              AI Products & Rapid Prototypes
            </h1>

            <p className="text-lg text-white/60 font-normal leading-relaxed">
              A curated collection of AI-powered applications, workflow experiments, and rapid prototypes built to explore intelligent interfaces, prompt engineering, and human-AI collaboration.
            </p>
          </div>
        </section>

        {/* Experiments Grid */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiments.map((exp) => (
              <ExperimentCard key={exp.id} experiment={exp} />
            ))}
          </div>
        </section>

        {/* Bottom Callout Banner */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-zinc-900/60 to-zinc-950/40 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Have an AI product idea?
              </h3>
              <p className="text-sm text-white/60 max-w-xl">
                I help founders and engineering teams design intuitive interfaces for LLMs, copilots, and complex data intelligence tools.
              </p>
            </div>

            <button
              onClick={openModal}
              className="px-6 py-3.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-all shrink-0 cursor-pointer shadow-lg shadow-white/5"
            >
              Start a Conversation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
