import React from 'react';
import Section from '../shared/Section';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="items-start">
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-300">Objective</h2>
        <p className="text-lg text-gray-300 mb-4">
          Motivated Computer Science Major seeking employment to apply and enhance technical skills in a real-world setting. Eager to contribute to innovative projects, collaborate with a dynamic team, and gain practical experience in the CS realm.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;