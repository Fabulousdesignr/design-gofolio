import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';

export default function FeaturedWork() {
  // Select top 4 high impact projects
  const featuredIds = ['applyflow', 'adsight', 'moneylink', 'maxmall'];
  const featuredProjects = featuredIds
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
              Featured Case Studies & Work
            </h3>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Explore All Projects ({projects.length}) <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* 2x2 Grid of Featured Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => {
            const { id, title, tagline, image, video, fallback, link, liveUrl, caseStudyUrl, role, tags } = project;
            const targetUrl = link || caseStudyUrl || liveUrl;
            const isInternal = link && link.startsWith('/');

            return (
              <article
                key={id}
                className="group relative flex flex-col rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                {/* Media Container */}
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

                {/* Content Details */}
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase rounded-md bg-white/[0.05] border border-white/[0.08] text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                      {title}
                    </h4>

                    <p className="text-sm text-white/60 leading-relaxed mb-6">
                      {tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-medium text-white/40">
                      {role}
                    </span>

                    {isInternal ? (
                      <Link
                        to={targetUrl}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors"
                      >
                        View Case Study <ArrowUpRight size={14} />
                      </Link>
                    ) : (
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors"
                      >
                        View Live Project <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Projects CTA Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-indigo-950/30 via-zinc-900/40 to-zinc-950/30 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Looking for more examples?</h4>
            <p className="text-xs text-white/60">Browse my full archive of Shopify storefronts, mobile apps, and Web3 products.</p>
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
