import React, { useState, useEffect } from 'react';
import '/src/styles_components/navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('Home');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.slice(1);
        setCurrentPage(path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Home');
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
                        <Link to={'login'} aria-label="Login page" onClick={closeMenu}>Login</Link>
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
