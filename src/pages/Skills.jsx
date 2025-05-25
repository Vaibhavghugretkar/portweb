import React, { useState, useEffect } from 'react';
import { FaNodeJs, FaReact, FaJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs, SiFramer } from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleSkills, setVisibleSkills] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.getAttribute('data-skill-id');
            setVisibleSkills(prev => new Set([...prev, skillId]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [activeCategory]);

  const categories = ['All', 'Frontend', 'Backend', 'Tools'];

  const skills = [
    { 
      id: 1, 
      name: 'JavaScript', 
      icon: <FaJs className="w-12 h-12" />, 
      categories: ['Frontend', 'Backend'],
      color: 'text-yellow-400 md:group-hover:text-yellow-400',
      bgColor: 'bg-yellow-400/10 md:group-hover:bg-yellow-400/10',
     hoverColor: 'hover:bg-green-500/20'
    },
    { 
      id: 2, 
      name: 'MongoDB', 
      icon: <SiMongodb className="w-12 h-12" />, 
      categories: ['Backend'],
      color: 'text-green-500 md:group-hover:text-green-500',
      bgColor: 'bg-green-500/10 md:group-hover:bg-green-500/10',
      hoverColor: 'hover:bg-green-500/20'
    },
    { 
      id: 3, 
      name: 'Express Js', 
      icon: <SiExpress className="w-12 h-12" />, 
      categories: ['Backend'],
      color: 'text-gray-300 md:group-hover:text-gray-300',
      bgColor: 'bg-gray-300/10 md:group-hover:bg-gray-300/10',
      hoverColor: 'hover:bg-gray-300/20'
    },
    { 
      id: 4, 
      name: 'React', 
      icon: <FaReact className="w-12 h-12" />, 
      categories: ['Frontend'],
      color: 'text-cyan-400 md:group-hover:text-cyan-400',
      bgColor: 'bg-cyan-400/10 md:group-hover:bg-cyan-400/10',
      hoverColor: 'hover:bg-cyan-400/20'
    },
    { 
      id: 5, 
      name: 'Next.js', 
      icon: <SiNextdotjs className="w-12 h-12" />, 
      categories: ['Frontend'],
      color: 'text-white md:group-hover:text-white',
      bgColor: 'bg-white/10 md:group-hover:bg-white/10',
      hoverColor: 'hover:bg-white/20'
    },
    { 
      id: 6, 
      name: 'Node Js', 
      icon: <FaNodeJs className="w-12 h-12" />, 
      categories: ['Backend'],
      color: 'text-green-500 md:group-hover:text-green-500',
      bgColor: 'bg-green-500/10 md:group-hover:bg-green-500/10',
      hoverColor: 'hover:bg-green-500/20'
    },
    { 
      id: 7, 
      name: 'Git', 
      icon: <FaGitAlt className="w-12 h-12" />, 
      categories: ['Tools'],
      color: 'text-orange-500 md:group-hover:text-orange-500',
      bgColor: 'bg-orange-500/10 md:group-hover:bg-orange-500/10',
      hoverColor: 'hover:bg-orange-500/20'
    },
    { 
      id: 8, 
      name: 'GitHub', 
      icon: <FaGithub className="w-12 h-12" />, 
      categories: ['Tools'],
      color: 'text-gray-400 md:group-hover:text-gray-400',
      bgColor: 'bg-gray-400/10 md:group-hover:bg-gray-400/10',
      hoverColor: 'hover:bg-gray-400/20'
    },
    { 
      id: 9, 
      name: 'Framer Motion', 
      icon: <SiFramer className="w-12 h-12" />, 
      categories: ['Tools'],
      color: 'text-pink-500 md:group-hover:text-pink-500',
      bgColor: 'bg-pink-500/10 md:group-hover:bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20'
    },
  ];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.categories.includes(activeCategory));

  return (
    <section className="min-h-screen bg-[#0d1117] py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text 
                         bg-green-400 mb-6 tracking-tight">
            My Skills
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            I put your ideas and thus your wishes in the form of a unique web project that 
            inspires you and your customers.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300
                         border backdrop-blur-sm ${
                           activeCategory === category
                             ? 'bg-gradient-to-r from-green-500 to-green-600 text-white border-green-500 shadow-lg shadow-green-500/25'
                             : 'bg-slate-800/50 text-slate-300 border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 hover:text-white'
                         }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              data-skill-id={skill.id}
              className={`skill-card group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 
                         rounded-2xl p-6 transition-all duration-700 hover:bg-slate-800/60
                         hover:border-green-500/30 hover:shadow-xl hover:shadow-green-500/10
                         hover:-translate-y-2 cursor-pointer ${skill.hoverColor} ${
                           visibleSkills.has(skill.id.toString()) 
                             ? 'opacity-100 translate-y-0 rotateY-0' 
                             : 'opacity-0 translate-y-8 rotateY-180'
                         }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: visibleSkills.has(skill.id.toString()) 
                  ? 'perspective(1000px) rotateY(0deg)' 
                  : 'perspective(1000px) rotateY(180deg)'
              }}
            >
              {/* Skill Icon */}
              <div className={`flex items-center justify-center w-20 h-20 mx-auto mb-4 
                              rounded-2xl ${skill.bgColor} transition-all duration-500
                              group-hover:scale-110`}>
                <div className={`md:text-gray-500 ${skill.color} transition-all duration-500`}>
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-white font-semibold text-center text-sm group-hover:text-green-400 
                           transition-colors duration-300">
                {skill.name}
              </h3>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/0 via-green-500/5 to-blue-500/0 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Subtle Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent 
                             bg-gradient-to-r from-green-500/20 via-transparent to-blue-500/20 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                             [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] 
                             [mask-composite:subtract] pointer-events-none"></div>
            </div>
          ))}
        </div>
      
      </div>

      {/* Additional Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
             }}>
        </div>
      </div>
    </section>
  );
};

export default Skills;