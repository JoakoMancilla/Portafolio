import React from 'react'

export const Proyectos = () => {
  return (
    <div id='projects' className="px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent animate-pulse">Mis Proyectos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 ">

        {/* Proyecto 1 */}
        <div className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]">
          <div className="vignette-img w-full h-48 overflow-hidden relative rounded-t-2xl shadow-lg">
            <img
              src="src/assets/proyectos/Aexpress.png"
              alt="Imagen del Proyecto"
              className="w-full h-full object-cover object-top filter grayscale group-hover:filter-none transition-filter duration-300"
            />
          </div>

          <div className="px-6 pt-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
              Tecnologías usadas
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-blue-900/30 text-blue-400 border border-blue-500 rounded-full">
                WordPress
              </span>
              <span className="text-xs px-3 py-1 bg-purple-900/30 text-purple-400 border border-purple-500 rounded-full">
                Divi
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 px-6 py-6">
            <h3 className="text-lg font-semibold text-gray-200">Diseño Web</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Sitio web desarrollado con WordPress y Divi para un proyecto comercial.
            </p>
            <div>
              <a href="#" className="inline-block text-sm text-blue-400 hover:text-blue-300 hover:underline transition duration-200">
                Ver proyecto →
              </a>
            </div>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]">
          <div className="vignette-img w-full h-48 overflow-hidden relative rounded-t-2xl shadow-lg">
            <img
              src="src/assets/proyectos/PokeDexV4.png"
              alt="Imagen del Proyecto"
              className="w-full h-full object-cover object-top filter grayscale group-hover:filter-none transition-filter duration-300"
            />
          </div>

          <div className="px-6 pt-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
              Tecnologías usadas
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-blue-900/30 text-blue-400 border border-blue-500 rounded-full">
                React
              </span>
              <span className="text-xs px-3 py-1 bg-cyan-900/30 text-cyan-400 border border-cyan-500 rounded-full">
                Tailwind
              </span>
              <span className="text-xs px-3 py-1 bg-yellow-900/30 text-yellow-400 border border-yellow-500 rounded-full">
                Javascript
              </span>
              <span className="text-xs px-3 py-1 bg-orange-900/30 text-orange-400 border border-orange-500 rounded-full">
                API Rest
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 px-6 py-6">
            <h3 className="text-lg font-semibold text-gray-200">Poke Dex</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Proyecto de aprendizaje, utilizando APIs REST para obtener y mostrar datos.
            </p>
            <div>
              <a href="#" className="inline-block text-sm text-blue-400 hover:text-blue-300 hover:underline transition duration-200">
                Ver proyecto →
              </a>
            </div>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]">
          <div className="vignette-img w-full h-48 overflow-hidden relative rounded-t-2xl shadow-lg">
            <img
              src="src/assets/proyectos/Ejercito.png"
              alt="Imagen del Proyecto"
             className="w-full h-full object-cover object-top filter grayscale group-hover:filter-none transition-filter duration-300"
            />
          </div>

          <div className="px-6 pt-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
              Tecnologías usadas
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 bg-blue-900/30 text-blue-400 border border-blue-500 rounded-full">
                Python
              </span>
              <span className="text-xs px-3 py-1 bg-green-900/30 text-green-400 border border-green-500 rounded-full">
                MongoDB
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 px-6 py-6">
            <h3 className="text-lg font-semibold text-gray-200">App DB Consola</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Aplicación de Python en consultas a bases de datos no estructuradas.
            </p>
            <div>
              <a href="#" className="inline-block text-sm text-blue-400 hover:text-blue-300 hover:underline transition duration-200">
                Ver proyecto →
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
