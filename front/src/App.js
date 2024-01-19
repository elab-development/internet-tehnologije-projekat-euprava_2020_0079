import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 
import PocetnaStranica from './components/home/Pocetna';
import Usluge from './components/usluge/Usluge';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PocetnaStranica />} />
        <Route path="/usluge" element={<Usluge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
