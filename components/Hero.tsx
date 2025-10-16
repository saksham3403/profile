import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden text-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="container mx-auto px-6 z-10">
        {/* Content Container */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            <span className="block text-2xl md:text-3xl text-gray-400 font-light mb-2">Hello, I'm</span>
            <span className="text-cyan-400">Saksham Singh</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
            Full Stack Web Developer & Social Media Manager
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            I specialize in building and managing web applications, AI tuning, and dropshipping, helping businesses grow and stay secure online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              View Resume
            </a>
            <a href="#contact" className="bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
