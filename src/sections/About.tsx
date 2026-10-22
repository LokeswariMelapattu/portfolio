import { profile } from '../data/profile';
import { Section } from '../components/Section';
import styles from './About.module.css';

const FACTS = [
  { label: 'Experience', value: '9+ years' },
  { label: 'Location', value: profile.location },
  { label: 'Status', value: profile.workAuthorization },
  {
    label: 'Focus',
    value: '.NET, React & cloud architecture',
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 / About"
      title="Background"
      nextSection={{ id: 'skills', label: 'Skills' }}
    >
      <div className={styles.grid}>
        <div className={styles.summary}>
          {profile.summary.split('\n\n').map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <dl className={styles.facts}>
          {FACTS.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
