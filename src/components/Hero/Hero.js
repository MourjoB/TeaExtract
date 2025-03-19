import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-background-layer" style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}></div>
      <div className="hero-pattern-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="leaf-decoration leaf-left"></div>
          <div className="leaf-decoration leaf-right"></div>
          <span className="subtitle">Premium Tea Collection</span>
          <h1>Embrace Nature's Essence</h1>
          <p>Where the rich heritage of Assam's tea estates meets modern innovation.</p>
          <div className="btn-container">
            <a href="#products" className="btn primary-btn">Explore Our Collection</a>
            <a href="#story" className="btn secondary-btn">Our Story</a>
          </div>
          <div className="decoration-line"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;