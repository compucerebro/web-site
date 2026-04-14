import './Hero.css'

function Hero() {
  const handleScrollDown = () => {
    const next = document.querySelector('#quienes-somos')
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="inicio">
      {/* Fondo con patrón de puntos */}
      <div className="hero__bg-pattern"></div>

      {/* Imagen decorativa de teclado en la esquina */}
      <div className="hero__bg-image">
        <div className="hero__keyboard-overlay"></div>
      </div>

      {/* Overlay degradado */}
      <div className="hero__overlay"></div>

      {/* Contenido */}
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          Soluciones tecnológicas de confianza
        </div>

        <h1 className="hero__title">
          COMPUCEREBRO
        </h1>

        <p className="hero__subtitle">
          Tecnología inteligente para tu día a día
        </p>

        <p className="hero__description">
          Venta de computadores, soporte técnico y soluciones tecnológicas<br />
          pensadas para personas y empresas.
        </p>

        <div className="hero__actions">
          <a
            href="#productos"
            className="hero__btn hero__btn--primary"
            id="hero-ver-productos"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#productos')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Ver Productos
          </a>
          <a
            href="#contacto"
            className="hero__btn hero__btn--secondary"
            id="hero-contacto"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contáctenos
          </a>
        </div>
      </div>

      {/* Flecha de scroll */}
      <button
        className="hero__scroll-arrow"
        onClick={handleScrollDown}
        aria-label="Bajar"
        id="hero-scroll-down"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  )
}

export default Hero
