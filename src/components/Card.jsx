// Generic card used for Projects and Markets.
// tag = small badge in the top-left of the image (e.g. status)
function Card({ image, title, description, meta, tag, location }) {
  return (
    <article className="card">
      <div className="card__media">
        <img src={image} alt={title} loading="lazy" />
        {tag && <span className="card__tag">{tag}</span>}
      </div>
      <div className="card__body">
        {meta && <span className="card__meta">{meta}</span>}
        <h3>{title}</h3>
        <p>{description}</p>
        {location && <span className="card__location">{location}</span>}
      </div>
    </article>
  )
}

export default Card
