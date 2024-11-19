import React, { useState, useEffect } from 'react';
import '/src/styles_components/navbar.css';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('Home');
    const [loggedIn, setLoggedIn] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.slice(1);
        setCurrentPage(path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Home');
        
        // Check authentication status
        const token = Cookies.get('authToken');
        if (token) {
            setLoggedIn(true);
            console.log('User is logged in');
        } else {
            setLoggedIn(false);
            console.log('User is not logged in');
        }
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar" role="navigation">
            <div className="navbar-left">
                <Link to={''} className="logo" onClick={closeMenu}>
                    <img src="logos/logo200trans.png" alt="pnw cs club logo" width="32" height="32" />
                </Link>
            </div>
            <div className="navbar-title">
                {currentPage}
            </div>
            <div className={`navbar-center ${isMenuOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li>
                        <Link to={'/'} aria-label="Home page" onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to={'projects'} aria-label="Projects page" onClick={closeMenu}>Projects</Link>
                    </li>
                    <li>
                        <Link to={'events'} aria-label="Events page" onClick={closeMenu}>Events</Link>
                    </li>
                    <li>
                        <Link to={'blog'} aria-label="Blog page" onClick={closeMenu}>Blog</Link>
                    </li>
                    <li>
                        <Link to={'contact'} aria-label="Contact page" onClick={closeMenu}>Contact</Link>
                    </li>
                    <li>
                        <Link to={'team'} aria-label="Team page" onClick={closeMenu}>Team</Link>
                    </li>
                    <li>
                        <Link to={'resources'} aria-label="Resources page" onClick={closeMenu}>Resources</Link>
                    </li>
                    <li>
                        <Link 
                            to={loggedIn ? 'account' : 'login'} 
                            aria-label={loggedIn ? "Account page" : "Login page"} 
                            onClick={closeMenu}
                        >
                            {loggedIn ? 'Account' : 'Login'}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;