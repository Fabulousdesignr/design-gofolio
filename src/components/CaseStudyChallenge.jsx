import React from 'react';

export default function CaseStudyChallenge({ data }) {
  if (!data.challenge) return null;
  const { accent } = data;

  return (
    <div className="max-w-3xl">
      <p className="cs-section-intro mb-8">
        {data.challenge.context}
      </p>
      {data.challenge.visual && (
        <div className="mt-8 rounded-xl overflow-hidden border border-card-border">
          <img 
            src={data.challenge.visual} 
            alt="Challenge visualization" 
            className="w-full h-auto object-cover"
          />
        </div>
      )}
    </div>
  );
}
