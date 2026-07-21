import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProductFrame from './ProductFrame';

export default function ProjectCard({ project, workspaceSurface = false, index }) {
  const { title, category, description, image, fallback, featured, link } = project;

  if (workspaceSurface) {
    const cta =
      link && link.startsWith('/') ? (
        <Link to={link} className="workspace-open-link">
          Open case study <ArrowUpRight size={16} />
        </Link>
      ) : link ? (
        <a href={link} className="workspace-open-link">
          Open case study <ArrowUpRight size={16} />
        </a>
      ) : null;

    return (
      <article
        className={`workspace-work-row group scroll-reveal ${featured ? 'workspace-work-row--focus' : ''}`}
      >
        <div>
          {index != null && (
            <div className="workspace-work-index">{String(index).padStart(2, '0')}</div>
          )}
          {featured && <span className="workspace-work-chip">Active workspace</span>}
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{category}</p>
          <h3 className="workspace-work-title group-hover:text-accent transition-colors">{title}</h3>
          <p className="workspace-work-desc">{description}</p>
          {cta}
        </div>
        <ProductFrame
          src={image}
          alt={title}
          label={title}
          focused={featured}
          fallback={fallback}
          className="w-full"
        />
      </article>
    );
  }

  return (
    <div
      className={`project-card group bg-card border border-card-border rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 scroll-reveal fade-up ${featured ? 'lg:col-span-2 flex flex-col lg:flex-row' : 'flex flex-col'}`}
    >
      <div
        className={`overflow-hidden bg-bg-alt relative ${featured ? 'lg:w-[60%] aspect-video lg:aspect-auto' : 'w-full aspect-[16/10]'}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className={`p-8 sm:p-10 flex flex-col justify-center ${featured ? 'lg:w-[40%]' : 'flex-grow'}`}>
        <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">{category}</span>
        <h3 className="text-3xl sm:text-4xl font-black text-text-primary mb-6 group-hover:text-accent transition-colors uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-text-secondary text-base sm:text-lg mb-8 leading-relaxed prose-readable">{description}</p>
        <div className="mt-auto">
          {link.startsWith('/') ? (
            <Link
              to={link}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg shadow-accent/20 w-fit"
            >
              View Case Study <ArrowUpRight size={18} />
            </Link>
          ) : (
            <a
              href={link}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg shadow-accent/20 w-fit"
            >
              View Case Study <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
