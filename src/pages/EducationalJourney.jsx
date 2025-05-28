import React from 'react';

const EducationalJourney = () => {
    const educations = [

      {
      id: 1,
      degree: "School Education",
      institute: "St Paul's High School, Belgaum",
      period: "June 2008 - August 2020",
      gpa: "Percentage : 97.92",
      description: "Balanced academic excellence with extracurricular participation, fostering all-round development.",
      highlights: [
        "Participated in debate and science events.",
        "Participated in Basketball and Athletics at the state level"
      ]
    },

    {
      id: 2,
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
        <section className="min-h-screen bg-[#0d1117] py-20 px-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div  className="relative z-10 max-w-7xl mx-auto" id="education">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-400 mb-6">
            Educational Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A journey fueled by curiosity, dedication, and a deep commitment to mastering computer science fundamentals, problem-solving, and real-world application.
          </p>
        </div>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Center Timeline Line - Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-green-500 to-green-600 hidden lg:block"></div>
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-green-500 to-green-600 lg:hidden"></div>
          
          <div className="space-y-16 lg:space-y-24">
            {educations.map((edu, index) => (
              <div className="relative" key={edu.id}>
                {/* Timeline Marker - Desktop Center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-12 w-5 h-5 bg-green-400 rounded-full border-4 border-black shadow-lg shadow-green-400/50 z-20 hidden lg:block"></div>
                
                {/* Mobile Timeline Marker */}
                <div className="absolute left-2 sm:left-3.5 top-6 w-4 h-4 bg-green-400 rounded-full border-4 border-black shadow-lg shadow-green-400/50 z-10 lg:hidden"></div>
                
                {/* Card Container */}
                <div className={`
                  flex lg:justify-${index % 2 === 0 ? 'start' : 'end'}
                  ml-12 sm:ml-16 lg:ml-0
                `}>
                  {/* Content Card */}
                  <div className={`
                    w-full lg:w-5/12 xl:w-2/5
                    ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}
                    bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 sm:p-8 
                    hover:border-green-400/60 hover:bg-gray-800/50 transition-all duration-300 
                    shadow-2xl shadow-black/30
                  `}>
                    
                    {/* Degree Title */}
                    <div className="text-center lg:text-left mb-6">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                        {edu.degree}
                      </h3>
                      
                      {/* Institute */}
                      <h4 className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4 font-medium leading-relaxed">
                        {edu.institute}
                      </h4>
                      
                      {/* Period and GPA */}
                      <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-4">
                        <span className="text-green-400 font-bold text-base sm:text-lg">
                          {edu.period}
                        </span>
                        {edu.gpa && edu.gpa !== "—" && (
                          <span className="bg-green-400 text-black px-4 py-2 rounded-full text-sm sm:text-base font-bold shadow-lg">
                            {edu.gpa}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Description */}
                    {edu.description && (
                      <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base lg:text-lg text-center lg:text-left">
                        {edu.description}
                      </p>
                    )}
                    
                    {/* Highlights */}
                    <div className="space-y-3">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <div 
                          key={highlightIndex}
                          className="bg-green-400/15 backdrop-blur-sm border border-green-400/30 text-green-300 px-4 py-3 rounded-lg text-sm sm:text-base lg:text-lg font-medium hover:bg-green-400/25 hover:border-green-400/50 transition-all duration-200 text-center lg:text-left"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default EducationalJourney;