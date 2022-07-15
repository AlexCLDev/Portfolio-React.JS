import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { trabajos } from '../data/trabajos'
import { Listado } from './Listado'
export const Inicio = () => {
  return (
    <>
    <div className='home'>
      <h1>Hola, soy Alexander Coronado y soy <strong>Desarrollador web Front-End</strong>,
        ofrezco mis servicios de <strong>programación </strong> y <strong>desarrollo</strong> en
        todo tipo de proyectos web.
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicacion web, tener más
        visibilidad y relevancia en internet. <Link to="/contacto">Contacta conmigo.</Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>

        <p> Estos son algunos de mis trabajos de desarrollo web</p>

        <div className='works'>

        </div>
      </section>
      </div>

      <Listado/>
    </>
  )
}
