import React from 'react';
import {Inicio} from './inicio';
import {Productos} from './productos/index';
import {Detalles} from './productos/Detalles';
import {Switch, Route } from 'react-router-dom';

export const Paginas = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/productos" exact component={Productos} />
        <Route path="/productos/:id" exact component={Detalles} />

      </Switch>
    </section>)
}
