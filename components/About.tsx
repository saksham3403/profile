
import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <AnimatedSection id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
        About Me
      </h2>
      <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
      <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
        <p>
          My name is Saksham Singh. I am a full stack web developer with strong skills in building and managing web applications. I am also a professional in dropshipping, AI tuning, and cyber security, helping businesses grow and stay secure online. Additionally, I specialize in social media marketing and management, boosting brands and creating digital impact across platforms.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default About;
