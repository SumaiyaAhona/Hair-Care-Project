import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Hair for Those in Care</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Hair Services</Link></li>
        <li><Link to="/helpcenter">Help Center</Link></li>
      </ul>
    </nav>
  );
}