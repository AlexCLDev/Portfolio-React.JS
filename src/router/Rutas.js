import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import {Inicio} from '../Components/Inicio'
import {Curriculum} from '../Components/Curriculum'
import {Portfolio} from '../Components/Portfolio'
import {Contacto} from '../Components/Contacto'
import {Servicios} from '../Components/Servicios'
import { Header } from '../Components/layout/Header'
import { Footer } from '../Components/layout/Footer'
import { Proyecto } from '../Components/Proyecto'


export const Rutas = () => {
    return (
        <BrowserRouter>
            {/*Header y Navegacion */}
            <Header/>
            {/*Contenido central */}
            <section className='content'>
                <Routes>
                    <Route path ="/" element={<Navigate to="/inicio"/>}/>
                    <Route path ="/inicio" element={<Inicio/>}/>
                    <Route path ="/curriculum" element={<Curriculum/>}/>
                    <Route path ="/portfolio" element={<Portfolio/>}/>
                    <Route path ="/contacto" element={<Contacto/>}/>
                    <Route path ="/servicios" element={<Servicios/>}/>
                    <Route path="/proyecto/:id" element={<Proyecto/>}/>
                    <Route path="*" element={
                        <div className='page'>
                            <h1 className='heading'>Error 404</h1>
                        </div>}/>
                </Routes>
            </section>

            {/*Footer */}
            <Footer/>
        </BrowserRouter>
    )
}
