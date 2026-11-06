import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'

// Scrolls to #section links, or back to the top on a new page
function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    const target = hash ? document.querySelector(hash) : null
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0 })
  }, [pathname, hash, key])
  return null
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
