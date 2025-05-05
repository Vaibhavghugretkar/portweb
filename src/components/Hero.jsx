import React from 'react';
import SocialLinks from './SocialLinks';
import Button from './Button';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="welcome-text">WELCOME TO MY PORTFOLIO</p>
          <h1 className="hero-title">Hey, I'm Vaibhav Gh</h1>
          <div className="hero-subtitle">
            <h2>Building Digital</h2>
            <h2>Excellence</h2>
          </div>
          <h3 className="hero-role">Full Stack Web Developer</h3>
          <p className="hero-description">
            Transforming ideas into elegant digital solutions. I specialize in creating
            seamless, user-centric experiences that blend innovation with
            functionality.
          </p>
          <Button text="DOWNLOAD CV →" link="https://drive.google.com/file/d/1CIafs1dApkkn5ytQCi0X9QZviGNBLNuh/view?usp=sharing" />
          <SocialLinks />
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src="/assets/images/ChatGPT Image May 5, 2025, 11_30_37 AM.png" alt="Vaibhav" />
            <div className="availability-badge">Available for hire</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;