import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or may have moved.</p>
      <Link to="/" className="btn btn--primary">
        Return Home
      </Link>
    </div>
  )
}

export default NotFound
