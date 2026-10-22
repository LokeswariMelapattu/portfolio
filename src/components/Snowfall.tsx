import { useMemo, useState } from 'react';
import styles from './Snowfall.module.css';

const FLAKE_COUNT = 40;

interface Flake {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
}

function createFlakes(): Flake[] {
  return Array.from({ length: FLAKE_COUNT }, (_, id) => ({
    id,
    left: Math.random() * 100,
    size: 2 + Math.random() * 4,
    duration: 10 + Math.random() * 14,
    delay: Math.random() * -24,
    drift: (Math.random() - 0.5) * 80,
    opacity: 0.3 + Math.random() * 0.5,
  }));
}

export function Snowfall() {
  const [enabled] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const flakes = useMemo(() => (enabled ? createFlakes() : []), [enabled]);

  if (!enabled) return null;

  return (
    <div className={styles.field} aria-hidden="true">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className={styles.flake}
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            '--drift': `${flake.drift}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
