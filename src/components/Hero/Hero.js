import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Embrace Nature's Essence</h1>
          <p>Handcrafted products made with love and natural ingredients for your body, mind, and soul.</p>
          <a href="#products" className="btn">Explore Our Collection</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;