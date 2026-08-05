import React, { useState } from "react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

export const Contacto = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mblzbwna", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const canales = [
    {
      nombre: "Email",
      icono: <SiGmail className="text-2xl text-red-400" />,
      href: "mailto:joakomancillavr@gmail.com",
    },
    {
      nombre: "LinkedIn",
      icono: <SiLinkedin className="text-2xl text-blue-400" />,
      href: "https://www.linkedin.com/in/joaqu%C3%ADn-mancilla-99332a344/",
      externo: true,
    },
    {
      nombre: "GitHub",
      icono: <SiGithub className="text-2xl text-gray-300" />,
      href: "https://github.com/JoakoMancilla",
      externo: true,
    },
  ];

  return (
    <section id="contact" className="px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]">
        Contáctame
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Cards de contacto alternativas - 1/3 */}
        <div className="flex flex-col gap-4">
          {canales.map((c) => (
            <a
              key={c.nombre}
              href={c.href}
              target={c.externo ? "_blank" : undefined}
              rel={c.externo ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-105 hover:border-[#8b5cf6]/40 hover:shadow-[0_0_20px_-8px_rgba(139,92,246,0.5)] transition-all duration-300"
            >
              {c.icono}
              <span className="text-sm font-medium text-gray-300">{c.nombre}</span>
            </a>
          ))}
        </div>

        {/* Formulario glass - 2/3 */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_50px_-20px_rgba(139,92,246,0.3)] p-8 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-400">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Tu nombre"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6]/50 focus:ring-2 focus:ring-[#8b5cf6]/20 transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="correo@ejemplo.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6]/50 focus:ring-2 focus:ring-[#8b5cf6]/20 transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Escríbeme un mensaje..."
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6]/50 focus:ring-2 focus:ring-[#8b5cf6]/20 transition-all duration-300 resize-y"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full px-4 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50"
          >
            {status === "sending" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : "Enviar mensaje"}
          </button>

          {status === "success" && (
            <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30 backdrop-blur-sm text-green-400 text-sm font-medium transition-opacity duration-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              ¡Mensaje enviado correctamente!
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 backdrop-blur-sm text-red-400 text-sm font-medium transition-opacity duration-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Hubo un error al enviar tu mensaje. Intenta nuevamente.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
