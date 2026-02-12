import { Link } from 'react-router-dom';
import Layout from './Layout';
import './App.css';

function Inicio() {S
  return (
    <Layout>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">MOVIES</h1>
          <p className="hero-subtitle">Las mejores historias, en un solo lugar.</p>
          <Link to="/catalogo" className="hero-button">Ver Catálogo</Link>
        </div>
      </div>
    </Layout>
  )
}
export default Inicio;