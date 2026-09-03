import { Link } from 'react-router-dom'

function ExploreCard({ title, description, to }) {
  return (
    <Link to={to} className="explore-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="explore-card__arrow">Visit page</span>
    </Link>
  )
}

export default ExploreCard
