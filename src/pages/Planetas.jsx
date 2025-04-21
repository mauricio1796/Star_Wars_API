import React, { useEffect, useState } from 'react';
import './Cards.css';

function getIdFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

function Planetas() {
  const [planetas, setPlanetas] = useState([]);
  const [verDetalles, setVerDetalles] = useState({});

  useEffect(() => {
    fetch('https://swapi.py4e.com/api/planets/')
      .then((res) => res.json())
      .then((data) => setPlanetas(data.results));
  }, []);

  const toggleDetalles = (id) => {
    setVerDetalles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container">
      <h2>Planetas</h2>
      <div className="grid">
        {planetas.map((p) => {
          const id = getIdFromUrl(p.url);
          const imgUrl = `/img/planetas/${id}.jpg`;
          const mostrarDetalles = verDetalles[id];

          return (
            <div key={id} className="card">
              {!mostrarDetalles ? (
                <div className="card-img-container">
                  <img src={imgUrl} alt={p.name} className="card-img" />
                  <button className="btn-overlay" onClick={() => toggleDetalles(id)}>Ver detalles</button>
                </div>
              ) : (
                <div className="card-details">
                  <p className="card-subtitle">Planeta</p>
                  <h3>{p.name}</h3>
                  <p><strong>Clima:</strong> {p.climate}</p>
                  <p><strong>Terreno:</strong> {p.terrain}</p>
                  <p><strong>Población:</strong> {p.population}</p>
                  <p><strong>Gravedad:</strong> {p.gravity}</p>
                  <button className="btn" onClick={() => toggleDetalles(id)}>Ocultar</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Planetas;
