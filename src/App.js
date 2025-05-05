import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import MysteryBoard from './pages/MysteryBoard';
import Contact from './pages/Contact';
import './styles/globals.css';
import ProfessionalJourney from './pages/ProfessionalJourney';
import EducationalJourney from './pages/EducationalJourney';
import AnonymousWall from './pages/AnonymousWall';
import ContactSection from './pages/ContactSection';
import Footer from './pages/Footer';

function App() {
  return (
    
      <div className="app">
        <Navbar />
        <section>
          <Hero/>
        </section>
        <section>
          <About/>
        </section>
        <section>
          <Projects/>
        </section>
        <section>
          <Skills/>
        </section>
        <section>
          <ProfessionalJourney/>
        </section>
        <section>
          <EducationalJourney/>
        </section>
        <section>
          <ContactSection/>
        </section>
        <section>
          <Footer/>
        </section>
      </div>
  
  );
}

export default App;