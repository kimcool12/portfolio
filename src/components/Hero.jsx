import { Link } from 'react-router-dom'
import profile from '../content/profile'

export default function Hero() {
  const { headline } = profile
  const rise = (i) => ({ '--i': i })

  return (
    <section className="hero container">
      <div className="hero__copy">
        <span className="pill" style={rise(0)}><i />{profile.status}</span>
        <h1 className="hero__title" style={rise(1)}>
          <span>{headline.line1}</span>
          <span>{headline.line2} <em>{headline.accent}</em></span>
        </h1>
        <p className="hero__roles" style={rise(2)}>{profile.roles.join('  •  ')}</p>
        <p className="hero__intro" style={rise(3)}>{profile.intro}</p>
        <div className="hero__cta" style={rise(4)}>
          <Link to="/projects" className="btn btn--solid">View Projects</Link>
          <a href={profile.cvUrl} download className="btn btn--outline">Download CV</a>
        </div>
      </div>
      <div className="hero__photo">
        <img src={profile.photo} alt={profile.name} />
      </div>
    </section>
  )
}
