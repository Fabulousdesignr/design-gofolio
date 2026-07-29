import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, Filter } from 'lucide-react';
import Navbar from '../components/v2/Navbar';
import Footer from '../components/v2/Footer';
import { projects } from '../data/projects';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & SaaS' },
  { id: 'product', label: 'Fintech & Mobile' },
  { id: 'shopify', label: 'Shopify & Ecommerce' },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter((p) => p.section === activeTab);

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-36 pb-28">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              All Projects & Case Studies
            </h1>
            <p className="text-base text-white/60 leading-relaxed">
              Explore my full portfolio across AI applications, SaaS platforms, mobile banking interfaces, and high-conversion Shopify storefronts.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-white/[0.08]">
            <span className="text-xs font-semibold uppercase text-white/40 tracking-wider flex items-center gap-1.5 mr-2">
              <Filter size={14} /> Filter:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-white text-zinc-950 shadow-md'
                    : 'bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white border border-white/[0.08]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const { id, title, tagline, image, video, fallback, link, liveUrl, caseStudyUrl, role, tags } = project;
              const targetUrl = link || caseStudyUrl || liveUrl;
              const isInternal = link && link.startsWith('/');

              return (
                <article
                  key={id}
                  className="group relative flex flex-col rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] overflow-hidden transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Media */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900 border-b border-white/[0.06]">
                    {video ? (
                      <video
                        src={video}
                        poster={image || fallback}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <img
                        src={image || fallback}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded bg-white/[0.05] border border-white/[0.08] text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                        {title}
                      </h3>

                      <p className="text-xs text-white/60 leading-relaxed mb-6">
                        {tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-[11px] font-medium text-white/40">
                        {role}
                      </span>

                      {isInternal ? (
                        <Link
                          to={targetUrl}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors"
                        >
                          Case Study <ArrowUpRight size={13} />
                        </Link>
                      ) : (
                        <a
                          href={targetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors"
                        >
                          View Live <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
