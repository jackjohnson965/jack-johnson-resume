
import React from 'react';
import { useScrollPosition } from './hooks/useScrollPosition';
import Character from './components/shared/Character';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import EducationSection from './components/sections/EducationSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import InterestsSection from './components/sections/InterestsSection';
import ContactSection from './components/sections/ContactSection';
import { TOTAL_SCROLL_HEIGHT } from './constants';

const App: React.FC = () => {
  const scrollY = useScrollPosition();
  const scrollPercent = scrollY / (TOTAL_SCROLL_HEIGHT - window.innerHeight);

  return (
    <div className="bg-gray-900 text-white font-sans overflow-x-hidden">
      <main style={{ height: `${TOTAL_SCROLL_HEIGHT}px` }} className="relative">
        <Character scrollPercent={scrollPercent} />

        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          <ProjectsSection />
          <ExperienceSection />
          <InterestsSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default App;
