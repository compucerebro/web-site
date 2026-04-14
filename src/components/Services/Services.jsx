import './Services.css'

const services = [
  {
    id: 'soporte-tecnico',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
    name: 'Soporte Técnico',
    description: 'Soporte técnico preventivo y correctivo para equipos de cómputo.',
  },
  {
    id: 'mantenimiento',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M23 4a1 1 0 0 1-1 1h-2v14h2a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2h2V5H2a1 1 0 0 1 0-2h20a1 1 0 0 1 1 1Z" />
        <path d="M8 5h8v14H8z" />
      </svg>
    ),
    name: 'Mantenimiento',
    description: 'Mantenimiento preventivo y correctivo de computadores.',
  },
  {
    id: 'instalacion-software',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M8 10l2 2 4-4" />
      </svg>
    ),
    name: 'Instalación de Software',
    description: 'Instalación y configuración de sistemas operativos y programas.',
  },
  {
    id: 'seguridad',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    name: 'Seguridad Digital',
    description: 'Instalación de antivirus y soluciones de seguridad informática.',
  },
  {
    id: 'asesoria',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    name: 'Asesoría',
    description: 'Asesoría tecnológica personalizada para tomar las mejores decisiones.',
  },
]

function ServiceCard({ service }) {
  return (
    <div className="service-card" id={`service-${service.id}`}>
      <div className="service-card__icon-wrap">
        <div className="service-card__icon">{service.icon}</div>
        <div className="service-card__icon-glow"></div>
      </div>
      <h3 className="service-card__name">{service.name}</h3>
      <p className="service-card__desc">{service.description}</p>
    </div>
  )
}

function Services() {
  return (
    <section className="services" id="servicios">
      <div className="services__bg-pattern"></div>

      <div className="services__container">
        <div className="services__header">
          <span className="services__tag">Lo que ofrecemos</span>
          <h2 className="services__title">Nuestros Servicios</h2>
          <div className="services__title-line"></div>
          <p className="services__subtitle">
            No vendemos <strong>tecnología</strong>, vendemos <strong>tranquilidad</strong>.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
