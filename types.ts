// Fix: Import ReactNode to use as a type.
import type { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  school: string;
  period: string;
  location: string;
  details: string;
}
