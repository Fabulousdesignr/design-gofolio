import { useParams, Navigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import CaseStudyTemplate from '../components/CaseStudyTemplate';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  
  const data = caseStudies.find(study => study.id === slug);

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return <CaseStudyTemplate data={data} />;
}
