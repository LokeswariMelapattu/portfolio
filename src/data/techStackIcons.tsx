import type { IconType } from 'react-icons';
import {
  SiApachekafka,
  SiBootstrap,
  SiClaude,
  SiCss,
  SiDocker,
  SiDotnet,
  SiGithub,
  SiGithubcopilot,
  SiGitlab,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSap,
  SiSharp,
  SiTypescript,
} from 'react-icons/si';
import { DiJava, DiMsqlServer } from 'react-icons/di';
import { TbBrandAws, TbBrandAzure, TbBrandOpenai } from 'react-icons/tb';

export interface TechStackIcon {
  label: string;
  icon: IconType;
  color: string;
}

// A curated, deduplicated highlight reel of the technologies in skills.ts —
// several skill entries (e.g. ASP.NET MVC, VB.NET, WCF, ADO.NET, EF) share the
// same .NET logo, so only one representative icon per distinct brand mark is
// shown here. Colors are each technology's official brand color.
export const techStackIcons: TechStackIcon[] = [
  { label: '.NET', icon: SiDotnet, color: '#512BD4' },
  { label: 'C#', icon: SiSharp, color: '#239120' },
  { label: 'Java', icon: DiJava, color: '#f89820' },
  { label: 'Python', icon: SiPython, color: '#3776AB' },
  { label: 'React', icon: SiReact, color: '#61DAFB' },
  { label: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { label: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { label: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { label: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { label: 'CSS', icon: SiCss, color: '#663399' },
  { label: 'jQuery', icon: SiJquery, color: '#0769AD' },
  { label: 'SQL Server', icon: DiMsqlServer, color: '#CC2927' },
  { label: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { label: 'Microsoft Azure', icon: TbBrandAzure, color: '#0078D4' },
  { label: 'AWS', icon: TbBrandAws, color: '#FF9900' },
  { label: 'Docker', icon: SiDocker, color: '#2496ED' },
  { label: 'GitHub', icon: SiGithub, color: '#181717' },
  { label: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
  { label: 'Kafka', icon: SiApachekafka, color: '#231F20' },
  { label: 'SAP Crystal Reports', icon: SiSap, color: '#0FAAFF' },
  { label: 'GitHub Copilot', icon: SiGithubcopilot, color: '#000000' },
  { label: 'Claude Code', icon: SiClaude, color: '#D97757' },
  { label: 'ChatGPT', icon: TbBrandOpenai, color: '#10A37F' },
];
