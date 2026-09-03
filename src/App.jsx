import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import History from './pages/History.jsx'
import Projects from './pages/Projects.jsx'
import Events from './pages/Events.jsx'
import Players from './pages/Players.jsx'
import Grounds from './pages/Grounds.jsx'
import Markets from './pages/Marka.jsx'
import Heroes from './pages/Heroes.jsx'
import TouristPlaces from './pages/TouristPlaces.jsx'
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
          <Route path="/events" element={<Events />} />
          <Route path="/players" element={<Players />} />
          <Route path="/grounds" element={<Grounds />} />
          <Route path="/marka" element={<Markets />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/tourist-places" element={<TouristPlaces />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
