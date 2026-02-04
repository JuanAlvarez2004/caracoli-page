import { Globe } from 'lucide-react'

export default function SDG() {
  const sdgs = [
    { number: 1, title: 'Fin de la pobreza' },
    { number: 2, title: 'Hambre cero' },
    { number: 3, title: 'Salud y bienestar' },
    { number: 6, title: 'Agua limpia y saneamiento' },
    { number: 7, title: 'Energía asequible y no contaminante' },
    { number: 8, title: 'Trabajo decente y crecimiento económico' },
    { number: 9, title: 'Industria, innovación e infraestructura' },
    { number: 11, title: 'Ciudades y comunidades sostenibles' },
    { number: 12, title: 'Producción y consumo responsables' },
    { number: 13, title: 'Acción por el clima' },
    { number: 15, title: 'Vida de ecosistemas terrestres' }
  ]

  return (
    <section className='min-h-screen bg-black text-white py-20 px-10'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center justify-center gap-3 mb-6'>
          <Globe size={40} className='text-caracoli' />
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-light'>Objetivos de Desarrollo Sostenible</h2>
        </div>
        
        <p className='text-center text-gray-400 mb-16 text-base md:text-lg'>
          Contribuimos a los ODS priorizados para el desarrollo sostenible del bioterritorio
        </p>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {sdgs.map((sdg) => (
            <div 
              key={sdg.number}
              className='aspect-square border p-3 justify-between hover:scale-105 transition-transform duration-300'
            >
              <span className='text-4xl md:text-5xl font-bold text-caracoli'>{sdg.number}</span>
              <p className='text-xs md:text-sm leading-tight'>{sdg.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
