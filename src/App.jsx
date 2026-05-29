import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/projects', element: <Projects /> },
  { path: '/experience', element: <Experience /> },
  { path: '/contact', element: <Contact /> },
];

export default function App() {
  const location = useLocation();

  return (
    <div className="app-shell noise-overlay relative min-h-screen">
      <AnimatedBackground />
      <ScrollToTop />
      <Navbar />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<PageTransition>{route.element}</PageTransition>}
              />
            ))}
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
