import { Link } from 'react-router-dom';
import './style.css'; // archivo de estilos

function Menu() {
  return (
    <nav className="navbar">
      <h1 className="logo">🌌 Star Wars Explorer</h1>
      <ul className="nav-links">
        <li><Link to="/personajes">Personajes</Link></li>
        <li><Link to="/naves">Naves</Link></li>
        <li><Link to="/planetas">Planetas</Link></li>
        <li><Link to="/vehiculos">Vehículos</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
