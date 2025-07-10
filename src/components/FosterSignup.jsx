import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FosterSignup.css';

export default function FosterSignup() {
  const navigate = useNavigate();
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
    if (!formData.email.endsWith('@sco.org')) {
      alert("Only @sco.org emails are allowed for foster agencies.");
      return;
    }
    alert("Thank you for signing up!");
    navigate('/foster/dashboard');
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
        <p>Only SCO Foster Care agencies are supported at this time.</p>
      </div>
      <div className="right-column">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Role</label>
            <input type="text" value="Foster Care Agency" disabled />
            <small>Only @sco.org agency emails are accepted</small>
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
              placeholder="you@sco.org"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <small>Email must end in <strong>@sco.org</strong> to register</small>
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
