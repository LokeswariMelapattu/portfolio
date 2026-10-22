import type { SkillGroup } from '../types/content';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    icon: 'code',
    core: true,
    skills: [
      '.NET Core',
      'C#',
      'ASP.NET MVC',
      'VB.NET',
      'REST APIs',
      'Web Services',
      'WCF Services',
      'Java',
      'Python',
    ],
  },
  {
    category: 'Frontend',
    icon: 'layout',
    core: true,
    skills: ['React', 'JavaScript', 'TypeScript', 'Node', 'CSHTML', 'Bootstrap', 'CSS', 'jQuery'],
  },
  {
    category: 'Data',
    icon: 'database',
    skills: ['SQL Server', 'ADO.NET', 'Entity Framework', 'Oracle', 'MongoDB', 'PL/SQL'],
  },
  {
    category: 'Cloud & DevOps',
    icon: 'cloud',
    core: true,
    skills: ['Microsoft Azure', 'AWS', 'Docker', 'CI/CD', 'GitHub', 'GitLab'],
  },
  {
    category: 'Architecture & Integration',
    icon: 'layers',
    skills: [
      'Microservices',
      'Event-Driven Architecture',
      'Azure Service Bus',
      'Kafka',
      'OAuth',
      'JWT',
    ],
  },
  {
    category: 'Reporting',
    icon: 'receipt',
    skills: ['SAP Crystal Reports', 'SSRS'],
  },
  {
    category: 'AI-Assisted Development',
    icon: 'sparkle',
    skills: ['GitHub Copilot', 'Claude Code', 'ChatGPT'],
  },
];
