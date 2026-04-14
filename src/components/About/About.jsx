import './About.css'

function About() {
  return (
    <section className="about" id="quienes-somos">
      <div className="about__bg-pattern"></div>

      <div className="about__container">
        <div className="about__header">
          <span className="about__tag">Nuestra historia</span>
          <h2 className="about__title">¿Quiénes Somos?</h2>
          <div className="about__line"></div>
        </div>

        <p className="about__text">
          En <span className="about__brand">CompuCerebro</span> creemos que la tecnología debe trabajar para ti, no al revés.
          Estamos especializados en la venta de equipos de cómputo, soporte técnico especializado y asesoría
          tecnológica, ayudando a nuestros clientes a tomar decisiones inteligentes y seguras.
          <br /><br />
          Nuestro objetivo es claro: simplificar la tecnología y potenciar tu productividad.
        </p>

      </div>
    </section>
  )
}

export default About
