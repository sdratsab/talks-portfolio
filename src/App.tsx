import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';
export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero key="home" />;
      case 'work':
        return <Work key="work" />;
      case 'about':
        return <About key="about" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <Hero key="home" />;
    }
  };
  if (!isLoaded) return null;
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-background flex flex-col md:flex-row">
      {/* Noise Overlay for texture */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
      

      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection} />
      

      <main className="flex-1 relative overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut'
            }}
            className="w-full min-h-screen">
            
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>);

}