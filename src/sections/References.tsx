import { references } from '../data/references';
import { ReferenceCard } from '../components/ReferenceCard';
import { Section } from '../components/Section';
import styles from './References.module.css';

export function References() {
  return (
    <Section
      id="references"
      eyebrow="07 / References"
      title="Professional References"
      description="Former managers who can speak directly to my work."
      nextSection={{ id: 'contact', label: 'Contact' }}
    >
      <div className={styles.grid}>
        {references.map((reference) => (
          <ReferenceCard key={reference.email} reference={reference} />
        ))}
      </div>
    </Section>
  );
}
