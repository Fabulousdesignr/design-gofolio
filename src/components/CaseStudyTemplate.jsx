import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './editorial/EditorialFooter';
import ProductFrame from './ProductFrame';

export default function CaseStudyTemplate({ data }) {
  if (!data) return null;
  return <div className="min-h-screen bg-bg-primary text-text-primary"><Navbar />
    <main className="pt-32 pb-24 max-w-[1180px] mx-auto px-6 md:px-12">
      <Link to="/#work" className="inline-flex gap-2 items-center text-sm text-text-secondary hover:text-accent-orange mb-14"><ArrowLeft size={16}/> Back to selected work</Link>
      <header className="mb-16"><p className="text-xs uppercase tracking-[.16em] font-bold text-accent-orange mb-4">{data.label}</p><h1 className="font-serif text-6xl md:text-8xl tracking-tight mb-7">{data.title}</h1><p className="max-w-3xl text-xl md:text-2xl leading-relaxed text-text-secondary">{data.summary}</p></header>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-card-border py-8 mb-12">{data.meta.map(item => <div key={item.label}><p className="text-xs uppercase tracking-widest text-text-secondary mb-2">{item.label}</p><p className="font-semibold">{item.value}</p></div>)}</div>
      {data.liveUrl && <a href={data.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-bg-inverse text-text-inverse px-5 py-3 font-semibold mb-14">View product <ArrowUpRight size={16}/></a>}
      <div className="rounded-2xl overflow-hidden border border-card-border mb-16 aspect-video"><ProductFrame src={data.heroMedia} fallback={data.heroMedia} alt={`${data.title} product preview`} label={data.title} className="w-full h-full border-0 rounded-none" /></div>
      <div className="max-w-3xl">{data.sections.map(([title, content], index) => <section key={title} className="py-12 border-t border-card-border"><p className="text-xs font-bold tracking-widest text-accent-orange uppercase mb-4">{String(index + 1).padStart(2, '0')}</p><h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-5">{title}</h2><p className="text-lg leading-8 text-text-secondary">{content}</p></section>)}</div>
    </main><Footer /></div>;
}
