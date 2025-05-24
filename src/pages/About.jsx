import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0d1117] text-white px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-green-500 mb-12">About Me</h1>

      <div className="flex flex-col lg:flex-row items-center text-center gap-12 max-w-6xl mx-auto">
        {/* Left - Image */}
        <motion.div
          className="w-full max-w-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <img
            src="assets/images/ChatGPT Image May 5, 2025, 11_36_25 AM.png"
            alt="Vaibhav"
            className="rounded-2xl object-cover shadow-lg w-full h-auto"
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-green-500 mb-4">Full Stack Web Developer</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Hey, my name is <span className="text-green-400 font-medium">Vaibhav Gh</span>, a dedicated{' '}
            <span className="text-green-400 font-medium">MERN developer</span> with a passion for building intuitive and responsive web applications. I enjoy crafting clean,
            efficient code that transforms ideas into interactive digital experiences.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'MongoDB', level: 'Intermediate Level' },
              { name: 'Express', level: 'Intermediate Level' },
              { name: 'React', level: 'Intermediate Level' },
              { name: 'Node.js', level: 'Intermediate Level' },
            ].map((skill, i) => (
              <motion.div
                key={i}
                className="bg-[#161b22] text-left border border-green-400 p-4 rounded-xl hover:scale-[1.02] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <h3 className="text-green-400 font-bold text-lg">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
