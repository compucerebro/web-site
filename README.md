# 💻 CompuCerebro | Tecnología Inteligente

![CompuCerebro](https://img.shields.io/badge/Estado-Activo-success) ![React](https://img.shields.io/badge/React-19.2-blue) ![Vite](https://img.shields.io/badge/Vite-8.0-blueviolet)

Venta de computadores, soporte técnico y soluciones tecnológicas de confianza, pensadas para personas y empresas. Equipos Gamer, de oficina y laptops.

---

## 🚀 Características Principales

Esta *Landing Page* (página de presentación) de CompuCerebro está diseñada para ofrecer una experiencia de usuario rápida y moderna, e integra las siguientes secciones:

- **Inicio (Hero):** Sección de impacto inicial destacando el propósito de la marca.
- **Sobre Nosotros:** Información acerca de la empresa, su misión y experiencia.
- **Productos:** Catálogo de equipos para distintas necesidades (Gamer, Oficina, Laptops).
- **Servicios:** Oferta de soporte técnico, mantenimiento y venta de soluciones tecnológicas y de software.
- **Contacto:** Información de contacto, ubicación mediante integración de mapas e información general.
- **Botón de WhatsApp:** Soporte flotante animado y persistente para comunicación directa por chat con el área de ventas o soporte técnico.

## 🛠️ Tecnologías Empleadas

El proyecto está estructurado con herramientas y librerías modernas para asegurar su alto rendimiento y posicionamiento:

- **[React](https://react.dev/) (v19):** Interfaz e interactividad basada en componentes.
- **[Vite](https://vitejs.dev/):** Optimizador y servidor de desarrollo ultra rápido.
- **[React Helmet Async](https://github.com/staylor/react-helmet-async):** Inyección asíncrona de las etiquetas del `<head>`, brindando un excelente SEO en títulos, descripciones, imágenes destacadas (Open Graph) y tarjetas en X/Twitter.
- **CSS Vanilla (Modular):** Todo el estilo está trabajado a través de CSS de escritorio limpio por componente, para un mayor control, legibilidad y personalización visual.

## ⚙️ Instalación y Entorno Local

Sigue estos pasos si deseas ejecutar o modificar la web de manera local:

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/compucerebro/web-site.git
   ```

2. **Navega al directorio del proyecto**
   ```bash
   cd web-site
   ```

3. **Instala las dependencias**
   ```bash
   npm install
   ```

4. **Inicia el servidor en modo desarrollo**
   ```bash
   npm run dev
   ```
   El proyecto estará disponible comúnmente en `http://localhost:5173/`.

5. **Preparar para producción**
   ```bash
   npm run build
   ```
   Generará los archivos estáticos listos para producción dentro del directorio `dist/`.

## 💼 Estructura del proyecto

El archivo principal que orquesta toda la aplicación es `src/App.jsx`. Dentro de `src/components`, la navegación y las secciones están organizadas por carpetas individuales (` Navbar`, `Hero`, `Services`, `Footer`, etc.), permitiendo que el proyecto se mantenga fácilmente escalable a futuro.
