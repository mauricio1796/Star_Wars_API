import React from "react";

function Filtros({ tipoSeleccionado, setTipoSeleccionado }) {
  return (
    <div>
      <select value={tipoSeleccionado} onChange={(e) => setTipoSeleccionado(e.target.value)}>
        <option value="people">Personajes</option>
        <option value="planets">Planetas</option>
        <option value="starships">Naves</option>
      </select>
    </div>
  );
}

export default Filtros;