import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div id="contacts" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent mb-6">
              Let's Work Together!
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-teal-400 mx-auto rounded-full"></div>
          </div>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mt-8 leading-relaxed">
            Interested in collaborating, hiring, or just having a chat? 
            <span className="text-green-400 font-medium"> Reach out to me</span> on your favorite platform!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <ContactCard 
            id="email"
            title="Email"
            subtitle="vaibhavghugretkar23@gmail.com"
            icon={<FontAwesomeIcon icon={faEnvelope} className="text-green-400 text-5xl sm:text-6xl" />}
            isHovered={hoveredCard === "email"}
            onMouseEnter={() => setHoveredCard("email")}
            onMouseLeave={() => setHoveredCard(null)}
            link="mailto:vaibhavghugretkar23@gmail.com"
          />
          <ContactCard 
            id="linkedin"
            title="LinkedIn"
            subtitle="@vaibhavgh"
            icon={<FontAwesomeIcon icon={faLinkedin} className="text-green-400 text-5xl sm:text-6xl" />}
            isHovered={hoveredCard === "linkedin"}
            onMouseEnter={() => setHoveredCard("linkedin")}
            onMouseLeave={() => setHoveredCard(null)}
            link="https://www.linkedin.com/in/vaibhav-ghugretkar-97b024257/"
          />
          <ContactCard 
            id="github"
            title="GitHub"
            subtitle="@VaibhavGhugretkar"
            icon={<FontAwesomeIcon icon={faGithub} className="text-green-400 text-5xl sm:text-6xl" />}
            isHovered={hoveredCard === "github"}
            onMouseEnter={() => setHoveredCard("github")}
            onMouseLeave={() => setHoveredCard(null)}
            link="https://github.com/VaibhavGhugretkar"
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm">
            Available for freelance work and full-time opportunities
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mx-2" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
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
    <div className="relative group">
      {/* Hover background glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-500 hover:border-gray-600 group-hover:transform group-hover:scale-105 aspect-square min-h-[280px] sm:min-h-[320px] block"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        id={id}
      >
        {/* Icon */}
        <div className="mb-6 text-green-400 text-5xl sm:text-6xl">
          {icon}
        </div>

        {/* Title and Subtitle */}
        <div className="flex flex-col items-center justify-center flex-1">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white group-hover:text-gray-100 transition-colors duration-300">
            {title}
          </h3>
          {subtitle && (
            <p className="text-gray-400 text-sm sm:text-base text-center break-all group-hover:text-gray-300 transition-colors duration-300 px-2">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-gray-400 text-sm text-center mt-2 group-hover:text-gray-300 transition-colors duration-300">
              {description}
            </p>
          )}
        </div>

        {/* Hover Line */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-6 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent"></div>
        </div>
      </a>
    </div>
  );
}
