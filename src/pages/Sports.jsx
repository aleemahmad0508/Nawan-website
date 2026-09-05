import PageHero from '../components/PageHero.jsx'
import PlayerCard from '../components/PlayerCard.jsx'
import { cricketPlayers, volleyballPlayers } from '../data/siteData.js'
import GroundCard from '../components/GroundCard.jsx'
import { grounds } from '../data/siteData.js'
import playersHero from '../assets/images/beauti1.png'

function Players() {
  return (
    <>
      <PageHero
        eyebrow="Local Talent"
        title="Players"
        image={playersHero}
      />

      <section className="section">
        <div className="container">

          <div className="category-head">
            <h3>Vollyball Players</h3>
            <hr />
          </div>

          <div className="card-grid">
            {volleyballPlayers.map((player) => (
              <PlayerCard
                key={player.id}
                {...player}
              />
            ))}
          </div>

          <div className="category-head">
            <h3>Cricket Players</h3>
            <hr />
          </div>

          <div className="card-grid">
            {cricketPlayers.map((player) => (
              <PlayerCard
                key={player.id}
                {...player}
              />
            ))}
          </div>

        </div>
      </section>
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

export default Players