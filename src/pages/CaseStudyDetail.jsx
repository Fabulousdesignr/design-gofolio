import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import CaseStudyTemplate from '../components/CaseStudyTemplate';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const data = caseStudies.find(study => study.id === slug);

  if (!data) {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center text-center text-text-primary p-6">
        <h1 className="text-4xl font-black mb-4 uppercase tracking-tighter">Case Study Not Found</h1>
        <p className="text-xl text-text-secondary mb-12 max-w-md">
          The project workspace you are looking for (ID: {slug}) could not be located in our systems.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-card border border-card-border hover:border-text-primary text-text-primary px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl uppercase"
        >
          <ArrowLeft size={24} /> Return to Dashboard
        </Link>
      </div>
    );
  }

  return <CaseStudyTemplate data={data} />;
}
