import React from 'react';
import './Pocetna.css';

function PocetnaStranica() {
  return (
    <div className="pocetna">
      <header className="pocetna-header">
        <h1>Dobro došli</h1>
        <p>U par koraka do svih informacija i elektronskih usluga u Republici Srbiji.</p>
     
      </header>
      <section className="pocetna-services">
        <div className="service-card" id="family">
          <h2>Porodični život</h2>
          <p>Trudničko i porodiljsko bolovanje, naknade, prijava deteta, lečenje lopatak...</p>
        </div>
        <div className="service-card" id="birth">
          <h2>Vrtic</h2>
          <p>Upis u vrtic, eVrtic...</p>
        </div>
        <div className="service-card" id="education">
          <h2>Osnovno obrazovanje</h2>
          <p>Proceduri dovarak, dokumentacija za upis deteta u osnovnu školu, elektronski dnevnik...</p>
        </div>
        <div className="service-card" id="employment">
          <h2>Tražim posao</h2>
          <p>Najlakši načini do posla.</p>
        </div>
      </section>
    </div>
  );
}

export default PocetnaStranica;
