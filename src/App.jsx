import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import { ContactModalProvider } from './context/ContactModalContext';
import ContactModal from './components/ContactModal';

// Code-split secondary routes
const Work = lazy(() => import('./pages/Work'));
const About = lazy(() => import('./pages/About'));
const Experiments = lazy(() => import('./pages/Experiments'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));
const ExperimentDetail = lazy(() => import('./pages/ExperimentDetail'));

function RouteLoader() {
  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
      <div className="w-6 h-6 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
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
            <Route path="/about" element={<About />} />
            <Route path="/labs" element={<Experiments />} />
            <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
            <Route path="/ai-playground/:slug" element={<ExperimentDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </ContactModalProvider>
  );
}

export default App;
