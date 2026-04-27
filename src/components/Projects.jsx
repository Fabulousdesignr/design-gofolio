import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="work" className="section-padding py-24">
      <div className="container-custom">
        <div className="flex flex-col items-start mb-16 scroll-reveal">
          <span className="text-sm font-bold uppercase tracking-widest text-accent mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary uppercase">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
