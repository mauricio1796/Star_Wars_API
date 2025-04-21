import React, { useEffect, useState } from 'react';
import './Cards.css';

function getIdFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

function Vehiculos() {
  const [vehiculos, setVehiculos] = useState([]);
  const [verDetalles, setVerDetalles] = useState({});

  useEffect(() => {
    fetch('https://swapi.py4e.com/api/vehicles/')
      .then((res) => res.json())
      .then((data) => setVehiculos(data.results));
  }, []);

  const toggleDetalles = (id) => {
    setVerDetalles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container">
      <h2>Vehículos</h2>
      <div className="grid">
        {vehiculos.map((v) => {
          const id = getIdFromUrl(v.url);
          const imgUrl = `/img/Vehiculos/${id}.jpg`;
          const mostrarDetalles = verDetalles[id];

          return (
            <div key={id} className="card">
              {!mostrarDetalles ? (
                <div className="card-img-container">
                  <img src={imgUrl} alt={v.name} className="card-img" />
                  <button className="btn-overlay" onClick={() => toggleDetalles(id)}>Ver detalles</button>
                </div>
              ) : (
                <div className="card-details">
                  <p className="card-subtitle">Vehículo</p>
                  <h3>{v.name}</h3>
                  <p><strong>Modelo:</strong> {v.model}</p>
                  <p><strong>Fabricante:</strong> {v.manufacturer}</p>
                  <p><strong>Pasajeros:</strong> {v.passengers}</p>
                  <p><strong>Clase:</strong> {v.vehicle_class}</p>
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

export default Vehiculos;
