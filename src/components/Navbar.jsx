import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
          <span className="logo-name text-2xl font-bold">Vaibhav<span className="text-green-400">.dev</span></span>
       
        <div className="nav-links">
          <a to="/about" className="nav-link">About</a>
          <a to="/projects" className="nav-link">Projects</a>
          <a to="/contact" className="nav-link">Contact</a>
          <a to="/quicklinks" className='nav-link'>Quick Links</a>
        </div>
        <a href="#contact" className="hire-button">Hire me !</a>
      </div>
    </nav>
  );
};

export default Navbar;