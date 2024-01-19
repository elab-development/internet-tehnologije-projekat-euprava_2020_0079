import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Usluge.css';
import RedTabele from './RedTabele';  

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
            <RedTabele key={usluga.id} usluga={usluga} />  
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usluge;
