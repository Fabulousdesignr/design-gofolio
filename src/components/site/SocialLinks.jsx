import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { site } from '../../data/site';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const LINKS = [
  { label: 'GitHub', href: site.links.github, icon: GithubIcon, external: true },
  { label: 'LinkedIn', href: site.links.linkedin, icon: LinkedinIcon, external: true },
  { label: 'Email', href: `mailto:${site.email}`, icon: Mail, external: false },
  { label: 'Download CV', href: site.links.cv, icon: Download, external: false },
];

export default function SocialLinks({ tone = 'dark', className = '', showLabels = true }) {
  const base =
    tone === 'light'
      ? 'text-paper-ink/65 hover:text-paper-ink'
      : 'text-text-secondary hover:text-text-primary';

  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-3 ${className}`}>
      {LINKS.map(({ label, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...(label === 'Download CV' ? { download: true } : {})}
          className={`inline-flex items-center gap-2 text-sm transition-colors duration-200 ${base}`}
        >
          <Icon size={15} aria-hidden="true" />
          {showLabels ? <span>{label}</span> : <span className="sr-only">{label}</span>}
          {external ? <ArrowUpRight size={12} aria-hidden="true" /> : null}
        </a>
      ))}
    </div>
  );
}
