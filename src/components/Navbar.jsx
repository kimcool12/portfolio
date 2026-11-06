import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LuSun, LuMoon, LuMenu, LuX } from 'react-icons/lu'
import profile from '../content/profile'
import useTheme from '../hooks/useTheme'

export default function Navbar() {
  const [theme, toggleTheme] = useTheme()
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => setOpen(false), [pathname, hash])

  const isActive = (to) => {
    const [path, h] = to.split('#')
    if (h) return pathname === '/' && hash === `#${h}`
    return pathname === path && (path !== '/' || !hash)
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">{profile.name}.</Link>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`} aria-label="Main">
          {profile.nav.map((item) => (
            <Link key={item.label} to={item.to} className={isActive(item.to) ? 'is-active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="navbar__actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Switch theme">
            {theme === 'dark' ? <LuSun /> : <LuMoon />}
          </button>
          <Link to="/#contact" className="btn btn--solid btn--sm navbar__cta">Let’s talk</Link>
          <button className="icon-btn navbar__menu" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}
