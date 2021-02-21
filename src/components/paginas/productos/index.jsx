import React, { useContext } from 'react';

import { DataContext } from '../../context/Dataprovider';
import { ProductoItem } from './productoItem'

export const Productos = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  console.log(productos);
  return (
    <>
      <h1 className="titulo__producto">Productos</h1>
      <div className="contenedor__productos">
        {
          productos.map(i => (
            <ProductoItem 
              key={i.id}
              id={i.id}
              title={i.title}
              price={i.price}
              image={i.image}
              category={i.category}
            />
          ))
        }        
      </div>
    </>
  )
}