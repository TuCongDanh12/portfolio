import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Header />
      <Home />
      {/* <Services /> */}
      <Skills />
      <Projects />
      <Resume />
      {/* <Testimonials />
      <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
      {/* <Footer /> */}
    </main>
  );
};

export default App;
