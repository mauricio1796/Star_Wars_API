import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"; 
import './style.css';

function Detalle() {
  const { id } = useParams(); 
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${id}/`)
      .then(response => response.json())
      .then(data => setStarship(data))
      .catch(error => console.error("Error:", error));
  }, [id]); 

  if (!starship) return <p>Cargando...</p>;

  return (
    <div className="detalle">
      <h2>{starship.name}</h2>
      <p><strong>Modelo:</strong> {starship.model}</p>
      <p><strong>Fabricante:</strong> {starship.manufacturer}</p>
      <p><strong>Clase:</strong> {starship.starship_class}</p>
      <p><strong>Pasajeros:</strong> {starship.passengers}</p>
      <p><strong>Velocidad máxima (MGLT):</strong> {starship.MGLT}</p>
    </div>
  );
}

export default Detalle;
