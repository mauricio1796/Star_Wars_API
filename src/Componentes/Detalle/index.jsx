import { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"; 
import './style.css'

function Detalle() {
  const { name } = useParams(); 
  const [datapoke, setDatapoke] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(responseData => setDatapoke(responseData))
      .catch(error => console.error("Error:", error));
  }, [name]); 

  if (!datapoke) return <p>Cargando...</p>;
 return (
    
    <div>
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${datapoke.id}.png`} 
        alt={datapoke.name} 
        width="200"
      />

        <p>{datapoke.name}</p>
        <p>{datapoke.id}</p>
        <p>Altura: {datapoke.height/ 10} m / Peso: {datapoke.weight/ 10} km</p>



    
    </div>
      
  )
}

export default Detalle
