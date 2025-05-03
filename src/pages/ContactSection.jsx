import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bg-black min-h-screen text-white py-16 px-4 md:px-16">
      {/* Main Content - Contact Section */}
      <main className="flex flex-col items-center">
        <h1 className=" mb-8 text-4xl md:text-6xl text-center font-bold text-green-400 ">
          Let's Work Together!
        </h1>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-gray-300 text-lg">
            Interested in collaborating, hiring, or just having a chat? Reach out to me on your favorite platform!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <ContactCard 
            id="email"
            title="Email"
            subtitle="vaibhavghugretkar23@gmail.com"
            icon={
              <div className="bg-green p-5 mb-6">
                <Mail className="w-12 h-12 text-green-400" />
              </div>
            }
            isHovered={hoveredCard === "email"}
            onMouseEnter={() => setHoveredCard("email")}
            onMouseLeave={() => setHoveredCard(null)}
          />
          <ContactCard 
            id="linkedin"
            title="LinkedIn"
            subtitle="@vaibhavgh"
            icon={
              <div className="bg-green p-5 mb-6">
                <Linkedin className="w-12 h-12 text-green-400" />
              </div>
            }
            isHovered={hoveredCard === "linkedin"}
            onMouseEnter={() => setHoveredCard("linkedin")}
            onMouseLeave={() => setHoveredCard(null)}
          />
          <ContactCard 
            id="github"
            title="GitHub"
            subtitle="@VaibhavGhugretkar"
            icon={
              <div className="bg-green p-5 mb-6">
                <Github className="w-12 h-12 text-green-400" />
              </div>
            }
            isHovered={hoveredCard === "github"}
            onMouseEnter={() => setHoveredCard("github")}
            onMouseLeave={() => setHoveredCard(null)}
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
      className={`relative bg-gray-900 rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300 aspect-square ${isHovered ? 'transform scale-105 shadow-lg shadow-green-500/50 border border-green-500/50' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      id={id}
    >
      {/* Glow effect for all cards when hovered */}
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