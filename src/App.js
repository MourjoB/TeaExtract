import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;