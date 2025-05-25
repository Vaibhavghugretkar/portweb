import React, { useState, useEffect } from 'react';
import SocialLinks from './SocialLinks';
import Button from './Button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const heroElement = document.querySelector('.hero');
    if (heroElement) observer.observe(heroElement);

    return () => {
      clearTimeout(timer);
      if (heroElement) observer.unobserve(heroElement);
    };
  }, []);

  return (
    <section className="hero">
      <div className="shimmer-background"></div>
      <div className="container">
        <div className="left">
          <p className={`welcome ${isLoaded ? 'show' : ''}`}>WELCOME TO MY PORTFOLIO</p>
          <h1 className={`title ${isLoaded ? 'show' : ''}`}>
            Hey, I'm <span className="highlight">Vaibhav</span>
          </h1>
          <h2 className={`subtitle ${isLoaded ? 'show' : ''}`}>
            Building Digital<br />Excellence
          </h2>
          <h3 className={`role ${isLoaded ? 'show' : ''}`}>Full Stack Web Developer</h3>
          <p className={`desc ${isLoaded ? 'show' : ''}`}>
            Transforming ideas into elegant digital solutions. I specialize in creating
            seamless, user-centric experiences that blend innovation with functionality.
          </p>
          <div className={`actions ${isLoaded ? 'show' : ''}`}>
            <Button 
              text="DOWNLOAD CV →"
              link="https://drive.google.com/file/d/1CIafs1dApkkn5ytQCi0X9QZviGNBLNuh/view?usp=sharing"
            />
            <SocialLinks />
          </div>
        </div>

        <div className="right">
          <div className={`image-container ${isLoaded ? 'loaded' : ''}`}>
            <img src="/assets/images/ChatGPT Image May 5, 2025, 11_30_37 AM.png" alt="Vaibhav Gh" />
            <div className="badge">
              <span className="dot"></span> Available for hire
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(to right, #0f172a, #080a15);
          color: #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .shimmer-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.2) 0%, transparent 50%);
          animation: shimmerGlow 4s ease-in-out infinite alternate;
          pointer-events: none;
          z-index: 1;
        }

        .shimmer-background::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: 
            conic-gradient(from 0deg at 50% 50%, 
              transparent 0deg, 
              rgba(34, 197, 94, 0.1) 60deg, 
              rgba(16, 185, 129, 0.2) 120deg, 
              transparent 180deg, 
              rgba(34, 197, 94, 0.15) 240deg, 
              transparent 360deg);
          animation: shimmerRotate 8s linear infinite;
          opacity: 0.6;
        }

        .shimmer-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(45deg, 
              transparent 30%, 
              rgba(34, 197, 94, 0.1) 50%, 
              transparent 70%);
          animation: shimmerWave 3s ease-in-out infinite;
          transform: translateX(-100%);
        }

        @keyframes shimmerGlow {
          0% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.4;
            transform: scale(1.02);
          }
        }

        @keyframes shimmerRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes shimmerWave {
          0% {
            transform: translateX(-100%) skewX(-15deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%) skewX(-15deg);
            opacity: 0;
          }
        }

        .container {
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          gap: 2rem;
          max-width: 1200px;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 768px) {
          .container {
            flex-direction: row-reverse;
            justify-content: space-between;
          }
        }

        .left {
          flex: 1;
          text-align: center;
        }

        @media (min-width: 768px) {
          .left {
            text-align: left;
          }
        }

        .welcome {
          font-size: 0.875rem;
          color: #38bdf8;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.5s ease;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-top: 0.5rem;
          color: #f8fafc;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.6s ease 0.1s;
        }

        .highlight {
          color: #94a3b8;
        }

        .subtitle {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 0.5rem;
          color: #22c55e;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.6s ease 0.2s;
        }

        .role {
          font-size: 1.25rem;
          margin-top: 1rem;
          color: #10b981;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.6s ease 0.3s;
        }

        .desc {
          font-size: 1rem;
          color: #cbd5e1;
          margin-top: 1rem;
          line-height: 1.6;
          max-width: 600px;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.6s ease 0.4s;
        }

        .actions {
          margin-top: 1.5rem;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.6s ease 0.5s;
        }

        .right {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .image-container {
          position: relative;
          max-width: 300px;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          transform: translateY(20px);
          opacity: 0;
          transition: all 1s ease;
        }

        .image-container.loaded {
          transform: translateY(0);
          opacity: 1;
        }

        .image-container img {
          width: 100%;
          display: block;
          border-radius: 1rem;
        }

        .badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: rgba(34, 197, 94, 0.9);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .dot {
          width: 0.5rem;
          height: 0.5rem;
          background-color: white;
          border-radius: 9999px;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }

        .show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;