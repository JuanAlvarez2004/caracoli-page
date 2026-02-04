import { Target, Compass, Eye } from 'lucide-react'
import flower from '/flower.png'

export default function About() {
  return (
    <section className='relative h-screen bg-black py-20 px-10 overflow-x-clip'>
      <div className='absolute rotate-90 left-0 right-0 top-0'>
        <img className='brightness-60 scale-60' src={flower} alt="Flores" />
      </div>
      <div className='w-full h-full flex flex-col items-center justify-center gap-10'>
        <h2 className='text-3xl md:text-5xl font-light text-center text-white'>Quiénes Somos</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {/* Problemática */}
          <div className='space-y-4'>
            <div className='flex items-center gap-3 mb-4'>
              <Target size={32} className='text-caracoli' />
              <h3 className='text-2xl font-light text-white'>Problemática</h3>
            </div>
            <p className='text-gray-400 leading-relaxed'>
              Investigamos, creamos y apropiamos ciencia y tecnología para la innovación y la transformación sostenible del bioterritorio, enfocándonos en los desafíos de desarrollo territorial de la región centro-sur de Colombia.
            </p>
          </div>

          {/* Misión */}
          <div className='space-y-4'>
            <div className='flex items-center gap-3 mb-4'>
              <Compass size={32} className='text-caracoli' />
              <h3 className='text-2xl font-light text-white'>Misión</h3>
            </div>
            <p className='text-gray-400 leading-relaxed'>
              Realizar, crear y adoptar ciencia y tecnología que conduzca a la innovación sostenible y la transformación del bioterritorio a partir de sectores estratégicos para el desarrollo de la región centro-sur de Colombia.
            </p>
          </div>

          {/* Visión */}
          <div className='space-y-4'>
            <div className='flex items-center gap-3 mb-4'>
              <Eye size={32} className='text-caracoli' />
              <h3 className='text-2xl font-light text-white'>Visión 2030</h3>
            </div>
            <p className='text-gray-400 leading-relaxed'>
              Ser un agente reconocido por su capacidad para aportar de manera efectiva a la generación de innovación sostenible y la transformación del bioterritorio en la región centro-sur de Colombia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
