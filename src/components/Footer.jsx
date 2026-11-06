import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'
import profile from '../content/profile'
import socials from '../content/socials'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__copy">
            <span className="section-header__eyebrow">{'// contact'}</span>
            <h2>Let’s work together</h2>
            <p>{profile.footerText}</p>
            <ul className="socials">
              {socials.map(({ name, url, icon: Icon }) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noreferrer" aria-label={name}><Icon aria-hidden="true" />{name}</a>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>

        <div className="footer__bar">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <nav aria-label="Footer">
            {profile.nav.filter((n) => n.label !== 'Contact').map((n) => <Link key={n.label} to={n.to}>{n.label}</Link>)}
          </nav>
          <button className="btn btn--outline btn--sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
