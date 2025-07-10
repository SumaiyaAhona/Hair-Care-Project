import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome Back!</h1>
        <p>Please log in</p>
      </div>

      <div className="login-content">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
          <small>Make it secure!</small>

          <div className="login-buttons">
            <button type="button" className="btn-secondary">Forgot Password?</button>
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
