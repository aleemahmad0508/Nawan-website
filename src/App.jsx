import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import History from './pages/History.jsx'
import Projects from './pages/Projects.jsx'
import Events from './pages/Events.jsx'
import Sports from './pages/Sports.jsx'
import Markets from './pages/Marka.jsx'
import Heroes from './pages/Heroes.jsx'
import About from './pages/About.jsx'
import Explore from './pages/Explorer-Nawan.jsx'
import TouristPlaces from './pages/TouristPlaces.jsx'
import ProjectDetails from './pages/projectDetails.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/marka" element={<Markets />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/tourist-places" element={<TouristPlaces />} />
          <Route path="/about"  element={<About/>}/>
          <Route path='/Explore' element={<Explore/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
