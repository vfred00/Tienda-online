import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from "../../context/Dataprovider";
import { useParams } from 'react-router-dom';
import { ProductoItem } from './productoItem';

export const Detalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;// LAS [] CAMBIAN TODDO 
  const verProducto = useParams();
  const añadirCarrito = value.añadirCarrito;//REUTILIZACIÓN
  const [detalle, setDetalle] = useState([]);
  const [url, setUrl] = useState(0);
  const [imagen, setImagen] = useState('');
  let item = 0;
  useEffect(() => {
    productos.forEach(producto => {
      if (producto.id === parseInt(verProducto.id)) {
        setDetalle(producto);        
      }

    }, [verProducto.id, productos])
  })

  const cambioImagen = e => {
    setUrl(e.target.value.toString().padStart(2, '01'));
  }

  useEffect(() => {
    setImagen(`${detalle.img1}${url}${detalle.img2}`);
  }, [url, verProducto.id])
  
  return (
    <>
      {
        <div className="contenedor__detalles">
          <h2>{detalle.title}</h2>
          <p className="precio">${detalle.price}</p>
          <div className="contenedor__grid">
            <p className="boton__nuevo">Nuevo</p>
            <div className="contenedor__tamaño">
              <select className="contenedor__opciones" placeholder="Tamaño">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
              </select>
              <p>Tamaño</p>
            </div>
          </div>
          <button className="boton__añadir__carrito" onClick={() => añadirCarrito(detalle.id)} div>
            Añadir al carrito
          </button>
          {
            url ? <img src={imagen} alt={detalle.title} /> : <img src={detalle.image} alt={detalle.title} />
          }
          <input type="range" min="1" max="36" step="1" value={url} onChange={cambioImagen} />

          <div className="descripcion">
            <p><b>description: </b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus soluta alias porro, saepe facere expedita asperiores quos fugit inventore ex</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae accusantium omnis</p>
          </div>

        </div>
      }
      <h1 className="titulo__producto" style={{paddingTop: "3rem", textAlign: "center"}  } >Recomendacion de Productos</h1>
      <div className="contenedor__productos">
        {
          productos.map(i => {
            if (item < 3 && detalle.category === i.category) {
              item++;
              return <ProductoItem
                key={i.id}
                id={i.id}
                title={i.title}
                price={i.price}
                image={i.image}
                category={i.category}
              />
            }
          })
        }
      </div>

    </>
  );


}