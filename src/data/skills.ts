import { siReact, siTypescript, siAstro, siTailwindcss, siHtml5, siCss, siGit, siGithub, siJavascript, siUnity } from 'simple-icons';

export interface Skill {
  icon: { path: string; hex: string };
  name: string;
  slug: string;
}

export const skills: Skill[] = [
  { icon: siReact, name: 'React', slug: 'react' },
  { icon: siTypescript, name: 'TypeScript', slug: 'typescript' },
  { icon: siAstro, name: 'Astro', slug: 'astro' },
  { icon: siTailwindcss, name: 'Tailwind', slug: 'tailwindcss' },
  { icon: siHtml5, name: 'HTML', slug: 'html5' },
  { icon: siCss, name: 'CSS', slug: 'css' },
  { icon: siGit, name: 'Git', slug: 'git' },
  { icon: siGithub, name: 'GitHub', slug: 'github' },
  { icon: siJavascript, name: 'JavaScript', slug: 'javascript' },
  { icon: siUnity, name: 'Unity', slug: 'unity' },
];

export const skillMap = new Map(skills.map((s) => [s.slug, s]));
