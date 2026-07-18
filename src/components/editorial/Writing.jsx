import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';

const articles = [
  {
    title: "Your First Step into Code: A Beginner's Guide to Setting Up Your PC in 2025",
    category: 'Technical Setup',
    readTime: '6 min read',
    link: 'https://medium.com/@fabianokechukwu',
    excerpt: 'A practical guide mapping the essential dev tools, environment setups, and workflow patterns for modern developers getting started in tech.',
  },
  {
    title: 'Understanding Fonts: Use Cases and Examples of the Major Categories',
    category: 'Design Systems',
    readTime: '5 min read',
    link: 'https://medium.com/@fabianokechukwu',
    excerpt: 'Explaining type hierarchies, font categories, and how typography shapes visual credibility and reading flow in digital products.',
  },
  {
    title: 'Achieving My Goals with the HNG Internship',
    category: 'Growth & Career',
    readTime: '4 min read',
    link: 'https://medium.com/@fabianokechukwu',
    excerpt: 'Reflecting on fast execution loops, team collaboration under constraints, and what shipping under pressure teaches you about product velocity.',
  },
];

export default function Writing() {
  return (
    <section id="writing" className="py-24 md:py-32 bg-bg-primary border-t border-card-border relative z-30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 scroll-reveal fade-up">
          <div className="max-w-2xl">
            <span className="text-accent-orange text-[13px] font-bold tracking-widest uppercase mb-4 block">Published</span>
            <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[72px] leading-[1.0] text-text-primary tracking-tight">
              Writing
            </h2>
          </div>
          <a
            href="https://medium.com/@fabianokechukwu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-orange font-semibold text-sm transition-all mt-6 md:mt-0 group"
          >
            All articles on Medium
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Article cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((art, idx) => (
            <a
              key={idx}
              href={art.link}
              target="_blank"
              rel="noreferrer"
              className="bg-card border border-card-border p-8 rounded-3xl flex flex-col justify-between hover:border-accent-orange/40 hover:-translate-y-1 transition-all duration-300 group scroll-reveal fade-up"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex-1">
                {/* Top meta row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold text-accent-orange uppercase tracking-wider">
                    {art.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-text-secondary/60 tracking-wide">
                    <Clock size={11} />
                    {art.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-text-primary mb-3 tracking-tight leading-snug group-hover:text-accent-orange transition-colors">
                  {art.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              {/* Read CTA */}
              <div className="inline-flex items-center gap-2 text-[11px] font-bold text-text-primary uppercase tracking-widest pt-6 mt-6 border-t border-card-border/50 group-hover:text-accent-orange transition-colors">
                <span>Read article</span>
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
