export interface Project {
  id: string;
  title: string;
  description1: string;
  description2: string;
  link: string;
  tags: string[];
  color: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Achievement {
  year: string;
  title: string;
  role: string;
}
