import React from 'react';

const ProfessionalJourney = () => {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "Skillonx",
      location: "Remote",
      period: "April 2025 - Present",
      description: "End-to-end development of web based applications using MERN stack. Included building RESTful APIs, integrating third-party services with email system, cloud based systems, and ensuring responsive design.",
      skills: ["MongoDB", "Express.js", "React", "Node.js"],
      achievements: [
        "Integrated RESTful APIs using Node.js and Express.js",
        "Implemented Email system using Nodemailer",
        "Implemented cloud-based system using Cloudinary",
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
      skills: ["JavaScript", "Node.js", "React", "Firebase", "Machine Learning", "Event Management"],
      achievements: [
        "Coordinated and led workshops on emerging technologies like React, Node.js, and Firebase.",
        "Organized successful hackathons, fostering innovation and collaboration among students.",
        "Participated in Google Solution Challenge, where the team was selected in top 1000 teams globally"
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-[#0d1117] py-20 px-4 relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
    <div  className="relative z-10 max-w-7xl mx-auto" id="journey">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-400 mb-6">
            Professional Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Building real-world experience through innovative projects
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Now visible on all screens */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-green-500 to-green-600"></div>
          
          {experiences.map((exp, index) => (
            <div className="relative mb-12 sm:mb-16 last:mb-0" key={exp.id}>
              {/* Timeline Marker */}
              <div className="absolute left-2 sm:left-3.5 w-4 h-4 bg-green-400 rounded-full border-4 border-black shadow-lg shadow-green-400/50"></div>
              
              {/* Content Card with Glass Effect */}
              <div className="ml-12 sm:ml-16 bg-gray-900/30 backdrop-blur-lg border border-gray-700/50 rounded-lg p-6 sm:p-8 hover:border-green-400/60 hover:bg-gray-800/40 transition-all duration-300 shadow-xl shadow-black/20">
                {/* Role and Company */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {exp.role}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300">
                    <span className="font-semibold text-green-400">{exp.company}</span>
                    <span className="hidden sm:inline text-gray-500">•</span>
                    <span className="text-gray-400">{exp.location}</span>
                    <span className="bg-green-400/80 backdrop-blur-sm text-black px-2 py-1 rounded text-xs sm:text-sm font-medium shadow-lg">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  {exp.description}
                </p>
                
                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-green-400/20 backdrop-blur-sm border border-green-400/30 text-green-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-green-400/30 hover:text-green-200 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Achievements */}
                <div>
                  <ul className="space-y-2 sm:space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li 
                        key={achievementIndex}
                        className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default ProfessionalJourney;