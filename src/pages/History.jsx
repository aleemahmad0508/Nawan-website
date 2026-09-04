import PageHero from '../components/PageHero.jsx'
import { historySections } from '../data/siteData.js'

// Replace this file to change the History page photo.
import history_image from  '../assets/images/beauti1.png'

function History() {
  return (
    <>
      <PageHero eyebrow="The Story So Far" title="History of Nawan" image={history_image} />

      <section className="section">
        <div className="container">
          <div className="history-sections">
            {historySections.map((section, index) => (
              <div className="history-block" key={section.heading}>
                <span className="history-block__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default History
