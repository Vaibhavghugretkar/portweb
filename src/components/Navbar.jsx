import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Optional: You can use any icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0a192f] text-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <span className="text-2xl font-bold tracking-wide">
          Vaibhav<span className="text-green-400">.dev</span>
        </span>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-300 hover:text-green-400 transition font-medium">About</a>
          <a href="#projects" className="text-gray-300 hover:text-green-400 transition font-medium">Projects</a>
          <a href="#contacts" className="text-gray-300 hover:text-green-400 transition font-medium">Contact</a>
          <a href="#journey" className="text-gray-300 hover:text-green-400 transition font-medium">Journey</a>
          <a href="#contact" className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition">
            Hire me!
          </a>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
           className="md:hidden px-4 pb-4 flex flex-col items-center space-y-3 bg-[#0a192f]"

          >
            <a href="#about" className="text-gray-300 hover:text-green-400 transition font-medium">About</a>
            <a href="#projects" className="text-gray-300 hover:text-green-400 transition font-medium">Projects</a>
            <a href="#journey" className="text-gray-300 hover:text-green-400 transition font-medium">Journey</a>
            <a href="#contact" className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition w-fit">
              Hire me!
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
