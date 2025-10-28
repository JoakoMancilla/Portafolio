import React from 'react';
import LowPoly from '../assets/LowPoly.svg';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const abrir = '<>';
const cerrar = '</>';

export const HeroSection = () => {
  return (
    <section id="hero" className="px-4 pt-24 md:pt-32 max-w-6xl mx-auto">
      {/* Título principal */}
      <div className="text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent leading-tight">
          Hi, I'm Joaquin Mancilla. <br />
          Software Engineer
        </h1>

        {/* Subtítulo + iconos */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 pt-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent mb-3 sm:mb-0">
            {abrir} Este no es el bug que estás buscando. {cerrar}
          </h2>

          <div className="flex gap-4">
            <a
              href="https://github.com/JoakoMancilla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl text-gray-400 transition hover:text-white"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/joaqu%C3%ADn-mancilla-99332a344/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl text-gray-400 transition hover:text-white"
            >
              <SiLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Imagen + sobre mí */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-16">
        <img
          className="w-40 sm:w-56 md:w-64 lg:w-[22rem] object-contain"
          src={LowPoly}
          alt="Me"
        />

        <div className="relative p-6 m-4 border shadow-lg bg-gradient-to-br from-white/5 via-white/10 to-white/5 border-white/10 rounded-xl max-w-lg">
          <div className="absolute -top-4 left-4 bg-[#26133D] text-purple-400 border border-purple-500 text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            Sobre mí
          </div>
          <p className="text-base sm:text-lg font-light leading-relaxed text-gray-200">
            Soy estudiante de Ingeniería Informática, apasionado por la tecnología y el desarrollo de software.
            Me enfoco en el desarrollo frontend y disfruto aprender de forma autodidacta, especialmente en la creación de videojuegos.
          </p>
        </div>
      </div>
    </section>
  );
};
