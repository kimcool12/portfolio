import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuSun, LuMoon, LuMenu, LuX } from "react-icons/lu";
import profile from "../content/profile";
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  // Close the drawer whenever the page or section changes
  useEffect(() => setOpen(false), [pathname, hash]);

  // Lock page scroll while the drawer is open, and close it with the Escape key
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (to) => {
    const [path, h] = to.split("#");
    if (h) return pathname === "/" && hash === `#${h}`;
    return pathname === path && (path !== "/" || !hash);
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          {profile.name}.
        </Link>

        {/* Tap outside the drawer to close it */}
        <div
          className={`navbar__overlay ${open ? "is-open" : ""}`}
          onClick={() => setOpen(false)}
        />

        <nav
          className={`navbar__links ${open ? "is-open" : ""}`}
          aria-label="Main"
        >
          {profile.nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={isActive(item.to) ? "is-active" : ""}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/#contact" className="btn btn--solid navbar__drawer-cta">
            Let’s talk
          </Link>
        </nav>

        <div className="navbar__actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Switch theme"
          >
            {theme === "dark" ? <LuSun /> : <LuMoon />}
          </button>
          <Link to="/#contact" className="btn btn--solid btn--sm navbar__cta">
            Let’s talk
          </Link>
          <button
            className="icon-btn navbar__menu"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
