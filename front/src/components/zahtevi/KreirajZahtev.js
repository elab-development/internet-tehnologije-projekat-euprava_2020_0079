import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './KreirajZahtev.css';
function KreirajZahtev() {
  const [formData, setFormData] = useState({
    usluga_id: '',
    status_zahteva: 'pending',
    submitted_at: '',
    processed_at: '',
    request_priority: '',
    additional_notes: '',
    processing_deadline: ''
  });
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Učitavanje usluga sa servera
    axios.get('http://127.0.0.1:8000/api/usluge')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('Error loading services:', error);
        setError('Error loading services. Please try again.');
      });
  }, []);

  useEffect(() => {
    // Postavljanje današnjeg datuma za "submitted at" polje prilikom prvog renderovanja
    const today = new Date().toISOString().split('T')[0];
    setFormData(prevFormData => ({
      ...prevFormData,
      submitted_at: today
    }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dobijanje tokena iz sessionStorage-a
      const token = localStorage.getItem('accessToken');
  
      // Postavljanje tokena u zaglavlje zahteva
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
  
      // Slanje zahteva sa tokenom u zaglavlju
      const response = await axios.post('http://127.0.0.1:8000/api/zahtevi', formData, config);
      console.log('New request created:', response.data);  
      alert("ZAHTEV KREIRAN");
    } catch (error) {
      setError('Error creating request. Please check your input and try again.');
      console.error('Error creating request:', error);
    }
  };

  return (
    <div className='request-container'>
      <form className="request-form" onSubmit={handleSubmit}>
        <h2>Create Request</h2>
        {error && <p className="error-message">{error}</p>}
        <div>
          <label>Select Service:</label>
          <select name="usluga_id" value={formData.usluga_id} onChange={handleInputChange} required>
            <option value="">Select a service</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>{service.naziv}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Status:</label>
          <input type="text" name="status_zahteva" value={formData.status_zahteva} onChange={handleInputChange} readOnly />
        </div>
        <div>
          <label>Submitted At:</label>
          <input type="text" name="submitted_at" value={formData.submitted_at} readOnly />
        </div> 
        <div>
          <label>Request Priority:</label>
          <input type="text" name="request_priority" value={formData.request_priority} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Additional Notes:</label>
          <textarea name="additional_notes" value={formData.additional_notes} onChange={handleInputChange} />
        </div> 
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default KreirajZahtev;
