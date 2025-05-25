import React, { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute('data-project-id');
            setVisibleProjects(prev => new Set([...prev, projectId]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Contest Tracker',
      description: 'MERN-based app to track, filter, and bookmark coding contests with solution links and dark mode support.',
      image: '/assets/images/Screenshot (119).png',
      technologies: ['react', 'node', 'express', 'mongodb'],
      liveDemo: 'https://sarvasva.onrender.com/',
      github: 'https://github.com/Vaibhavghugretkar/Sarvasva',
      // isNew: true
    },
    {
      id: 2,
      title: 'Customer Engagement Dashboard',
      description: 'Real-time analytics dashboard with engagement tracking, retention insights, and dynamic filtering.',
      image: '/assets/images/engagement-dashboard.png',
      technologies: ['react', 'node', 'express', 'mongodb'],
      liveDemo: 'https://engagement-dashboard.example.com',
      github: 'https://github.com/yourusername/engagement-dashboard',
      // isNew: true
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
    const iconConfig = {
      react: { icon: FaReact, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
      node: { icon: FaNodeJs, color: 'text-green-500', bg: 'bg-green-500/10' },
      express: { icon: SiExpress, color: 'text-gray-300', bg: 'bg-gray-300/10' },
      mongodb: { icon: SiMongodb, color: 'text-green-400', bg: 'bg-green-400/10' }
    };

    return (
      <div className="flex gap-2 mt-2">
        {techs.map((tech) => {
          const config = iconConfig[tech];
          if (!config) return null;
          const IconComponent = config.icon;
          
          return (
            <div
              key={tech}
              className={`p-2 rounded-lg ${config.bg} ${config.color} 
                         transition-all duration-300 hover:scale-110`}
              title={tech.charAt(0).toUpperCase() + tech.slice(1)}
            >
              <IconComponent className="w-5 h-5" />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-[#0d1117] py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-green-400 font-bold  mb-6 tracking-tight">
            Featured 
            <span className="text-green-400 ml-4">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Showcasing innovative solutions and cutting-edge technologies in modern web development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mt-8 rounded-full"></div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className={`project-card group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 
                         rounded-2xl overflow-hidden transition-all duration-700 hover:bg-slate-800/70
                         hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10
                         hover:-translate-y-2 ${
                           visibleProjects.has(project.id.toString()) 
                             ? 'opacity-100 translate-y-0' 
                             : 'opacity-0 translate-y-8'
                         }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* New Badge */}
              {project.isNew && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-green-400 to-green-500 
                               text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg
                               animate-pulse">
                  NEW
                </div>
              )}
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-700/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 
                           group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjMUUyOTNiIi8+CjxwYXRoIGQ9Ik0yMDAgMTIwTDE2MCA5NkwyNDAgOTZMMjAwIDEyMFoiIGZpbGw9IiM0NzU1NjkiLz4KPHN2Zz4K';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 
                               transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 
                              group-hover:text-slate-300 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="pt-2">
                  <p className="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                    Technologies Used
                  </p>
                  {renderTechIcons(project.technologies)}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white 
                             text-sm font-semibold py-2.5 px-4 rounded-lg text-center
                             transition-all duration-300 hover:from-green-400 hover:to-green-500
                             hover:shadow-lg hover:shadow-green-500/25 active:scale-95"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-700 hover:bg-slate-600 text-white 
                             text-sm font-semibold py-2.5 px-4 rounded-lg text-center
                             transition-all duration-300 border border-slate-600
                             hover:border-slate-500 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/0 via-green-500/5 to-blue-500/0 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* View More Projects Button */}
     
      </div>
    </section>
  );
};

export default Projects;