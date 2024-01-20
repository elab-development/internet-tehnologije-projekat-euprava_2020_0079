import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Usluge.css';
import RedTabele from './RedTabele';  

function Usluge() {
  const [usluge, setUsluge] = useState([]);
  const [search, setSearch] = useState({
    naziv: '',
    kategorija: '',
    prioritet: '',
     
  });
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/usluge')
      .then(response => {
        
        const filteredData = response.data.filter(usluga => 
          (search.naziv ? usluga.naziv.includes(search.naziv) : true) &&
          (search.kategorija ? usluga.kategorija.includes(search.kategorija) : true) &&
          (search.prioritet ? usluga.prioritet === search.prioritet : true)
        );
        setUsluge(filteredData);
      })
      .catch(error => {
        console.error('There was an error fetching the usluge!', error);
      });
  }, [search]);
  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
   
  };
  return (
    <div className="usluge">
         <form onSubmit={handleSearch}>
        <input
          type="text"
          name="naziv"
          value={search.naziv}
          onChange={handleSearchChange}
          placeholder="Pretraži po nazivu"
        />
        <input
          type="text"
          name="kategorija"
          value={search.kategorija}
          onChange={handleSearchChange}
          placeholder="Pretraži po kategoriji"
        />
        <select name="prioritet" value={search.prioritet} onChange={handleSearchChange}>
          <option value="">Svi prioriteti</option>
          <option value="low">Nizak</option>
          <option value="medium">Srednji</option>
          <option value="high">Visok</option>
        </select>
      <button type="submit">Pretraži</button>
    </form>
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
            <th>Obrisi</th>
          </tr>
        </thead>
        <tbody>
          {usluge.map(usluga => (
            <RedTabele key={usluga.id} usluga={usluga} setUsluge={setUsluge} />  
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usluge;
