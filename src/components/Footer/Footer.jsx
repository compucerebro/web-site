import {
  FooterContainer,
  FooterContent,
  FooterBrand,
  FooterLogo,
  LogoAccent,
  FooterTagline,
  FooterSection,
  FooterTitle,
  FooterList,
  FooterBottom
} from './Footer.styles'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <FooterContainer>
      <FooterContent>
        <FooterBrand>
          <FooterLogo>
            Compu<LogoAccent>Cerebro</LogoAccent>
          </FooterLogo>
          <FooterTagline>Tecnología inteligente para tu día a día.</FooterTagline>
        </FooterBrand>

        <FooterSection>
          <FooterTitle>Navegación</FooterTitle>
          <FooterList>
            <li><a href="#inicio" onClick={(e) => { e.preventDefault(); document.querySelector('#inicio')?.scrollIntoView({ behavior: 'smooth' }) }}>Inicio</a></li>
            <li><a href="#quienes-somos" onClick={(e) => { e.preventDefault(); document.querySelector('#quienes-somos')?.scrollIntoView({ behavior: 'smooth' }) }}>Quiénes somos</a></li>
            <li><a href="#productos" onClick={(e) => { e.preventDefault(); document.querySelector('#productos')?.scrollIntoView({ behavior: 'smooth' }) }}>Productos</a></li>
            <li><a href="#servicios" onClick={(e) => { e.preventDefault(); document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' }) }}>Servicios</a></li>
            <li><a href="#contacto" onClick={(e) => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }) }}>Contacto</a></li>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contacto</FooterTitle>
          <FooterList>
            <li>📞 3239155583</li>
            <li>📍 Cl. 70a Bis #121a-30 Bogotá D.C</li>
            <li>✉️ compucerebro@gmail.com</li>
          </FooterList>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>© {year} CompuCerebro. Todos los derechos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  )
}

export default Footer
