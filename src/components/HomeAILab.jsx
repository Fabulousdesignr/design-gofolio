import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ExperimentCard from './ExperimentCard';
import WorkspaceModule from './WorkspaceModule';
import { experiments } from '../data/experiments';

const PREVIEW_COUNT = 2;

export default function HomeAILab() {
  const previewItems = experiments.slice(0, PREVIEW_COUNT);

  return (
    <WorkspaceModule
      id="ai-lab"
      index={2}
      variant="ai"
      title="AI Lab"
      subtitle="I built these fast AI-assisted experiments to explore interfaces, tools, and concepts outside enterprise constraints."
      headerAction={
        <Link to="/labs" className="workspace-link shrink-0">
          View all <ArrowUpRight size={16} className="text-accent" />
        </Link>
      }
    >
      <div className="workspace-lab-grid">
        {previewItems.map((experiment) => (
          <ExperimentCard key={experiment.id} experiment={experiment} workspaceSurface />
        ))}
      </div>
    </WorkspaceModule>
  );
}
