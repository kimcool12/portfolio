import { FaGithub } from 'react-icons/fa6'
import { LuExternalLink } from 'react-icons/lu'

export default function ProjectCard({ project }) {
  const { title, description, tags, image, github, live } = project
  return (
    <article className="card" data-cursor="card">
      <div className="card__image">
        <img src={image} alt={`${title} screenshot`} loading="lazy" />
      </div>
      <div className="card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="card__tags">
          {tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className="card__actions">
          {live && (
            <a className="btn btn--solid btn--sm" href={live} target="_blank" rel="noreferrer">
              <LuExternalLink /> Live Demo
            </a>
          )}
          {github && (
            <a className="btn btn--outline btn--sm" href={github} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
