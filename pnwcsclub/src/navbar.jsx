import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
  
  <nav className="navbar">
    <div className="navbar-left">
      <a href="/" className="logo">
        PNW CS Club
      </a>
    </div>
    <div className="navbar-center">
      <ul className="nav-links">
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
            <a href="/events">Events</a>
        </li>
        <li>
          <a href="/Blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
            <a href="/team">Team</a>
        </li>
      </ul>
    </div>
    <div className="navbar-right">
      <a href="/login" className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">0</span>
      </a>
      <a href="/account" className="user-icon">
        <i className="fas fa-user"></i>
      </a>
    </div>
  </nav>
  );
  };

export default Navbar;