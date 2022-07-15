import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';
import { Link } from 'react-router-dom';


export const Proyecto = () => {

    const params = useParams();

    const [proyectoState, proyectoSetState] = useState({});

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id)
        console.log(proyecto)

        proyectoSetState(proyecto[0])
        console.log(proyectoState)
    }, [])

    return (
        <div className='page'>
            <h1 className='heading'>Proyecto: {params.id}</h1>

            <article key={proyectoState.id} className='work-item-xpand'>
                <div className='mask'>
                    <img src={"/images/" + proyectoState.id + ".jpeg"} />
                </div>
                <span>{proyectoState.categorias}</span>
                <h2>{proyectoState.nombre}</h2>
                <h3>{proyectoState.tecnologias}</h3>
                <a href={proyectoState.url} target="_blank"> Ir al proyecto</a>
            </article>
        </div>
    )
}
