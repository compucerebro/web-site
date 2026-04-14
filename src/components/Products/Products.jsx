import { useState } from 'react'
import './Products.css'

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
    <div className={`product-card ${isActive ? 'product-card--active' : ''}`}>
      {product.badge && (
        <div className="product-card__badge">{product.badge}</div>
      )}
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
      </div>
      <div className="product-card__body">
        <span className="product-card__tag">{product.tag}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
        <a
          href="#contacto"
          className="product-card__btn"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Cotizar ahora
        </a>
      </div>
    </div>
  )
}

function Products() {
  const [active, setActive] = useState(1)

  const prev = () => setActive((p) => (p === 0 ? products.length - 1 : p - 1))
  const next = () => setActive((p) => (p === products.length - 1 ? 0 : p + 1))

  const getIndex = (offset) => (active + offset + products.length) % products.length

  return (
    <section className="products" id="productos">
      <div className="products__header">
        <span className="products__tag">Nuestros equipos</span>
        <h2 className="products__title">Productos</h2>
        <div className="products__title-line"></div>
        <p className="products__subtitle">
          Cotiza con nosotros equipos confiables, configurados según tu necesidad.
        </p>
      </div>

      <div className="products__carousel">
        {/* Tarjeta izquierda */}
        <div
          className="products__side-card"
          onClick={prev}
          aria-label="Anterior"
        >
          <ProductCard product={products[getIndex(-1)]} isActive={false} />
        </div>

        {/* Tarjeta central */}
        <div className="products__center-card">
          <ProductCard product={products[active]} isActive={true} />
        </div>

        {/* Tarjeta derecha */}
        <div
          className="products__side-card"
          onClick={next}
          aria-label="Siguiente"
        >
          <ProductCard product={products[getIndex(1)]} isActive={false} />
        </div>
      </div>

      {/* Controles */}
      <div className="products__controls">
        <button className="products__arrow" onClick={prev} id="products-prev" aria-label="Anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="products__dots">
          {products.map((_, i) => (
            <button
              key={i}
              id={`products-dot-${i}`}
              className={`products__dot ${i === active ? 'products__dot--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Ir al producto ${i + 1}`}
            />
          ))}
        </div>

        <button className="products__arrow" onClick={next} id="products-next" aria-label="Siguiente">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Products
