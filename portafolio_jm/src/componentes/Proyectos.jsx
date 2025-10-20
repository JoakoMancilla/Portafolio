import React from 'react'
import Aexpress from '../assets/Aexpress.png';
import Ejercito from '../assets/Ejercito.png';
import PokeDex from '../assets/PokeDexV4.png';

export const Proyectos = () => {
  return (
    <div id='projects' className="px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent animate-pulse">Mis Proyectos</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3 ">

        {/* Proyecto 1 */}
        <div className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]">
          {/* Imagen */}
          <div className="relative w-full h-48 overflow-hidden shadow-lg vignette-img rounded-t-2xl">
            <img
              src={Aexpress}
              alt="Imagen del Proyecto"
              className="object-cover object-top w-full h-full duration-300 filter grayscale group-hover:filter-none transition-filter"
            />
          </div>
          {/* Tecnologías */}
          <div className="px-6 pt-6 flex-grow">
            <h4 className="mb-3 text-sm font-semibold tracking-wide text-gray-400 uppercase">
              Tecnologías usadas
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs text-blue-400 border border-blue-500 rounded-full bg-blue-900/30">
                WordPress
              </span>
              <span className="px-3 py-1 text-xs text-purple-400 border border-purple-500 rounded-full bg-purple-900/30">
                Divi
              </span>
            </div>
          </div>
          {/* Descripción y link */}
          <div className="flex flex-col gap-4 px-6 py-6">
            <h3 className="text-lg font-semibold text-gray-200">Diseño Web</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Sitio web desarrollado con WordPress y Divi para un proyecto comercial.
            </p>
            <div>
              <a href="https://aeropuertoexpress.cl/" className="inline-block text-sm text-blue-400 transition duration-200 hover:text-blue-300 hover:underline">
                Ver proyecto →
              </a>
            </div>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]">
          
          <div className="relative w-full h-48 overflow-hidden shadow-lg vignette-img rounded-t-2xl">
            <img
              src={PokeDex}
              alt="Imagen del Proyecto"
              className="object-cover object-top w-full h-full duration-300 filter grayscale group-hover:filter-none transition-filter"
            />
          </div>
          
          <div className="px-6 pt-6 flex-grow">
            <h4 className="mb-3 text-sm font-semibold tracking-wide text-gray-400 uppercase">
              Tecnologías usadas
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs text-blue-400 border border-blue-500 rounded-full bg-blue-900/30">
                React
              </span>
              <span className="px-3 py-1 text-xs border rounded-full bg-cyan-900/30 text-cyan-400 border-cyan-500">
                Tailwind
              </span>
              <span className="px-3 py-1 text-xs text-yellow-400 border border-yellow-500 rounded-full bg-yellow-900/30">
                Javascript
              </span>
              <span className="px-3 py-1 text-xs text-orange-400 border border-orange-500 rounded-full bg-orange-900/30">
                API Rest
              </span>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 px-6 py-6">
            <h3 className="text-lg font-semibold text-gray-200">Poke Dex</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Proyecto de aprendizaje, utilizando APIs REST para obtener y mostrar datos.
            </p>
            <div>
              <a href="https://joakomancilla.github.io/Poke-Dex-React/" className="inline-block text-sm text-blue-400 transition duration-200 hover:text-blue-300 hover:underline">
                Ver proyecto →
              </a>
            </div>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]">
          <div className="relative w-full h-48 overflow-hidden shadow-lg vignette-img rounded-t-2xl">
            <img
              src={Ejercito}
              alt="Imagen del Proyecto"
              className="object-cover object-top w-full h-full duration-300 filter grayscale group-hover:filter-none transition-filter"
            />
          </div>

          <div className="px-6 pt-6 flex-grow">
            <h4 className="mb-3 text-sm font-semibold tracking-wide text-gray-400 uppercase">
              Tecnologías usadas
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs text-blue-400 border border-blue-500 rounded-full bg-blue-900/30">
                Python
              </span>
              <span className="px-3 py-1 text-xs text-green-400 border border-green-500 rounded-full bg-green-900/30">
                MongoDB
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 px-6 py-6">
            <h3 className="text-lg font-semibold text-gray-200">App DB Consola</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Aplicación de Python en consultas a bases de datos no estructuradas.
            </p>
            <div>
              <a href="https://github.com/JoakoMancilla/CRUD-EJERCITO" className="inline-block text-sm text-blue-400 transition duration-200 hover:text-blue-300 hover:underline">
                Ver proyecto →
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
