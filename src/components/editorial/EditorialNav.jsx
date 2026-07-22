import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useContactModal } from '../../context/ContactModalContext';
import ThemeToggle from '../ThemeToggle';

export default function EditorialNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useContactModal();

  const links = [
    { label: 'Work', path: '/' },
    { label: 'AI Lab', path: '/labs' },
    { label: 'About', path: '/about' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F5F5F3]/80 backdrop-blur-md border-b border-[#E6E6E6]">
        <div className="edit-container py-5 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl tracking-tight text-[#111111]">
            G.O.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            {links.map(link => (
              <Link 
                key={link.path} 
                to={link.path}
                className={location.pathname === link.path ? 'text-[#111111]' : 'text-[#5F5F5F] hover:text-[#111111] transition-colors'}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://gofolio.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all"
            >
              PM Portfolio <ArrowUpRight size={13} />
            </a>
            <div className="hidden md:flex items-center gap-8 text-[14px]">
              <ThemeToggle />
              <button onClick={openModal} className="text-text-primary hover:opacity-70 transition-opacity font-bold">
                Message Me
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button & Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(true)}
              className="text-text-primary p-2 -mr-2"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div 
            className="w-4/5 max-w-sm h-full bg-[#FFFFFF] shadow-2xl p-8 flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-bold text-xl text-[#111111]">Menu</span>
              <button onClick={() => setIsOpen(false)} className="text-[#111111] p-2 -mr-2">
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 text-xl font-bold">
              {links.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={location.pathname === link.path ? 'text-[#111111]' : 'text-[#5F5F5F]'}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://gofolio.site"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 text-accent font-semibold"
              >
                PM Portfolio <ArrowUpRight size={18} />
              </a>
              <button 
                onClick={() => {
                  openModal();
                  setIsOpen(false);
                }} 
                className="text-left text-[#111111] mt-8 pt-8 border-t border-[#E6E6E6]"
              >
                Message Me
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
