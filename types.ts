
// FIX: Import React to resolve 'Cannot find namespace React' error.
import React from 'react';

export interface Skill {
  name: string;
  level: number; // Percentage from 0 to 100
  icon: React.ReactNode;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  details: string[];
}

export interface Interest {
    name: string;
    icon: React.ReactNode;
}
