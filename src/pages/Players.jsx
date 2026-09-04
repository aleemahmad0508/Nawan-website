import PageHero from '../components/PageHero.jsx'
import PlayerCard from '../components/PlayerCard.jsx'
import { cricketPlayers, volleyballPlayers } from '../data/siteData.js'
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
    </>
  )
}

export default Players