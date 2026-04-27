import { tools } from '../data/tools';
import { Layout, MessageSquare, Zap, Cpu, Sparkles, Pencil } from 'lucide-react';

export default function Tools() {
  // Map categories to simple icons
  const getIcon = (category) => {
    switch (category) {
      case 'Design': return <Layout size={18} />;
      case 'Prototyping': return <Zap size={18} />;
      case 'Collaboration': return <MessageSquare size={18} />;
      case 'AI Tools': return <Sparkles size={18} />;
      default: return <Pencil size={18} />;
    }
  };

  // Duplicate the tools array for a seamless loop
  const duplicatedTools = [...tools, ...tools];

  return (
    <section className="py-32 overflow-hidden section-dark border-y border-card-border">
      <div className="container-custom mb-20 scroll-reveal">
        <span className="text-sm font-bold uppercase tracking-widest text-accent mb-4 block">
          Workflow
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary uppercase">
          Tools I Use
        </h2>
      </div>
      
      {/* Mobile Grid View */}
      <div className="container-custom md:hidden">
        <div className="grid grid-cols-2 gap-4">
          {tools.map((tool, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 px-4 py-3 bg-card border border-card-border rounded-xl shadow-sm"
            >
              <div className="text-text-secondary shrink-0">
                {getIcon(tool.category)}
              </div>
              <span className="font-bold text-text-primary text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Marquee View */}
      <div className="hidden md:block relative w-full overflow-hidden pause-on-hover marquee-mask">
        <div className="flex w-max animate-marquee py-4">
          {duplicatedTools.map((tool, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 px-8 py-4 mx-4 bg-card border border-card-border rounded-2xl shadow-sm hover:border-accent hover:text-accent transition-all cursor-default group"
            >
              <div className="text-text-secondary group-hover:text-accent transition-colors">
                {getIcon(tool.category)}
              </div>
              <span className="font-bold text-text-primary group-hover:text-accent whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
