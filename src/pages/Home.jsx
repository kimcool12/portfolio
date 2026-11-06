import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import SectionHeader from '../components/SectionHeader'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <section id="projects" className="section container">
        <SectionHeader eyebrow="projects" title="Selected work" />
        <Projects limit={3} />
        <div className="center">
          <Link to="/projects" className="btn btn--solid">See all projects →</Link>
        </div>
      </section>
    </>
  )
}
