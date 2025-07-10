import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Volunteer.css';

export default function Volunteer() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    backgroundCheck: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0].name : value,
    });
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
      confirmPassword: '',
      backgroundCheck: ''
    });
    navigate('/volunteer/appointments');
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      backgroundCheck: ''
    });
  };

  return (
    <div className="volunteer-signup-container">
      <div className="left-column">
        <h1>Signing up as a Volunteer</h1>
        <p>Partner with us to provide hair care to those in need.</p>
      </div>
      <div className="right-column">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Role</label>
            <input type="text" value="Volunteer Stylist" disabled />
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
          <div className="form-group">
            <label>Upload Your Background Check</label>
            <input
              name="backgroundCheck"
              type="file"
              accept=".pdf,.jpg,.png"
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
