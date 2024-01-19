import React from 'react';

function RedTabele({ usluga }) {
  return (
    <tr key={usluga.id}>
      <td>{usluga.naziv}</td>
      <td>{usluga.opis}</td>
      <td>{usluga.cena}</td>
      <td>{usluga.kategorija}</td>
      <td>{usluga.vreme_obrade}</td>
      <td>{usluga.dokumentacija_potrebna}</td>
      <td>{usluga.digitalni_potpis_potreban ? 'Da' : 'Ne'}</td>
      <td>{usluga.prioritet}</td>
    </tr>
  );
}

export default RedTabele;
