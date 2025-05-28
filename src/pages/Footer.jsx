import React from 'react';
import { Linkedin, Github, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4">
              Vaibhav Gh
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-sm">
              Crafting unique web experiences for brands and businesses.
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-3 lg:space-y-0">

              <a 
                href="#about" 
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-base"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-base"
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-base"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-base"
              >
                Contact
              </a>
            </div>
          </div>
          
          {/* Social Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
            <div className="flex space-x-4">
             
              <a 
                href="https://www.linkedin.com/in/vaibhav-ghugretkar-97b024257/" 
                aria-label="LinkedIn"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 hover:text-green-400 transition-transform duration-300" />
              </a>
              <a 
                href="https://github.com/Vaibhavghugretkar" 
                aria-label="GitHub"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 hover:text-green-400 transition-transform duration-300" />
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 hover:text-green-400 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>
        
        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Made with{' '}
            <span className="text-red-500 animate-pulse inline-block mx-1">❤</span>
            {' '}by Vaibhav Gh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;