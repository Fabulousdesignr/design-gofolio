import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';

export default function FeaturedWork() {
  // Flagship Shove.bet hero card + 3 supporting projects
  const flagshipProject = projects.find((p) => p.id === 'shove-bet');
  const supportingIds = ['applyflow', 'moneylink', 'shyne'];
  const supportingProjects = supportingIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section id="work" className="py-28 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
              Selected Projects
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Featured Case Studies &amp; Work
            </h3>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Explore All Projects ({projects.length}) <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* ── FLAGSHIP: Shove.bet Hero Card ── */}
        {flagshipProject && (() => {
          const { title, tagline, image, link, liveUrl, role, tags } = flagshipProject;
          const targetUrl = link || liveUrl;

          return (
            <Link to={targetUrl} className="group block mb-8">
              <article className="relative rounded-2xl overflow-hidden border border-violet-500/20 bg-[#0d0d14] hover:border-violet-500/40 transition-all duration-500">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left: Content */}
                  <div className="p-10 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-violet-500/15 border border-violet-500/25 text-violet-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                          Flagship Case Study
                        </span>
                        {tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-md bg-white/[0.04] border border-white/[0.08] text-white/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h4 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3 leading-[1.05]">
                        {title}
                      </h4>
                      <p className="text-sm text-violet-300/80 font-medium uppercase tracking-widest mb-4">
                        Poker &amp; Gaming Product
                      </p>
                      <p className="text-base text-white/60 leading-relaxed mb-8 max-w-md">
                        {tagline}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/[0.06]">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-full transition-all shadow-lg shadow-violet-900/30">
                        View Shove.bet Case Study <ArrowUpRight size={15} />
                      </span>
                      <span className="text-xs font-medium text-white/40">
                        {role}
                      </span>
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden order-1 lg:order-2">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d14] via-transparent to-transparent hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent lg:hidden" />
                    <div className="absolute inset-0 bg-violet-950/10 mix-blend-multiply pointer-events-none" />
                  </div>
                </div>
              </article>
            </Link>
          );
        })()}

        {/* ── Supporting Projects: 3-column row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportingProjects.map((project) => {
            const { id, title, tagline, image, video, fallback, link, liveUrl, caseStudyUrl, role, tags } = project;
            const targetUrl = link || caseStudyUrl || liveUrl;
            const isInternal = link && link.startsWith('/');

            return (
              <article
                key={id}
                className="group relative flex flex-col rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                {/* Media */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900 border-b border-white/[0.06]">
                  {video ? (
                    <video
                      src={video}
                      poster={image || fallback}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <img
                      src={image || fallback}
                      alt={title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-md bg-white/[0.05] border border-white/[0.08] text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                      {title}
                    </h4>

                    <p className="text-xs text-white/55 leading-relaxed mb-6">
                      {tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] font-medium text-white/40">
                      {role}
                    </span>

                    {isInternal ? (
                      <Link
                        to={targetUrl}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors"
                      >
                        Case Study <ArrowUpRight size={13} />
                      </Link>
                    ) : targetUrl ? (
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors"
                      >
                        View Project <ExternalLink size={12} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Projects CTA Banner */}
        <div className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-indigo-950/30 via-zinc-900/40 to-zinc-950/30 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Looking for more examples?</h4>
            <p className="text-xs text-white/60">Browse my full archive of AI products, Shopify storefronts, mobile apps, and more.</p>
          </div>
          <Link
            to="/work"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full transition-all shrink-0"
          >
            View All {projects.length} Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

