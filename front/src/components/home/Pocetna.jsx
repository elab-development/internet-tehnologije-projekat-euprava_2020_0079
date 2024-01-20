import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './Pocetna.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PocetnaStranica() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Here you would fetch images from the Unsplash API
    // For demonstration, we're using static image URLs.
    setImages([
      'https://source.unsplash.com/featured/?school',
      'https://source.unsplash.com/featured/?kindergarten',
      'https://source.unsplash.com/featured/?job',
      'https://source.unsplash.com/featured/?education',
      'https://source.unsplash.com/featured/?family'
    ]);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
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
      <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt="Slika" />
            </div>
          ))}
        </Slider>
    </div>
  );
}

export default PocetnaStranica;
