import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Embrace Nature's Essence</h1>
          <p>Where the rich heritage of Assam’s tea estates meets modern innovation.</p>
          <a href="#products" className="btn">Explore Our Collection</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;