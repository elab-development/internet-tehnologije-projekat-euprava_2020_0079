import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './NovaUslugaForma.css';
import InputField from './InputField';

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
      <InputField
        label="Naziv usluge"
        type="text"
        name="naziv"
        value={formData.naziv}
        onChange={handleInputChange}
        required
      />

      <InputField
        label="Opis usluge"
        type="text"
        name="opis"
        value={formData.opis}
        onChange={handleInputChange}
        required
      />

      <InputField
        label="Cena usluge"
        type="number"
        name="cena"
        value={formData.cena}
        onChange={handleInputChange}
        required
      />

      <InputField
        label="Kategorija usluge"
        type="text"
        name="kategorija"
        value={formData.kategorija}
        onChange={handleInputChange}
        required
      />

      <InputField
        label="Vreme obrade (u danima)"
        type="number"
        name="vreme_obrade"
        value={formData.vreme_obrade}
        onChange={handleInputChange}
        required
      />

      <InputField
        label="Dokumentacija potrebna"
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
