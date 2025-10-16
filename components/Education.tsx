
import React from 'react';
import AnimatedSection from './AnimatedSection';
import type { EducationItem } from '../types';

const educationData: EducationItem[] = [
    {
        school: 'The Aditya Birla School',
        period: '10th-12th',
        location: 'GCW Township, Kovaya',
        details: 'High School',
    },
    {
        school: 'DPS Damoh',
        period: '2016 - 2023',
        location: 'Ojaswini Nagar, Damoh',
        details: 'High School (3rd-9th)',
    },
];


const Education: React.FC = () => {
  return (
    <AnimatedSection id="education">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
        Education
      </h2>
      <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        {educationData.map((item, index) => (
          <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-1">
            <h3 className="text-xl font-bold text-white">{item.school}</h3>
            <p className="text-cyan-400 font-medium mb-2">{item.location}</p>
            <p className="text-gray-500 text-sm mb-1">{item.details}</p>
            <p className="text-gray-500 text-sm">{item.period}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Education;
