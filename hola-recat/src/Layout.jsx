export default function Layout({ children }) {
  return (
    <div className="min-h-screen"> 
      <nav>
        {/* Agrupamos los enlaces en un div para que queden a la izquierda */}
        <div className="nav-links">
            <a href="/">Inicio</a>
            <a href="/catalogo">Ver Películas</a>
        </div>
        
        {/* Aquí iría el SearchBar si decides ponerlo en el Navbar fijo, 
            pero como lo tienes en App.jsx, se verá debajo del nav. 
            ¡Si quieres que esté DENTRO del nav, avísame! */}
      </nav>
      {children}
    </div>
  );
}