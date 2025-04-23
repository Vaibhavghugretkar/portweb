import React from 'react';
import '../styles/variables.css';

const ProfessionalJourney = () => {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "Skillonx",
      location: "Remote",
      period: "April 2025 - Present",
      description: "End-to-end development of web based applications using MERN stack. Included building RESTful APIs, integrating third-party services with email system , cloud based systems, and ensuring responsive design.",
      skills: ["MongoDB", "Express.js", "React", "Node.js"],
      achievements: [
        "Integrated RESTful APIs using Node.js and Express.js",
        "Implemented Email system using Nodemailer",
        "Implemented cloud-based sytem using clioudinary",
      ]
    },
    {
        id: 2,
        role: "Microsoft Learn Student Ambassador",
        company: "Microsoft",
        location: "Remote",
        period: "June 2023 - Present",
        description: "As a Microsoft Learn Student Ambassador, I engage with the student community by sharing resources and assisting with technology learning, while developing technical skills and leadership experience.",
        skills: ["Git", "Github", "Visual Studio Code", "Microsoft Azure Fundamentals"],
        achievements: [
          "Created a custom learning path using Microsoft Learn",
          "Developed a portfolio WebApp and deployed on Azure",
        ]
      },
      {
        id: 3,
        role: "Technical Core Member",
        company: "Google Developer Students Club",
        location: "On-Site",
        period: "August 2023 - September 2024",
        description: "As a Technical Core Member of the Google Developer Students Club, I contribute to the development of technical projects, collaborate with peers to organize tech talks, workshops, and hackathons, and support the community in learning cutting-edge technologies.",
        skills: ["JavaScript", "Node.js", "React", "Cloud Computing", "Firebase", "Machine Learning", "API Development", "Event Management"],
        achievements: [
          "Coordinated and led workshops on emerging technologies like React, Node.js, and Firebase.",
          "Organized successful hackathons, fostering innovation and collaboration among students.",
          "Participated in Google Solution Challenge, where the team was selected in top 1000 teams globally"
        ]
      }
      
  ];

  return (
    <div className="journey-section" id="journey">
      <div className="journey-container">
        <h2 className="journey-title">Professional Journey</h2>
        <p className="journey-subtitle">Building real-world experience through innovative projects</p>
        
        <div className="timeline">
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.id}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="role-title">{exp.role}</h3>
                
                <div className="company-info">
                  <span className="company-name">{exp.company}</span>
                  <span className="info-separator">•</span>
                  <span className="location-tag">{exp.location}</span>
                  <span className="period-tag">{exp.period}</span>
                </div>
                
                <p className="job-description">{exp.description}</p>
                
                <div className="skill-tags">
                  {exp.skills.map((skill, index) => (
                    <span className="skill-tag" key={index}>{skill}</span>
                  ))}
                </div>
                
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, index) => (
                    <li className="achievement-item" key={index}>
                      <span className="bullet-point"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalJourney;