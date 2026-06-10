import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, ArrowLeft } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const navLinks = [
  { id: 'work', label: 'Work', href: '/#work' },
  { id: 'ai-lab', label: 'AI Lab', href: '/#ai-lab' },
  { id: 'about', label: 'About', href: '/about' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  // Determine active module based on strict routing logic
  let activeModule = 'work';
  if (pathname === '/about') {
    activeModule = 'about';
  } else if (pathname.startsWith('/labs') || pathname.startsWith('/ai-playground')) {
    activeModule = 'ai-lab';
  } else if (pathname === '/' || pathname.startsWith('/case-study')) {
    activeModule = 'work';
  }

  // Determine if we are in the deep-dive AI Lab context
  const isLabContext = pathname.startsWith('/labs') || pathname.startsWith('/ai-playground');
  const isExperimentDetail = pathname.startsWith('/ai-playground');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 workspace-nav">
      <div className="container-custom flex justify-between items-center py-3 md:py-3.5">
        
        {/* LEFT COMPONENT: Logo or Contextual Title */}
        <div className="flex items-center gap-6 md:gap-8">
          {isLabContext ? (
            <div className="workspace-nav-mark">
              <span className="text-xl font-extrabold tracking-tighter text-text-primary">G.O</span>
              <span className="workspace-nav-sub">{isExperimentDetail ? 'AI Playground' : 'AI Playground & Labs'}</span>
            </div>
          ) : (
            <Link to="/" className="workspace-nav-mark">
              <span className="text-xl font-extrabold tracking-tighter text-text-primary">G.O</span>
              <span className="workspace-nav-sub">Design workspace</span>
            </Link>
          )}
        </div>

        {/* CENTER COMPONENT: Primary Tabs (Hidden in Lab Context) */}
        <div className="flex items-center gap-4 md:gap-6">
          {!isLabContext && (
            <div className="workspace-nav-tabs" role="tablist" aria-label="Modules">
              {navLinks.map((mod) => (
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

          {/* RIGHT COMPONENT: Contextual Back Buttons & Controls */}
          <div className="flex items-center gap-3 md:gap-4">
            
            {/* Lab Context Back Buttons */}
            {isLabContext && (
              <div className="flex items-center gap-2 md:gap-4 mr-2 md:mr-4">
                {isExperimentDetail ? (
                  <Link 
                    to="/labs" 
                    className="text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5"
                  >
                    <ArrowLeft size={14} /> Back to AI Lab
                  </Link>
                ) : (
                  <Link 
                    to="/" 
                    className="text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5"
                  >
                    <ArrowLeft size={14} className="sm:hidden" /> 
                    <span className="hidden sm:inline">&larr; Back to Workspace</span>
                    <span className="sm:hidden">Workspace</span>
                  </Link>
                )}
              </div>
            )}

            {/* Standard Contact Button (Hidden in Lab Context for focus, or keep visible? User said "Do not remove the Contact button.") */}
            <a href="/#contact" className="workspace-btn workspace-btn--primary hidden sm:inline-flex">
              Contact
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-text-primary hover:text-accent transition-colors p-2 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
