import React, { useEffect, useState } from 'react';
import './Cards.css';

function getIdFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

function Naves() {
  const [naves, setNaves] = useState([]);
  const [verDetalles, setVerDetalles] = useState({});

  useEffect(() => {
    fetch('https://swapi.py4e.com/api/starships/')
      .then((res) => res.json())
      .then((data) => setNaves(data.results));
  }, []);

  const toggleDetalles = (id) => {
    setVerDetalles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container">
      <h2>Naves</h2>
      <div className="grid">
        {naves.map((n) => {
          const id = getIdFromUrl(n.url);
          const imgUrl = `/img/Naves/${id}.jpg`;
          const mostrarDetalles = verDetalles[id];

          return (
            <div key={id} className="card">
              {!mostrarDetalles ? (
                <div className="card-img-container">
                  <img src={imgUrl} alt={n.name} className="card-img" />
                  <button className="btn-overlay" onClick={() => toggleDetalles(id)}>Ver detalles</button>
                </div>
              ) : (
                <div className="card-details">
                <p className="card-subtitle">Naves</p>
                <h3>{n.name}</h3>
                <p><strong>Modelo:</strong> {n.model}</p>
                <p><strong>Fabricante:</strong> {n.manufacturer}</p>
                <p><strong>Capacidad:</strong> {n.passengers} pasajeros</p>
                <p><strong>Clase:</strong> {n.starship_class}</p>
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

export default Naves;