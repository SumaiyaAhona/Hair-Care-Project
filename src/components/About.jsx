import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To provide free, high-quality hair care services for foster youth,
          boosting their confidence and sense of belonging through compassionate care.
        </p>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>Connecting foster youth with caring volunteer hairstylists.</p>
        <div className="steps">
          <div className="step-card">
            <strong>Sign Up</strong>
            <p>Volunteers create a profile and get verified.</p>
          </div>
          <div className="step-card">
            <strong>Appointment Booking</strong>
            <p>Agencies book appointments based on children's needs.</p>
          </div>
          <div className="step-card">
            <strong>Quality Care</strong>
            <p>Stylists provide personalized hair care to boost confidence.</p>
          </div>
        </div>
      </section>

      <section className="impact">
        <h2>Our Impact</h2>
        <p>Numbers tell our story.</p>
        <div className="impact-stats">
          <div className="impact-card">
            <span>500+</span>
            <p>Kids Helped</p>
          </div>
          <div className="impact-card">
            <span>200+</span>
            <p>Volunteers Signed Up</p>
          </div>
          <div className="impact-card">
            <span>1000+</span>
            <p>Free Services Provided</p>
          </div>
        </div>
      </section>

      <section className="community-impact">
        <h2>Community Impact</h2>
        <p>Real moments from our events.</p>
        <div className="impact-images">
          <div className="impact-image">
            <img src="/images/child_haircut2.jpg" alt="Volunteer and child high five" />
            <p>It's amazing to see their confidence shine! #HairCare #ConfidenceBoost</p>
          </div>
          <div className="impact-image">
            <img src="/images/before_after.jpg" alt="Foster youth transformation" />
            <p>I love my new look! #Transformation #ThankYou</p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <button className="back-btn">Back</button>
        <p>Follow Us on Social Media</p>
      </footer>
    </div>
  );
}
