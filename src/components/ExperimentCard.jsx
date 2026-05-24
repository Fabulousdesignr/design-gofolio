import { Link } from 'react-router-dom';
import { ArrowUpRight, Play } from 'lucide-react';

export default function ExperimentCard({ experiment }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-card-bg border border-card-border hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
      {/* Media Container */}
      <Link to={`/ai-playground/${experiment.slug}`} className="block relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        <img 
          src={experiment.image} 
          alt={experiment.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Cinematic overlay effects */}
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500 z-10" />
        <div className="absolute inset-0 backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-500 z-10" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 transform scale-90 group-hover:scale-100">
          <div className="bg-bg-primary/80 backdrop-blur-sm text-text-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 border border-white/10 shadow-xl">
            <Play size={16} className="fill-current" /> Explore Lab
          </div>
        </div>
      </Link>

      {/* Content Container */}
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
              className="p-2 rounded-full bg-bg-secondary text-text-secondary hover:bg-accent hover:text-white transition-all transform hover:rotate-12"
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
              className="text-xs font-medium px-3 py-1 rounded-full bg-bg-secondary border border-card-border text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
