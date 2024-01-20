import React, { useState } from 'react';
import axios from 'axios';
import './NovaUslugaForma.css';

function NovaUslugaForma() {
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/usluge', formData)
      .then(response => {
        alert('Usluga je uspešno dodata!');
        // Optionally reset form or handle response further
        setFormData({
          naziv: '',
          opis: '',
          cena: '',
          kategorija: '',
          vreme_obrade: '',
          dokumentacija_potrebna: '',
          digitalni_potpis_potreban: false,
          prioritet: ''
        });
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
      });
  };

  return (
    <form className="nova-usluga-forma" onSubmit={handleSubmit}>
      <input
        type="text"
        name="naziv"
        value={formData.naziv}
        onChange={handleInputChange}
        placeholder="Naziv usluge"
        required
      />
      <textarea
        name="opis"
        value={formData.opis}
        onChange={handleInputChange}
        placeholder="Opis usluge"
        required
      />
      <input
        type="number"
        name="cena"
        value={formData.cena}
        onChange={handleInputChange}
        placeholder="Cena usluge"
        required
      />
      <input
        type="text"
        name="kategorija"
        value={formData.kategorija}
        onChange={handleInputChange}
        placeholder="Kategorija usluge"
        required
      />
      <input
        type="number"
        name="vreme_obrade"
        value={formData.vreme_obrade}
        onChange={handleInputChange}
        placeholder="Vreme obrade (u danima)"
        required
      />
      <input
        type="text"
        name="dokumentacija_potrebna"
        value={formData.dokumentacija_potrebna}
        onChange={handleInputChange}
        placeholder="Dokumentacija potrebna"
      />
      <label>
        Digitalni potpis potreban:
        <input
          type="checkbox"
          name="digitalni_potpis_potreban"
          checked={formData.digitalni_potpis_potreban}
          onChange={handleInputChange}
        />
      </label>
      <select name="prioritet" value={formData.prioritet} onChange={handleInputChange} required>
        <option value="">Izaberite prioritet</option>
        <option value="low">Nizak</option>
        <option value="medium">Srednji</option>
        <option value="high">Visok</option>
      </select>
      <button type="submit">Dodaj Uslugu</button>
    </form>
  );
  
}

export default NovaUslugaForma;
