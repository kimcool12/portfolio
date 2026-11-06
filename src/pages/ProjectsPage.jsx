import Projects from '../components/Projects'
import SectionHeader from '../components/SectionHeader'

export default function ProjectsPage() {
  return (
    <section className="section container page-top">
      <SectionHeader eyebrow="portfolio" title="All projects" />
      <Projects />
    </section>
  )
}
