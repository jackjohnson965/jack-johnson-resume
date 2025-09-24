import React from 'react';
import Section from '../shared/Section';
import ScrollIndicator from '../shared/ScrollIndicator';

const HeroSection: React.FC = () => {
  return (
    <Section id="home" className="text-center relative">
      <div className="absolute inset-0 bg-grid-cyan-500/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_50%)]"></div>
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-teal-400 to-amber-400 animate-fade-in">
        Jack Johnson
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-300 animate-fade-in-delay">
        Computer Science & Data Science Major
      </p>
      <ScrollIndicator />
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s 0.5s ease-out forwards;
          opacity: 0;
        }
        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(18px); opacity: 0; }
        }
        .animate-scroll-down {
          animation: scroll-down 2s infinite;
        }
      `}</style>
    </Section>
  );
};

export default HeroSection;