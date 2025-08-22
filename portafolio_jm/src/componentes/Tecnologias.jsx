import React from 'react'

import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGit, SiPython, SiMongodb, SiUnity } from 'react-icons/si'

export const Tecnologias = () => {
  const tecnologias = [
  // Lenguajes
  { nombre: 'HTML5', icono: <SiHtml5 />, color: 'text-orange-500' },
  { nombre: 'CSS3', icono: <SiCss3 />, color: 'text-blue-500' },
  { nombre: 'JavaScript', icono: <SiJavascript />, color: 'text-yellow-400' },
  { nombre: 'Python', icono: <SiPython />, color: 'text-blue-500' },

  // Frameworks y librerías
  { nombre: 'React', icono: <SiReact />, color: 'text-cyan-400' },
  { nombre: 'Tailwind CSS', icono: <SiTailwindcss />, color: 'text-sky-400' },

  // Herramientas y tecnologías
  { nombre: 'Git & GitHub', icono: <SiGit />, color: 'text-red-500' },
  { nombre: 'MongoDB', icono: <SiMongodb />, color: 'text-green-500' },
  { nombre: 'Unity', icono: <SiUnity/>, color: 'text-white' },
];

  return (
    <section id='skills' className="px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent animate-pulse">
        Tecnologías que manejo
      </h2>

      <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3">
        {tecnologias.map((tech, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 hover:shadow-xl transition-transform duration-300`}
          >
            <div className={`text-5xl ${tech.color}`}>{tech.icono}</div>
            <p className="text-lg font-semibold text-center">{tech.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
