import React from 'react'

export const Contacto = () => {
  return (
    <div className="px-8 py-12 bg-gradient-to-r from-[#c522a2] via-[#3b82f6] to-[#8b5cf6]  bg-clip-text text-transparent" id="contact">
      <h2 className="text-4xl font-bold text-center mb-10">Contáctame</h2>

      <form className="max-w-xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Tu nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="correo@ejemplo.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Escríbeme un mensaje..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  )
}
