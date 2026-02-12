/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
import Producto from "./Producto"
function App() {
  const catalogo = [
  { id: 1, nombre: "Peinado", precio: 200, categoria: "Básico" , imagen:peinado},
  { id: 2, nombre: "Corte ", precio: 150, categoria: "Básico", imagen:corte },
  { id: 3, nombre: "Tinte", precio: 450, categoria: "Premimn" , imagen:tinte},
  ]
  return (
  <div className='maincontainer'>
    <h1>Estetica Espacializada le ofrece</h1>
    <div className='catalogo'>
    {catalogo.map((pr) => (
      <Producto
        key={pr.id}
        nombre={pr.nombre}
        precio={pr.precio}
        categoria={pr.categoria}
        foto={pr.imagen}
      />
    ))}
    </div>
  </div >)
}
*/
import { useState } from 'react'
import Catalogo from "./Catalogo"
import Layout from './Layout';
import SearchBar from './Componentes/searchBar';

// Importamos las imágenes
import hambre from './assets/pelicula1.jpg'
import harry from './assets/pelicula2.jpg'
import familia from './assets/pelicula3.jpg'

function App() {
  const [totalRentadas, setTotalRentadas] = useState(0);

  const [busqueda, setBusqueda] = useState("");

  const aumentarTotal = () => {
    setTotalRentadas(totalRentadas + 1);
  }

  const manejarBusqueda = (texto) => {
    setBusqueda(texto);
  }

  const catalogo = [
    { id: 1, nombre: "Los Juegos del Hambre ", categoria: "Ciencia Ficción", rating: 2, imagen: hambre },
    { id: 2, nombre: "Harry Potter", categoria: "Fantasía", rating: 3, imagen: harry },
    { id: 3, nombre: "La Familia del Futuro", categoria: "Animada", rating: 5, imagen: familia },
  ]

  const peliculasFiltradas = catalogo.filter((peli) =>
    peli.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Layout>
      <div className="main-content" style={{ padding: '20px' }}>

        <h1 style={{ textAlign: 'center', color: 'white' }}>Lo más buscado</h1>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <SearchBar onSearch={manejarBusqueda} />
        </div>

        <h2 style={{ textAlign: 'center', color: '#ccc', fontSize: '1rem' }}>
          Películas rentadas: {totalRentadas}
        </h2>

        <div className='catalogo'>
          {peliculasFiltradas.length > 0 ? (
            peliculasFiltradas.map((c) => (
              <Catalogo
                key={c.id}
                nombre={c.nombre}
                categoria={c.categoria}
                rating={c.rating}
                imagen={c.imagen}
                manejarRenta={aumentarTotal}
              />
            ))
          ) : (
            <div style={{ width: '100%', textAlign: 'center', color: 'white', marginTop: '20px' }}>
              <h2>No encontramos esa película </h2>
              <p>Intenta buscando con otro nombre.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default App