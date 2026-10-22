import { experience } from '../data/experience';
import { Section } from '../components/Section';
import { TimelineItem } from '../components/TimelineItem';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 / Experience"
      title="Professional Experience"
      description="Two long-tenured roles spanning finance, travel, and enterprise systems — with deep ownership rather than short stints."
      nextSection={{ id: 'projects', label: 'Projects' }}
    >
      <div className={styles.timeline}>
        {experience.map((entry) => (
          <TimelineItem
            key={entry.company}
            title={entry.role}
            subtitle={entry.company}
            meta={`${entry.period} · ${entry.location}`}
          >
            <ul className={styles.highlights}>
              {entry.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </div>
    </Section>
  );
}
