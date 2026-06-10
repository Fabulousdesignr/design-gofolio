import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudy() {
  useScrollReveal();

  const { id } = useParams();
  console.log("Route ID:", id);

  const project = caseStudies.find(cs => cs.id === id);
  console.log("Project:", project);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center text-center text-text-primary p-6">
        <h1 className="text-4xl font-black mb-4 uppercase tracking-tighter">Case Study Not Found</h1>
        <p className="text-xl text-text-secondary mb-12 max-w-md">The project workspace you are looking for (ID: {id}) could not be located in our systems.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-card border border-card-border hover:border-text-primary text-text-primary px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl uppercase">
          <ArrowLeft size={24} /> Return to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div style={{
      color: "white",
      padding: "100px",
      background: "black",
      minHeight: "100vh"
    }}>
      <h1>Case Study Loaded</h1>
      <pre>{JSON.stringify(project, null, 2)}</pre>
    </div>
  );
}
