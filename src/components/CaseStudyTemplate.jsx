import React from 'react';
import { ArrowLeft, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './editorial/EditorialFooter'; // Elevating EditorialFooter to be the global Footer later
import CaseStudyRail from './CaseStudyRail';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Import New Modules
import CaseStudyHero from './CaseStudyHero';
import CaseStudyChallenge from './CaseStudyChallenge';
import CaseStudyInsights from './CaseStudyInsights';
import CaseStudyTimeline from './CaseStudyTimeline';
import CaseStudyDecisions from './CaseStudyDecisions';
import CaseStudySolution from './CaseStudySolution';
import CaseStudyReflection from './CaseStudyReflection';

/* ── Section registry ──────────────────────────────────────────── */
function buildSections(data) {
  if (data?.type === 'shopify') {
    return [
      { id: 'cs-hero',       label: 'Overview' },
      { id: 'cs-challenge',  label: 'Challenge' },
      { id: 'cs-insights',   label: 'Research' },
      { id: 'cs-approach',   label: 'Development' },
      { id: 'cs-decisions',  label: 'Decisions' },
      { id: 'cs-solution',   label: 'Results' },
      { id: 'cs-reflection', label: 'Lessons' },
      { id: 'cs-tech-stack', label: 'Tech Stack' },
    ];
  }

  return [
    { id: 'cs-hero',       label: 'Overview'   },
    { id: 'cs-challenge',  label: 'Challenge'  },
    { id: 'cs-insights',   label: 'Insights'   },
    { id: 'cs-approach',   label: 'Approach'   },
    { id: 'cs-decisions',  label: 'Decisions'  },
    { id: 'cs-solution',   label: 'Solution'   },
    { id: 'cs-reflection', label: 'Reflection' },
  ];
}

// Helper wrapper to replace the legacy DocPanel
function EditorialSection({ id, title, children }) {
  return (
    <section id={id} className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-card-border last:border-0 scroll-reveal fade-up">
      {title && <h2 className="text-[32px] md:text-[40px] font-black tracking-tight text-text-primary mb-10 leading-tight">{title}</h2>}
      <div className="prose-readable text-text-secondary">
        {children}
      </div>
    </section>
  );
}

export default function CaseStudyTemplate({ data }) {
  useScrollReveal();

  if (!data) return null;

  const sections = buildSections(data);
  const isShopify = data.type === 'shopify';

  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-300">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Editorial Hero spans full width */}
        <section id="cs-hero" className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24">
          <Link to="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-12 transition-colors font-medium text-sm">
            <ArrowLeft size={16} /> Back to Work
          </Link>
          <CaseStudyHero data={data} />
        </section>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-32 relative items-start">
          
          {/* Sticky Sidebar Navigation (Desktop only) */}
          <div className="hidden lg:block sticky top-32 w-64 shrink-0">
            <CaseStudyRail sections={sections} />
          </div>

          <div className="flex-1 min-w-0 max-w-[800px]">
            {/* ── 02 CHALLENGE ────────────────────────────────── */}
            <EditorialSection id="cs-challenge" title="The challenge">
              <CaseStudyChallenge data={data} />
            </EditorialSection>

            {/* ── 03 INSIGHTS ─────────────────────────────────── */}
            <EditorialSection id="cs-insights" title={isShopify ? 'Research' : 'Key insights'}>
              <CaseStudyInsights data={data} />
            </EditorialSection>

            {/* ── 04 APPROACH ─────────────────────────────────── */}
            <EditorialSection id="cs-approach" title={isShopify ? 'Development' : 'The approach'}>
              <CaseStudyTimeline data={data} />
            </EditorialSection>

            {/* ── 05 DECISIONS ────────────────────────────────── */}
            <EditorialSection id="cs-decisions" title={isShopify ? 'Design decisions' : 'Product decisions'}>
              <CaseStudyDecisions data={data} />
            </EditorialSection>

            {/* ── 06 SOLUTION ─────────────────────────────────── */}
            <EditorialSection id="cs-solution" title={isShopify ? 'Results' : 'Solution showcase'}>
              <CaseStudySolution data={data} />
            </EditorialSection>

            {/* ── 07 REFLECTION ───────────────────────────────── */}
            <EditorialSection id="cs-reflection" title={isShopify ? 'Lessons learned' : 'Impact & reflection'}>
              <CaseStudyReflection data={data} />
            </EditorialSection>

            {data.techStack && (
              <EditorialSection id="cs-tech-stack" title="Tech stack">
                <div className="flex flex-wrap gap-3">
                  {data.techStack.map((tool) => (
                    <span key={tool} className="px-4 py-2 rounded-full border border-card-border bg-bg-alt/40 text-sm font-semibold text-text-primary">
                      {tool}
                    </span>
                  ))}
                </div>
              </EditorialSection>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
