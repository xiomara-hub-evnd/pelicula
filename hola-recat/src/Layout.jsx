import "./index.css"; 
import SearchBar from "./Componentes/searchBar.jsx"; 

export default function Layout({ children }) {
  return (
    <div className="min-h-screen"> 
      <nav>
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <a href="/catalogo" className="hover:text-blue-400">Ver Películas</a>
        <SearchBar />
      </nav>
      {children}
    </div>
  );
}