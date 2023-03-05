export interface ExperienceType {
  id: number;
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  source: string;
  firstPara: string;
  secondPara: string;
}

export interface Experience {
  experienceList: ExperienceType[];
}
