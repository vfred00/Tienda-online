import React, { useContext } from 'react'
import { DataContext } from '../context/Dataprovider'

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total
  const cambiarEstado = () => {
    setMenu(false);
  }

  const eliminarProducto = id => {
    if (window.confirm("¿Estas seguro de eliminar este producto?")) {
      carrito.forEach((producto, i) => {
        if (id === producto.id) {
          producto.cantidad = 1;
          carrito.splice(i, 1);
        }
      })
      setCarrito([...carrito]);
    }
  }

  const aumentarCantidadProducto = id => {
    carrito.forEach(producto => {
      if (producto.id === id) {
        producto.cantidad += 1;
      }
      setCarrito([...carrito])
    })
  }

  const disminuirCantidadProducto = id => {
    carrito.forEach(producto => {
      if (producto.id === id) {
        producto.cantidad === 1 ? producto.cantidad = 1 : producto.cantidad -= 1;
      }
      setCarrito([...carrito])
    })
  }

  const mostrar_contenedor_carrito = menu ? "contenedor__carrito show" : "contenedor__carrito";
  const mostrar_carrito = menu ? "carrito show" : "carrito";
  return (
    <div className={mostrar_contenedor_carrito}>
      <div className={mostrar_carrito}>
        <box-icon name="x" class="cerrar__carrito" onClick={cambiarEstado} ></box-icon>
        <h2 className="titulo">Carrito de compra</h2>
        <div className="contenedor__producto">

          {
            carrito.length === 0 ? <h2 style={{ textAlign: "center", fontSize: "3rem" }}>Vacío :( </h2> : <>
              {
                carrito.map((producto) => (
                  <div className="item__carrito" key={producto.item}>
                    <img src={producto.image} alt="" />
                    <div className="detalles__producto">
                      <h3 className="titulo">{producto.title}</h3>
                      <p className="precio">${producto.price}</p>
                    </div>
                    <div className="contenedor__cantidad">
                      <box-icon name="up-arrow" onClick={() => aumentarCantidadProducto(producto.id)}></box-icon>
                      <p className="cantidad">{producto.cantidad}</p>
                      <box-icon name="down-arrow" onClick={() => disminuirCantidadProducto(producto.id)}></box-icon>
                    </div>
                    <box-icon name="trash" class="remover__item" onClick={() => eliminarProducto(producto.id)} ></box-icon>
                  </div>
                ))
              }
            </>
          }

        </div>
        {
          carrito.length === 0 ? <div className="contenedor__pago" style={{ display: "none" }}>
            <h3 className="total">${total}</h3>
            <button className="boton__pagar">Pagar</button>
          </div> : <div className="contenedor__pago">
              <h3 className="total">${total}</h3>
              <button className="boton__pagar">Pagar</button>
            </div>}

      </div>
    </div>
  )

}

