import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import BinaryWall from './components/BinaryWall'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <div className="relative min-h-screen">
        <BinaryWall />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>
)
