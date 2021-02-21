import React, {useContext} from 'react';
import imagen_nike from '../../images/Nike.jpg';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/Dataprovider'

function Header() {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const cambiarEstado = () => {
    setMenu(!menu);
  }

  const [carrito] = value.carrito;

  console.log(menu);
  // ERRORES POR NO PONER CLASSNAME PERO FUNCIONA
  return (
    <header className="header">
      <Link to="/">
        <img src={imagen_nike} alt="" class="logo" />
      </Link>
      <nav className="menu">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
        </ul>
      </nav>
      <div className="carro-compras" onClick={cambiarEstado}>
        <box-icon name="cart" class="icono-carro"></box-icon>
        <span className="numero">{carrito.length}</span>
      </div>
    </header>
  )
}

export default Header;
