import PageHero from '../components/PageHero.jsx'
import ExploreNawanCard from '../components/ExploreNawanCard.jsx'
import { exploreNawan } from '../data/siteData.js'

import hero_image from '../assets/images/beuti2.png'

function Explore() {
  return (
    <>
      <PageHero
        eyebrow="Discover Our Village"
        title="Explore Nawan"
        image={hero_image}
      />

      <section className="section">
        <div className="container">

          <div className="section-head">
            <p className="kicker">Discover Nawan</p>

            <h2>
              Places, People & Traditions of Nawan
            </h2>

            <p>
              Explore the beautiful places, historic landmarks, educational
              institutions, local businesses, and everyday traditions that
              make Nawan a special place to live and remember.
            </p>
          </div>

          {exploreNawan.map((explore) => (
            <ExploreNawanCard
              key={explore.id}
              {...explore}
            />
          ))}

        </div>
      </section>
    </>
  )
}

export default Explore