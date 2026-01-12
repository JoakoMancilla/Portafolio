import { useState } from 'react';

export const Proyectos = () => {

  const techStyles = {
    React: 'text-blue-400 border-blue-500 bg-blue-900/30',
    Tailwind: 'text-cyan-400 border-cyan-500 bg-cyan-900/30',
    Javascript: 'text-yellow-400 border-yellow-500 bg-yellow-900/30',
    'API Rest': 'text-orange-400 border-orange-500 bg-orange-900/30',
    WordPress: 'text-blue-400 border-blue-500 bg-blue-900/30',
    Divi: 'text-purple-400 border-purple-500 bg-purple-900/30',
    Python: 'text-blue-400 border-blue-500 bg-blue-900/30',
    MongoDB: 'text-green-400 border-green-500 bg-green-900/30',
    Django: 'text-green-600 border-green-700 bg-green-900/30',
    HTML: 'text-orange-400 border-orange-500 bg-orange-900/30',
  };

  const [current, setCurrent] = useState(0);

  const proyectos = [
    {
      id: 1,
      title: 'Diseño Web',
      image: 'src/assets/proyectos/Aexpress.png',
      description: 'Sitio web desarrollado con WordPress y Divi para un proyecto comercial.',
      techs: ['WordPress', 'Divi']
    },
    {
      id: 2,
      title: 'Poke Dex',
      image: 'src/assets/proyectos/PokeDexV4.png',
      description: 'Proyecto de aprendizaje, utilizando APIs REST para obtener y mostrar datos.',
      techs: ['React', 'Tailwind', 'Javascript', 'API Rest']
    },
    {
      id: 3,
      title: 'App DB Consola',
      image: 'src/assets/proyectos/Ejercito.png',
      description: 'Aplicación de Python en consultas a bases de datos no estructuradas.',
      techs: ['Python', 'MongoDB']
    },
    {
      id: 4,
      title: 'Tienda Chocolateria',
      image: 'src/assets/proyectos/chocolate.png',
      description: 'Landing Page para pyme del rubro de la chocolateria.',
      techs: ['React', 'Tailwind', 'Javascript']
    },
    {
      id: 5,
      title: 'App Gestión Sector Salud',
      image: 'src/assets/proyectos/AppSalud.png',
      description: 'Aplicación con control de sesiones y dashboard pensada en los profesionales de la salud.',
      techs: ['Python', 'Django', 'HTML']
    }
  ];

  const leftIndex = current === 0 ? proyectos.length - 1 : current - 1;
  const rightIndex = current === proyectos.length - 1 ? 0 : current + 1;

  const visibleProjects = [
    proyectos[leftIndex],
    proyectos[current],
    proyectos[rightIndex],
  ];

  return (
    <div id="projects" className="relative px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
        Mis Proyectos
      </h2>

      {/* Botón Izquierda */}
      <button
        onClick={() =>
          setCurrent(current === 0 ? proyectos.length - 1 : current - 1)
        }
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 text-3xl text-white/60 hover:text-white transition"
      >
        ‹
      </button>

      {/* Carrusel */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
        {visibleProjects.map((proyecto, index) => {

          const isCenter = index === 1;

          return (
            <div
              key={proyecto.id}
              className={`
                group flex flex-col bg-white/5 border border-white/10 rounded-2xl
                overflow-hidden shadow-md
                transition-all duration-500 ease-in-out
                ${isCenter ? 'scale-100 opacity-100 translate-x-0 z-10' : index === 0 ? 'scale-90 opacity-50 -translate-x-4' : 'scale-90 opacity-50 translate-x-4'}
              `}
            >
              {/* Imagen */}
              <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={proyecto.image}
                  alt={proyecto.title}
                  className={`
                    object-cover object-top w-full h-full
                    transition-all duration-500 ease-in-out
                    ${isCenter ? 'grayscale-0' : 'grayscale'}
                    group-hover:grayscale-0
                  `}
                />
              </div>

              {/* Tecnologías */}
              <div className="px-6 pt-6 flex-grow">
                <h4 className="mb-3 text-sm font-semibold tracking-wide text-gray-400 uppercase">
                  Tecnologías usadas
                </h4>

                <div className="flex flex-wrap gap-2">
                  {proyecto.techs.map((tech) => (
                    <span
                      key={tech}
                      className={`
                        px-3 py-1 text-xs rounded-full border
                        transition-colors duration-300
                        ${techStyles[tech] ?? 'text-gray-300 border-white/20 bg-white/5'}
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Texto */}
              <div className="flex flex-col gap-3 px-6 py-6">
                <h3 className="text-lg font-semibold text-gray-200">
                  {proyecto.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {proyecto.description}
                </p>
              </div>

            </div>
          );
        })}
      </div>

      {/* Botón Derecha */}
      <button
        onClick={() =>
          setCurrent(current === proyectos.length - 1 ? 0 : current + 1)
        }
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-3xl text-white/60 hover:text-white transition"
      >
        ›
      </button>
    </div>
  );
};
