import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
          <span className="logo-name">Vaibhav.dev</span>
       
        <div className="nav-links">
          <a to="/about" className="nav-link">About</a>
          <a to="/projects" className="nav-link">Projects</a>
          <a to="/skills" className="nav-link">Skills</a>
          <a to="/mystery-board" className="nav-link">Mystery Board ✨</a>
          <a to="/contact" className="nav-link">Contact</a>
        </div>
        <a href="#contact" className="hire-button">Hire me !</a>
      </div>
    </nav>
  );
};

export default Navbar;