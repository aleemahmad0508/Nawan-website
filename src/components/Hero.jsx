import { Link } from 'react-router-dom'

// To change the homepage background photo, replace the file at
// src/assets/images/nawan-city-hero.jpg with your own image
// (keep the same file name), or edit the path below.
const HERO_IMAGE = 'src/assets/images/beauti1.png'

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${HERO_IMAGE})` }}
    >
      <div className="hero__content">
        <p className="hero__eyebrow">Welcome to</p>
        <h1 className="hero__title">Nawan Village</h1>
        <p className="hero__subtitle">
          Discover the beauty, history, people and spirit of Nawan.
        </p>
        <div className="hero__actions">
          <Link to="/history" className="btn btn--primary">
            Explore Our Story
          </Link>
          <Link to="/tourist-places" className="btn btn--light">
            Plan a Visit
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
