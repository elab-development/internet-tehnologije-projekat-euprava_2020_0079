import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

function Navbar({ token, setToken, uloga, setUloga }) {
  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setToken(null);
      setUloga(null);
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-links">
          <Link to="/" className="nav-item">Početna</Link>
          <Link to="/covid" className="nav-item">Covid</Link>
          <Link to="/obavestenja" className="nav-item">Obavestenja</Link>

          {uloga === 'admin' && (
            <>
              <Link to="/usluge/dodaj" className="nav-item">Dodaj</Link>
              <Link to="/usluge" className="nav-item">Usluge</Link>
              <Link to="/admin/kreirajObavestenje" className="nav-item">kreirajObavestenje</Link>
              <Link to="/admin" className="nav-item">Admin</Link>
            </>
          )}

          {uloga === 'korisnik' && (
            <>
              <Link to="/kreirajzahtev" className="nav-item">Kreiraj zahtev</Link>
            </>
          )}

          {token ? (
            <button onClick={handleLogout} className="nav-item">Logout</button>
          ) : (
            <>
              <Link to="/login" className="nav-item">Login</Link>
              <Link to="/register" className="nav-item">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
