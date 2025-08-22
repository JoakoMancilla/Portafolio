import React from 'react'

export const Contacto = () => {
  return (
    <div className="px-8 py-12 bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6]  bg-clip-text text-transparent" id="contact">
      <h2 className="mb-10 text-4xl font-bold text-center">Contáctame</h2>

      <form className="max-w-xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Tu nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="correo@ejemplo.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium">Mensaje</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Escríbeme un mensaje..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white transition rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  )
}
