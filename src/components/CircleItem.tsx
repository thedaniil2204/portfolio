type CircleItemProps = {
  label : string
}

export function CircleItem({label} : CircleItemProps) {
  return (
    <article className="circleItem">
      <div className="imageCircle" aria-label="Место для изображения фото" />
      <span className="labelPill">{label}</span>
    </article>
  );
}
