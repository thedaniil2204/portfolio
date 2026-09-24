import { CircleItem } from './CircleItem';

type NavigationProps = {
  activeSection: 'code' | 'motion' | 'photo';
};

export function Navigation({ activeSection,}: NavigationProps) {
  return (
    <nav className="sectionNav" aria-label="Разделы портфолио">
      <CircleItem label="photo" isActive={activeSection === 'photo'} />
      <CircleItem label="code" isActive={activeSection === 'code'} />
      <CircleItem label="design" isActive={activeSection === 'motion'} />
    </nav>
  );
}
