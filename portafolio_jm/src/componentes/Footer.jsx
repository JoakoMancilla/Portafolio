import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="relative py-10 px-6 bg-[#0e0e1c] text-white overflow-hidden rounded-2xl">
      {/* Gradiente animado como fondo decorativo */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] opacity-10 animate-pulse blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Texto con gradiente animado */}
        <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent animate-text">
          ¡Gracias por visitar mi portafolio!
        </h2>

        {/* Íconos sociales */}
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition transform duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition transform duration-300">
            <FaLinkedin />
          </a>
          <a href="mailto:correo@ejemplo.com" className="hover:scale-125 transition transform duration-300">
            <FaEnvelope />
          </a>
        </div>

        {/* Derechos */}
        <p className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Joaquín Mancilla.
        </p>
      </div>
    </footer>
  )
}