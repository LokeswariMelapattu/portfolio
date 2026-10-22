import { useState } from 'react';
import type { IconName } from './Icon';
import { profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { Icon } from './Icon';
import styles from './Nav.module.css';

interface NavItem {
  id: string;
  label: string;
  icon: IconName;
  href?: string;
  external?: boolean;
}

const githubHref = profile.socials.find((social) => social.icon === 'github')?.href ?? '#';

const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', icon: 'user' },
  { id: 'skills', label: 'Skills', icon: 'code' },
  { id: 'experience', label: 'Experience', icon: 'briefcase' },
  { id: 'projects', label: 'Projects', icon: 'folder' },
  { id: 'personal-projects', label: 'Personal Projects', icon: 'github', href: githubHref, external: true },
  { id: 'education', label: 'Education', icon: 'cap' },
  { id: 'references', label: 'References', icon: 'users' },
  { id: 'contact', label: 'Contact', icon: 'chat' },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useActiveSection([
    'hero',
    ...NAV_ITEMS.filter((item) => !item.external).map((item) => item.id),
  ]);
  const isHome = activeId === 'hero';
  const progress = useScrollProgress();

  function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      {/* Mobile top bar */}
      <header className={styles.mobileHeader}>
        <div
          className={styles.progress}
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
        <div className={styles.mobileBar}>
          <a
            href="#hero"
            className={`${styles.brand} ${isHome ? styles.active : ''}`}
            onClick={(event) => handleNavClick(event, 'hero')}
          >
            LM
          </a>

          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <Icon name={isOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>

        <nav
          id="mobile-nav"
          className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}
          aria-label="Mobile"
          aria-hidden={!isOpen}
          inert={!isOpen}
        >
          <ul>
            {NAV_ITEMS.map((item, index) =>
              item.external ? (
                <li key={item.id} style={{ transitionDelay: `${isOpen ? index * 40 : 0}ms` }}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <Icon name={item.icon} size={18} />
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.id} style={{ transitionDelay: `${isOpen ? index * 40 : 0}ms` }}>
                  <a
                    href={`#${item.id}`}
                    onClick={(event) => handleNavClick(event, item.id)}
                    aria-current={activeId === item.id ? 'true' : undefined}
                    className={activeId === item.id ? styles.active : undefined}
                  >
                    <Icon name={item.icon} size={18} />
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>
      </header>

      {/* Desktop vertical rail */}
      <nav className={styles.rail} aria-label="Primary">
        <a
          href="#hero"
          className={`${styles.railBrand} ${isHome ? styles.active : ''}`}
          onClick={(event) => handleNavClick(event, 'hero')}
          aria-label="Go to top"
        >
          <Icon name="home" size={20} />
        </a>

        <div className={styles.railTrack} aria-hidden="true">
          <div className={styles.railProgress} style={{ transform: `scaleY(${progress})` }} />
        </div>

        <ul className={styles.railList}>
          {NAV_ITEMS.map((item) =>
            item.external ? (
              <li key={item.id}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <Icon name={item.icon} size={19} />
                  <span className={styles.label}>{item.label}</span>
                </a>
              </li>
            ) : (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(event) => handleNavClick(event, item.id)}
                  aria-current={activeId === item.id ? 'true' : undefined}
                  className={activeId === item.id ? styles.active : undefined}
                >
                  <Icon name={item.icon} size={19} />
                  <span className={styles.label}>{item.label}</span>
                </a>
              </li>
            ),
          )}
        </ul>

        <div className={styles.railSocials}>
          <a href="mailto:loki.lokeswari@gmail.com" aria-label="Email" data-tooltip="Email">
            <Icon name="email" size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/lokeswari-melapattu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            data-tooltip="LinkedIn"
          >
            <Icon name="linkedin" size={17} />
          </a>
          <a
            href="https://github.com/LokeswariMelapattu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            data-tooltip="GitHub"
          >
            <Icon name="github" size={17} />
          </a>
        </div>
      </nav>
    </>
  );
}
