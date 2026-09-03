import PageHero from '../components/PageHero.jsx'
import Card from '../components/Card.jsx'
import { markas } from '../data/siteData.js'

const MARKETS_HERO_IMAGE = 'src/assets/images/marka1.png'

function Marka() {
  return (
    <>
      <PageHero eyebrow="Trade & Community" title="Markets" image={MARKETS_HERO_IMAGE} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Where Nawan shops</p>
            <h2>Markas of Nawan</h2>
            <p>The bazaars and trading areas that keep daily life in Nawan moving.</p>
          </div>
          <div className="card-grid">
            {markas.map((marka) => (
              <Card
                key={marka.id}
                image={marka.image}
                title={marka.name}
                description={marka.description}
                location={marka.location}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Marka
