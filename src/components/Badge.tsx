import type { PropsWithChildren, ReactNode } from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  variant?: 'default' | 'accent';
  mono?: boolean;
  icon?: ReactNode;
}

export function Badge({
  children,
  variant = 'default',
  mono,
  icon,
}: PropsWithChildren<BadgeProps>) {
  const classes = [styles.badge, styles[variant], mono && styles.mono]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes}>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}
