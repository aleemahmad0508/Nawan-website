function EventCard({ image, title, description, date }) {
  return (
    <article className="card">
      <div className="card__media">
        <img src={image} alt={title} loading="lazy" />
        {date && <span className="card__tag">{date}</span>}
      </div>
      <div className="card__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default EventCard
