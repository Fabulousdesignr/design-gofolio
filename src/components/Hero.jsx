import { ArrowUpRight } from 'lucide-react';

const SKILL_TAGS = [
  'Product Design',
  'UX / UI',
  'Shopify',
  'Ecommerce',
  'AI-Assisted Workflows',
  'Design Systems',
  'CRO',
  'Product Strategy',
];

const MODULE_SHORTCUTS = [
  { href: '#work', label: 'Featured Work' },
  { href: '#shopify', label: 'Shopify & Ecommerce' },
  { href: '#ai-lab', label: 'AI Products' },
  { href: '#about', label: 'About' },
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

            <div className="flex flex-wrap items-center gap-3 mb-6">
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
              Product Designer building AI products, Shopify stores, SaaS platforms, and digital experiences people actually use.
            </h1>
            <p className="workspace-deck-role">Product Designer · UX/UI · Ecommerce · AI-Assisted Builder</p>
            <p className="workspace-deck-lead">
              I design across the full digital product spectrum — from AI-powered SaaS tools and fintech dashboards to Shopify storefronts and conversion-focused landing pages. I pair deep user research with product strategy and modern design systems to create experiences that look great and actually drive results.
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {SKILL_TAGS.map((tag) => (
                <span key={tag} className="hero-skill-tag">{tag}</span>
              ))}
            </div>

            <nav className="workspace-module-tabs mt-6" aria-label="Workspace modules">
              {MODULE_SHORTCUTS.map((tab) => (
                <a key={tab.href} href={tab.href} className="workspace-module-tab">
                  {tab.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#work" className="workspace-btn workspace-btn--primary">
                See my work
              </a>
              <a href="#shopify" className="workspace-btn">
                Shopify work
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
                alt="Godwin O. — Product Designer"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
