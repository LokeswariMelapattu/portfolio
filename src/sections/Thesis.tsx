import { thesis } from '../data/thesis';
import { Badge } from '../components/Badge';
import { Section } from '../components/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Thesis.module.css';

export function Thesis() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section
      id="thesis"
      eyebrow="06 / Research"
      title="Master's Thesis"
      nextSection={{ id: 'references', label: 'References' }}
    >
      <div ref={revealRef} className={`reveal ${styles.card}`}>
        <p className={styles.program}>{thesis.program}</p>
        <h3 className={styles.title}>{thesis.title}</h3>
        <p className={styles.description}>{thesis.description}</p>

        <ul className={styles.highlights}>
          {thesis.highlights.map((point) => (
            <li key={point}>
              <Badge variant="accent">{point}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
