import { skillGroups } from '../data/skills';
import { softSkills } from '../data/softSkills';
import { skillIcons } from '../data/skillIcons';
import { techStackIcons } from '../data/techStackIcons';
import { Badge } from '../components/Badge';
import { Icon } from '../components/Icon';
import { Section } from '../components/Section';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Skills.module.css';

const TILE_ROTATIONS = [-6, 5, -3, 7, -5, 4, -8, 6, -4, 8, -7, 3];

const CATEGORY_TONES: Record<string, string> = {
  Backend: 'blue',
  Frontend: 'purple',
  'Cloud & DevOps': 'green',
  Data: 'teal',
  'Architecture & Integration': 'amber',
  Reporting: 'rose',
  'AI-Assisted Development': 'purple',
};

function SkillGroupCard({ group }: { group: (typeof skillGroups)[number] }) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className={`reveal ${styles.group} ${group.core ? styles.core : ''}`}>
      <div className={styles.groupHeader}>
        <span
          className={styles.iconTile}
          data-tone={CATEGORY_TONES[group.category]}
          aria-hidden="true"
        >
          <Icon name={group.icon} size={group.core ? 24 : 20} />
        </span>
        <h4 className={styles.category}>{group.category}</h4>
      </div>
      <ul className={styles.list}>
        {group.skills.map((skill) => {
          const SkillIcon = skillIcons[skill];
          return (
            <li key={skill}>
              <Badge
                variant={group.core ? 'accent' : 'default'}
                icon={SkillIcon ? <SkillIcon /> : undefined}
              >
                {skill}
              </Badge>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SoftSkillCard({ skill }: { skill: (typeof softSkills)[number] }) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className={`reveal ${styles.softCard}`}>
      <span className={styles.softIcon} aria-hidden="true">
        {skill.icon}
      </span>
      <h4 className={styles.softName}>{skill.name}</h4>
      <p className={styles.softDescription}>{skill.description}</p>
    </div>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 / Skills"
      title="Skills"
      description="Core strengths in backend, frontend, and cloud — supported by a broad, practical toolset built across 9+ years of enterprise delivery."
      nextSection={{ id: 'experience', label: 'Experience' }}
    >
      <div className={styles.techStrip} aria-hidden="true">
        {techStackIcons.map(({ label, icon: TechIcon, color }, index) => (
          <span
            key={label}
            className={styles.techTile}
            style={
              {
                color,
                backgroundColor: `${color}1a`,
                borderColor: `${color}40`,
                boxShadow: `0 12px 20px -14px ${color}80`,
                '--tile-rot': `${TILE_ROTATIONS[index % TILE_ROTATIONS.length]}deg`,
              } as React.CSSProperties
            }
            title={label}
          >
            <TechIcon />
          </span>
        ))}
      </div>

      <h3 className={styles.subheading}>Technical Skills</h3>
      <div className={styles.grid}>
        {skillGroups
          .filter((group) => group.core)
          .map((group) => (
            <SkillGroupCard key={group.category} group={group} />
          ))}
      </div>
      <div className={styles.compactGrid}>
        {skillGroups
          .filter((group) => !group.core)
          .map((group) => (
            <SkillGroupCard key={group.category} group={group} />
          ))}
      </div>

      <h3 className={styles.subheading}>Soft Skills</h3>
      <div className={styles.softGrid}>
        {softSkills.map((skill) => (
          <SoftSkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
}
