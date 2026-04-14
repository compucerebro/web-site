# 💻 CompuCerebro | Tecnología Inteligente

![CompuCerebro](https://img.shields.io/badge/Estado-Activo-success) ![React](https://img.shields.io/badge/React-19.2-blue) ![Vite](https://img.shields.io/badge/Vite-8.0-blueviolet) ![Styled Components](https://img.shields.io/badge/Styled--Components-6.1-db7093)

Venta de computadores, soporte técnico y soluciones tecnológicas de confianza, pensadas para personas y empresas. Equipos Gamer, de oficina y laptops.

---

## 🚀 Características Principales

Esta *Landing Page* de CompuCerebro ofrece una experiencia de usuario rápida, moderna y visualmente atractiva:

- **Inicio (Hero):** Sección de impacto con animaciones dinámicas.
- **Sobre Nosotros:** Información corporativa y propuesta de valor.
- **Productos:** Catálogo interactivo segmentado por categorías.
- **Servicios:** Detalle de soluciones técnicas y software.
- **Contacto:** Ubicación integrada con mapas y enlaces directos.
- **WhatsApp Flotante:** Botón persistente con indicador de "escribiendo" para mejorar el engagement.

## 🛠️ Tecnologías Empleadas

El proyecto utiliza un stack moderno enfocado en mantenibilidad y rendimiento:

- **[React](https://react.dev/) (v19):** Biblioteca principal para la interfaz.
- **[Vite](https://vitejs.dev/):** Herramienta de construcción y servidor de desarrollo.
- **[Styled Components](https://styled-components.com/):** Sistema de **CSS-in-JS** que garantiza estilos encapsulados, dinámicos y un código más limpio.
- **[React Helmet Async](https://github.com/staylor/react-helmet-async):** Gestión avanzada de SEO (etiquetas Meta, Open Graph para redes sociales).

## 📁 Arquitectura del Proyecto

La estructura sigue el patrón de componentes modulares:

```text
src/
├── components/          # Componentes independientes
│   └── ComponentName/
│       ├── Component.jsx       # Lógica y estructura
│       └── Component.styles.js # Estilos específicos (Styled Components)
├── styles/
│   └── GlobalStyles.js  # Tokens de diseño, fuentes y resets globales
└── main.jsx             # Punto de entrada con proveedores globales
```

## ⚙️ Configuración Local

Sigue estos pasos para trabajar en el proyecto:

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/compucerebro/web-site.git
   ```

2. **Instala las dependencias** (Incluyendo Styled Components)
   ```bash
   npm install
   ```

3. **Inicia el servidor**
   ```bash
   npm run dev
   ```

4. **Producción**
   ```bash
   npm run build
   ```

---

*Desarrollado con ❤️ para CompuCerebro.*
