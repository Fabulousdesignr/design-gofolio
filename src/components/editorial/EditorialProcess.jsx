import React from 'react';

export default function EditorialProcess() {
  const steps = [
    { num: '01', title: 'Discover' },
    { num: '02', title: 'Define' },
    { num: '03', title: 'Design' },
    { num: '04', title: 'Validate' },
    { num: '05', title: 'Ship' }
  ];

  return (
    <section className="edit-section bg-card">
      <div className="edit-container">
        <h2 className="edit-title-section scroll-reveal fade-up">How I Work</h2>
        
        <div className="flex flex-col md:flex-row gap-8 mt-16 scroll-reveal fade-up">
          {steps.map((step, idx) => (
            <div key={step.num} className="flex-1 flex md:flex-col items-center md:items-start gap-6 md:gap-4 relative group">
              {/* Line connector for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-12 w-[calc(100%-1rem)] h-[1px] bg-card-border group-hover:bg-text-primary transition-colors duration-500" />
              )}
              {/* Line connector for mobile */}
              {idx < steps.length - 1 && (
                <div className="md:hidden absolute top-12 left-6 w-[1px] h-[calc(100%-1rem)] bg-card-border" />
              )}
              
              <div className="w-12 h-12 shrink-0 rounded-full border border-card-border bg-card flex items-center justify-center font-mono text-xs font-bold text-text-secondary relative z-10 group-hover:border-text-primary group-hover:text-text-primary transition-colors duration-300">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
