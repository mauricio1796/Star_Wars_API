import React, { useEffect, useState } from 'react';
import './Cards.css';

function getIdFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

function Vehiculos() {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    fetch('https://swapi.py4e.com/api/vehicles/')
      .then((res) => res.json())
      .then((data) => setVehiculos(data.results));
  }, []);

  return (
    <div className="container">
      <h2>Vehículos</h2>
      <div className="grid">
        {vehiculos.map((v) => {
          const id = getIdFromUrl(v.url);
          const imgUrl = `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;

          return (
            <div key={id} className="card">
              <img src={imgUrl} alt={v.name} className="card-img"
            />
              <h3>{v.name}</h3>
              <p><strong>Modelo:</strong> {v.model}</p>
              <p><strong>Fabricante:</strong> {v.manufacturer}</p>
              <p><strong>Pasajeros:</strong> {v.passengers}</p>
              <p><strong>Clase:</strong> {v.vehicle_class}</p>
              <button className="btn">Ver más</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Vehiculos;
