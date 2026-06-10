import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, ArrowLeft, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const navLinks = [
  { id: 'work', label: 'Work', href: '/#work' },
  { id: 'ai-lab', label: 'AI Lab', href: '/#ai-lab' },
  { id: 'about', label: 'About', href: '/about' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
            <div className="hidden md:flex workspace-nav-tabs" role="tablist" aria-label="Modules">
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

            {/* Standard Contact Button */}
            <div className="hidden md:flex">
              <a href="/#contact" className="workspace-btn-primary">
                Contact
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex text-text-primary hover:text-accent transition-colors p-2 items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-text-primary hover:text-accent transition-colors flex items-center justify-center"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Drawer */}
          <aside className="absolute top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-bg-primary border-r border-card-border shadow-2xl flex flex-col animate-slide-in-left">
            <div className="p-4 flex justify-between items-center border-b border-card-border">
              <span className="text-xl font-extrabold tracking-tighter text-text-primary">G.O</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2 px-3">Workspace</span>
                {navLinks.map(mod => (
                  <a
                    key={mod.id}
                    href={mod.href}
                    className={`block px-3 py-3 rounded-lg text-sm font-semibold transition-colors ${
                      activeModule === mod.id 
                        ? 'bg-text-primary/5 text-text-primary border-l-[3px] border-accent pl-2.5' 
                        : 'text-text-secondary hover:bg-text-primary/5 hover:text-text-primary border-l-[3px] border-transparent pl-2.5'
                    }`}
                  >
                    {mod.label}
                  </a>
                ))}
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2 px-3">Resources</span>
                <a href="#" className="block px-3 py-3 rounded-lg text-sm font-semibold text-text-secondary hover:bg-text-primary/5 hover:text-text-primary border-l-[3px] border-transparent pl-2.5">
                  Resume
                </a>
                <a href="/#contact" className="block px-3 py-3 rounded-lg text-sm font-semibold text-text-secondary hover:bg-text-primary/5 hover:text-text-primary border-l-[3px] border-transparent pl-2.5">
                  Contact
                </a>
              </div>
            </div>

            <div className="p-4 border-t border-card-border mt-auto">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold text-text-secondary hover:bg-text-primary/5 hover:text-text-primary transition-colors"
              >
                Toggle Theme
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </aside>
        </div>
      )}
    </nav>
  );
}
