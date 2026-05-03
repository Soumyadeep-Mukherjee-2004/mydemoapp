import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>MyApp</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
