import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'

export const Portfolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portfolio</h1>

      <section className='work'>
        {
          trabajos.map(trabajo => {
            return (
              <article key={trabajo.id} className='work-item'>
                <div className='mask'>
                  <img src={"/images/" + trabajo.id + ".jpeg"} />
                </div>
                <span>{trabajo.categorias}</span>
                <h2><Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link></h2>
                <h3>{trabajo.tecnologias}</h3>
              </article>
            )
          })
        }
      </section>
    </div>
  )
}