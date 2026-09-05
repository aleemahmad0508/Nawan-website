import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'History', to: '/history' },
  { label: 'Events', to: '/events' },
  { label: 'Heroes', to: '/heroes' },
  { label: 'Tourist Places', to: '/tourist-places' },
]

const moreLinks = [
  { label: 'Projects', to: '/projects' },
  { label: 'Marka', to: '/marka' },
  { label: 'Explore-Nawan', to:'/explore'},
  { label: 'About', to:'/about'}
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              Nawan <span>Village</span>
            </div>
            <p className="footer__tagline">
              Celebrating the history, people, sports, culture and beauty of Nawan.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul className="footer__links">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>More</h4>
            <ul className="footer__links">
              {moreLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; 2026 Nawan City. All rights reserved.</span>
          <span>Built for the people of Nawan.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
