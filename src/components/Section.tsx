import type { PropsWithChildren, ReactNode } from 'react';
import { Container } from './Container';
import { ScrollCue } from './ScrollCue';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  narrow?: boolean;
  nextSection?: { id: string; label: string };
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  narrow,
  nextSection,
  children,
}: PropsWithChildren<SectionProps>) {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <Container narrow={narrow}>
        <div ref={revealRef} className={`reveal ${styles.header}`}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          {description && <div className={styles.description}>{description}</div>}
        </div>
        {children}
        {nextSection && (
          <ScrollCue targetId={nextSection.id} label={nextSection.label} variant="inline" />
        )}
      </Container>
    </section>
  );
}
