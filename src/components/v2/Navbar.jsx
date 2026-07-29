import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useContactModal } from '../../context/ContactModalContext';

export default function Navbar({ isCaseStudy = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useContactModal();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: location.pathname === '/' ? '#work' : '/work' },
    { label: 'Services', href: location.pathname === '/' ? '#services' : '/#services' },
    { label: 'About', href: location.pathname === '/' ? '#about' : '/about' },
    { label: 'Labs', href: '/labs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isCaseStudy
          ? 'bg-[#09090b]/80 backdrop-blur-md border-b border-white/[0.08] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white font-extrabold text-xs tracking-tight group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all">
            GO
          </span>
          <span className="text-sm font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors">
            Godwin O.
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs font-medium text-white/70 hover:text-white px-3 py-1 rounded-full hover:bg-white/[0.06] transition-all"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-white/70 hover:text-white px-3 py-1 rounded-full hover:bg-white/[0.06] transition-all"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://gofolio.site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all"
          >
            PM Portfolio <ArrowUpRight size={13} />
          </a>

          <button
            onClick={openModal}
            className="px-4 py-1.5 text-xs font-medium text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-all shadow-sm cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/70 hover:text-white p-1"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[57px] bg-[#09090b] border-b border-white/[0.1] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-white py-1"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-white py-1"
              >
                {link.label}
              </a>
            )
          ))}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
            <a
              href="https://gofolio.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
            >
              Switch to PM Portfolio <ArrowUpRight size={14} />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="w-full py-2.5 text-xs font-semibold text-zinc-950 bg-white rounded-full text-center"
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
