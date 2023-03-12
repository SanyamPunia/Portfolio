export interface ExperienceType {
  id: number;
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  source: string;
  description: string[];
  techStack: string[];
}

export interface Experience {
  experienceList: ExperienceType[];
}