export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: 'Clean Portfolio Starter',
    description: 'Accessible, fast, and minimal Astro starter focused on content and clarity.',
    tags: ['Astro', 'Tailwind', 'Accessibility'],
    href: 'https://astro.build',
  },
  {
    title: 'UI Component Library',
    description: 'Reusable components with strong a11y and design tokens.',
    tags: ['Design System', 'A11y', 'Tokens'],
  },
  {
    title: 'Performance Case Study',
    description: 'Real-world perf improvements using partial hydration and image optimization.',
    tags: ['Performance', 'Web Vitals'],
  },
];

