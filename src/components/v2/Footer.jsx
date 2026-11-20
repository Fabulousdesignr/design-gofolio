import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { site, socialLinks } from '../../data/site';

const SITEMAP = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-primary">
      <div className="site-shell py-14 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center border border-line-strong font-mono text-[10px] text-text-primary">
                GO
              </span>
              <span className="text-sm font-semibold text-text-primary">{site.name}</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-secondary">
              {site.role}. {site.supporting}.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-text-primary transition-colors hover:text-signal"
            >
              {site.email}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-tertiary">
              Pages
            </p>
            <ul className="mt-5 space-y-3">
              {SITEMAP.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-tertiary">
              Elsewhere
            </p>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-tertiary">
              Current
            </p>
            <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-text-secondary">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
              Open to AI product and product engineering roles.
            </p>
            <a
              href={site.links.cv}
              download
              className="mt-3 inline-flex text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-text-tertiary sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em]">
            {site.location} · Built with React
          </p>
        </div>
      </div>
    </footer>
  );
}
