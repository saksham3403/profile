
import React from 'react';
import type { Skill } from '../types';
import AnimatedSection from './AnimatedSection';

// SVG Icon Components
const WebDevIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-cyan-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const GraphicDesignIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-cyan-400"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>;
const DropshippingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-cyan-400"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v2"/><path d="M21 14v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m3.4 9 8.6 5 8.6-5"/><path d="M12 22V14"/></svg>;
const GovIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-cyan-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const CommunicationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-cyan-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
const CSharpIcon = () => (
    <div className="w-8 h-8 text-cyan-400 font-bold text-2xl flex items-center justify-center border-2 border-cyan-400 rounded-md">
        C#
    </div>
);
const AiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-cyan-400"><path d="M12 8V4H8"/><rect x="8" y="16" width="8" height="4" rx="1"/><path d="M12 16v-4"/><path d="M8 12h8"/></svg>;

const skillsData: Skill[] = [
  { name: 'Web Development', icon: <WebDevIcon /> },
  { name: 'Graphic Design', icon: <GraphicDesignIcon /> },
  { name: 'Dropshipping', icon: <DropshippingIcon /> },
  { name: 'Government Works', icon: <GovIcon /> },
  { name: 'Communication', icon: <CommunicationIcon /> },
  { name: 'C#', icon: <CSharpIcon /> },
  { name: 'AI Tuning', icon: <AiIcon /> },
];

const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills" className="bg-black/20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
        My Skills
      </h2>
      <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-5xl mx-auto">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800/50 p-6 rounded-lg flex flex-col items-center justify-center space-y-4 border border-gray-700 hover:border-cyan-400 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 aspect-square"
          >
            {skill.icon}
            <p className="font-medium text-gray-200 text-center text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;
