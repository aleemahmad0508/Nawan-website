import Hero from '../components/Hero.jsx'
import ExploreCard from '../components/ExploreCard.jsx'
import EventCard from '../components/EventCard.jsx'
import PlayerCard from '../components/PlayerCard.jsx'
import { Link } from 'react-router-dom'
import {
  exploreLinks,
  events,
  cricketPlayers,
  socialLinks,
} from '../data/siteData.js'

function Home() {
  const featuredEvents = events.slice(0, 3)
  const featuredPlayers = cricketPlayers.slice(0, 3)

  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Around the Village</p>
            <h2>Explore Our Village</h2>
            <p>
              Nawan in one place ,its history, its people, its games and
              its markas. Pick a page to start exploring.
            </p>
          </div>
          <div className="explore-grid">
            {exploreLinks.map((item) => (
              <ExploreCard key={item.to} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <p className="kicker">What's on</p>
            <h2>Featured Events</h2>
            <p>A few of the gatherings that bring Nawan together.</p>
          </div>
          <div className="featured-scroll">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/events" className="btn btn--outline">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Local talent</p>
            <h2>Featured Players</h2>
            <p>Meet a few of the athletes representing Nawan.</p>
          </div>
          <div className="featured-scroll">
            {featuredPlayers.map((player) => (
              <PlayerCard key={player.id} {...player} />
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/players" className="btn btn--outline">
              Meet All Players
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="discover-band">
            <div>
              <h2>Discover Nawan for yourself</h2>
              <p>
                From quiet orchard fields to the old town well, Nawan
                rewards a slow visit. See where to go first.
              </p>
            </div>
            <Link to="/tourist-places" className="btn btn--primary">
              See Tourist Places
            </Link>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Stay connected</p>
            <h2>Follow Apna Nawan (Asif Awan)</h2>
          </div>
          <div className="social-strip">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="social-chip"
              >
                <strong>{link.name}</strong>
                <span>{link.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
