import { Lightbulb, ArrowRight } from 'lucide-react'

export default function Projects() {
  const projects = [
    'Fortalecimiento de la seguridad alimentaria con IA en pequeños productores de Musáceas (Colombia - Costa Rica - Perú)',
    'Encadenamiento productivo de la arracacha en Tolima',
    'Integración de Tecnologías 4.0 para modernización en gestión y operación de sistemas productivos',
    'Transferencia tecnológica para sistemas sostenibles de producción',
    'Innovación en producto a partir del aprovechamiento de residuos agroindustriales',
    'Apropiación social del conocimiento para innovación comunitaria',
    'Innovación social para transformación sostenible del bioterritorio - Caso Murillo',
    'Ecoturismo y bioeconomía para desarrollo local sostenible'
  ]

  return (
    <section className='min-h-screen bg-black py-20 px-10'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center justify-center gap-3 mb-16'>
          <Lightbulb size={40} className='text-caracoli' />
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-light text-white'>Proyectos de Interés 2026</h2>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map((project, index) => (
            <div 
              key={index}
              className='group p-6 hover:bg-zinc-900 transition-colors duration-300'
            >
              <div className='flex items-start gap-4'>
                <span className='text-xl md:text-2xl font-light text-caracoli shrink-0'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className='flex-1'>
                  <p className='text-sm md:text-base text-gray-300 leading-relaxed'>{project}</p>
                  <div className='mt-3 flex items-center gap-2 text-caracoli opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <span className='text-sm'>Ver más</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
