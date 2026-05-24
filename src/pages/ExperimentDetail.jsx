import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { experiments } from '../data/experiments';
import ExperimentTemplate from '../components/ExperimentTemplate';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ExperimentDetail() {
  const { slug } = useParams();
  const experiment = experiments.find(e => e.slug === slug);
  
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!experiment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary text-text-primary">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Lab Not Found</h1>
          <p className="text-text-secondary">This experiment might have been archived or doesn't exist.</p>
        </div>
      </div>
    );
  }

  return <ExperimentTemplate experiment={experiment} />;
}
