import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import caracoliImg from '/caracoli.png'
import { ArrowDown, ArrowUp } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const [isVisible, setIsVisible] = useState(true)
  const animatingRef = useRef(false)

  // Animación inicial de entrada
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: "power2.out" } })
    
    // Texto superior izquierdo - entra desde la izquierda
    tl.from('.hero-title', {
      x: -100,
      opacity: 0,
    }, 0)
    .from('.hero-description', {
      x: 100,
      opacity: 0,
    }, "<")
    .from('.hero-image', {
      y: 100,
    }, "<")
    .from('.hero-button', {
      x: -50,
      opacity: 0,
    }, "<")
  }, [])

  const handleSlideUp = () => {
    if (animatingRef.current) return
    animatingRef.current = true

    gsap.to(heroRef.current, {
      yPercent: -100,
      duration: 1.25,
      ease: "power1.inOut",
      onComplete: () => {
        setIsVisible(false)
        animatingRef.current = false
      }
    })
  }

  const handleSlideDown = () => {
    if (animatingRef.current) return
    animatingRef.current = true

    setIsVisible(true)
    gsap.set(heroRef.current, { yPercent: -100 })

    gsap.to(heroRef.current, {
      yPercent: 0,
      duration: 1.25,
      ease: "power1.inOut",
      onComplete: () => {
        animatingRef.current = false
      }
    })
  }

  // Detectar scroll para activar transiciones
  useEffect(() => {
    const handleWheel = (e) => {
      if (animatingRef.current) return

      // Scroll hacia abajo y el hero está visible
      if (e.deltaY > 0 && isVisible) {
        e.preventDefault()
        handleSlideUp()
      }
      // Scroll hacia arriba y el hero está oculto
      else if (e.deltaY < 0 && !isVisible && window.scrollY === 0) {
        e.preventDefault()
        handleSlideDown()
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [isVisible])



  return (
    <>
      <div ref={heroRef} className='fixed top-0 left-0 h-screen bg-black w-full z-50 overflow-clip'>
        <div ref={contentRef}>
          <div className='hero-title absolute top-10 left-5 md:left-10 w-1/2'>
            <h1 className='text-white text-2xl md:text-5xl'>Instituto de Investigación para la Innovación y la Transformación Sostenible del BioTerritorio Caracolí</h1>
          </div>
          <div className='hero-description absolute z-10 bottom-20 text-end w-11/12 right-5 md:bottom-10 md:right-10 md:w-1/2'>
            <span className='text-white text-sm md:text-lg'>El instituto que investiga, crea y apropia ciencia y tecnología para la innovación y la transformación sostenible del bioterritorio</span>
          </div>
          <div className='hero-image absolute h-full w-full left-1/2 top-7/12 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
            <img className='scale-115 object-contain max-h-full max-w-full brightness-85' src={caracoliImg} alt="Caracoli" />
            <div className='absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black pointer-events-none'></div>
          </div>
          <div className='hero-button flex justify-center items-center gap-1 absolute bottom-5 md:bottom-10 left-5 md:left-10 px-4 py-1 text-white border border-white/50 hover:bg-white/10 transition-colors duration-300'>
            <button
              onClick={handleSlideUp}
            >
              Explorar más
            </button>
            <ArrowDown color='white' size={20} />
          </div>
        </div>
      </div>

      {/* Botón para volver cuando el hero está oculto */}
      {!isVisible && (
        <div className='hero-button flex justify-center items-center gap-1 absolute top-5 md:top-10 left-5 md:left-10 z-10 px-4 py-1 text-white border border-white/50 hover:bg-white/10 transition-colors duration-300'>
          <button
            onClick={handleSlideDown}
          >
            Volver al inicio
          </button>
          <ArrowUp color='white' size={20} />
        </div>
      )}
    </>
  )
}