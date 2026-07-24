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
    title: 'Todo App',
    description: 'Puedes crear, completar, editar, filtrar, eliminar tus tareas.',
    techs: ['react', 'typescript', 'tailwindcss'],
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Pokedex',
    description: 'Usamos la POKEAPI para mostrar la lista de pokemons.',
    techs: ['astro', 'javascript', 'css'],
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Knight Survival',
    description: 'Descripción breve del proyecto 3.',
    techs: ['unity', 'html5'],
    githubUrl: '#',
  },
];
