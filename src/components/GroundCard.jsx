function GroundCard({ image, name, description, location }) {
  return (
    <article className="card">
      <div className="card__media">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="card__body">
        <h3>{name}</h3>
        <p>{description}</p>
        {location && <span className="card__location">{location}</span>}
      </div>
    </article>
  )
}

export default GroundCard
