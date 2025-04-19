import React, { useEffect, useState } from "react";

function Listar({ tipoSeleccionado }) {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    fetch(`https://swapi.py4e.com/api/${tipoSeleccionado}/`)
      .then((res) => res.json())
      .then((data) => {
        setDatos(data.results);
        setCargando(false);
      });
  }, [tipoSeleccionado]);

  return (
    <div>
      {cargando ? (
        <p>Cargando {tipoSeleccionado}...</p>
      ) : (
        <ul>
          {datos.map((item, index) => (
            <li key={index}>{item.name || item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Listar;
