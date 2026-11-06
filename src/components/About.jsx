import SectionHeader from './SectionHeader'
import profile from '../content/profile'

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionHeader eyebrow="about me" title="Design eye. Developer hands." />
      <div className="about">
        <p className="about__text">{profile.about}</p>
        <div className="about__stats">
          {profile.stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
