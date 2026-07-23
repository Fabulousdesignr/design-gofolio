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
      subtitle="Product Designer creating AI tools, SaaS platforms, Shopify stores, and digital products."
      layout="compact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <p className="text-base md:text-lg text-text-secondary font-medium leading-relaxed mb-4 max-w-xl">
            I'm a Product Designer with nearly a decade of experience designing AI products, SaaS platforms, Shopify storefronts, and conversion-focused digital experiences.
          </p>
          <p className="text-base md:text-lg text-text-secondary font-medium leading-relaxed mb-6 max-w-xl">
            I solve complex problems through strategy, clean UX, and close engineering collaboration — turning raw ideas into products people actually use.
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
            <span>Profile</span>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <img
              src="/images/My Image.png"
              alt="Godwin O."
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </WorkspaceModule>
  );
}
