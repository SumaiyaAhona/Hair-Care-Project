import React from 'react';
import './HairServices.css';

export default function HairServices() {
  const services = [
    {
      title: "Braiding",
      description: "Intricate and stylish braids for all hair types.",
      image: "https://i.imgur.com/ghYcdPb.jpg",
      tag: "Cultural Style"
    },
    {
      title: "Curls",
      description: "Hair curling services that add volume and flair.",
      image: "https://i.imgur.com/7RgxEgm.jpg",
      tag: "Volume Boost"
    },
    {
      title: "Trims",
      description: "Professional trims to maintain healthy ends.",
      image: "https://i.imgur.com/NdDgMmn.jpg",
      tag: "Maintenance"
    },
    {
      title: "Twists",
      description: "Protective styles to keep hair healthy and stylish.",
      image: "https://i.imgur.com/bGHpN5r.jpg",
      tag: "Protective Styling"
    },
    {
      title: "Straightening",
      description: "Expert straightening for sleek, smooth looks.",
      image: "https://i.imgur.com/Glk0oIL.jpg",
      tag: "Sleek Look"
    },
    {
      title: "Natural Styles",
      description: "Elevating natural beauty with various styles.",
      image: "https://i.imgur.com/0v6rZgD.jpg",
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
