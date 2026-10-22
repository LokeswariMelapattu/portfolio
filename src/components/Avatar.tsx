import styles from './Avatar.module.css';

interface AvatarProps {
  initials: string;
  name: string;
  photoSrc?: string;
}

export function Avatar({ initials, name, photoSrc }: AvatarProps) {
  if (photoSrc) {
    return (
      <div className={`${styles.avatar} ${styles.hasPhoto}`}>
        <img src={photoSrc} alt={name} className={styles.photo} />
      </div>
    );
  }

  return (
    <div
      className={styles.avatar}
      role="img"
      aria-label={`Initials placeholder avatar for ${name}`}
    >
      <span aria-hidden="true">{initials}</span>
    </div>
  );
}
