import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../../data/site';
import { useContactModal } from '../../context/ContactModalContext';
import MediaFrame from '../site/MediaFrame';
import SocialLinks from '../site/SocialLinks';
import StatusPill from '../site/StatusPill';

const POSITIONING = [
  'AI applications',
  'LLM integrations',
  'Full-stack builds',
  'Product design',
];

export default function Hero() {
  const { openModal } = useContactModal();

  return (
    <section className="relative overflow-hidden border-b border-line pb-14 pt-32 md:pb-20 md:pt-40">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 lg:pr-8">
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill>Open to opportunities</StatusPill>
              <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-text-tertiary">
                {site.location}
              </span>
            </div>

            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-text-secondary">
              AI Product Engineer
            </p>

            <h1 className="display-hero mt-5 text-text-primary">
              Designing and building intelligent products with AI.
            </h1>

            <p className="mt-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.11em] text-text-tertiary">
              Product Design | AI Application Development | Full-Stack Engineering
            </p>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
              I come from product design and I build working AI products. I frame the
              problem, design the interface, integrate the AI layer, and ship — without
              handing anything off.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 bg-paper px-6 py-3.5 text-sm font-semibold text-paper-ink transition-colors hover:bg-signal"
              >
                Explore my work
                <ArrowDownRight size={15} aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 border border-line-strong px-6 py-3.5 text-sm font-medium text-text-primary transition-colors hover:border-signal-border hover:text-signal"
              >
                Let&apos;s work together
                <ArrowUpRight size={15} aria-hidden="true" />
              </button>
            </div>

            <SocialLinks className="mt-8" />
          </div>

          <div className="lg:col-span-5">
            <div className="border border-line bg-bg-panel p-3">
              <div className="flex items-center justify-between px-1 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-tertiary">
                  Product evidence
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary">
                  01 / 03
                </span>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <MediaFrame
                    src="/images/Applyflow Dashboard.png"
                    alt="ApplyFlow dashboard showing a job application pipeline"
                    priority
                    imgClassName="aspect-[16/10]"
                  />
                  <div className="mt-2.5 flex items-center justify-between gap-3 px-0.5">
                    <span className="text-xs font-medium text-text-primary">ApplyFlow</span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-tertiary">
                      AI job workspace
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <MediaFrame
                      src="/images/nuvotrain/workspace.png"
                      alt="Nuvotrain evaluation workspace"
                      imgClassName="aspect-[4/3]"
                    />
                    <div className="mt-2 flex items-center justify-between gap-2 px-0.5">
                      <span className="text-[11px] font-medium text-text-primary">Nuvotrain</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <MediaFrame
                      src="/images/Adsight 1.png"
                      alt="AdSight ad review application"
                      imgClassName="aspect-[4/3]"
                    />
                    <div className="mt-2 flex items-center justify-between gap-2 px-0.5">
                      <span className="text-[11px] font-medium text-text-primary">AdSight</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 border-t border-line px-1 pt-3 font-mono text-[9px] uppercase leading-relaxed tracking-[0.1em] text-text-tertiary">
                Three live AI products. Real interfaces, real deployments.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px border-t border-line pt-6 sm:grid-cols-4 md:mt-20">
          {POSITIONING.map((item, index) => (
            <div key={item} className="flex items-baseline gap-3 py-2">
              <span className="font-mono text-[9px] text-text-tertiary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-sm text-text-secondary">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
