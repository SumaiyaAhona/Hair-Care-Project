import React, { useState } from 'react';
import './FosterSignup.css';

export default function FosterSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert("Thank you for signing up!");
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="foster-signup-container">
      <div className="left-column">
        <h1>Signing up as a Foster Agency/Parent</h1>
        <p>Partner with us to provide hair care to those in need.</p>
      </div>
      <div className="right-column">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Role</label>
            <input type="text" value="Foster Care Agency" disabled />
            <small>Select your role to access the appropriate registration options.</small>
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <small>Use your agency-issued email (e.g., @fosteragency.org) if registering as an agency.</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="button-group">
            <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
            <button type="submit" className="submit-btn">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
