import React, { useEffect, useState } from 'react';
import './Cards.css'; // archivo CSS nuevo

function getIdFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

function Personajes() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch('https://swapi.py4e.com/api/people/')
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  }, []);

  return (
    <div className="container">
      <h2>Personajes</h2>
      <div className="grid">
        {personajes.map((p) => {
          const id = getIdFromUrl(p.url);
          const imgUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

          return (
            <div key={id} className="card">
              <img src={imgUrl} alt={p.name} className="card-img" />
              <h3>{p.name}</h3>
              <p><strong>Altura:</strong> {p.height} cm</p>
              <p><strong>Peso:</strong> {p.mass} kg</p>
              <p><strong>Género:</strong> {p.gender}</p>
              <button className="btn">Ver detalles</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Personajes;
