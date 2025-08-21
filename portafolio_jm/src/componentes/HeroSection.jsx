import React from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const abrir = "<>"
const cerrar = "</>"



export const HeroSection = () => {
  return (
    <div id='hero'>
      <div className='px-4 pt-20'>
          <h1 className='text-left text-7xl font-black bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent'>
            Hi, I'm Joaquin Mancilla. <br />
            Software Engineer
          </h1>
          <div className="flex gap-4 pt-10">
          <h2 className='text-left text-2xl font-medium bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent'>{abrir} Este no es el bug que estás buscando. {cerrar} </h2>
          <a
            href="https://github.com/JoakoMancilla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-3xl transition"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/joaqu%C3%ADn-mancilla-99332a344/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-3xl transition"
          >
            <SiLinkedin />
          </a>
        </div>
      </div>

      <div className="py-20 flex items-center gap-4 self-center">
        <img className="w-48 sm:w-60 lg:w-[22rem] " src="./src/assets/LowPoly.svg" alt="Me" />

        <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 border border-white/10 rounded-xl p-6 m-8 shadow-lg">
          <div className="absolute -top-4 bg-[#26133D] text-purple-400 border border-purple-500 text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            Sobre mí
          </div>
          <p className="text-gray-200 text-lg leading-relaxed font-light">
            Soy estudiante de Ingeniería Informática, apasionado por la tecnología y el desarrollo de software.
            Me enfoco en el desarrollo frontend y disfruto aprender de forma autodidacta, especialmente en la creación de videojuegos.
          </p>
        </div>
      </div>

    </div>
  )
}
