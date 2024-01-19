import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Usluge.css';

function Usluge() {
  const [usluge, setUsluge] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/usluge')
      .then(response => {
        setUsluge(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the usluge!', error);
      });
  }, []);

  return (
    <div className="usluge">
      <table>
        <thead>
          <tr>
            <th>Naziv</th>
            <th>Opis</th>
            <th>Cena</th>
            <th>Kategorija</th>
            <th>Vreme Obrade</th>
            <th>Dokumentacija Potrebna</th>
            <th>Digitalni Potpis Potreban</th>
            <th>Prioritet</th>
          </tr>
        </thead>
        <tbody>
          {usluge.map(usluga => (
            <tr key={usluga.id}>
              <td>{usluga.naziv}</td>
              <td>{usluga.opis}</td>
              <td>{usluga.cena}</td>
              <td>{usluga.kategorija}</td>
              <td>{usluga.vreme_obrade}</td>
              <td>{usluga.dokumentacija_potrebna}</td>
              <td>{usluga.digitalni_potpis_potreban ? 'Da' : 'Ne'}</td>
              <td>{usluga.prioritet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usluge;
