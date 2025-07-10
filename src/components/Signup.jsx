import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  return (
    <div className="signup-container">
      
      {/* “New here?” section */}
      <div className="signup-section">
        <h1>New here?</h1>
        <p>Join our community of volunteers and foster partners!</p>
        <div className="signup-buttons">
          <Link to="/volunteer/signup" className="btn-primary">
            Sign Up as a Volunteer
          </Link>
          <Link to="/signup/agency" className="btn-secondary">
            Sign Up as a Foster Partner
          </Link>
        </div>
      </div>

      <div className="signup-image-wrapper">
  <img
    src="/signup-hero.jpg"  // Note the leading slash
    alt="Foster youth getting hair care"
  />
</div>

      {/* “Been here before?” section */}
      <div className="signup-section signup-return">
        <h2>Been here before?</h2>
        <p>Sign in to your account</p>
        <div className="signup-buttons single-button">
          <Link to="/login" className="btn-secondary">
            Sign In
          </Link>
        </div>
      </div>

    </div>
  );
}
