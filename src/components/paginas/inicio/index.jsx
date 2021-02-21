import React from 'react';
import imagen_portada from '../../../images/inicio.jpg';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className="contenedor__inicio">
      <Link to="/">
        <h1 className="titulo__inicio">INICIO</h1>
      </Link>
      <Link to="/productos">
        <h1 className="titulo__productos">PRODUCTOS</h1>
      </Link>
      <img className="imagen__portada" src={imagen_portada} alt=""/>
    </div>
  )
}