import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudyDetail from './pages/CaseStudyDetail';
import AtmosphericBackground from './components/AtmosphericBackground';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AtmosphericBackground />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
        {/* Fallback to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
