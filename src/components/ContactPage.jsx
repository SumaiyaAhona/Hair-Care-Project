import React from 'react';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1>We're Here to Help!</h1>
      <p className="subtitle">Have questions or need assistance? Reach out to us!</p>

      <div className="map-container">
        <iframe
          title="Hunter College Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.688679722264!2d-73.96432668459076!3d40.768731779325616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f947e65f37%3A0x8e41cb8d1cce34fc!2sHunter%20College!5e0!3m2!1sen!2sus!4v1720612454713!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-form-section">
        <h2>Get in Touch</h2>
        <p>Fill out the form below and we will get back to you as soon as possible.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-footer">
        <span>Back</span>
        <span>Email us at: info@hairforthoseincare.org</span>
        <span>Call us: (123) 456-7890</span>
      </div>
    </div>
  );
}
