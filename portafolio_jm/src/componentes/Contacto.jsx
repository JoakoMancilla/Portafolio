import React, { useState } from "react";

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

  return (
    <div
      className="px-8 py-12 bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent"
      id="contact"
    >
      <h2 className="mb-10 text-4xl font-bold text-center">Contáctame</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-6 "
      >
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium w-fit px-3 py-1 rounded-full border text-purple-400 border-purple-500 bg-purple-900/30">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Tu nombre"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium w-fit px-3 py-1 rounded-full border text-purple-400 border-purple-500 bg-purple-900/30">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="correo@ejemplo.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium w-fit px-3 py-1 rounded-full border text-purple-400 border-purple-500 bg-purple-900/30">
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Escríbeme un mensaje..."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full px-4 py-2 font-semibold text-white transition rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50"
        >
          {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        </button>

        {status === "success" && (
          <p className="mt-3 text-green-600 text-center font-medium">
            ¡Mensaje enviado correctamente!
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-red-600 text-center font-medium">
            Hubo un error al enviar tu mensaje. Intenta nuevamente.
          </p>
        )}
      </form>
    </div>
  );
};
