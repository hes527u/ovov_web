export interface CareerItem {
  year: string;
  company: string;
  projects: string[];
}

export const careerData: CareerItem[] = [
  {
    year: '2023-Present',
    company: 'NEXON Korea',
    projects: ['Maplestory World']
  },
  {
    year: '2022',
    company: 'Krafton',
    projects: ['Producer Pathfinders Program']
  },
  {
    year: '2019-2022',
    company: 'Studio17',
    projects: ['Cafe Forest']
  }
]; 