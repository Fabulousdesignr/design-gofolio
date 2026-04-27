import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  const { title, category, description, image, featured, link } = project;

  return (
    <div className={`project-card group bg-card border border-card-border rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 scroll-reveal fade-up ${featured ? 'lg:col-span-2 flex flex-col lg:flex-row' : 'flex flex-col'}`}>
      <div className={`overflow-hidden bg-bg-alt relative ${featured ? 'lg:w-[60%] aspect-video lg:aspect-auto' : 'w-full aspect-[16/10]'}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className={`p-8 sm:p-10 flex flex-col justify-center ${featured ? 'lg:w-[40%]' : 'flex-grow'}`}>
        <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
          {category}
        </span>
        <h3 className="text-3xl sm:text-4xl font-black text-text-primary mb-6 group-hover:text-accent transition-colors uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-text-secondary text-base sm:text-lg mb-8 leading-relaxed prose-readable">
          {description}
        </p>

        <div className="mt-auto">
          {link.startsWith('/') ? (
            <Link
              to={link}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-accent/20 w-fit"
            >
              View Case Study <ArrowUpRight size={18} />
            </Link>
          ) : (
            <a
              href={link}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-accent/20 w-fit"
            >
              View Case Study <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
