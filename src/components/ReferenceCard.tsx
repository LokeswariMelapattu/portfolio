import type { Reference } from '../types/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from './Icon';
import styles from './ReferenceCard.module.css';

interface ReferenceCardProps {
  reference: Reference;
}

function initialsOf(name: string) {
  return name
    .replace(/^(Mr|Ms|Mrs|Dr)\.?\s+/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export function ReferenceCard({ reference }: ReferenceCardProps) {
  const revealRef = useScrollReveal<HTMLElement>();

  return (
    <article ref={revealRef} className={`reveal ${styles.card}`}>
      <div className={styles.header}>
        <span className={styles.avatar} aria-hidden="true">
          {initialsOf(reference.name)}
        </span>
        <div>
          <h3 className={styles.name}>{reference.name}</h3>
          <p className={styles.role}>{reference.designation}</p>
          <p className={styles.company}>{reference.company}</p>
        </div>
      </div>

      <div className={styles.contact}>
        <a href={`mailto:${reference.email}`} className={styles.contactLink}>
          <Icon name="email" size={16} />
          {reference.email}
        </a>
        <a href={`tel:${reference.phone.replace(/\s+/g, '')}`} className={styles.contactLink}>
          <Icon name="phone" size={16} />
          {reference.phone}
        </a>
      </div>

      {reference.note && <p className={styles.note}>{reference.note}</p>}
    </article>
  );
}
