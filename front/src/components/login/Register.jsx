import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
    let navigate=useNavigate();
  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    imeOca: '',
    email: '',
    password: '',
    jmbg: '',
    brLicneKarte: '',
    datumRodjenja: '',
    mestoRodjenja: '',
    adresaPrebivalista: '',
    opstinaPrebivalista: ''
  });

  const [error, setError] = useState('');

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
      const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
      navigate('/login');
    } catch (error) {
      setError('Registration failed. Please check your input and try again.');
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          name="ime"
          value={formData.ime}
          onChange={handleInputChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="prezime"
          value={formData.prezime}
          onChange={handleInputChange}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          name="imeOca"
          value={formData.imeOca}
          onChange={handleInputChange}
          placeholder="Father's Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        <input
          type="text"
          name="jmbg"
          value={formData.jmbg}
          onChange={handleInputChange}
          placeholder="JMBG"
          required
        />
        <input
          type="text"
          name="brLicneKarte"
          value={formData.brLicneKarte}
          onChange={handleInputChange}
          placeholder="ID Card Number"
          required
        />
        <input
          type="date"
          name="datumRodjenja"
          value={formData.datumRodjenja}
          onChange={handleInputChange}
          placeholder="Date of Birth"
          required
        />
        <input
          type="text"
          name="mestoRodjenja"
          value={formData.mestoRodjenja}
          onChange={handleInputChange}
          placeholder="Place of Birth"
          required
        />
        <input
          type="text"
          name="adresaPrebivalista"
          value={formData.adresaPrebivalista}
          onChange={handleInputChange}
          placeholder="Address"
          required
        />
        <input
          type="text"
          name="opstinaPrebivalista"
          value={formData.opstinaPrebivalista}
          onChange={handleInputChange}
          placeholder="Municipality"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
