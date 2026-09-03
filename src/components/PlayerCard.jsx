function PlayerCard({ image, name, role, description }) {
  return (
    <article className="player-card">
      <div className="player-card__media">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="player-card__body">
        <span className="player-card__role">{role}</span>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default PlayerCard
