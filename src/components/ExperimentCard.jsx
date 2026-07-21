import { Link } from 'react-router-dom';
import { ArrowUpRight, Play } from 'lucide-react';

export default function ExperimentCard({ experiment, workspaceSurface = false }) {
  const surfaceClass = workspaceSurface
    ? 'workspace-tile workspace-tile-interactive'
    : 'bg-card border border-card-border hover:border-accent/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]';

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${surfaceClass}`}
    >
      <Link to={`/ai-playground/${experiment.slug}`} className="block relative aspect-video overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent z-10 transition-opacity duration-300 ${workspaceSurface ? 'opacity-50 group-hover:opacity-35' : 'opacity-60 group-hover:opacity-40'}`}
        />

        <img
          src={experiment.image}
          alt={experiment.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {!workspaceSurface && (
          <>
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500 z-10" />
            <div className="absolute inset-0 backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-500 z-10" />
          </>
        )}

        {workspaceSurface && (
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300 z-10" />
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <div
            className={`font-bold flex items-center gap-2 border shadow-lg rounded-full px-6 py-3 ${
              workspaceSurface
                ? 'bg-card/90 text-text-primary border-card-border'
                : 'bg-bg-primary/80 backdrop-blur-sm text-text-primary border-white/10'
            }`}
          >
            <Play size={16} className="fill-current" /> Explore Lab
          </div>
        </div>
      </Link>

      <div className="p-8 relative z-20">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              {experiment.platform}
            </span>
            <Link to={`/ai-playground/${experiment.slug}`}>
              <h3 className="text-2xl font-black text-text-primary tracking-tight group-hover:text-accent transition-colors">
                {experiment.title}
              </h3>
            </Link>
          </div>
          {experiment.liveUrl && (
            <a
              href={experiment.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all ${
                workspaceSurface
                  ? 'bg-bg-alt border border-card-border text-text-secondary hover:border-accent/40 hover:text-text-primary'
                  : 'bg-bg-secondary text-text-secondary hover:bg-accent hover:text-white transform hover:rotate-12'
              }`}
              aria-label={`View live version of ${experiment.title}`}
            >
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {experiment.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experiment.focus.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className={`text-xs font-medium px-3 py-1 rounded-full border text-text-secondary ${
                workspaceSurface
                  ? 'bg-bg-alt border-card-border'
                  : 'bg-bg-secondary border-card-border'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
