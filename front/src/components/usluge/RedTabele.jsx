import React from 'react';
import axios from 'axios';

function RedTabele({ usluga, setUsluge }) {
  const handleDelete = (id) => {
   
    if (window.confirm("Da li ste sigurni da želite da obrišete uslugu?")) {
      axios.delete(`http://127.0.0.1:8000/api/usluge/${id}`)
        .then(response => {
          alert('Usluga je uspešno obrisana.'); 
          setUsluge((prevUsluge) => prevUsluge.filter((usluga) => usluga.id !== id));
        })
        .catch(error => {
          console.error('There was an error deleting the usluga!', error);
        });
    }
  };

  return (
    <tr>
      <td>{usluga.naziv}</td>
      <td>{usluga.opis}</td>
      <td>{usluga.cena}</td>
      <td>{usluga.kategorija}</td>
      <td>{usluga.vreme_obrade}</td>
      <td>{usluga.dokumentacija_potrebna}</td>
      <td>{usluga.digitalni_potpis_potreban ? 'Da' : 'Ne'}</td>
      <td>{usluga.prioritet}</td>
      <td>
        <button onClick={() => handleDelete(usluga.id)}>Obriši</button>
      </td>
    </tr>
  );
}

export default RedTabele;
