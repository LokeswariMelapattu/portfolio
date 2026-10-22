import type { PropsWithChildren, ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  meta: string;
  badge?: ReactNode;
}

export function TimelineItem({
  title,
  subtitle,
  meta,
  badge,
  children,
}: PropsWithChildren<TimelineItemProps>) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className={`reveal ${styles.item}`}>
      <div className={styles.rail} aria-hidden="true">
        <span className={styles.dot} />
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h3 className={styles.title}>{title}</h3>
          {badge}
        </div>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.meta}>{meta}</p>
        {children}
      </div>
    </div>
  );
}
