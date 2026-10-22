import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    name: 'Green Choices for Logistics',
    org: 'Demola',
    description:
      'Analyzed fuel consumption and CO2 emissions data to optimize logistics efficiency and reduce environmental impact.',
    tech: ['Python', 'Data Visualization'],
    icon: 'leaf',
    featured: true,
  },
  {
    name: 'FIESTA',
    org: 'Product of Tracom Solutions',
    description:
      'Enterprise back-office accounting system for travel companies. Optimized and supported the platform, increasing accounting accuracy by 20% and improving reporting efficiency for management decisions.',
    tech: ['.NET', 'SQL Server', 'SAP Crystal Reports', 'PL/SQL'],
    icon: 'receipt',
    featured: true,
  },
  {
    name: 'Customer and Card Management System (CMS)',
    org: 'WOQOD',
    description:
      "Complete software solution for managing customer profiles, petrol card profiles, customer payments, and card deliveries.",
    tech: ['.NET', 'SQL Server', 'ASP.NET MVC'],
    icon: 'credit-card',
    featured: true,
  },
  {
    name: 'Consumer and Station Management System (CSMS)',
    org: 'TASMU',
    description:
      'Web application used by electric vehicle charging stations to manage user profiles, service providers, stations, charge points, and connectors.',
    tech: ['.NET Core', 'React', 'REST API', 'Azure'],
    icon: 'bolt', 
  },
  {
    name: 'Merchant Management System (MMS)',
    org: 'Diyar United',
    description: 'Software solution which manages merchant profiles and transaction receipts.',
    tech: ['.NET Core', 'React', 'SQL Server'],
    icon: 'building',
  },
  {
    name: 'Inventory Management System (IMS)',
    org: 'Petpoint',
    description:
      'Inventory management system that tracks all goods throughout the entire supply chain, from purchasing to sales.',
    tech: ['.NET', 'SQL Server', 'Entity Framework'],
    icon: 'box',
  },
  {
    name: 'Customer Relationship Management (CRM)',
    org: 'Tracom Solutions',
    description:
      'In-house application that manages client data, records communication, and tracks client requests along with status and payment history.',
    tech: ['.NET', 'SQL Server', 'ADO.NET'],
    icon: 'users',
  },
  {
    name: 'Call Logger',
    org: 'Galileo',
    description:
      'Inventory management system that manages both hardware and software assets and streamlines the monitoring and maintenance of stocked products.',
    tech: ['.NET', 'SQL Server'],
    icon: 'headset',
  },
  {
    name: 'Airline Booking System (ABS)',
    org: 'Como and Kuwaitstar Travels',
    description:
      'Windows-based application that manages stock and bookings of airlines and hotels for travel agencies, incorporating airline schedules, pricing modules, and passenger modules.',
    tech: ['.NET', 'VB.NET', 'SQL Server'],
    icon: 'plane',
  },
  {
    name: 'Document Management System (DMS)',
    org: 'Horizon Travels',
    description:
      'Web application used to track, manage, and store documents digitally to reduce paper usage.',
    tech: ['.NET', 'ASP.NET MVC', 'SQL Server'],
    icon: 'folder',
  },
  {
    name: 'HR Management System (ATOMS)',
    org: 'Al-rashed and Jumbo Travels',
    description:
      'Complete HR system maintaining payroll processing with allowance and deduction automation, attendance management, employee growth history, air passage, indemnity calculators, and accounting effects.',
    tech: ['.NET', 'SQL Server', 'SAP Crystal Reports'],
    icon: 'briefcase',
  },
];
