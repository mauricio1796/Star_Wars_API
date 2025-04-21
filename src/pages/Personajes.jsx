import React, { useEffect, useState } from 'react';
import './Cards.css';

function getIdFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

function Personajes() {
  const [personajes, setPersonajes] = useState([]);
  const [verDetalles, setVerDetalles] = useState({});

  useEffect(() => {
    fetch('https://swapi.py4e.com/api/people/')
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  }, []);

  const toggleDetalles = (id) => {
    setVerDetalles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container">
      <h2>Personajes</h2>
      <div className="grid">
        {personajes.map((p) => {
          const id = getIdFromUrl(p.url);
          const imgUrl = `/img/Personajes/${id}.jpg`;
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
                  <p className="card-subtitle">Personaje</p>
                  <h3>{p.name}</h3>
                  <p><strong>Altura:</strong> {p.height} cm</p>
                  <p><strong>Peso:</strong> {p.mass} kg</p>
                  <p><strong>Género:</strong> {p.gender}</p>
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

export default Personajes;
