import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import ResearchLines from './sections/ResearchLines.jsx'
import Projects from './sections/Projects.jsx'
import SDG from './sections/SDG.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

function App() {
  return (
    <div className='bg-black'>
      <Hero />
      <About />
      <ResearchLines />
      <Projects />
      <SDG />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
