import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useWorkspaceNav } from '../hooks/useWorkspaceNav';

const HOME_MODULES = [
  { id: 'work', label: 'Work', href: '/#work' },
  { id: 'ai-lab', label: 'AI Products', href: '/#ai-lab' },
  { id: 'launch-pages', label: 'Pages', href: '/#launch-pages' },
  { id: 'about', label: 'About', href: '/#about' },
];

export default function Navbar({ isCaseStudy = false }) {
  const activeModule = useWorkspaceNav(HOME_MODULES.map((m) => m.id));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isCaseStudy ? 'bg-bg-primary/90 border-b border-card-border' : 'workspace-nav'
      }`}
    >
      <div className="container-wide flex justify-between items-center py-3 md:py-3.5">
        <div className="flex items-center gap-6 md:gap-8">
          {isCaseStudy ? (
            <Link
              to="/"
              className="font-semibold text-text-secondary opacity-80 hover:opacity-100 hover:text-text-primary transition-all flex items-center gap-2 text-sm"
            >
              &larr; Back
            </Link>
          ) : (
            <Link to="/" className="workspace-nav-mark">
              <span className="text-xl font-extrabold tracking-tighter text-text-primary">G.O</span>
              <span className="workspace-nav-sub">Design workspace</span>
            </Link>
          )}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          {!isCaseStudy && (
            <div className="workspace-nav-tabs" role="tablist" aria-label="Modules">
              {HOME_MODULES.map((mod) => (
                <a
                  key={mod.id}
                  href={mod.href}
                  role="tab"
                  aria-selected={activeModule === mod.id}
                  className={`workspace-nav-tab ${activeModule === mod.id ? 'is-active' : ''}`}
                >
                  {mod.label}
                </a>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://gofolio.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all"
            >
              PM Portfolio <ArrowUpRight size={13} />
            </a>

            {!isCaseStudy && (
              <a href="/#contact" className="workspace-btn workspace-btn--primary hidden sm:inline-flex">
                Contact
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
