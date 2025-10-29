import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App