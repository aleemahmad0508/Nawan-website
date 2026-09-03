function TouristCard({ image, name, description, whyVisit, location }) {
  return (
    <article className="tourist-card">
      <div className="tourist-card__media">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="tourist-card__body">
        {location && <span className="tourist-card__location">{location}</span>}
        <h3>{name}</h3>
        <p>{description}</p>
        {whyVisit && (
          <p className="tourist-card__why">
            <strong>Why visit: </strong>
            {whyVisit}
          </p>
        )}
      </div>
    </article>
  )
}

export default TouristCard
