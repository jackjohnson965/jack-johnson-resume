import React from 'react';
import Section from '../shared/Section';
import { EXPERIENCE_DATA } from '../../constants';

const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" className="items-start">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-amber-300">Experience</h2>
        <div className="relative border-l-2 border-gray-700 pl-8">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={index} className="mb-12">
              <div className="absolute -left-[11px] top-1 w-5 h-5 bg-amber-400 rounded-full border-4 border-gray-900"></div>
              <p className="text-sm text-gray-400">{job.period}</p>
              <h3 className="text-2xl font-bold text-amber-300 mt-1">{job.role}</h3>
              <p className="text-lg text-gray-300">{job.company}</p>
              <ul className="mt-2 list-disc list-inside text-gray-400 space-y-1">
                {job.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;