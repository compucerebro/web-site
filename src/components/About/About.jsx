import {
  AboutSection,
  AboutBgPattern,
  AboutContainer,
  AboutHeader,
  AboutTag,
  AboutTitle,
  AboutLine,
  AboutText,
  AboutBrand
} from './About.styles'

function About() {
  return (
    <AboutSection id="quienes-somos">
      <AboutBgPattern />

      <AboutContainer>
        <AboutHeader>
          <AboutTag>Nuestra historia</AboutTag>
          <AboutTitle>¿Quiénes Somos?</AboutTitle>
          <AboutLine />
        </AboutHeader>

        <AboutText>
          En <AboutBrand>CompuCerebro</AboutBrand> creemos que la tecnología debe trabajar para ti, no al revés.
          Estamos especializados en la venta de equipos de cómputo, soporte técnico especializado y asesoría
          tecnológica, ayudando a nuestros clientes a tomar decisiones inteligentes y seguras.
          <br /><br />
          Nuestro objetivo es claro: simplificar la tecnología y potenciar tu productividad.
        </AboutText>

      </AboutContainer>
    </AboutSection>
  )
}

export default About
