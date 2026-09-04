import PageHero from '../components/PageHero.jsx'
import TouristCard from '../components/TouristCard.jsx'
import { touristPlaces } from '../data/siteData.js'

import tourist_image from  '../assets/images/beuti2.png'

function TouristPlaces() {
  return (
    <>
      <PageHero eyebrow="Worth The Trip" title="Tourist Places of Nawan" image={tourist_image} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">See it for yourself</p>
            <h2>Places to Visit</h2>
            <p>A handful of spots that capture what makes Nawan worth visiting.</p>
          </div>
          {touristPlaces.map((place) => (
            <TouristCard key={place.id} {...place} />
          ))}
        </div>
      </section>
    </>
  )
}

export default TouristPlaces
