import { ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../../data/site';
import { useContactModal } from '../../context/ContactModalContext';

const OPEN_TO = [
  'AI product development',
  'Product engineering roles',
  'Design engineering roles',
  'Freelance product builds',
  'Early-stage collaborations',
];

export default function ContactSection() {
  const { openModal } = useContactModal();

  return (
    <section className="paper-section" id="contact">
      <div className="site-shell py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="eyebrow">Next</p>
            <h2 className="display-section mt-5 max-w-3xl text-paper-ink">
              Have an idea worth building? Let&apos;s make it real.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper-ink/65">
              I am open to AI product development, product engineering and design engineering
              roles, freelance product builds, and collaboration with early-stage teams.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 bg-paper-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-signal hover:text-paper-ink"
              >
                Start a conversation
                <ArrowUpRight size={15} aria-hidden="true" />
              </button>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-2 border border-paper-ink/25 px-6 py-3.5 text-sm font-medium text-paper-ink transition-colors hover:border-paper-ink"
              >
                <Mail size={15} aria-hidden="true" />
                {site.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="border-t border-paper-ink/20 pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper-ink/55">
                Open to
              </p>
              <ul className="mt-5 space-y-3">
                {OPEN_TO.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between gap-4 border-b border-paper-ink/10 pb-3 text-sm text-paper-ink/80"
                  >
                    <span>{item}</span>
                    <span className="h-1 w-1 rounded-full bg-paper-ink/40" aria-hidden="true" />
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between gap-4 text-xs text-paper-ink/55">
                <span>{site.location}</span>
                <Link to="/contact" className="inline-flex items-center gap-1 hover:text-paper-ink">
                  Contact page
                  <ArrowUpRight size={12} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
