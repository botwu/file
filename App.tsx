import React from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { Background } from './components/Layout/Background';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Experience } from './components/Sections/Experience';
import { Projects } from './components/Sections/Projects';
import { Contact } from './components/Sections/Contact';

function App() {
  return (
    <div className="min-h-screen text-slate-800 selection:bg-pink-200 selection:text-pink-900">
      <Background />
      <Navbar />
      
      <main className="flex flex-col gap-0">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;