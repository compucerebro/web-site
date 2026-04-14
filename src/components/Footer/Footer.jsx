import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__logo">
            <span>Compu</span><span className="footer__logo-accent">Cerebro</span>
          </span>
          <p className="footer__tagline">Tecnología inteligente para tu día a día.</p>
        </div>

        <div className="footer__links">
          <h4 className="footer__links-title">Navegación</h4>
          <ul>
            <li><a href="#inicio" onClick={(e) => { e.preventDefault(); document.querySelector('#inicio')?.scrollIntoView({ behavior: 'smooth' }) }}>Inicio</a></li>
            <li><a href="#quienes-somos" onClick={(e) => { e.preventDefault(); document.querySelector('#quienes-somos')?.scrollIntoView({ behavior: 'smooth' }) }}>Quiénes somos</a></li>
            <li><a href="#productos" onClick={(e) => { e.preventDefault(); document.querySelector('#productos')?.scrollIntoView({ behavior: 'smooth' }) }}>Productos</a></li>
            <li><a href="#servicios" onClick={(e) => { e.preventDefault(); document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' }) }}>Servicios</a></li>
            <li><a href="#contacto" onClick={(e) => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }) }}>Contacto</a></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4 className="footer__links-title">Contacto</h4>
          <ul>
            <li>📞 3023433299</li>
            <li>📍 Cl. 70a Bis #121a-30 Bogotá D.C</li>
            <li>✉️ compucerebro@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} CompuCerebro. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
