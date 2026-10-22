import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { Section } from '../components/Section';
import styles from './Projects.module.css';

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <Section
      id="projects"
      eyebrow="04 / Projects"
      title="Featured Projects"
      description="Enterprise systems delivered for employers and clients across finance, travel, retail, and utilities. All are proprietary employer work, shown here without public repository links."
      nextSection={{ id: 'education', label: 'Education' }}
    >
      <div className={styles.featuredGrid}>
        {featured.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <div className={styles.compactGrid}>
        {rest.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
