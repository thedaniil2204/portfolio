import { CircleItem } from './CircleItem';

export function Header() {
  return (
    <header className="header">
      <CircleItem label="фото" />
      <CircleItem label="прога" />
      <CircleItem label="дизайн" />
    </header>
  );
}
