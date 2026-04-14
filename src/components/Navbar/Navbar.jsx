import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e, target) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>

      {/* ── LOGO ── */}
      <a
        href="#inicio"
        className="navbar__logo"
        id="navbar-logo"
        onClick={(e) => scrollTo(e, '#inicio')}
        aria-label="CompuCerebro - Inicio"
      >
        <img
          src={logo}
          alt="CompuCerebro"
          className="navbar__logo-img"
        />
        <span className="navbar__logo-name">CompuCerebro</span>
      </a>

      {/* ── HAMBURGER (móvil) ── */}
      <button
        className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
        id="navbar-hamburger"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* ── LINKS ── */}
      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        <li>
          <a href="#productos" id="nav-productos" onClick={(e) => scrollTo(e, '#productos')}>
            Ver Productos
          </a>
        </li>
        <li>
          <a href="#servicios" id="nav-soporte" onClick={(e) => scrollTo(e, '#servicios')}>
            Solicitar Soporte
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            id="nav-contacto"
            className="navbar__link--cta"
            onClick={(e) => scrollTo(e, '#contacto')}
          >
            Contáctenos
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
