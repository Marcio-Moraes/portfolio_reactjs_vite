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
        <Route path='/portfolio_reactjs_vite' element={<Home />} />
        <Route path='/portfolio_reactjs_vite/sobre' element={<Sobre />} />
        <Route path='/portfolio_reactjs_vite/projetos' element={<Projetos />} />
        <Route path='/portfolio_reactjs_vite/carreira' element={<Carreira />} />
        <Route path='/portfolio_reactjs_vite/contato' element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
