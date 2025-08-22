import React from 'react'

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e0e1c]/80 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        {/* Logo o nombre */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
          Joaquín Mancilla
        </h1>

        {/* Navegación */}
        <nav>
          <ul className="flex gap-6 text-sm font-medium text-gray-300 md:text-base">
            <li>
              <a href="#hero" className="transition hover:text-white">Sobre mí</a>
            </li>
            <li>
              <a href="#projects" className="transition hover:text-white">Proyectos</a>
            </li>
            <li>
              <a href="#skills" className="transition hover:text-white">Tecnologías</a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-white">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
