import React from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { CodingStats } from './components/CodingStats';
import { Qualifications } from './components/Qualifications';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <CodingStats />
      <Qualifications />
      <Contact />
    </div>
  );
}

export default App;