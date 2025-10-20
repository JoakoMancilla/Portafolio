import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="relative py-10 px-6 bg-[#0e0e1c] text-white overflow-hidden rounded-2xl">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] opacity-10 animate-pulse blur-3xl" />

      <div className="relative z-10 flex flex-col items-center max-w-5xl gap-6 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent animate-text">
          ¡Gracias por visitar mi portafolio!
        </h2>

        {/* Íconos sociales */}
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/JoakoMancilla" target="_blank" rel="noopener noreferrer" className="transition duration-300 transform hover:scale-125">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/joaquin-mancilla/" target="_blank" rel="noopener noreferrer" className="transition duration-300 transform hover:scale-125">
            <FaLinkedin />
          </a>
          <a href="mailto:JoakoMancillaVr@outlook.com" className="transition duration-300 transform hover:scale-125">
            <FaEnvelope />
          </a>
        </div>

        {/* Derechos */}
        <p className="text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()} Joaquín Mancilla.
        </p>
      </div>
    </footer>
  )
}