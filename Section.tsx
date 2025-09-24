
import React, { useRef } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollY = useScrollPosition();
  const [opacity, transform] = getAnimationValues(ref, scrollY);

  return (
    <section
      id={id}
      ref={ref}
      style={{ opacity, transform }}
      className={`min-h-screen w-full flex flex-col justify-center items-center p-8 md:p-16 transition-all duration-500 ease-out ${className}`}
    >
      {children}
    </section>
  );
};

const getAnimationValues = <T extends HTMLElement,>(ref: React.RefObject<T>, scrollY: number): [number, string] => {
  if (!ref.current) {
    return [0, 'translateY(50px)'];
  }

  const el = ref.current;
  const { offsetTop, clientHeight } = el;
  const screenHeight = window.innerHeight;
  const start = offsetTop - screenHeight;
  const end = offsetTop + clientHeight - screenHeight / 2;

  if (scrollY > start && scrollY < end) {
    const progress = (scrollY - start) / (screenHeight / 2);
    const opacity = Math.min(1, progress);
    const y = Math.max(0, 50 - 50 * progress);
    return [opacity, `translateY(${y}px)`];
  }
  
  if (scrollY >= end) {
    return [1, 'translateY(0px)'];
  }

  return [0, 'translateY(50px)'];
};


export default Section;
