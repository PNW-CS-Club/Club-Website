import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
  
  <nav className="navbar" role="navigation">
    <div className="navbar-left">
      <Link to={''} className="logo">
        <img src="/logo200trans.png" alt="pnw cs club logo" with="32" height="32"></img>
      </Link>
    </div>
    <div className="navbar-center">
      <ul className="nav-links">
        <li>
          <Link to={'projects'} aria-label="Projects page">Projects</Link>
        </li>
        <li>
          <Link to={'events'}aria-label="Events page">Events</Link>
        </li>
        <li>
          <Link to={'blog'}aria-label="Blog page">Blog</Link>
        </li>
        <li>
          <Link to={'contact'}aria-label="Contact page">Contact</Link>
        </li>
        <li>
          <Link to={'team'}aria-label="Team page">Team</Link>
        </li>
      </ul>
    </div>
    <div className="navbar-right">
       <ul className="nav-links">
        <li>
            {/*should have an account page too*/}
          <Link to={'login'}aria-label="Login page">Login</Link>
        </li>   
       </ul>
    </div>
  </nav>
  );
  };

export default Navbar;