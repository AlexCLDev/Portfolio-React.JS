import React from 'react'
import {NavLink} from 'react-router-dom'

export const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span>A</span>
            <h3>Alexander Coronado</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/inicio" 
                        className={({isActive}) => isActive ? "active": ""}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio"
                        className={({isActive}) => isActive ? "active" : ""}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios"
                        className={({isActive}) => isActive ? "active" : ""}>Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto"
                        className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum"
                        className={({isActive}) => isActive ? "active" : ""}>Curriculum</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
