import { Icon } from './Icon';
import styles from './ScrollCue.module.css';

interface ScrollCueProps {
  targetId: string;
  label: string;
  variant?: 'pinned' | 'inline';
}

export function ScrollCue({ targetId, label, variant = 'inline' }: ScrollCueProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <a
      href={`#${targetId}`}
      className={`${styles.cue} ${variant === 'pinned' ? styles.pinned : styles.inline}`}
      onClick={handleClick}
      aria-label={`Scroll to ${label} section`}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.iconRing}>
        <Icon name="arrow-down" size={22} />
      </span>
    </a>
  );
}
