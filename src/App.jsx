import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudyDetail from './pages/CaseStudyDetail';
import ScrollToTop from './components/ScrollToTop';
import Experiments from './pages/Experiments';
import ExperimentDetail from './pages/ExperimentDetail';
import { ContactModalProvider } from './context/ContactModalContext';
import { ThemeProvider } from './context/ThemeContext';
import ContactModal from './components/ContactModal';

function App() {
  return (
    <ThemeProvider>
      <ContactModalProvider>
        <Router>
          <ScrollToTop />
          <ContactModal />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Experiments />} />
          <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
          <Route path="/ai-playground/:slug" element={<ExperimentDetail />} />
          {/* Fallback to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
      </ContactModalProvider>
    </ThemeProvider>
  );
}

export default App;
