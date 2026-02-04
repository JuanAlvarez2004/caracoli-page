import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-black text-white py-16 px-10'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-between mb-12'>
          <div>
            <h3 className='text-lg md:text-xl font-light mb-4'>Instituto Caracolí</h3>
            <p className='text-gray-400 text-xs md:text-sm leading-relaxed'>
              Instituto de Investigación para la Innovación y la Transformación Sostenible del BioTerritorio
            </p>
          </div>

          <div>
            <h3 className='text-lg md:text-xl font-light mb-4 text-center'>Síguenos</h3>
            <div className='flex gap-4'>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                <Facebook size={20} />
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                <Twitter size={20} />
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                <Instagram size={20} />
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                <Linkedin size={20} />
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition-colors'>
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400'>
            <p>© {currentYear} Instituto Caracolí - Universidad de Ibagué</p>
            <a href='#' className='hover:text-white transition-colors'>
              Políticas de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
