import ProjectCard from './ProjectCard';
import WorkspaceModule from './WorkspaceModule';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <WorkspaceModule
      id="work"
      index={1}
      title="Featured work"
      subtitle="Here are the main projects I've worked on. For each one, I'll walk you through the problem, what I did, and how it turned out."
      layout="wide"
    >
      <div className="workspace-work-stack">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            workspaceSurface
            index={idx + 1}
          />
        ))}
      </div>
    </WorkspaceModule>
  );
}
