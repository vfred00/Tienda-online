import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import { DataContext } from '../../context/Dataprovider'

export const ProductoItem = ({id, title, price,image,category}) => {
  const value = useContext(DataContext);
  const añadirCarrito = value.añadirCarrito;


  return (
    <article className="item__producto">
      <Link to={`/productos/${id}`} className="enlace__producto">
        <img src={image} alt="" />
      </Link>
      <div className="contenido">
        <h1 className="titulo">{title}</h1>
        <p className="categoria">{category}</p>
        <p className="precio">${price}</p>
      </div>
      <div className="contenedor__botones">
        <button className="boton__añadir__carrito" onClick={() => añadirCarrito(id)}>Añadir al carrito</button>
        <Link to={`/productos/${id}`} className="boton__vista">Vista</Link>
      </div>
    </article>
  )
}