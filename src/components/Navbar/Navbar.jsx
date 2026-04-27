import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import {
  Nav,
  LogoLink,
  LogoImg,
  LogoName,
  Hamburger,
  NavLinks,
  NavLink
} from './Navbar.styles'

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
    <Nav $scrolled={scrolled}>
      {/* ── LOGO ── */}
      <LogoLink
        href="#inicio"
        id="navbar-logo"
        onClick={(e) => scrollTo(e, '#inicio')}
        aria-label="CompuCerebro - Inicio"
      >
        <LogoImg
          src={logo}
          alt="CompuCerebro"
        />
        <LogoName>CompuCerebro</LogoName>
      </LogoLink>

      {/* ── HAMBURGER (móvil) ── */}
      <Hamburger
        $open={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
        id="navbar-hamburger"
      >
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      {/* ── LINKS ── */}
      <NavLinks $open={menuOpen}>
        <li>
          <NavLink href="#productos" id="nav-productos" onClick={(e) => scrollTo(e, '#productos')}>
            Ver Productos
          </NavLink>
        </li>
        <li>
          <NavLink href="#servicios" id="nav-servicios" onClick={(e) => scrollTo(e, '#servicios')}>
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink href="#contacto" id="nav-soporte" onClick={(e) => scrollTo(e, '#contacto')}>
            Solicitar Soporte
          </NavLink>
        </li>
        <li>
          <NavLink
            href="#contacto"
            id="nav-contacto"
            $cta
            onClick={(e) => scrollTo(e, '#contacto')}
          >
            Contáctenos
          </NavLink>
        </li>
      </NavLinks>
    </Nav>
  )
}

export default Navbar
