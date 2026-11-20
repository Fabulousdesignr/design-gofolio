import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { site } from '../../data/site';
import { useContactModal } from '../../context/ContactModalContext';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative py-2 text-[13px] font-medium transition-colors ${
      isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
    }`;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:bg-paper focus:px-4 focus:py-2 focus:text-paper-ink"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || open ? 'border-line bg-bg-primary' : 'border-transparent bg-bg-primary'
        }`}
      >
        <div className="site-shell flex h-16 items-center justify-between gap-6 md:h-[72px]">
          <Link to="/" className="group flex items-center gap-3" aria-label="Godwin Okechukwu, home">
            <span className="flex h-8 w-8 items-center justify-center border border-line-strong font-mono text-[10px] font-medium tracking-[0.08em] text-text-primary transition-colors group-hover:border-signal-border group-hover:text-signal">
              GO
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-[13px] font-semibold tracking-[-0.01em] text-text-primary">
                {site.name}
              </span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.12em] text-text-tertiary">
                {site.role}
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {NAV.slice(0, 4).map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-line-strong px-4 py-2 text-[12px] font-medium text-text-primary transition-colors hover:border-signal-border hover:text-signal"
            >
              Contact
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-text-primary md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-line bg-bg-primary md:hidden"
        >
          <nav aria-label="Mobile" className="site-shell flex min-h-full flex-col py-8">
            <div className="flex flex-col">
              {NAV.map((item, index) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-line py-5 ${
                      isActive ? 'text-text-primary' : 'text-text-secondary'
                    }`
                  }
                >
                  <span className="text-2xl font-semibold tracking-[-0.035em]">{item.label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </NavLink>
              ))}
            </div>

            <div className="mt-auto pt-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-tertiary">
                Start a conversation
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 block break-all text-lg font-medium text-text-primary"
              >
                {site.email}
              </a>

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openModal();
                }}
                className="mt-6 flex w-full items-center justify-center gap-2 bg-paper px-5 py-3.5 text-sm font-semibold text-paper-ink"
              >
                Tell me about the project
                <ArrowUpRight size={15} aria-hidden="true" />
              </button>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-secondary">
                <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary">
                  GitHub
                </a>
                <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary">
                  LinkedIn
                </a>
                <a href={site.links.cv} download className="hover:text-text-primary">
                  Download CV
                </a>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
