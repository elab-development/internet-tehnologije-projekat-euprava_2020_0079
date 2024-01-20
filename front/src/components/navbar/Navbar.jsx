import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        
        <div className="nav-links">
          <Link to="/" className="nav-item">Početna</Link>
          <Link to="/usluge/dodaj" className="nav-item">Dodaj</Link>
          <Link to="/usluge" className="nav-item">Usluge</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
