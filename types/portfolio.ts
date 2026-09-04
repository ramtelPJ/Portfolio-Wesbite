export interface PersonalInfo {
  name: string;
  role: string;
  rating: number;
  location: string;
  status: string;
  image: string | null;
  initials: string;
  specialty: string;
  yearsActive: string;
  bio: string;
  resumeUrl: string;
}

export interface Stat {
  label: string;
  name: string;
  value: number;
}

export interface RadarCategory {
  category: string;
  value: number;
}

export interface Skill {
  name: string;
  value: number;
}

export interface SkillGroup {
  id: "technical" | "creative" | "professional";
  title: string;
  skills: Skill[];
}

export interface EducationEntry {
  id: string;
  yearRange: string;
  institution: string;
  degree: string;
  field: string;
  achievements: string[];
  coursework?: string[];
}

export type ProjectCategory = "web" | "mobile" | "ai" | "design";

export interface Project {
  id: string;
  name: string;
  type: string;
  category: ProjectCategory;
  year: string;
  techStack: string[];
  rating: number;
  description: string;
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  wip?: boolean;
}

export interface ExperienceMetric {
  label: string;
  value: number;
}

export interface ExperienceEntry {
  id: string;
  yearRange: string;
  company: string;
  role: string;
  description: string;
  technologies: string[];
  achievements: string[];
  metrics: ExperienceMetric[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  category: "award" | "certification" | "scholarship" | "competition";
  placeholder?: boolean;
}

export interface StatisticEntry {
  label: string;
  value: number;
  suffix?: string;
}

export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
  leetcode: string;
  resume: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  stats: Stat[];
  radar: RadarCategory[];
  skills: SkillGroup[];
  education: EducationEntry[];
  projects: Project[];
  experience: ExperienceEntry[];
  achievements: Achievement[];
  statistics: StatisticEntry[];
  social: SocialLinks;
}
