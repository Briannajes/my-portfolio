// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Brianna Jesionowski</div>
      <ul className="nav-links">
        {/* Replace <a> tags with <Link> for routing */}
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/projects" className="nav-link">Projects</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
    
      </ul>
    </nav>
  );
}

export default Navbar;
