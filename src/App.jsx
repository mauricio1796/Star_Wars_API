import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Personajes from './pages/Personajes';
import Naves from './pages/Naves';
import Planetas from './pages/Planetas';
import Vehiculos from './pages/Vehiculos';
import Menu from './Componentes/Menu'; // para navegación

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/naves" element={<Naves />} />
        <Route path="/planetas" element={<Planetas />} />
        <Route path="/vehiculos" element={<Vehiculos />} />
      </Routes>
    </Router>
  );
}

export default App;
