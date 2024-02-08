import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KreirajObavestenje = () => {
    let navigate=useNavigate();
  const [formData, setFormData] = useState({
    opstina: '',
    vrsta_prekida: '',
    datum_pocetka: '',
    datum_zavrsetka: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('accessToken');
      const headers = {
        'Authorization': `Bearer ${token}`,
      };
      await axios.post('http://127.0.0.1:8000/api/obavestenja', formData, { headers });
       alert("Uspesno dodato");
       navigate('/admin');
    } catch (error) {
      console.error('Greška prilikom slanja podataka:', error);
   
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Unesite novo obaveštenje</h2>
        <input
          type="text"
          name="opstina"
          placeholder="Opština"
          value={formData.opstina}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="vrsta_prekida"
          placeholder="Vrsta prekida (voda/struja)"
          value={formData.vrsta_prekida}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="datum_pocetka"
          placeholder="Datum početka"
          value={formData.datum_pocetka}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="datum_zavrsetka"
          placeholder="Datum završetka"
          value={formData.datum_zavrsetka}
          onChange={handleChange}
          required
        />
        <button type="submit">Pošalji</button>
      </form>
    </div>
  );
};

export default KreirajObavestenje;
