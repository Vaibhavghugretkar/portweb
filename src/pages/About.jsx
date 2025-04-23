import React from 'react';
import '../styles/variables.css';

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Me</h1>
      
      <div className="about-content">
        <div className="about-image-container">
          <img 
            src="/assets/images/4NI22CS243.jpeg" 
            alt="Vaibhav" 
            className="about-image" 
          />
        </div>
        
        <div className="about-info">
          <h2 className="developer-title">Full Stack Web Developer</h2>
          
          <p className="about-description">
            Hey, my name is <span className="highlight">Vaibhav</span>, a dedicated MERN Developer with a 
            passion for building intuitive and responsive web applications. 
            I enjoy crafting clean, efficient code that transforms ideas into 
            interactive digital experiences.
          </p>
          
          <div className="skills-grid">
            <div className="skill-card">
              <h3 className="skill-name">MongoDB</h3>
              <p className="skill-level">Intermediate Level</p>
            </div>
            
            <div className="skill-card">
              <h3 className="skill-name">Express</h3>
              <p className="skill-level">Intermediate Level</p>
            </div>
            
            <div className="skill-card">
              <h3 className="skill-name">React</h3>
              <p className="skill-level">Intermediate Level</p>
            </div>
            
            <div className="skill-card">
              <h3 className="skill-name">Node.js</h3>
              <p className="skill-level">Intermediate Level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;