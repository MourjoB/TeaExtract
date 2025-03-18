import React, { useEffect } from 'react';
import './Products.css';
import ProductCard from './ProductCard';
import product1 from '../../images/product1.jpg';
import product2 from '../../images/product2.jpg';
import product3 from '../../images/product3.jpg';
import product4 from '../../images/product4.jpg';

function Products() {
  const products = [
    {
      id: 1,
      image: product1,
      title: 'Black Tea Extract',
      description: 'Black Tea extract – Hot Water Soluble. Savor the essence of tradition – where rich, full-bodied notes effortlessly dissolve in hot water, delivering a steaming cup of classic, comforting indulgence with every brew. Both CWS and HWS varities available',
    },
    {
      id: 2,
      image: product2,
      title: 'Green Tea Extract',
      description: 'Discover the crisp and revitalizing allure of green tea – it comes with a refreshing blend that effortlessly dissolves in cold water, offering a burst of invigorating antioxidants for a cool and rejuvenating tea experience. Both CWS and HWS varieties available',
    },
    {
      id: 3,
      image: product3,
      title: 'Encapsulated Natural Flavour – Tea Base',
      description: 'Unleash a symphony of aroma and flavour with our encapsulated natural flavour, a flavour enhancer, where each tiny bead holds the essence of a brewing masterpiece, releasing a burst of rich, flavourful, aromatic delight in every infusion, transforming each sip into a sensory journey.With our vigorous R&D and top notch engineering, the tea infused flavours provide a sensory experience unrivaled by others in the industry.',
    },
    {
      id: 4,
      image: product4,
      title: 'Tea tannins',
      description: 'Tea Tannins are plant based organic food coloring agent, with zero adulteration, to provide you with a healthier option to customize your ingredients. Our tannins also act as natural dyes that are both non-toxic and biodegradable in nature.Explore the world of organic food coloring agents and eco-friendly dyes with Sita Naturals.',
    },
  ];

  // Add scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const productCards = document.querySelectorAll('.product-card');
      productCards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight * 0.8) {
          card.classList.add('fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">Our blends promise the perfect cup, infused with the essence of the finest tea leaves, available in a variety of flavours to suit every palate.</p>
        
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;