import PageHero from '../components/PageHero.jsx'
import HeroCard from '../components/HeroCard.jsx'
import { heroes } from '../data/siteData.js'

const HEROES_HERO_IMAGE = 'src/assets/images/beuti2.png'

function Heroes() {
  return (
    <>
      <PageHero eyebrow="Remembered With Respect" title="Heroes of Nawan" image={HEROES_HERO_IMAGE} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Their legacy</p>
            <h2>People Who Shaped Nawan</h2>
            <p>
              The educators, elders and mentors whose work helped build the
              Nawan we know today.
            </p>
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Heroes
