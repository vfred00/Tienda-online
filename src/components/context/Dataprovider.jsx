
import React, { useState, createContext, useEffect } from 'react'
import Data from './Data.js';
export const DataContext = createContext();

export const DataProvider = (props) => {
  // MANEJO DE ESTADOS
  const [productos, setProductos] = useState([]);
  const [menu, setMenu] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  // CUANDO SE RECARGA LA PAGINA
  // PARECE QUE SIRVE PARA CARGAR DATOS
  useEffect(() => {
    const producto = Data.items;
    if (producto) {
      setProductos(producto);
    } else {
      setProductos([]);
    }
  }, []);

  useEffect(() => {
    const total = () => {
      const resultado = carrito.reduce((anterior, producto) => {
        return anterior + (producto.price * producto.cantidad);
      }, 0);
      setTotal(resultado);
    }
    total();
  }, [carrito]);


  const añadirCarrito = producto_id => {
    const existeProducto = carrito.every(i => {
      return i.id != producto_id;
    })

    if (existeProducto) {
      const datosProducto = productos.filter(i => {
        return i.id === producto_id;
      })
      setCarrito([...carrito, ...datosProducto]);
    }
    else {
      alert("ADVERTENCIA!!! YA EXISTE ESTE PRODUCTO EN EL CARRITO");
    }
  }


  //EXPORTAR DATOS Y ESTOS SON RECOGIDOS EN PRODUCTOS Y MENU
  const value = {
    productos: [productos],
    menu: [menu, setMenu],
    añadirCarrito: añadirCarrito,
    carrito: [carrito, setCarrito],
    total: [total, setTotal]

  }  
  
  useEffect(() => {
    const datosCarrito = JSON.parse(localStorage.getItem('datosCarrito'));
    if (datosCarrito) {
      setCarrito(datosCarrito);
    }
  }, []);

  // CUANDO HAYAN CAMBIOS EN CARRITO
  useEffect(() => {
    localStorage.setItem('datosCarrito', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  )
}