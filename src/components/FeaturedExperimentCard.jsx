import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export default function FeaturedExperimentCard({ experiment }) {
  return (
    <Link 
      to={`/ai-playground/${experiment.slug}`}
      className="group block relative rounded-3xl overflow-hidden bg-bg-secondary border border-card-border hover:border-accent/40 transition-all duration-700 hover:shadow-[0_0_50px_rgba(79,70,229,0.15)] cursor-pointer"
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* Left: Image Showcase */}
        <div className="relative w-full md:w-[60%] aspect-video md:aspect-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
          
          <img 
            src={experiment.heroImage} 
            alt={experiment.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-700 z-10" />

          {/* Centered Play/Explore Badge on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <div className="bg-bg-primary/90 backdrop-blur-md text-text-primary border border-white/10 shadow-2xl rounded-full px-7 py-3.5 font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <Play size={16} className="fill-current text-accent" /> Explore Product
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-[40%] p-8 lg:p-14 flex flex-col justify-center relative z-20 bg-bg-primary md:bg-transparent">
          <div className="mb-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-[0.65rem] uppercase tracking-widest mb-6 border border-accent/20">
              Featured Build
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary tracking-tight mb-5 group-hover:text-accent transition-colors duration-500">
              {experiment.title}
            </h3>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-10 max-w-sm">
              {experiment.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {experiment.focus.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border border-card-border bg-bg-alt text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
