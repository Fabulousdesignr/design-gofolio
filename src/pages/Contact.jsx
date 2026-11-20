import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/site/BrandIcons';
import Navbar from '../components/v2/Navbar';
import Footer from '../components/v2/Footer';
import PageHeader from '../components/site/PageHeader';
import StatusPill from '../components/site/StatusPill';
import { site } from '../data/site';
import { useContactModal } from '../context/ContactModalContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const CHANNELS = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    note: 'The most direct route.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/godwinokechukwu',
    href: site.links.linkedin,
    icon: LinkedinIcon,
    note: 'Roles, collaborations and messages.',
  },
  {
    label: 'GitHub',
    value: 'github.com/Fabulousdesignr',
    href: site.links.github,
    icon: GithubIcon,
    note: 'Public code and repositories.',
  },
  {
    label: 'WhatsApp',
    value: 'Start a chat',
    href: site.links.whatsapp,
    icon: MessageCircle,
    note: 'For quick, informal conversations.',
  },
];

const CONTEXT = [
  'The problem you are trying to solve',
  'Who the product is for',
  'What stage it is at',
  'The scope you have in mind',
  'Any timeline or constraints',
  'Links to the current product or designs',
];

export default function Contact() {
  useDocumentMeta(
    'Contact',
    'Contact Godwin Okechukwu about AI product development, product engineering roles, design engineering and freelance product builds.'
  );

  const { openModal } = useContactModal();

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main id="main-content">
        <PageHeader
          eyebrow="Contact"
          title="Have an idea worth building? Let's make it real."
          intro="I am open to AI product development, product engineering and design engineering roles, freelance product builds, and collaboration with early-stage teams."
          aside={
            <div className="flex flex-col gap-3">
              <StatusPill>Open to opportunities</StatusPill>
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-text-tertiary">
                {site.location}
                <br />
                Remote and international
              </p>
            </div>
          }
        />

        <section className="site-section border-b border-line">
          <div className="site-shell">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="eyebrow">Start here</p>
                <h2 className="display-subsection mt-5 max-w-2xl text-text-primary">
                  Tell me about the problem, not just the deliverable.
                </h2>
                <div className="prose-site mt-6">
                  <p>
                    The best projects start with a clear problem and a real constraint. I can
                    help with product thinking, interface design, AI integration and the build
                    itself, so a short description of the goal is more useful than a long list
                    of screens.
                  </p>
                  <p>
                    If you are hiring, include the role, the team and the kind of product work
                    involved. If you are building something early, include the stage and what
                    you are trying to learn.
                  </p>
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex items-center justify-center gap-2 bg-paper px-6 py-3.5 text-sm font-semibold text-paper-ink transition-colors hover:bg-signal"
                  >
                    Send a project brief
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </button>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center justify-center gap-2 border border-line-strong px-6 py-3.5 text-sm font-medium text-text-primary transition-colors hover:border-signal-border hover:text-signal"
                  >
                    <Mail size={15} aria-hidden="true" />
                    Email directly
                  </a>
                </div>

                <div className="mt-12 border-t border-line pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-text-tertiary">
                    Elsewhere
                  </p>
                  <div className="mt-5 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
                    {CHANNELS.map(({ label, value, href, icon: Icon, note }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group bg-bg-primary p-5 transition-colors hover:bg-bg-panel"
                      >
                        <div className="flex items-center justify-between">
                          <Icon size={17} className="text-text-secondary" aria-hidden="true" />
                          <ArrowUpRight
                            size={13}
                            className="text-text-tertiary transition-colors group-hover:text-signal"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="mt-5 text-sm font-medium text-text-primary">{label}</p>
                        <p className="mt-1 break-all text-xs text-text-secondary">{value}</p>
                        <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.08em] text-text-tertiary">
                          {note}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="lg:col-span-5">
                <div className="border border-line bg-bg-panel p-6 md:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-text-tertiary">
                    Useful context
                  </p>
                  <ul className="mt-6 space-y-4">
                    {CONTEXT.map((item, index) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 font-mono text-[10px] text-signal">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm leading-relaxed text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 border-t border-line pt-6">
                    <p className="text-sm font-medium text-text-primary">
                      Prefer a document?
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      Send a short brief or a link to the project. I will read the context before
                      replying.
                    </p>
                    <a
                      href={site.links.cv}
                      download
                      className="mt-4 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      Download my CV
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="mt-6 border border-line p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-text-tertiary">
                    Good fits
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      'AI product development',
                      'Product engineering',
                      'Design engineering',
                      'Frontend engineering',
                      'Freelance builds',
                    ].map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="paper-section">
          <div className="site-shell py-16 md:py-20">
            <p className="eyebrow">A final note</p>
            <p className="display-subsection mt-5 max-w-3xl text-paper-ink">
              I am most useful when the problem is still being figured out and the product
              needs someone who can move between the interface and the implementation.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-paper-ink underline decoration-paper-ink/30 underline-offset-4 transition-colors hover:decoration-paper-ink"
            >
              {site.email}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
