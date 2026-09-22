type CircleItemProps = {
  label : string
}

export function CircleItem({label} : CircleItemProps) {
  return (
    <article className="circleItem">
      <span className="labelPill">{label}</span>
    </article>
  );
}
