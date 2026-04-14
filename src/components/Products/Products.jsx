import { useState } from 'react'
import {
  ProductsSection,
  ProductsHeader,
  ProductsTag,
  ProductsTitle,
  TitleLine,
  ProductsSubtitle,
  CarouselContainer,
  SideCardWrapper,
  CenterCardWrapper,
  CardContainer,
  CardBadge,
  ImageWrap,
  CardImage,
  CardBody,
  CardTag,
  CardName,
  CardDesc,
  CardBtn,
  ControlsContainer,
  ArrowButton,
  DotsContainer,
  DotLoader
} from './Products.styles'

const products = [
  {
    id: 1,
    name: 'Computador Gamer',
    description: 'Rendimiento extremo para gaming y diseño. RTX 4060 + 32GB RAM + SSD NVMe.',
    tag: 'Gaming',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&q=80',
    badge: 'Más vendido',
  },
  {
    id: 2,
    name: 'PC Oficina Pro',
    description: 'Ideal para trabajo desde casa y oficina. Cero distracciones. Intel i5 + 16GB RAM.',
    tag: 'Oficina',
    image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=500&q=80',
    badge: 'Recomendado',
  },
  {
    id: 3,
    name: 'Laptop Ultrabook',
    description: 'Delgada, potente y ultraligera. Pantalla de alta resolución y gran autonomía.',
    tag: 'Portátil',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
    badge: 'Lanzamiento',
  },
  {
    id: 4,
    name: 'Portátil Corporativo',
    description: 'Diseño elegante para empresas y profesionales. Procesador i7, 16GB RAM y chasis ultra resistente.',
    tag: 'Portátil',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80',
    badge: 'Empresas',
  },
  {
    id: 5,
    name: 'Workstation Diseño',
    description: 'Estación de trabajo pesada con doble monitor, tarjeta gráfica dedicada Quadro.',
    tag: 'Diseño 3D',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80',
  },
  {
    id: 6,
    name: 'All-in-One Familiar',
    description: 'Computador todo en uno. Minimalista, sin enredos de cables, ideal para el hogar.',
    tag: 'Hogar',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80',
  },
]

function ProductCard({ product, isActive }) {
  return (
    <CardContainer $isActive={isActive}>
      {product.badge && (
        <CardBadge>{product.badge}</CardBadge>
      )}
      <ImageWrap>
        <CardImage
          src={product.image}
          alt={product.name}
        />
      </ImageWrap>
      <CardBody>
        <CardTag>{product.tag}</CardTag>
        <CardName>{product.name}</CardName>
        <CardDesc>{product.description}</CardDesc>
        <CardBtn
          href="#contacto"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Cotizar ahora
        </CardBtn>
      </CardBody>
    </CardContainer>
  )
}

function Products() {
  const [active, setActive] = useState(1)

  const prev = () => setActive((p) => (p === 0 ? products.length - 1 : p - 1))
  const next = () => setActive((p) => (p === products.length - 1 ? 0 : p + 1))

  const getIndex = (offset) => (active + offset + products.length) % products.length

  return (
    <ProductsSection id="productos">
      <ProductsHeader>
        <ProductsTag>Nuestros equipos</ProductsTag>
        <ProductsTitle>Productos</ProductsTitle>
        <TitleLine />
        <ProductsSubtitle>
          Cotiza con nosotros equipos confiables, configurados según tu necesidad.
        </ProductsSubtitle>
      </ProductsHeader>

      <CarouselContainer>
        {/* Tarjeta izquierda */}
        <SideCardWrapper
          onClick={prev}
          aria-label="Anterior"
        >
          <ProductCard product={products[getIndex(-1)]} isActive={false} />
        </SideCardWrapper>

        {/* Tarjeta central */}
        <CenterCardWrapper>
          <ProductCard product={products[active]} isActive={true} />
        </CenterCardWrapper>

        {/* Tarjeta derecha */}
        <SideCardWrapper
          onClick={next}
          aria-label="Siguiente"
        >
          <ProductCard product={products[getIndex(1)]} isActive={false} />
        </SideCardWrapper>
      </CarouselContainer>

      {/* Controles */}
      <ControlsContainer>
        <ArrowButton onClick={prev} id="products-prev" aria-label="Anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </ArrowButton>

        <DotsContainer>
          {products.map((_, i) => (
            <DotLoader
              key={i}
              id={`products-dot-${i}`}
              $active={i === active}
              onClick={() => setActive(i)}
              aria-label={`Ir al producto ${i + 1}`}
            />
          ))}
        </DotsContainer>

        <ArrowButton onClick={next} id="products-next" aria-label="Siguiente">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </ArrowButton>
      </ControlsContainer>
    </ProductsSection>
  )
}

export default Products
