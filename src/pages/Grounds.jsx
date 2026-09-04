import PageHero from '../components/PageHero.jsx'
import GroundCard from '../components/GroundCard.jsx'
import { grounds } from '../data/siteData.js'

import ground_image from   '../assets/images/beuti2.png'

function Grounds() {
  return (
    <>
      <PageHero eyebrow="Where Nawan Plays" title="Grounds" image={ground_image} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Home turf</p>
            <h2>Sports Grounds</h2>
            <p>The two grounds where Nawan's cricket and volleyball matches come to life.</p>
          </div>
          <div className="card-grid">
            {grounds.map((ground) => (
              <GroundCard key={ground.id} {...ground} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Grounds
