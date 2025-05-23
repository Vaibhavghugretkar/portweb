import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bg-black min-h-screen text-white py-16 px-4 md:px-16">
      <main className="flex flex-col items-center">
        {/* Title */}
        <div className="h-12"></div>

        <h1 className="text-4xl md:text-5xl text-center font-bold text-green-400">
          Let's Work Together!
        </h1>

        {/* Spacing div between title and paragraph */}
        <div className="h-12"></div>

        {/* Paragraph */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-300 text-lg">
            Interested in collaborating, hiring, or just having a chat? Reach out to me on your favorite platform!
          </p>
        </div>

        {/* Spacing div between paragraph and cards */}
        <div className="h-18"></div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <ContactCard 
            id="email"
            title="Email"
            subtitle="vaibhavghugretkar23@gmail.com"
            icon={
              <div className="p-8 mb-6 flex justify-center items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-green-400" size="4x" />
              </div>
            }
            isHovered={hoveredCard === "email"}
            onMouseEnter={() => setHoveredCard("email")}
            onMouseLeave={() => setHoveredCard(null)}
            link="mailto:vaibhavghugretkar23@gmail.com"
          />
          <ContactCard 
            id="linkedin"
            title="LinkedIn"
            subtitle="@vaibhavgh"
            icon={
              <div className="p-8 mb-6 flex justify-center items-center">
                <FontAwesomeIcon icon={faLinkedin} className="text-green-400" size="4x" />
              </div>
            }
            isHovered={hoveredCard === "linkedin"}
            onMouseEnter={() => setHoveredCard("linkedin")}
            onMouseLeave={() => setHoveredCard(null)}
            link="https://www.linkedin.com/in/vaibhavgh"
          />
          <ContactCard 
            id="github"
            title="GitHub"
            subtitle="@VaibhavGhugretkar"
            icon={
              <div className="p-8 mb-6 flex justify-center items-center">
                <FontAwesomeIcon icon={faGithub} className="text-green-400" size="4x" />
              </div>
            }
            isHovered={hoveredCard === "github"}
            onMouseEnter={() => setHoveredCard("github")}
            onMouseLeave={() => setHoveredCard(null)}
            link="https://github.com/VaibhavGhugretkar"
          />
        </div>
      </main>
    </div>
  );
}

function ContactCard({ 
  id, 
  title, 
  subtitle, 
  description, 
  icon, 
  isHovered, 
  onMouseEnter, 
  onMouseLeave, 
  link 
}) {
  return (
    <a 
      href={link} 
      target="_blank"
      rel="noopener noreferrer"
      className={`relative bg-gray-900 rounded-lg p-12 flex flex-col items-center text-center transition-all duration-300 aspect-square ${isHovered ? 'transform scale-105 shadow-lg shadow-green-500/50 border border-green-500/50' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      id={id}
    >
      {isHovered && (
        <div className="absolute inset-0 rounded-lg bg-green-500/20 blur-xl -z-10"></div>
      )}

      <div className="flex flex-col items-center justify-center h-full">
        {icon}
        <h3 className="text-2xl font-bold mb-3 text-center">{title}</h3>
        {subtitle && <p className="text-gray-400 text-center">{subtitle}</p>}
        {description && <p className="text-gray-400 text-center">{description}</p>}
      </div>
    </a>
  );
}