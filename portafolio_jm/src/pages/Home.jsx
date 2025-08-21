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
    <Header/>
    <div className='md:px-16 lg:px-24 xl:px-48 2xl:px-96'>
      <div className='pb-24'><HeroSection/></div>
      <div className='pb-24'><Proyectos/></div>
      <div className='pb-24'><Tecnologias/></div>
      <div className='pb-12'><Contacto/></div>
    </div>
    <Footer/>
    </>
  )
}
