import PageHero from '../components/PageHero.jsx'
import Card from '../components/Card.jsx'
import { projects } from '../data/siteData.js'

const PROJECTS_HERO_IMAGE = 'src/assets/images/beuti2.png'

function Projects() {
  return (
    <>
      <PageHero eyebrow="Building Ahead" title="Projects" image={PROJECTS_HERO_IMAGE} />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">In development</p>
            <h2>Development Projects</h2>
            <p>A look at the work shaping Nawan's roads, sports facilities and markets.</p>
          </div>
          <div className="card-grid">
            {projects.map((project) => (
              <Card
                key={project.id}
                image={project.image}
                title={project.name}
                description={project.description}
                tag={project.status}
                meta={project.date}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
