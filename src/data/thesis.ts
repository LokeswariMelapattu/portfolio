import type { Thesis } from '../types/content';

export const thesis: Thesis = {
  title: 'React Server Components Performance Evaluation',
  program: "MSc Thesis · Tampere University",
  description:
    'Evaluated the performance of React Server Components against traditional Client-Side Rendering (CSR) and Server-Side Rendering (SSR) approaches, using Core Web Vitals as the measurement framework.',
  highlights: [
    'Benchmarked scalability across rendering strategies',
    'Measured hydration cost and time-to-interactive',
    'Demonstrated reduced JavaScript bundle size with RSC',
  ],
};
