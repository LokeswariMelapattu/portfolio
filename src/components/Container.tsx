import type { PropsWithChildren } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  narrow?: boolean;
  className?: string;
}

export function Container({
  children,
  narrow,
  className,
}: PropsWithChildren<ContainerProps>) {
  const classes = [styles.container, narrow && styles.narrow, className]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}
