import type { IconName } from './Icon';
import type { Project } from '../types/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Badge } from './Badge';
import { Icon } from './Icon';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ICON_TONES: Record<IconName, string> = {
  receipt: 'green',
  bolt: 'amber',
  'credit-card': 'blue',
  building: 'purple',
  box: 'teal',
  users: 'rose',
  headset: 'blue',
  plane: 'purple',
  folder: 'teal',
  briefcase: 'amber',
  leaf: 'green',
} as Record<IconName, string>;

export function ProjectCard({ project }: ProjectCardProps) {
  const revealRef = useScrollReveal<HTMLElement>();
  const classes = [
    'reveal',
    styles.card,
    project.featured ? styles.featured : '',
  ]
    .filter(Boolean)
    .join(' ');

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--glow-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--glow-y', `${event.clientY - rect.top}px`);
  }

  return (
    <article ref={revealRef} className={classes} onMouseMove={handleMouseMove}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.body}>
        <div className={styles.iconTile} data-tone={ICON_TONES[project.icon]} aria-hidden="true">
          <Icon name={project.icon} size={26} />
        </div>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.org}>{project.org}</p>
        <p className={styles.description}>{project.description}</p>
      </div>
      <ul className={styles.tech}>
        {project.tech.map((tech) => (
          <li key={tech}>
            <Badge mono>{tech}</Badge>
          </li>
        ))}
      </ul>
    </article>
  );
}
