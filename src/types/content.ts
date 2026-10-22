import type { IconName } from '../components/Icon';

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email';
}

export interface Profile {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  location: string;
  workAuthorization: string;
  summary: string;
  languages: { name: string; level: 1 | 2 | 3 | 4 }[];
  email: string;
  resumeHref: string;
  photoHref?: string;
  socials: SocialLink[];
}

export interface SkillGroup {
  category: string;
  icon: IconName;
  core?: boolean;
  skills: string[];
}

export interface SoftSkill {
  name: string;
  description: string;
  icon: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Project {
  name: string;
  org: string;
  description: string;
  tech: string[];
  icon: IconName;
  featured?: boolean;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  inProgress?: boolean;
}

export interface Reference {
  name: string;
  designation: string;
  company: string;
  email: string;
  phone: string;
  note?: string;
}

export interface Thesis {
  title: string;
  program: string;
  description: string;
  highlights: string[];
}
