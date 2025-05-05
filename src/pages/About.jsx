import React from 'react';

const About = () => {
  return (
    <div className="about-page p-6">
      <h1 className="about-title text-4xl font-bold mb-6 text-center">About Me</h1>
      
      <div className="about-content flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="about-image-container">
          <img 
            src="/assets/images/ChatGPT Image May 5, 2025, 11_36_25 AM.png" 
            alt="Vaibhav" 
            className="about-image rounded-lg shadow-md"
            style={{ height: '600px', width: '500px' }}
          />
        </div>

        {/* Info Section */}
        <div className="about-info flex-1">
          <h2 className="developer-title text-2xl font-semibold mb-4">Full Stack Web Developer</h2>
          
          <p className="about-description text-base leading-relaxed mb-6">
            Hey, my name is <span className="highlight font-semibold text-blue-600">Vaibhav</span>, a dedicated MERN Developer with a 
            passion for building intuitive and responsive web applications. 
            I enjoy crafting clean, efficient code that transforms ideas into 
            interactive digital experiences.
          </p>
          
          <div className="skills-grid grid grid-cols-2 gap-4">
            <div className="skill-card bg-gray-100 rounded-lg shadow-sm p-3 h-20 flex flex-col justify-center">
              <h3 className="skill-name font-bold text-lg">MongoDB</h3>
              <p className="skill-level text-sm text-gray-600">Intermediate Level</p>
            </div>

            <div className="skill-card bg-gray-100 rounded-lg shadow-sm p-3 h-20 flex flex-col justify-center">
              <h3 className="skill-name font-bold text-lg">Express</h3>
              <p className="skill-level text-sm text-gray-600">Intermediate Level</p>
            </div>

            <div className="skill-card bg-gray-100 rounded-lg shadow-sm p-3 h-20 flex flex-col justify-center">
              <h3 className="skill-name font-bold text-lg">React</h3>
              <p className="skill-level text-sm text-gray-600">Intermediate Level</p>
            </div>

            <div className="skill-card bg-gray-100 rounded-lg shadow-sm p-3 h-20 flex flex-col justify-center">
              <h3 className="skill-name font-bold text-lg">Node.js</h3>
              <p className="skill-level text-sm text-gray-600">Intermediate Level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
