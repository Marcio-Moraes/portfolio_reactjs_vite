import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Header'
import Barra from './Barra'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Projetos from './paginas/Projetos';
import Contato from './paginas/Contato';
import Footer from './Footer';
import Carreira from './paginas/Carreira';




function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Barra />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='projetos' element={<Projetos />} />
        <Route path='carreira' element={<Carreira />} />
        <Route path='contato' element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
