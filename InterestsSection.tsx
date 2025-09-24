import React from 'react';
import Section from '../shared/Section';
import { INTERESTS_DATA } from '../../constants';

const InterestsSection: React.FC = () => {
  return (
    <Section id="interests" className="items-center">
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-amber-300">Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {INTERESTS_DATA.map((interest, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-amber-500/30">
              <div className="text-amber-400 mb-2">
                {interest.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-200">{interest.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default InterestsSection;