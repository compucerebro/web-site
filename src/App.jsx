import { Helmet } from 'react-helmet-async'
import logo from './assets/logo.png'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Products from './components/Products/Products'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
  return (
    <>
      <Helmet>
        <title>CompuCerebro | Tecnología Inteligente para tu día a día</title>
        <link rel="icon" type="image/png" href={logo} />
        <meta name="description" content="Venta de computadores, soporte técnico y soluciones tecnológicas pensadas para personas y empresas. Equipos Gamer, de oficina y laptops." />
        <meta name="keywords" content="computadores, gamer, pc oficina, soporte tecnico, mantenimiento, software, compucerebro, tecnologia" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CompuCerebro | Tecnología Inteligente" />
        <meta property="og:description" content="Venta de computadores, soporte técnico y soluciones tecnológicas de confianza." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="CompuCerebro | Tecnología Inteligente" />
        <meta property="twitter:description" content="Venta de computadores, soporte técnico y soluciones tecnológicas de confianza." />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
