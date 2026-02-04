import { Leaf, Cpu, Users } from 'lucide-react'

export default function ResearchLines() {
  const macrolines = [
    {
      icon: Leaf,
      title: 'Bioeconomía Regional y Conservación de la Biodiversidad',
      lines: [
        {
          subtitle: 'Valoración integral del capital natural',
          description: 'Evalúa, protege y gestiona la biodiversidad, el agua y los servicios ecosistémicos del territorio.'
        },
        {
          subtitle: 'Bioeconomía regional responsable',
          description: 'Impulsa el aprovechamiento responsable de la biodiversidad para desarrollar bioproductos y cadenas de valor sostenibles.'
        },
        {
          subtitle: 'Soluciones ecosostenibles',
          description: 'Diseña soluciones basadas en biomasa, energías limpias y paisajes multifuncionales regenerativos.'
        }
      ]
    },
    {
      icon: Cpu,
      title: 'Innovación Organizacional, Nuevas Tecnologías y Encadenamiento Productivo',
      lines: [
        {
          subtitle: 'Desarrollo e integración tecnológica',
          description: 'Innovación de base tecnológica que transforme procesos y recursos en organizaciones del territorio.'
        },
        {
          subtitle: 'Sistemas sostenibles de producción',
          description: 'Genera innovación bajo principios de producción limpia y economía circular.'
        },
        {
          subtitle: 'Integración de valor en cadenas',
          description: 'Fortalece cadenas productivas haciendo más competitivos y sostenibles los flujos de producción.'
        }
      ]
    },
    {
      icon: Users,
      title: 'Innovación Social, Cohesión Comunitaria y Justicia Territorial',
      lines: [
        {
          subtitle: 'Cuidado y cohesión comunitaria',
          description: 'Diseña procesos centrados en el cuidado mutuo, justicia territorial y construcción colectiva de decisiones.'
        },
        {
          subtitle: 'Gobernanza territorial',
          description: 'Promueve la participación comunitaria en la generación y uso de conocimiento para la toma de decisiones.'
        },
        {
          subtitle: 'Liderazgo comunitario',
          description: 'Desarrolla capacidades para que comunidades ejerzan un liderazgo sostenible y transformador.'
        }
      ]
    }
  ]

  return (
    <section className='min-h-screen bg-black text-white py-20 px-10'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-light mb-16 text-center'>Nuestras Macrolíneas de Investigación</h2>
        
        <div className='space-y-16'>
          {macrolines.map((macro, index) => {
            const Icon = macro.icon
            return (
              <div key={index} className='space-y-8'>
                <div className='flex items-start gap-4'>
                  <Icon size={40} className='text-caracoli shrink-0 mt-1' />
                  <div>
                    <h3 className='text-2xl md:text-3xl font-light mb-8'>{macro.title}</h3>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                      {macro.lines.map((line, idx) => (
                        <div key={idx} className='space-y-2'>
                          <h4 className='text-base md:text-lg font-medium text-caracoli'>{line.subtitle}</h4>
                          <p className='text-gray-400 text-xs md:text-sm leading-relaxed'>{line.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
