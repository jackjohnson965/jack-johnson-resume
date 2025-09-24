import React from 'react';
import Section from '../shared/Section';
import { PROJECTS_DATA } from '../../constants';

const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects" className="items-center">
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-amber-300">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-amber-500/30 flex flex-col"
            >
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-6 text-left flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-amber-300">{project.title}</h3>
                <p className="text-gray-400 mt-2 text-sm flex-grow">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-amber-900/50 text-amber-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;