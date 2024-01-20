import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './NovaUslugaForma.css';

function AzurirajUslugu() {
  const [formData, setFormData] = useState({
    naziv: '',
    opis: '',
    cena: '',
    kategorija: '',
    vreme_obrade: '',
    dokumentacija_potrebna: '',
    digitalni_potpis_potreban: false,
    prioritet: ''
  });
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/usluge/${id}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the service details!', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/usluge/${id}`, formData)
      .then(response => {
        alert('Usluga je uspešno ažurirana!');
       
      })
      .catch(error => {
        console.error('There was an error updating the service!', error);
      });
  };

  return (
    <form className="nova-usluga-forma" onSubmit={handleSubmit}>
      <label htmlFor="naziv">Naziv usluge</label>
      <input
        id="naziv"
        type="text"
        name="naziv"
        value={formData.naziv}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="opis">Opis usluge</label>
      <textarea
        id="opis"
        name="opis"
        value={formData.opis}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="cena">Cena usluge</label>
      <input
        id="cena"
        type="number"
        name="cena"
        value={formData.cena}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="kategorija">Kategorija usluge</label>
      <input
        id="kategorija"
        type="text"
        name="kategorija"
        value={formData.kategorija}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="vreme_obrade">Vreme obrade (u danima)</label>
      <input
        id="vreme_obrade"
        type="number"
        name="vreme_obrade"
        value={formData.vreme_obrade}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="dokumentacija_potrebna">Dokumentacija potrebna</label>
      <input
        id="dokumentacija_potrebna"
        type="text"
        name="dokumentacija_potrebna"
        value={formData.dokumentacija_potrebna}
        onChange={handleInputChange}
      />

      <label htmlFor="digitalni_potpis_potreban">
        Digitalni potpis potreban:
        <input
          id="digitalni_potpis_potreban"
          type="checkbox"
          name="digitalni_potpis_potreban"
          checked={formData.digitalni_potpis_potreban}
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor="prioritet">Prioritet</label>
      <select
        id="prioritet"
        name="prioritet"
        value={formData.prioritet}
        onChange={handleInputChange}
        required
      >
        <option value="">Izaberite prioritet</option>
        <option value="low">Nizak</option>
        <option value="medium">Srednji</option>
        <option value="high">Visok</option>
      </select>

      <button type="submit">Ažuriraj Uslugu</button>
    </form>
  );
}

export default AzurirajUslugu;
