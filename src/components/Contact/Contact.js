import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Icons for contact info

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">We'd love to hear from you! Reach out to us for any inquiries or feedback.</p>

        <div className="contact-content">
          {/* Left Side: Contact Information */}
          <div className="contact-info">
            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h3>Email</h3>
              <p>info@sitanaturals.com</p>
            </div>
            <div className="info-card">
              <FaPhone className="info-icon" />
              <h3>Phone</h3>
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>Address</h3>
              <p>123 Tea Lane, Assam, India</p>
            </div>
          </div>

          {/* Right Side: Embedded Google Form */}
          <div className="google-form">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf09nJHs8vgU-3NlI1KLT53utvXhvSppySp3t5WBybQk23T7g/viewform?embedded=true" width="640" height="713" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;