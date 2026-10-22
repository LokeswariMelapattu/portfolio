import { profile } from '../data/profile';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Icon } from '../components/Icon';
import { ScrollCue } from '../components/ScrollCue';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className={styles.backdrop} aria-hidden="true">
        <span className={styles.blobA} />
        <span className={styles.blobB} />
        <span className={styles.dotGrid} />
      </div>

      <Container className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p className={`${styles.eyebrow} ${styles.stagger1}`}>
              {profile.location} · {profile.workAuthorization}
            </p>
            <p className={`${styles.greeting} ${styles.stagger2}`}>Hi, I&apos;m</p>
            <h1 className={`${styles.name} ${styles.stagger2}`}>{profile.name}</h1>
            <p className={`${styles.role} ${styles.stagger3}`}>{profile.title}</p>
            <p className={`${styles.tagline} ${styles.stagger4}`}>{profile.tagline}</p>

            <div className={`${styles.actions} ${styles.stagger5}`}>
              <Button as="a" href="#projects">
                Explore My Work
                <span className={styles.ctaArrow} aria-hidden="true">
                  <Icon name="arrow-down" size={16} />
                </span>
              </Button>
              <Button as="a" href={profile.resumeHref} variant="secondary" download>
                Download Resume
              </Button>
            </div>

            <ul className={`${styles.socials} ${styles.stagger5}`}>
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    data-icon={social.icon}
                    target={social.icon === 'email' ? undefined : '_blank'}
                    rel={social.icon === 'email' ? undefined : 'noopener noreferrer'}
                  >
                    <Icon name={social.icon} size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.avatarWrap} ${styles.stagger3}`}>
            <Avatar initials={profile.initials} name={profile.name} photoSrc={profile.photoHref} />
          </div>
        </div>
      </Container>

      <ScrollCue targetId="about" label="About" variant="pinned" />
    </section>
  );
}
