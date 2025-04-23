import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing React Icons

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://linkedin.com" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com" className="social-link github" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://twitter.com" className="social-link twitter" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialLinks;
