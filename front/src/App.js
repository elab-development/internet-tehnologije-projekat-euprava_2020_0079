import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 
import PocetnaStranica from './components/home/Pocetna';
import Usluge from './components/usluge/Usluge';
import Navbar from './components/navbar/Navbar';
import NovaUslugaForma from './components/usluge/NovaUslugaForma';
import AzurirajUslugu from './components/usluge/AzurirajUslugu';
import Login from './components/login/Login';
import Register from './components/login/Register';
import KreirajZahtev from './components/zahtevi/KreirajZahtev';
import Covid from './components/covid/Covid';
import Statistics from './components/admin/Statistike';
import KreirajObavestenje from './components/admin/KreirajObavestenje';
import ObavestenjaPage from './components/usluge/ObavestenjaPage';

function App() {
  const [token,setToken]=useState(null);
  const [uloga,setUloga]=useState(null);
  return (
    <BrowserRouter>
    <Navbar setToken={setToken} token={token} setUloga={setUloga} uloga={uloga}></Navbar>
      <Routes>
        
        <Route path="/" element={<PocetnaStranica />} />
        <Route path="usluge/promeni/:id" element={<AzurirajUslugu />} />
        <Route path="/usluge/dodaj" element={<NovaUslugaForma />} />
        <Route path="/usluge" element={<Usluge />} />



        <Route path="/obavestenja" element={<ObavestenjaPage />} />
       <Route path="/covid" element={<Covid />} />


        <Route path="/admin/kreirajObavestenje" element={<KreirajObavestenje />} />
        <Route path="/admin" element={<Statistics />} />
       


       
        <Route path="/kreirajzahtev" element={<KreirajZahtev />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken}   setUloga={setUloga}/>} />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
