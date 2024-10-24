import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
  
  <nav className="navbar">
    <div className="navbar-left">
      <Link to={''} className="logo">
        <img src="/logo32trans.png" alt="pnw cs club logo" with="32" height="32"></img>
      </Link>
    </div>
    <div className="navbar-center">
      <ul className="nav-links">
        <li>
          <Link to={'projects'}>Projects</Link>
        </li>
        <li>
          <Link to={'events'}>Events</Link>
        </li>
        <li>
          <Link to={'blog'}>Blog</Link>
        </li>
        <li>
          <Link to={'contact'}>Contact</Link>
        </li>
        <li>
          <Link to={'team'}>Team</Link>
        </li>
      </ul>
    </div>
    <div className="navbar-right">
       <ul className="nav-links">
        <li>
          <Link to={'login'}>Login</Link>
        </li>   
       </ul>
    </div>
  </nav>
  );
  };

export default Navbar;