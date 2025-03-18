import React from 'react';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "I've been using the Lavender Essential Oil for my anxiety, and it's been a game-changer. The quality is unlike anything I've used before.",
      author: "Sarah J."
    },
    {
      id: 2,
      text: "The Tea Tree Face Wash cleared my acne in just two weeks! Plus, it smells amazing and doesn't dry out my skin.",
      author: "Michael T."
    },
    {
      id: 3,
      text: "I love that I can read and understand all the ingredients in these products. My sensitive skin has never been happier!",
      author: "Priya K."
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        
        <div className="testimonial-grid">
          {testimonials.map(testimonial => (
            <TestimonialCard 
              key={testimonial.id}
              text={testimonial.text}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;