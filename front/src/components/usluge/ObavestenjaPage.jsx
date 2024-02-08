import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ObavestenjaPage = () => {
  const [obavestenja, setObavestenja] = useState([]);

  useEffect(() => {
    const fetchObavestenja = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/obavestenja');
        setObavestenja(response.data);
      } catch (error) {
        console.error('Greška prilikom dobijanja obaveštenja:', error);
      }
    };

    fetchObavestenja();
  }, []);

  return (
    <div>
      <h2>Obaveštenja</h2>
      <ul>
        {obavestenja.map((obavestenje) => (
          <li key={obavestenje.id}>
            <h3>Opština: {obavestenje.opstina}</h3>
            <p>Vrsta prekida: {obavestenje.vrsta_prekida}</p>
            <p>Datum početka: {obavestenje.datum_pocetka}</p>
            <p>Datum završetka: {obavestenje.datum_zavrsetka}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObavestenjaPage;
