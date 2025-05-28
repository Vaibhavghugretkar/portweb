import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#22c55e] text-black p-3 rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-md"
      >
        <FaFacebook size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/vaibhav-ghugretkar-97b024257/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#22c55e] text-black p-3 rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-md"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="https://github.com/Vaibhavghugretkar"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#22c55e] text-black p-3 rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-md"
      >
        <FaGithub size={20} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#22c55e] text-black p-3 rounded-full hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-md"
      >
        <FaTwitter size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
