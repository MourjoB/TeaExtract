import React, { useEffect } from 'react';
import './About.css';
import aboutImage from '../../images/about.jpg';
import { FaLeaf, FaAward, FaIndustry } from 'react-icons/fa'; // Icons for highlights

function About() {
  // Scroll animation for stats
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about');
      const stats = document.querySelectorAll('.stat h3');
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.8) {
        stats.forEach((stat) => {
          const target = +stat.getAttribute('data-target');
          let count = 0;
          const increment = target / 100;

          const updateCount = () => {
            if (count < target) {
              count += increment;
              stat.textContent = Math.ceil(count);
              setTimeout(updateCount, 20);
            } else {
              stat.textContent = target;
            }
          };

          updateCount();
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p>Sita Naturals is a B2B tea manufacturing company that makes premium quality Instant Tea Powder and Natural Tea Infused Flavour. At Sita Naturals, with state-of-the-art machinery, the nature of our extraction and processes and meticulous raw material sourcing, we can offer our clients and partners unmatched quality and flexibility.</p>
            <p>We are based in Assam along with our sister company, Jayanti Tea Private Limited. Over the last decade and a half, Jayanti tea has firmly established itself as a brand that is known in the market for its consistent quality and reliability when it comes to manufacturing CTC tea. Our team is honed to the craft, and actively works towards striking a balance with our environmental and social responsibilities.</p>
            <p>Our commitment to traditional methods, combined with modern precision, guarantees a timeless experience, offering a symphony of flavours in every blend. From a wide-ranging collection of Instant tea powders including classic blends and essential offerings to versatile tea aroma, Sita Naturals offers a diverse product range that reflects the richness of nature.</p>
            <a href="#products" className="cta-button">Explore Our Products</a>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About Sita Naturals" />
          </div>
        </div>

        {/* Sustainability Commitment Section */}
        <div className="sustainability-commitment">
          <h3>Our Commitment to Sustainability</h3>
          <p>We are dedicated to reducing our environmental footprint and promoting eco-friendly practices.</p>
          <a href="#sustainability" className="cta-button">Learn More</a>
        </div>

        {/* Icon-Based Highlights */}
        <div className="highlights">
          <div className="highlight">
            <FaLeaf className="highlight-icon" />
            <h4>Sustainability</h4>
            <p>We prioritize eco-friendly practices to protect the environment.</p>
          </div>
          <div className="highlight">
            <FaAward className="highlight-icon" />
            <h4>Quality Assurance</h4>
            <p>Our products undergo rigorous quality checks for excellence.</p>
          </div>
          <div className="highlight">
            <FaIndustry className="highlight-icon" />
            <h4>Innovation</h4>
            <p>We combine tradition with modern technology for the best results.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;