// Generic card used for Projects and Markets.
function Card({ image, title, description, meta, tag, location, onClick }) {
  return (
    <article
      className="card"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
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