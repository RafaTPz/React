import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Rotas from './Routes';

function App(){

  return (
    <BrowserRouter>
      <Header />

        <Rotas />

      <Footer />
    </BrowserRouter>
  );

}

export default App;