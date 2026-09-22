type CircleItemProps = {
  label: string;
  isActive?: boolean;
};

export function CircleItem({ label, isActive = false }: CircleItemProps) {
  return (
    <span className={isActive ? 'circleItem circleItemActive' : 'circleItem'}>
      <span className="labelPill">{label}</span>
    </span>
  );
}
