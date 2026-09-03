import PageHero from '../components/PageHero.jsx'
import EventCard from '../components/EventCard.jsx'
import { events } from '../data/siteData.js'

const EVENTS_HERO_IMAGE = 'src/assets/images/volly-ball-tournament.png'

function Events() {
  return (
    <>
      <PageHero eyebrow="What's On" title="Important Events" image={EVENTS_HERO_IMAGE} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Gatherings & milestones</p>
            <h2>Events in Nawan</h2>
            <p>The moments that bring the community together, from sport to celebration.</p>
          </div>
          <div className="card-grid">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Events
