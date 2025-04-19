import React, { useEffect, useState } from 'react';
import './Cards.css';

function getIdFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

function Planetas() {
  const [planetas, setPlanetas] = useState([]);

  useEffect(() => {
    fetch('https://swapi.py4e.com/api/planets/')
      .then((res) => res.json())
      .then((data) => setPlanetas(data.results));
  }, []);

  return (
    <div className="container">
      <h2>Planetas</h2>
      <div className="grid">
        {planetas.map((p) => {
          const id = getIdFromUrl(p.url);
          const imgUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

          return (
            <div key={id} className="card">
              <img src={imgUrl} alt={p.name} className="card-img" />
            <h3>{p.name}</h3>
              <p><strong>Clima:</strong> {p.climate}</p>
              <p><strong>Terreno:</strong> {p.terrain}</p>
              <p><strong>Población:</strong> {p.population}</p>
              <p><strong>Gravedad:</strong> {p.gravity}</p>
              <button className="btn">Ver más</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Planetas;
