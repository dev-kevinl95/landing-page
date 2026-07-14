export interface Project {
  id: number;
  title: string;
  description: string;
  image?: { src: string };
  techs: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Proyecto 1',
    description: 'Descripción breve del proyecto 1.',
    techs: ['react', 'typescript', 'tailwindcss'],
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2.',
    techs: ['astro', 'javascript', 'css'],
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Proyecto 3',
    description: 'Descripción breve del proyecto 3.',
    techs: ['unity', 'html5'],
    githubUrl: '#',
  },
];
