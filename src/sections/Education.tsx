import { education } from '../data/education';
import { Badge } from '../components/Badge';
import { Section } from '../components/Section';
import { TimelineItem } from '../components/TimelineItem';
import styles from './Education.module.css';

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="05 / Education"
      title="Education"
      nextSection={{ id: 'thesis', label: 'Thesis' }}
    >
      <div className={styles.timeline}>
        {education.map((entry) => (
          <TimelineItem
            key={entry.degree}
            title={entry.degree}
            subtitle={entry.institution}
            meta={`${entry.period} · ${entry.location}`}
            badge={
              entry.inProgress ? <Badge variant="accent">In Progress</Badge> : undefined
            }
          />
        ))}
      </div>
    </Section>
  );
}
