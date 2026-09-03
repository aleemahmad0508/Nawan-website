// Reusable banner used at the top of every inner page.
// Pass a different "image" prop per page to change the photo.
function PageHero({ eyebrow, title, image }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="page-hero__content">
        {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}
        <h1 className="page-hero__title">{title}</h1>
      </div>
    </section>
  )
}

export default PageHero
