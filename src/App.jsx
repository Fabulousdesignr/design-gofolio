import { lazy, Suspense } from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import { ContactModalProvider } from './context/ContactModalContext';
import ContactModal from './components/ContactModal';

// Code-split secondary routes
const Work = lazy(() => import('./pages/Work'));
const WorkCaseStudy = lazy(() => import('./pages/WorkCaseStudy'));
const About = lazy(() => import('./pages/About'));
const Capabilities = lazy(() => import('./pages/Capabilities'));
const Contact = lazy(() => import('./pages/Contact'));
const Experiments = lazy(() => import('./pages/Experiments'));
const ShoveBetCaseStudy = lazy(() => import('./pages/ShoveBetCaseStudy'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));
const ExperimentDetail = lazy(() => import('./pages/ExperimentDetail'));

function RouteLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-primary">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-line border-t-signal" />
    </div>
  );
}

function App() {
  return (
    <ContactModalProvider>
      <Router>
        <ScrollToTop />
        <ContactModal />

        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkCaseStudy />} />
            <Route path="/about" element={<About />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/labs" element={<Experiments />} />

            {/* Previous AI routes now live under /work/:slug */}
            <Route path="/case-study/applyflow" element={<Navigate to="/work/applyflow" replace />} />
            <Route path="/ai-playground/adsight" element={<Navigate to="/work/adsight" replace />} />
            <Route path="/ai-playground/applyflow" element={<Navigate to="/work/applyflow" replace />} />
            <Route path="/ai-playground/nuvotrain" element={<Navigate to="/work/nuvotrain" replace />} />

            <Route path="/case-study/shove-bet" element={<ShoveBetCaseStudy />} />
            <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
            <Route path="/ai-playground/:slug" element={<ExperimentDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </ContactModalProvider>
  );
}

export default App;
