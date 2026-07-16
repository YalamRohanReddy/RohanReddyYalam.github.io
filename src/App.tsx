import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { useTheme } from './hooks/useTheme';

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const Projects = lazy(() => import('./pages/Projects').then((module) => ({ default: module.Projects })));
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })));

const AnimatedPages = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen bg-white text-slate-950 dark:bg-[#050b1e] dark:text-slate-100">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Suspense fallback={<div className="min-h-screen px-6 py-40 text-center text-slate-300">Loading portfolio…</div>}>
        <AnimatedPages />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
