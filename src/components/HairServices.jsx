import React from 'react';
import './HairServices.css';

export default function HairServices() {
  const services = [
    {
      title: "Braiding",
      description: "Intricate and stylish braids for all hair types.",
      image: "/images/braid.jpeg",
      tag: "Cultural Style"
    },
    {
      title: "Curls",
      description: "Hair curling services that add volume and flair.",
      image: "/images/curlyhair.jpg",
      tag: "Volume Boost"
    },
    {
      title: "Trims",
      description: "Professional trims to maintain healthy ends.",
      image: "/images/fresh_trim.jpeg",
      tag: "Maintenance"
    },
    {
      title: "Twists",
      description: "Protective styles to keep hair healthy and stylish.",
      image: "/images/twists.jpg",
      tag: "Protective Styling"
    },
    {
      title: "Straightening",
      description: "Expert straightening for sleek, smooth looks.",
      image: "/images/slick.png",
      tag: "Sleek Look"
    },
    {
      title: "Natural Styles",
      description: "Elevating natural beauty with various styles.",
      image: "/images/natural.jpg",
      tag: "Natural & Beautiful"
    }
  ];

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Hair Care Services for Foster Youth</h1>
        <p>Explore our range of hair care services specifically designed to uplift and empower our children.</p>
        <button className="book-button">Book Now</button>
      </div>

      <h2 className="section-title">Available Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="image-wrapper">
              <img src={service.image} alt={service.title} />
              <span className="service-tag">{service.tag}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <footer className="services-footer">
        <p>© 2023 Hair for Those in Care</p>
        <p>Back</p>
      </footer>
    </div>
  );
}
