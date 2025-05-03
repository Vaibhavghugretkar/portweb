import React from 'react';
import '../styles/variables.css';

const EducationalJourney = () => {
  const educations = [
    {
      id: 1,
      degree: "B.E in Computer Science and Engineering",
      institute: "The National institute of engineering, Mysore",
      period: "December 2022 - April 2026",
      gpa: "GPA: 9.3",
      description: "Comprehensive coursework in programming, data structures, and software development.",
      highlights: [
        "Participated in coding and tech events including state and national level hackathons."
      ]
    },
  
    // You can add more education entries as needed
  ];

  return (
    <div className="education-section" id="education">
      <div className="education-container">
        <h2 className="journey-title">Educational Journey</h2>
        <p className="journey-description">
          A journey fueled by curiosity, dedication, and a deep commitment to mastering computer science fundamentals, problem-solving, and real-world application.
        </p>
        
        <div className="timeline-wrapper">
          <div className="timeline-center-line"></div>
          
          {educations.map((edu, index) => (
            <div key={edu.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-card">
                <h2 className="degree">{edu.degree}</h2>
                <h3 className="institute">{edu.institute}</h3>
                <div className="time-period">
                  <span className="period">{edu.period}</span>
                  {edu.gpa && <span className="gpa">{edu.gpa}</span>}
                </div>
                {edu.description && (
                  <p className="description">{edu.description}</p>
                )}
                <div className="highlights">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-tag">
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
              <div className="timeline-marker"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationalJourney;