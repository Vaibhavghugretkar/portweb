import React from 'react';
import '../styles/variables.css';

const EducationalJourney = () => {
  const educations = [
    {
      id: 1,
      degree: "Diploma in Computer Science and Technology",
      institute: "Siliguri Govt Polytechnic",
      period: "June 2021 - July 2024",
      gpa: "GPA: 8.0",
      description: "Comprehensive coursework in programming, data structures, and software development.",
      highlights: [
        "Completed final year project on web development",
        "Participated in coding and tech events"
      ]
    }
    // You can add more education entries as needed
  ];

  return (
    <div className="education-section" id="education">
      <div className="education-container">
        <h2 className="education-title">Educational Journey</h2>
        <p className="education-subtitle">Building a strong foundation for technological innovation</p>
        
        <div className="education-timeline">
          {educations.map((edu) => (
            <div className="education-item" key={edu.id}>
              <div className="timeline-line">
                <div className="timeline-marker"></div>
              </div>
              
              <div className="education-card">
                <h3 className="degree-title">{edu.degree}</h3>
                <h4 className="institute-name">{edu.institute}</h4>
                
                <div className="education-details">
                  <span className="period">{edu.period}</span>
                  <span className="gpa">{edu.gpa}</span>
                </div>
                
                <p className="education-description">{edu.description}</p>
                
                <div className="education-highlights">
                  {edu.highlights.map((highlight, index) => (
                    <div className="highlight-tag" key={index}>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationalJourney;