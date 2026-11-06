import { useState } from 'react'
import projects from '../content/projects'
import ProjectCard from './ProjectCard'

// <Projects limit={3} />  → featured projects only (Home)
// <Projects />            → every project with filter tabs (Projects page)
export default function Projects({ limit }) {
  const [active, setActive] = useState('All')
  const categories = ['All', ...new Set(projects.map((p) => p.category))]

  const list = limit
    ? projects.filter((p) => p.featured).slice(0, limit)
    : projects.filter((p) => active === 'All' || p.category === active)

  return (
    <>
      {!limit && (
        <div className="tabs" role="tablist">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={active === c}
              className={`tab ${active === c ? 'is-active' : ''}`} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="projects">
        {list.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </>
  )
}
