import { useParams } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Card from '../components/Card.jsx'
import { projects } from '../data/siteData.js'

function ProjectDetails() {
  const { id } = useParams()

  const project = projects.find((item) => item.id === id)

  if (!project) {
    return <h2>Project not found</h2>
  }

  return (
    <>
      <PageHero
        eyebrow="Project Details"
        title={project.name}
        image={project.image}
      />

      <section className="section">
        <div className="container">


          {project.people && project.people.length > 0 && (
            <>
              <div className="section-head">
                <p className="kicker">People Behind the Project</p>
                <h2>Project Members</h2>
              </div>

              <div className="card-grid">
                {project.people.map((person) => (
                  <Card
                    key={person.id}
                    image={person.image}
                    title={person.name}
                    description={person.description}
                  />
                ))}
              </div>
            </>
          )}

        </div>
      </section>
    </>
  )
}

export default ProjectDetails