import React, { useRef } from 'react';
import Section from '../shared/Section';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { TECH_SKILLS_DATA, OTHER_SKILLS_DATA } from '../../constants';
import type { Skill } from '../../types';

const SkillBar: React.FC<{ skill: Skill; isVisible: boolean }> = ({ skill, isVisible }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1 text-gray-200">
      <span className="font-semibold flex items-center">
        <span className="mr-2 text-amber-400">{skill.icon}</span>
        {skill.name}
      </span>
      <span>{skill.level}%</span>
    </div>
    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
      ></div>
    </div>
  </div>
);

const SkillsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollY = useScrollPosition();
  const isVisible = isElementInViewport(ref, scrollY);

  return (
    <Section id="skills" className="items-end">
      <div ref={ref} className="w-full max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-300 text-right">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
                {TECH_SKILLS_DATA.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
                ))}
            </div>
            <div className="flex flex-col justify-around space-y-4">
                {OTHER_SKILLS_DATA.map(category => (
                    <div key={category.title}>
                        <h3 className="text-lg font-bold text-amber-300 mb-2">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                             {category.skills.map(skill => (
                                <span key={skill} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </Section>
  );
};

const isElementInViewport = (ref: React.RefObject<HTMLElement>, scrollY: number): boolean => {
  if (!ref.current) return false;
  const { offsetTop } = ref.current;
  const screenHeight = window.innerHeight;
  return scrollY > offsetTop - screenHeight * 0.8;
};

export default SkillsSection;