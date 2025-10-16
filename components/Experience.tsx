
import React from 'react';
import AnimatedSection from './AnimatedSection';
import type { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    role: 'Founder and Owner',
    company: 'Affilix India / Zodiark',
    period: '2025 - Current',
    description: [
      'Founded and manage Afflix India, a business dedicated to selling sports equipment across India using the dropshipping model.',
      'Provide customers with high-quality sports products efficiently, leveraging innovative e-commerce solutions to reach a wide audience.',
    ],
  },
  {
    role: 'Social Media Manager',
    company: 'Kotam Enterprises',
    period: '2024 - 2025',
    description: [
      "Managed and grew the company's social media presence by creating engaging content and campaigns across platforms.",
      'Collaborated with marketing and creative teams to optimize brand messaging and audience engagement.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience" className="bg-black/20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
        Work Experience
      </h2>
      <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
      <div className="max-w-3xl mx-auto space-y-8">
        {experienceData.map((item, index) => (
          <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                <p className="text-cyan-400 font-semibold">{item.company}</p>
              </div>
              <p className="text-gray-500 text-sm flex-shrink-0 ml-4">{item.period}</p>
            </div>
            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm pl-2">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;
