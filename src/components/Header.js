import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1>Louis Andrada</h1>
            <nav className="navigation">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/bio">Bio</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
                <Link className="nav-link" to="/cover-letter">Cover Letter</Link>
                <Link className="nav-link" to="/academic-credentials">Academic Credentials</Link>
                <Link className="nav-link" to="/academic-work">Academic Work</Link>
                <Link className="nav-link" to="/professional-summary">Professional Summary</Link>
                {/* Add additional navigation links as needed */}
            </nav>
        </header>
    );
}

export default Header;
