import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 
import PocetnaStranica from './components/home/Pocetna';
import Usluge from './components/usluge/Usluge';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        
        <Route path="/" element={<PocetnaStranica />} />
        <Route path="/usluge" element={<Usluge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
