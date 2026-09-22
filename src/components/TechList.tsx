import type { CSSProperties } from 'react';

type Tech = {
  name: string;
  shortName: string;
  accent: string;
};

const technologies: Tech[] = [
  { name: 'Python', shortName: 'Py', accent: '#0077ff' },
  { name: 'React', shortName: '⚛', accent: '#00d8ff' },
  { name: 'JavaScript', shortName: 'JS', accent: '#ffd43b' },
  { name: 'Node.js', shortName: 'JS', accent: '#5fd34d' },
  { name: 'HTML', shortName: '5', accent: '#ff5a2f' },
  { name: 'CSS', shortName: '3', accent: '#0a84ff' },
  { name: 'Figma', shortName: 'F', accent: '#ff4f9a' },
  { name: 'Git', shortName: 'Git', accent: '#ff4d36' },
  { name: 'VS Code', shortName: '<>', accent: '#0098ff' },
  { name: 'GitHub', shortName: 'GH', accent: '#d9dcff' },
];

export function TechList() {
  return (
    <div className="techGrid" aria-label="Технологии">
      {technologies.map((tech) => (
        <article
          className="techItem"
          key={tech.name}
          style={{ '--accent': tech.accent } as CSSProperties}
        >
          <span className="techIcon">{tech.shortName}</span>
          <span className="techName">{tech.name}</span>
        </article>
      ))}
    </div>
  );
}
