import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Usluge.css';
import RedTabele from './RedTabele';
import useFetchServices from './useFetchServices ';

function Usluge() {
  const { data: usluge,setData:setUsluge, loading, error } = useFetchServices('http://127.0.0.1:8000/api/usluge');
  const [filteredUsluge, setFilteredUsluge] = useState([]);
  const [search, setSearch] = useState({
    naziv: '',
    kategorija: '',
    prioritet: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 5;
  useEffect(() => {
    setFilteredUsluge(usluge);  
  }, [usluge]);
 

  useEffect(() => {
    const filteredData = usluge.filter(usluga => 
      (!search.naziv || usluga.naziv.toLowerCase().includes(search.naziv.toLowerCase())) &&
      (!search.kategorija || usluga.kategorija.toLowerCase().includes(search.kategorija.toLowerCase())) &&
      (!search.prioritet || usluga.prioritet.toLowerCase().includes(search.prioritet.toLowerCase()))
    );
    setFilteredUsluge(filteredData);
  }, [search, usluge]); 

  const handleSearchChange = (e) => {
    const { name, value } = e.target;  
    setSearch({ ...search, [name]: value });
    setCurrentPage(1); // Reset to first page when search changes
  };
  const handleSearch = (e) => {
    e.preventDefault();
   
  };
  // Get current services
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredUsluge.slice(indexOfFirstService, indexOfLastService);

  const totalPages = Math.ceil(filteredUsluge.length / servicesPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading services: {error.message}</p>;
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
      <button type="submit">Pretraži</button></form>
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
          {currentServices.map(usluga => (
            <RedTabele key={usluga.id} usluga={usluga} setUsluge={setUsluge} />
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Usluge;
