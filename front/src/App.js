import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 
import PocetnaStranica from './components/home/Pocetna';
import Usluge from './components/usluge/Usluge';
import Navbar from './components/navbar/Navbar';
import NovaUslugaForma from './components/usluge/NovaUslugaForma';
import AzurirajUslugu from './components/usluge/AzurirajUslugu';
import Login from './components/login/Login';
import Register from './components/login/Register';

function App() {
  const [token,setToken]=useState(null);
  return (
    <BrowserRouter>
    <Navbar setToken={setToken} token={token}></Navbar>
      <Routes>
        
        <Route path="/" element={<PocetnaStranica />} />
        <Route path="usluge/promeni/:id" element={<AzurirajUslugu />} />
        <Route path="/usluge/dodaj" element={<NovaUslugaForma />} />
        <Route path="/usluge" element={<Usluge />} />


        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken} />} />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
