import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProductFrame from './ProductFrame';

export default function ProjectCard({ project, workspaceSurface = false, index }) {
  const { title, category, description, image, fallback, featured, link } = project;
  
  const cardRef = useRef(null);

  // High-performance Parallax Hook
  useEffect(() => {
    if (window.innerWidth < 1024) return; // Disable on mobile to preserve touch usability

    // Vary the speed slightly based on the index to create depth/offset between cards
    const speed = 0.03 + ((index || 1) % 3) * 0.02; // Speeds: ~0.03, 0.05, 0.07

    let rafId;

    const updateParallax = () => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const cardCenter = rect.top + rect.height / 2;
      
      // Calculate how far the card's center is from the viewport center
      const distance = cardCenter - viewportCenter;
      const y = distance * speed;
      
      // Apply direct DOM mutation to avoid React state re-renders on scroll
      cardRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial position
    updateParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [index]);

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
        ref={cardRef}
        className={`workspace-work-row group scroll-reveal ${featured ? 'workspace-work-row--focus' : ''}`}
        style={{ willChange: 'transform' }}
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
      ref={cardRef}
      style={{ willChange: 'transform' }}
      className={`project-card group card-hover-system overflow-hidden scroll-reveal fade-up ${featured ? 'lg:col-span-2 flex flex-col lg:flex-row' : 'flex flex-col'}`}
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

      <div className={`card-padding flex flex-col justify-center ${featured ? 'lg:w-[40%]' : 'flex-grow'}`}>
        <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">{category}</span>
        <h3 className="text-3xl sm:text-4xl font-black text-text-primary mb-6 group-hover:text-accent transition-colors uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-text-secondary text-base sm:text-lg mb-8 leading-relaxed prose-readable">{description}</p>
        <div className="mt-auto">
          {link.startsWith('/') ? (
            <Link
              to={link}
              className="workspace-btn-primary w-fit"
            >
              View Case Study <ArrowUpRight size={18} />
            </Link>
          ) : (
            <a
              href={link}
              className="workspace-btn-primary w-fit"
            >
              View Case Study <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
