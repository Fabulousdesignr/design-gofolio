import ProjectCard from './ProjectCard';
import WorkspaceModule from './WorkspaceModule';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <WorkspaceModule
      id="work"
      index={1}
      title="Featured work"
      subtitle="I led these flagship case studies, focusing on product thinking, interface craft, and shipped outcomes."
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
