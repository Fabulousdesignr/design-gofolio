import { ArrowUpRight } from 'lucide-react';

const MODULE_SHORTCUTS = [
  { href: '#work', label: 'Work' },
  { href: '#ai-lab', label: 'AI Products' },
  { href: '#launch-pages', label: 'Pages' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Hero() {
  return (
    <header className="workspace-deck scroll-reveal mb-24 lg:mb-32">
      <div className="workspace-deck-panel">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          <div>
            <p className="workspace-deck-kicker">
              <strong>Workspace</strong> / Godwin O.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="workspace-status">
                <span className="workspace-status-dot" aria-hidden="true" />
                Available for new projects · GMT+1
              </div>
              <a
                href="https://gofolio.site"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all hover:scale-105"
              >
                Switch to PM Portfolio <ArrowUpRight size={13} />
              </a>
            </div>

            <h1 className="workspace-deck-title">
              I design and build products people actually use
            </h1>
            <p className="workspace-deck-role">Product Designer · AI-assisted builder</p>
            <p className="workspace-deck-lead">
              This is my portfolio. It shows the work I've done — the case studies, the AI products I've built, and the things I've shipped. Everything here is meant to show how I think and what I can do.
            </p>

            <nav className="workspace-module-tabs" aria-label="Workspace modules">
              {MODULE_SHORTCUTS.map((tab) => (
                <a key={tab.href} href={tab.href} className="workspace-module-tab">
                  {tab.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-wrap gap-3 mt-8">
              <a href="/#work" className="workspace-btn workspace-btn--primary">
                See my work
              </a>
            </div>
          </div>

          <div className="workspace-profile-module">
            <div className="workspace-profile-chrome">
              <div className="workspace-profile-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span>Profile</span>
            </div>
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <img
                src="/images/My Image.png"
                alt="Godwin O."
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
