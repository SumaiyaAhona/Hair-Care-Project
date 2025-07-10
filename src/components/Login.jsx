import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFoster = formData.email.toLowerCase().endsWith('@sco.org');
    if (isFoster) {
      navigate('/foster/dashboard');
    } else {
      navigate('/volunteer/appointments');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome Back!</h1>
        <p>Please log in</p>
      </div>

      <div className="login-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <small className="email-note">Currently, we only support foster care logins from SCO.org</small>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <small>Make it secure!</small>

          <div className="login-buttons">
            <button type="submit" className="btn-primary">Login</button>
          </div>
        </form>
      </div>

      <footer className="login-footer">
        <p>© 2023 Hair for Those in Care. All rights reserved.</p>
        <div className="footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
