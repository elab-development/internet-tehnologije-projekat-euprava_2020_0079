import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login({setToken,setUloga}) {
    let navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: 'qcole@example.net',
    password: 'secret'
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
      const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
      const accessToken = response.data.access_token;
    
      localStorage.setItem('accessToken', accessToken);
     if(response.data.user.role=='admin'){
        navigate('/usluge');
     }else{
        navigate('/kreirajzahtev');
     }
      setToken(accessToken)
      setUloga(response.data.user.role);
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
