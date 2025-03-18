import React from 'react';
import './ProductCard.css';

function ProductCard({ image, title, description }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
}

export default ProductCard;