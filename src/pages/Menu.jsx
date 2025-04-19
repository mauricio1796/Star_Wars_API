import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <Link to="/personajes">Personajes</Link>
      <Link to="/naves">Naves</Link>
      <Link to="/planetas">Planetas</Link>
      <Link to="/vehiculos">Vehículos</Link>
    </nav>
  );
}

export default Menu;
