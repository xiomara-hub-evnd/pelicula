import { Link } from 'react-router-dom'; 
import "./index.css"; 

// Asegúrate de importar SearchBar si lo usas aquí, o bórralo si está en App.jsx

export default function Layout({ children }) {
  return (
    <div className="min-h-screen"> 
      <nav>
        <div className="nav-links">
            <Link to="/">Inicio</Link>
            <Link to="/catalogo">Ver Películas</Link>
        </div>
      </nav>
      {children}
    </div>
  );
}