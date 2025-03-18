import React from 'react';
import './TestimonialCard.css';

function TestimonialCard({ text, author }) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">"{text}"</p>
      <h4 className="testimonial-author">- {author}</h4>
    </div>
  );
}

export default TestimonialCard;
