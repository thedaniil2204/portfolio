export function Block() {
  return (
    <section className="portfolioSection" aria-label="Направления портфолио">
      <div className="circleRow" aria-label="Категории работ">
        <article className="circleItem">
          <div className="imageCircle" aria-label="Место для изображения фото" />
          <span className="labelPill">фото</span>
        </article>

        <article className="circleItem">
          <div className="imageCircle" aria-label="Место для изображения кода" />
          <span className="labelPill">код</span>
        </article>

        <article className="circleItem">
          <div className="imageCircle" aria-label="Место для изображения дизайна" />
          <span className="labelPill">дизайн</span>
        </article>
      </div>
    </section>
  );
}
