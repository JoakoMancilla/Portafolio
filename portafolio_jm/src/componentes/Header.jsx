import React, { useState } from 'react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e0e1c]/80 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        {/* Nombre */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
          Joaquín Mancilla
        </h1>

        {/* Botón hamburguesa (solo visible en móvil) */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-300 transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-300 transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-300 transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          ></span>
        </button>

        {/* Menú principal */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-[#0e0e1c]/95 md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col items-center gap-4 py-4 md:flex-row md:py-0 md:gap-6 text-sm font-medium text-gray-300 md:text-base">
            <li>
              <a href="#hero" className="transition hover:text-white" onClick={() => setMenuOpen(false)}>
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#projects" className="transition hover:text-white" onClick={() => setMenuOpen(false)}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#skills" className="transition hover:text-white" onClick={() => setMenuOpen(false)}>
                Tecnologías
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-white" onClick={() => setMenuOpen(false)}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
