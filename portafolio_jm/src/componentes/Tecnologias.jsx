import React from 'react'

import {
  SiLangchain, SiPython, SiFastapi, SiSqlalchemy, SiPostgresql,
  SiMariadb, SiMongodb, SiTypescript, SiReact, SiHtml5, SiCss3,
  SiTailwindcss, SiDocker, SiGit, SiGithub, SiUnity
} from 'react-icons/si'

const tecnologias = [
  { nombre: 'Python', icono: <SiPython />, color: 'text-blue-400' },
  { nombre: 'LangChain', icono: <SiLangchain />, color: 'text-teal-400' },
  { nombre: 'React', icono: <SiReact />, color: 'text-cyan-400' },
  { nombre: 'FastAPI', icono: <SiFastapi />, color: 'text-green-400' },
  { nombre: 'PostgreSQL', icono: <SiPostgresql />, color: 'text-blue-500' },
  { nombre: 'MariaDB', icono: <SiMariadb />, color: 'text-amber-400' },
  { nombre: 'MongoDB', icono: <SiMongodb />, color: 'text-green-500' },
  { nombre: 'TypeScript', icono: <SiTypescript />, color: 'text-blue-500' },
  { nombre: 'HTML5', icono: <SiHtml5 />, color: 'text-orange-500' },
  { nombre: 'CSS3', icono: <SiCss3 />, color: 'text-blue-400' },
  { nombre: 'Tailwind CSS', icono: <SiTailwindcss />, color: 'text-sky-400' },
  { nombre: 'Docker', icono: <SiDocker />, color: 'text-sky-400' },
  { nombre: 'Git', icono: <SiGit />, color: 'text-orange-600' },
  { nombre: 'GitHub', icono: <SiGithub />, color: 'text-gray-300' },
  { nombre: 'Unity', icono: <SiUnity />, color: 'text-white' },
]

export const Tecnologias = () => {
  return (
    <section id='skills' className="px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]">
        Tecnologías que manejo
      </h2>

      <div className="grid max-w-6xl mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {tecnologias.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-105 hover:border-white/20 transition-all duration-300"
          >
            <div className={`text-5xl ${tech.color}`}>{tech.icono}</div>
            <p className="text-sm font-semibold text-center text-gray-200">{tech.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
