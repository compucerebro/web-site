import {
  HeroSection,
  HeroBgPattern,
  HeroBgImage,
  KeyboardOverlay,
  HeroOverlay,
  HeroContent,
  HeroBadge,
  BadgeDot,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroActions,
  HeroBtn,
  ScrollArrow
} from './Hero.styles'

function Hero() {
  const handleScrollDown = () => {
    const next = document.querySelector('#quienes-somos')
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HeroSection id="inicio">
      {/* Fondo con patrón de puntos */}
      <HeroBgPattern />

      {/* Imagen decorativa de teclado en la esquina */}
      <HeroBgImage>
        <KeyboardOverlay />
      </HeroBgImage>

      {/* Overlay degradado */}
      <HeroOverlay />

      {/* Contenido */}
      <HeroContent>
        <HeroBadge>
          <BadgeDot />
          Soluciones tecnológicas de confianza
        </HeroBadge>

        <HeroTitle>
          COMPUCEREBRO
        </HeroTitle>

        <HeroSubtitle>
          Tecnología inteligente para tu día a día
        </HeroSubtitle>

        <HeroDescription>
          Venta de computadores, soporte técnico y soluciones tecnológicas<br />
          pensadas para personas y empresas.
        </HeroDescription>

        <HeroActions>
          <HeroBtn
            href="#productos"
            $primary
            id="hero-ver-productos"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#productos')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Ver Productos
          </HeroBtn>
          <HeroBtn
            href="#contacto"
            id="hero-contacto"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contáctenos
          </HeroBtn>
        </HeroActions>
      </HeroContent>

      {/* Flecha de scroll */}
      <ScrollArrow
        onClick={handleScrollDown}
        aria-label="Bajar"
        id="hero-scroll-down"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </ScrollArrow>
    </HeroSection>
  )
}

export default Hero
