import { ArrowLeft, ExternalLink, Cpu } from 'lucide-react';
import ProductFrame from './ProductFrame';
import Navbar from './v2/Navbar';
import Footer from './v2/Footer';
import { Link } from 'react-router-dom';

export default function ExperimentTemplate({ experiment }) {
  if (!experiment) return null;

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Header Section */}
        <header className="max-w-6xl mx-auto px-6 mb-16">
          <Link
            to="/labs"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Back to AI Labs
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
              <Cpu size={14} /> {experiment.platform}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              {experiment.title}
            </h1>

            <p className="text-lg text-white/60 font-normal leading-relaxed mb-8">
              {experiment.description}
            </p>

            {experiment.liveUrl && (
              <a
                href={experiment.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-all shadow-lg"
              >
                Launch Product <ExternalLink size={14} />
              </a>
            )}
          </div>
        </header>

        {/* Primary Media Showcase */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <ProductFrame
            src={experiment.heroVideo || experiment.heroImage}
            fallback={experiment.heroImage}
            alt={`${experiment.title} Preview`}
            label={`${experiment.title} — AI Lab Demo`}
            className="w-full shadow-2xl rounded-2xl border border-white/[0.08]"
          />
        </section>

        {/* Storytelling Grid */}
        <section className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Metadata Sidebar */}
          <div className="w-full lg:w-64 shrink-0 space-y-8 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] sticky top-32">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
                Core Focus
              </h3>
              <ul className="space-y-2">
                {experiment.focus.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-white/80 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/[0.06]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
                Stack / Platform
              </h3>
              <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-white/70 inline-block">
                {experiment.platform}
              </span>
            </div>
          </div>

          {/* Right Column: Lab Notes */}
          <div className="flex-1 min-w-0 max-w-3xl space-y-8">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Lab Notes & Insights
            </h2>

            <p className="text-base text-white/70 leading-relaxed">
              {experiment.story}
            </p>

            {experiment.labNotes ? (
              <div className="space-y-6 pt-4">
                {experiment.labNotes.map((note, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                      {note.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                      {note.content}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] mt-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  💡 Why I built this
                </h3>
                <div className="space-y-3">
                  {experiment.whyIBuiltThis && experiment.whyIBuiltThis.map((paragraph, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-white/60 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Gallery */}
        {experiment.gallery && experiment.gallery.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 mt-24">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-8">
              Product Gallery
            </h2>
            <div className="space-y-8">
              {experiment.gallery.map((imgSrc, idx) => (
                <ProductFrame
                  key={idx}
                  src={imgSrc}
                  alt={`${experiment.title} Gallery ${idx + 1}`}
                  label={`${experiment.title} — Screen 0${idx + 1}`}
                  className="w-full rounded-2xl border border-white/[0.08]"
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
