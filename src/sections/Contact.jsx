import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Contact() {
  return (
    <section className='min-h-screen bg-black py-20 px-10'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-center text-white'>Contacto</h2>
        <p className='text-center text-gray-400 mb-16 text-base md:text-lg'>
          ¿Quieres conocer más o colaborar con nosotros?
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          {/* Información de Contacto */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-xl md:text-2xl font-light mb-6 text-white'>Información</h3>
              
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <Mail className='text-caracoli shrink-0 mt-1' size={24} />
                  <div>
                    <p className='text-sm text-gray-500 mb-1'>Email</p>
                    <a href='mailto:instituto.caracoli@unibague.edu.co' className='text-gray-300 hover:text-caracoli'>
                      instituto.caracoli@unibague.edu.co
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <Phone className='text-caracoli shrink-0 mt-1' size={24} />
                  <div>
                    <p className='text-sm text-gray-500 mb-1'>Celular</p>
                    <a href='tel:+573003727097' className='text-gray-300 hover:text-caracoli'>
                      +57 300 372 7097
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <MapPin className='text-caracoli shrink-0 mt-1' size={24} />
                  <div>
                    <p className='text-sm text-gray-500 mb-1'>Ubicación</p>
                    <p className='text-gray-300'>Edificio CEP - 1er piso</p>
                    <p className='text-gray-300'>Universidad de Ibagué</p>
                    <p className='text-gray-300'>Carrera 22 Calle 67</p>
                    <p className='text-gray-300'>Ibagué, Tolima, Colombia</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <ExternalLink className='text-caracoli shrink-0 mt-1' size={24} />
                  <div>
                    <p className='text-sm text-gray-500 mb-1'>Sitio web</p>
                    <a 
                      href='https://institutocaracoli.unibague.edu.co' 
                      target='_blank' 
                      rel='noopener noreferrer'
                      className='text-gray-300 hover:text-caracoli'
                    >
                      institutocaracoli.unibague.edu.co
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className='text-sm text-gray-500 mb-2'>Directora</p>
              <p className='text-lg md:text-xl text-gray-300'>Helga Patricia Bermeo Andrade</p>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div>
            <h3 className='text-xl md:text-2xl font-light mb-6 text-white'>Envíanos un mensaje</h3>
            <form className='space-y-6'>
              <div>
                <input
                  type='text'
                  placeholder='Nombre completo'
                  className='w-full px-4 py-3 border-b text-white placeholder-gray-500 focus:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-green-400 transition-colors'
                />
              </div>
              <div>
                <input
                  type='email'
                  placeholder='Correo electrónico'
                  className='w-full px-4 py-3 border-b text-white placeholder-gray-500 focus:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-green-400 transition-colors'
                />
              </div>
              <div>
                <input
                  type='tel'
                  placeholder='Teléfono'
                  className='w-full px-4 py-3 border-b text-white placeholder-gray-500 focus:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-green-400 transition-colors'
                />
              </div>
              <div>
                <textarea
                  placeholder='Mensaje'
                  rows='5'
                  className='w-full px-4 py-3 border-b text-white placeholder-gray-500 focus:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-green-400 transition-colors resize-none'
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full px-6 py-3 bg-caracoli hover:opacity-80 transition-colors cursor-pointer'
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
