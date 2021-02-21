import React from 'react';
import Header from './components/header';
import "boxicons";
import { BrowserRouter as Router } from 'react-router-dom';
import { Paginas } from './components/paginas/Paginas';
import { Carrito } from './components/carrito';
import { DataProvider } from './components/context/Dataprovider';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Paginas />
          <Carrito />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
