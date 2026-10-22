import { profile } from '../data/profile';
import { Container } from './Container';
import { Icon } from './Icon';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <p className={styles.copy}>
            © {year} {profile.name}. Built with React &amp; Vite.
          </p>

          <ul className={styles.socials}>
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  target={social.icon === 'email' ? undefined : '_blank'}
                  rel={social.icon === 'email' ? undefined : 'noopener noreferrer'}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
