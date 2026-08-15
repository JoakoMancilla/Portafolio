import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Tecnologías' },
  { id: 'contact', label: 'Contacto' },
];

const useActiveSection = () => {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
};

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  const linkBase =
    'relative px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-full cursor-pointer';
  const linkInactive = 'text-gray-400 hover:text-gray-100';
  const linkActive =
    'bg-white/10 text-white shadow-[0_0_12px_-6px_rgba(139,92,246,0.6)]';

  return (
    <header className="fixed top-0 left-0 w-full z-50">
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
          aria-expanded={menuOpen}
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

        {/* Menú desktop — pill glassmorph */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-2 py-1">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`${linkBase} ${active === id ? linkActive : linkInactive}`}
                  aria-current={active === id ? 'true' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Menú móvil — glass */}
      <nav
        className={`${
          menuOpen ? 'block' : 'hidden'
        } absolute top-full left-0 w-full px-4 pt-2 pb-4 md:hidden`}
      >
        <ul className="flex flex-col items-center gap-2 bg-[#0e0e1c]/80 backdrop-blur-md border border-white/10 rounded-2xl py-4 text-sm font-medium text-gray-300">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block px-5 py-2 rounded-lg transition-all duration-300 ${
                  active === id
                    ? 'bg-white/10 text-white shadow-[0_0_12px_-6px_rgba(139,92,246,0.6)]'
                    : 'hover:text-white'
                }`}
                aria-current={active === id ? 'true' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
