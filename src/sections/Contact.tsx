import { profile } from '../data/profile';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { Section } from '../components/Section';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="08 / Contact"
      title="Let's build something great together."
      description="Open to Senior Software Developer and Full-Stack .NET roles in Finland and remote. Reach out directly, or connect on LinkedIn."
      narrow
    >
      <div className={styles.actions}>
        <Button as="a" href={`mailto:${profile.email}`}>
          <Icon name="email" size={18} />
          {profile.email}
        </Button>

        <div className={styles.secondary}>
          {profile.socials
            .filter((social) => social.icon !== 'email')
            .map((social) => (
              <Button
                key={social.label}
                as="a"
                variant="secondary"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={social.icon} size={18} />
                {social.label}
              </Button>
            ))}
        </div>
      </div>
    </Section>
  );
}
