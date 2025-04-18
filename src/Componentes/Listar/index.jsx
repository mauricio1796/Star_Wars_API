import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';

function Listar() {
  const [data, setData] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerDatos = async () => {
      let starships = [];
      let url = "https://swapi.dev/api/starships/";

      // SWAPI entrega datos paginados, así que hacemos un loop
      while (url) {
        const res = await fetch(url);
        const json = await res.json();
        starships = [...starships, ...json.results];
        url = json.next;
      }

      setData(starships);
    };

    obtenerDatos();
  }, []);

  // Filtro por nombre
  let resultados = data;
  if (busqueda.length >= 2) {
    resultados = data.filter(starship =>
      starship.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  return (
    <>
      <input
        type="text"
        placeholder="Buscar nave"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="c-buscador"
      />

      <section className='c-lista'>
        {resultados.map((starship, index) => {
          const id = starship.url.split('/').filter(Boolean).pop();

          return (
            <div
              className='c-lista-pokemon'
              onClick={() => navigate(`/detalle/${id}`)}
              key={index}
            >
              <p>{id}</p>
              <img
                src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                alt={`Nave: ${starship.name}`}
                width="auto"
                height="60"
                loading="lazy"
              />
              <p>{starship.name}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Listar;
