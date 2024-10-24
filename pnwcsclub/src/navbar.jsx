import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
  
  <nav className="navbar">
    <div className="navbar-left">
      <a href="/" className="logo">
        <img src="/logo32trans.png" alt="pnw cs club logo" with="32" height="32"></img>
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
       <ul className="nav-links">
        <li>
            <a href="/login">Login</a>
        </li>   
       </ul>
    </div>
  </nav>
  );
  };

export default Navbar;