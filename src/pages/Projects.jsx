import React from 'react';
import '../styles/variables.css';

// Import icons (assuming you have these or similar icons available)
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Multilingual Loan Advisor Chatbot',
      description: 'Multilingual AI-powered chatbot that guides users through loan eligibility, application processes, and financial literacy in their preferred language.',
      image: '/assets/images/Screenshot (119).png',
      technologies: ['react', 'node', 'express', 'mongodb'],
      liveDemo: 'https://sarvasva.onrender.com/',
      github: 'https://github.com/Vaibhavghugretkar/Sarvasva',
      isNew: true
    },
    {
      id: 2,
      title: 'Customer Engagement Dashboard',
      description: 'Real-time analytics dashboard with engagement tracking, retention insights, and dynamic filtering.',
      image: '/assets/images/engagement-dashboard.png',
      technologies: ['react', 'node', 'express', 'mongodb'],
      liveDemo: 'https://engagement-dashboard.example.com',
      github: 'https://github.com/yourusername/engagement-dashboard',
      isNew: true
    },
    {
      id: 3,
      title: 'Video Streaming App',
      description: 'A feature-rich video streaming platform with real-time search, user authentication, and video recommendations.',
      image: '/assets/images/video-streaming.png',
      technologies: ['react', 'node', 'express', 'mongodb'],
      liveDemo: 'https://video-streaming.example.com',
      github: 'https://github.com/yourusername/video-streaming',
      isNew: false
    }
  ];

  // Function to render technology icons
  const renderTechIcons = (techs) => {
    return (
      <div className="tech-icons">
        {techs.includes('react') && <div className="tech-icon react"><FaReact /></div>}
        {techs.includes('node') && <div className="tech-icon node"><FaNodeJs /></div>}
        {techs.includes('express') && <div className="tech-icon express"><SiExpress /></div>}
        {techs.includes('mongodb') && <div className="tech-icon mongodb"><SiMongodb /></div>}
      </div>
    );
  };

  return (
    <div className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  <p className="tech-title">Technologies Used :</p>
                  {renderTechIcons(project.technologies)}
                </div>
                
                <div className="project-links">
                  <a href={project.liveDemo} className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;