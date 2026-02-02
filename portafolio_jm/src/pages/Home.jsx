import React from 'react'
import './Home.css'
import { Header } from '../componentes/Header'
import { Footer } from '../componentes/Footer'
import { Proyectos } from '../componentes/Proyectos'
import { Tecnologias } from '../componentes/Tecnologias'
import { HeroSection } from '../componentes/HeroSection'
import { Contacto } from '../componentes/contacto'


export const Home = () => {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <HeroSection />

        <div className="space-y-16 lg:space-y-24 mt-16 lg:mt-24">
          <Proyectos />
          <Tecnologias />
          <Contacto />
        </div>
      </main>

      <Footer />
    </>
  )
}
