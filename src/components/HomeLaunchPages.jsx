import HomePillarCard from './HomePillarCard';
import WorkspaceModule from './WorkspaceModule';
import { launchPages } from '../data/launchPages';

export default function HomeLaunchPages() {
  return (
    <WorkspaceModule
      id="launch-pages"
      index={3}
      variant="launch"
      title="Launch pages"
      subtitle="I also designed launch and marketing pages — the kind that help a product make a strong first impression and get people to take action."
    >
      <div className="workspace-launch-strip">
        {launchPages.map((item) => (
          <HomePillarCard key={item.id} item={item} workspaceSurface layout="horizontal" />
        ))}
      </div>
    </WorkspaceModule>
  );
}
