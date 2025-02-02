import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Education from './pages/Education'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import BinaryWall from './components/BinaryWall'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <NavigationBar />
      <div className="relative min-h-screen">
        <BinaryWall />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>
)
