import Hero from '../components/Hero.jsx'
import ExploreCard from '../components/ExploreCard.jsx'
import EventCard from '../components/EventCard.jsx'
import PlayerCard from '../components/PlayerCard.jsx'

import { Link } from 'react-router-dom'
import {
  exploreLinks,
  events,
  volleyballPlayers,
  socialLinks,
} from '../data/siteData.js'

// 1. Import both Facebook and Instagram icons
import { FaFacebook } from 'react-icons/fa'; 

// 2. Create the dictionary config mapping names to components and colors
const iconDictionary = {
  facebook: { Icon: FaFacebook, color: '#1877F2' },
   // Instagram brand color
};

function Home() {
  const featuredEvents = events.slice(0, 3)
  const featuredPlayers = volleyballPlayers.slice(0, 3)

  return (
    <>
      <Hero />

      {/* ... keeping your village, events, players, and discover sections exactly as they are ... */}
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

      {/* Updated Social Section */}
      <section className="section--tight">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Stay connected</p>
            <h2>Follow Apna Nawan</h2>
          </div>
          <div className="social-strip">
            {socialLinks.map((link, index) => {
              // Look up config based on lowercase key ('facebook' or 'instagram')
              const platformConfig = iconDictionary[link.name.toLowerCase()];
              
              // Fallback if an icon isn't found in your configuration map
              const IconComponent = platformConfig ? platformConfig.Icon : FaFacebook;
              const iconColor = platformConfig ? platformConfig.color : "#1877F2";

              return (
                <a
                  // Use index mixed with name for safe key since you have multiple Facebook elements
                  key={`${link.name}-${index}`} 
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-chip"
                >
                  {/* Render the dynamically resolved icon structure */}
                  <IconComponent size={32} color={iconColor} />
                  <strong>{link.name}</strong>
                  <span>{link.handle}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
