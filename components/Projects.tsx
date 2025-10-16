
import React from 'react';
import type { Project } from '../types';
import AnimatedSection from './AnimatedSection';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'ZenCart AI',
    description: 'An AI-driven e-commerce platform for dropshipping, featuring automated product sourcing and personalized customer experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'AI'],
  },
  {
    id: 2,
    title: 'SocialPulse Analytics',
    description: 'An intelligent dashboard providing deep insights into social media campaign performance, using AI to predict trends and optimize engagement.',
    imageUrl: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'ContentCraft AI',
    description: 'A fine-tuned language model application that generates high-quality, SEO-optimized marketing copy for various platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-95fc69623ba4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['SvelteKit', 'Tailwind CSS', 'Gemini API', 'Firebase'],
  },
];


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden group transform transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
      <div className="overflow-hidden h-48">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <AnimatedSection id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
        Recent Projects
      </h2>
      <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
