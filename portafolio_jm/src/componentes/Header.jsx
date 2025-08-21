import React from 'react'

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e0e1c]/80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo o nombre */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
          Joaquín Mancilla
        </h1>

        {/* Navegación */}
        <nav>
          <ul className="flex gap-6 text-sm md:text-base font-medium text-gray-300">
            <li>
              <a href="#hero" className="hover:text-white transition">Sobre mí</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">Proyectos</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition">Tecnologías</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
