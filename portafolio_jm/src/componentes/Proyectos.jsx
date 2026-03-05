import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import Aexpress from '../assets/Aexpress.png';
import PokeDex from '../assets/PokeDexV4.png';
import Ejercito from '../assets/Ejercito.png';
import Chocolate from '../assets/chocolate.png';
import AppSalud from '../assets/AppSalud.png';
import Game2D from '../assets/Game2D.png';
import Game3D from '../assets/Game3D.png';
import Agente from '../assets/Agente.png';

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
    Unity: 'text-neutral-200 border-neutral-400 bg-neutral-900/50',
    'C#': 'text-violet-400 border-violet-500 bg-violet-900/30',
    Langchain: 'text-teal-400 border-teal-500 bg-teal-900/30',
    LLM: 'text-purple-400 border-purple-500 bg-purple-900/30',
    RAG: 'text-indigo-400 border-indigo-500 bg-indigo-900/30',
  };

  const proyectos = [
    {
      id: 1,
      title: 'Agente de IA',
      image: Agente,
      description: 'Agente de IA basado en el LLM Gemini, con implementacion de Tools, Memory y futura implementacion de RAG',
      techs: ['Python', 'Langchain','LLM','RAG'],
      link: 'https://github.com/JoakoMancilla/IA-Agent'
    },
    {
      id: 2,
      title: 'Diseño Web',
      image: Aexpress,
      description: 'Sitio corporativo para empresa de transporte, desarrollado en WordPress con Divi, enfocado en servicios, contacto y reservas.',
      techs: ['WordPress', 'Divi'],
      link: 'https://aeropuertoexpress.cl/'
    },

    {
      id: 3,
      title: 'App DB Consola',
      image: Ejercito,
      description: 'Aplicación de consola en Python con MongoDB que permite registrar, buscar, editar y eliminar datos mediante operaciones CRUD.',
      techs: ['Python', 'MongoDB'],
      link: 'https://github.com/JoakoMancilla/CRUD-EJERCITO'
    },

    {
      id: 4,
      title: 'Poke Dex',
      image: PokeDex,
      description: 'Pokédex interactiva en React que consume una API REST para buscar Pokémon y mostrar estadísticas e información detallada.',
      techs: ['React', 'Tailwind', 'Javascript'],
      link: 'https://joakomancilla.github.io/Poke-Dex-React/'
    },

    {
      id: 5,
      title: 'Tienda Chocolatería',
      image: Chocolate,
      description: 'Landing page para una chocolatería con catálogo visual de productos, diseño responsive y enfoque en presentación comercial.',
      techs: ['React', 'Tailwind', 'Javascript'],
      link: 'https://github.com/JoakoMancilla/Landing-Chocolateria'
    },

    {
      id: 6,
      title: 'App Gestión Salud',
      image: AppSalud,
      description: 'Sistema web en Django para gestión de usuarios y sesiones médicas, con autenticación y panel de administración.',
      techs: ['Python', 'Django', 'HTML'],
      link: 'https://github.com/JoakoMancilla/Proyecto_AppSalud'
    },

    {
      id: 7,
      title: 'Last Stand Outpost - VideoGame',
      image: Game3D,
      description: 'Shooter 3D en Unity ambientado en una base militar infestada de zombies, con disparos, IA enemiga y supervivencia por oleadas.',
      techs: ['Unity', 'C#'],
      link: 'https://github.com/JoakoMancilla/3D-Videogame---Zombie-Shooter'
    },
    {
      id: 8,
      title: 'Liminal ROBOT - VideoGame',
      image: Game2D,
      description: 'Plataformero 2D en Unity donde controlas un robot explorando un entorno liminal con físicas, enemigos y sistema básico de combate.',
      techs: ['Unity', 'C#'],
      link: 'https://github.com/JoakoMancilla/2D-Pixel-Game-Unity'
    },
  ];

  return (
    <section id="projects" className="px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
        Mis Proyectos
      </h2>

      <Swiper
        effect="coverflow"
        centeredSlides
        grabCursor
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: -20,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}

        // RESPONSIVE
        breakpoints={{
          0: {
            slidesPerView: 1,   // teléfonos
          },
          640: {
            slidesPerView: 1,   // móviles grandes
          },
          768: {
            slidesPerView: 2,   // tablets
          },
          1024: {
            slidesPerView: 3,  // desktop
          },
        }}

        modules={[EffectCoverflow, Autoplay]}
        className="py-16 md:py-28"
      >
        {proyectos.map((proyecto) => (
          <SwiperSlide key={proyecto.id}>
            <article className="flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl shadow-md overflow-hidden">

              <div className="h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={proyecto.image}
                  alt={proyecto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-6 pt-6 flex-grow">
                <h4 className="mb-3 text-sm font-semibold text-gray-400 uppercase">
                  Tecnologías usadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {proyecto.techs.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full border ${techStyles[tech]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 py-6">
                <h3 className="text-lg font-semibold text-gray-200">
                  {proyecto.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-2">
                  {proyecto.description}
                </p>
              </div>

              <div className="my-4 mx-6">
                <a
                  href={proyecto.link}
                  className="text-sm text-blue-400 hover:underline"
                >
                  Ver proyecto →
                </a>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
