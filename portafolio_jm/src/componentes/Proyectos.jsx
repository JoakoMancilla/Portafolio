import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { SiGithub } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';

import Aexpress from '../assets/Aexpress.png';
import PokeDex from '../assets/PokeDex.png';
import Ejercito from '../assets/Ejercito.png';
import Chocolate from '../assets/chocolate.png';
import AppSalud from '../assets/AppSalud.png';
import Game2D from '../assets/Game2D.png';
import Game3D from '../assets/Game3D.png';
import Agente from '../assets/Agente.png';
import Ticket from '../assets/Ticket.png';
import Gestor from '../assets/Gestor.png';

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
    LangChain: 'text-teal-400 border-teal-500 bg-teal-900/30',
    LangGraph: 'text-purple-400 border-purple-500 bg-purple-900/30',
    RAG: 'text-indigo-400 border-indigo-500 bg-indigo-900/30',
    Docker: 'text-sky-400 border-sky-500 bg-sky-900/30',
    PHP: 'text-indigo-400 border-indigo-500 bg-indigo-900/30',
    Laravel: 'text-red-400 border-red-500 bg-red-900/30',
    MariaDB: 'text-amber-400 border-amber-500 bg-amber-900/30',
  };

  const proyectos = [
    {
      id: 1,
      title: 'Sistema de Agentes IA',
      image: Agente,
      description: 'Agente de IA integrado en arquitectura multiagente, construido sobre Fireworks LLM con capacidades de Tools, Memory persistente y RAG para recuperación de contexto enriquecido',
      techs: ['Python', 'LangChain','LangGraph','RAG'],
      github: 'https://github.com/JoakoMancilla/IA-Agent',
    },
    {
      id: 2,
      title: 'Gestor App',
      image: Gestor,
      description: 'Gestor de proyectos intuitivo para equipos pequeños, con tablero Kanban interactivo (drag & drop), dashboard de métricas y autenticación.',
      techs: ['Laravel', 'React', 'MariaDB', 'Docker'],
      github: 'https://github.com/JoakoMancilla/Gestor-APP',
    },
    {
      id: 3,
      title: 'Diseño Web',
      image: Aexpress,
      description: 'Sitio corporativo para empresa de transporte, desarrollado en WordPress con Divi, enfocado en servicios, contacto y reservas.',
      techs: ['WordPress', 'Divi'],
      demo: 'https://aeropuertoexpress.cl/',
    },
    {
      id: 4,
      title: 'App DB Consola',
      image: Ejercito,
      description: 'Aplicación de consola en Python con MongoDB que permite registrar, buscar, editar y eliminar datos mediante operaciones CRUD.',
      techs: ['Python', 'MongoDB'],
      github: 'https://github.com/JoakoMancilla/CRUD-EJERCITO',
    },
    {
      id: 5,
      title: 'Poke Dex',
      image: PokeDex,
      description: 'Pokédex interactiva en React que consume una API REST para buscar Pokémon y mostrar estadísticas e información detallada.',
      techs: ['React', 'Tailwind', 'Javascript'],
      demo: 'https://joakomancilla.github.io/Poke-Dex-React/',
      github: 'https://github.com/JoakoMancilla/Poke-Dex-React'
    },
    {
      id: 6,
      title: 'Tienda Chocolatería',
      image: Chocolate,
      description: 'Landing page para una chocolatería con catálogo visual de productos, diseño responsive y enfoque en presentación comercial.',
      techs: ['React', 'Tailwind', 'Javascript'],
      github: 'https://github.com/JoakoMancilla/Landing-Chocolateria',
    },
    {
      id: 7,
      title: 'App Gestión Salud',
      image: AppSalud,
      description: 'Sistema web en Django para gestión de usuarios y sesiones médicas, con autenticación y panel de administración.',
      techs: ['Python', 'Django', 'HTML'],
      github: 'https://github.com/JoakoMancilla/Proyecto_AppSalud',
    },
    {
      id: 8,
      title: 'Last Stand Outpost - VideoGame',
      image: Game3D,
      description: 'Shooter 3D en Unity ambientado en una base militar infestada de zombies, con disparos, IA enemiga y supervivencia por oleadas.',
      techs: ['Unity', 'C#'],
      github: 'https://github.com/JoakoMancilla/3D-Videogame---Zombie-Shooter',
    },
    {
      id: 9,
      title: 'Liminal ROBOT - VideoGame',
      image: Game2D,
      description: 'Plataformero 2D en Unity donde controlas un robot explorando un entorno liminal con físicas, enemigos y sistema básico de combate.',
      techs: ['Unity', 'C#'],
      github: 'https://github.com/JoakoMancilla/2D-Pixel-Game-Unity',
    },
    {
      id: 10,
      title: 'TicketFlow - Gestor CRUD Laravel',
      image: Ticket,
      description: 'Sistema de gestión de tickets (helpdesk) con Laravel 13, React 19 y Tailwind CSS v4 orquestado con Docker.',
      techs: ['Laravel', 'React', 'MariaDB', 'Docker'],
      github: 'https://github.com/JoakoMancilla/TicketFlow-MVP',
    },
  ];

  return (
    <section id="projects" className="scroll-mt-28 px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
        Mis Proyectos
      </h2>

      <Swiper
        effect="coverflow"
        centeredSlides
        grabCursor
        loop
        preventClicks={false}
        preventClicksOnPropagation={false}
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
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="px-8 md:px-16 py-16 md:py-28"
      >
        {proyectos.map((proyecto) => (
          <SwiperSlide key={proyecto.id} className="h-full">
            <article className="flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl shadow-md overflow-hidden">

              <div className="h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={proyecto.image}
                  alt={proyecto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-6 pt-6">
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

              <div className="flex-grow" />

              <div className="flex gap-3 px-6 pb-6">
                {proyecto.github && (
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver en GitHub"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-[#8b5cf6]/40 hover:shadow-[0_0_15px_-8px_rgba(139,92,246,0.5)] transition-all duration-300 cursor-pointer"
                  >
                    <SiGithub className="text-lg" />
                  </a>
                )}
                {proyecto.demo && (
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver Proyecto desplegado"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-[#8b5cf6]/40 hover:shadow-[0_0_15px_-8px_rgba(139,92,246,0.5)] transition-all duration-300 cursor-pointer"
                  >
                    <HiExternalLink className="text-lg" />
                  </a>
                )}
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
