import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import WorkspaceModule from './WorkspaceModule';

export default function AboutPreview() {
  return (
    <WorkspaceModule
      id="about"
      index={5}
      variant="about"
      title="About"
      subtitle="I am a product designer with a visual foundation, building clear, useful digital experiences."
      layout="compact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <p className="text-base md:text-lg text-text-secondary font-medium leading-relaxed mb-5 max-w-xl">
            I started in graphic design, where I learned layout, hierarchy, and visual clarity. That
            foundation shapes how I design digital products today.
          </p>
          <p className="text-base md:text-lg text-text-secondary font-medium leading-relaxed mb-8 max-w-xl">
            I focus on fintech, edtech, and ecommerce, and I am increasingly working on AI-assisted product
            interfaces. I believe in designing software that respects the user's time and attention.
          </p>
          <Link to="/about" className="workspace-btn workspace-btn--primary inline-flex items-center gap-2">
            Read full story <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="workspace-profile-module max-w-sm mx-auto lg:ml-auto w-full">
          <div className="workspace-profile-chrome">
            <div className="workspace-profile-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span>Operator</span>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <img
              src="/images/My Image.jpeg"
              alt="Godwin O."
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </WorkspaceModule>
  );
}
