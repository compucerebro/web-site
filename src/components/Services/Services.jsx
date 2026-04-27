import {
  ServicesSection,
  ServicesBgPattern,
  ServicesContainer,
  ServicesHeader,
  ServicesTag,
  ServicesTitle,
  TitleLine,
  ServicesSubtitle,
  ServicesGrid,
  Card,
  IconWrap,
  Icon,
  IconGlow,
  CardName,
  CardDesc
} from './Services.styles'

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
  {
    id: 'web-design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M6 21h12M12 17v4M7 8l-2 2 2 2M17 8l2 2-2 2M14 8l-4 4" />
      </svg>
    ),
    name: 'Diseño y desarrollo de sitios web',
    description: 'Creamos sitios web modernos, rápidos y adaptados a tus necesidades.',
  },
]

function ServiceCard({ service }) {
  return (
    <Card id={`service-${service.id}`}>
      <IconWrap>
        <Icon>{service.icon}</Icon>
        <IconGlow />
      </IconWrap>
      <CardName>{service.name}</CardName>
      <CardDesc>{service.description}</CardDesc>
    </Card>
  )
}

function Services() {
  return (
    <ServicesSection id="servicios">
      <ServicesBgPattern />

      <ServicesContainer>
        <ServicesHeader>
          <ServicesTag>Lo que ofrecemos</ServicesTag>
          <ServicesTitle>Nuestros Servicios</ServicesTitle>
          <TitleLine />
          <ServicesSubtitle>
            No vendemos <strong>tecnología</strong>, vendemos <strong>tranquilidad</strong>.
          </ServicesSubtitle>
        </ServicesHeader>

        <ServicesGrid>
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  )
}

export default Services
