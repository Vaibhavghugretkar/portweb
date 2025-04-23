import React, { useState } from 'react';
import { FaNodeJs, FaReact, FaJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs, SiFramer } from 'react-icons/si';
import '../styles/variables.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Tools'];

  const skills = [
    { id: 1, name: 'JavaScript', icon: <FaJs className="skill-icon javascript" />, categories: ['Frontend', 'Backend'] },
    { id: 2, name: 'MongoDB', icon: <SiMongodb className="skill-icon mongodb" />, categories: ['Backend'] },
    { id: 3, name: 'Express Js', icon: <SiExpress className="skill-icon express" />, categories: ['Backend'] },
    { id: 4, name: 'React', icon: <FaReact className="skill-icon react" />, categories: ['Frontend'] },
    { id: 5, name: 'Next.js', icon: <SiNextdotjs className="skill-icon nextjs" />, categories: ['Frontend'] },
    { id: 6, name: 'Node Js', icon: <FaNodeJs className="skill-icon nodejs" />, categories: ['Backend'] },
    { id: 7, name: 'Git', icon: <FaGitAlt className="skill-icon git" />, categories: ['Tools'] },
    { id: 8, name: 'GitHub', icon: <FaGithub style={{ color: 'gray'}}  className="skill-icon github" />, categories: ['Tools'] },
    { id: 9, name: 'Framer Motion', icon: <SiFramer className="skill-icon framer" />, categories: ['Tools'] },
  ];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.categories.includes(activeCategory));

  return (
    <div className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>

        <p className="skills-description">
          I put your ideas and thus your wishes in the form of a unique web project that 
          inspires you and your customers.
        </p>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div className="skill-card" key={skill.id}>
              <div className="skill-icon-container">
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
