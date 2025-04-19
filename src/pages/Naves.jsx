import React, { useEffect, useState } from 'react';
import './Cards.css';

function getIdFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

function Naves() {
  const [naves, setNaves] = useState([]);

  useEffect(() => {
    fetch('https://swapi.py4e.com/api/starships/')
      .then((res) => res.json())
      .then((data) => setNaves(data.results));
  }, []);

  return (
    <div className="container">
      <h2>Naves</h2>
      <div className="grid">
        {naves.map((n) => {
          const id = getIdFromUrl(n.url);
          const imgUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

          return (
            <div key={id} className="card">
              <img src={imgUrl} alt={n.name} className="card-img"
                 />
              <h3>{n.name}</h3>
              <p><strong>Modelo:</strong> {n.model}</p>
              <p><strong>Fabricante:</strong> {n.manufacturer}</p>
              <p><strong>Capacidad:</strong> {n.passengers} pasajeros</p>
              <p><strong>Clase:</strong> {n.starship_class}</p>
              <button className="btn">Ver más</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Naves;
