import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export default function ExperimentCard({ experiment }) {
  const { title, description, heroImage, heroVideo, image, slug, platform, focus, liveUrl } = experiment;

  return (
    <article className="group relative flex flex-col rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] overflow-hidden transition-all duration-500 hover:-translate-y-1">
      {/* Media Thumbnail */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900 border-b border-white/[0.06]">
        {heroVideo ? (
          <video
            src={heroVideo}
            poster={heroImage || image}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <img
            src={heroImage || image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="absolute top-4 left-4 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-zinc-950/80 border border-white/[0.1] text-indigo-400 backdrop-blur-md">
          {platform}
        </div>
      </div>

      {/* Details Body */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6">
            {description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {(focus || []).slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-md bg-white/[0.05] border border-white/[0.08] text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <Link
              to={`/ai-playground/${slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors"
            >
              Lab Breakdown <ArrowUpRight size={14} />
            </Link>

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-white/50 hover:text-white transition-colors"
              >
                Live <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
