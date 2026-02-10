import Boton from "./Boton"

function Catalogo({ nombre, categoria, rating, imagen, manejarRenta }) {
    const estiloDinamico = rating < 3 ? "baja-puntuacion" : "alta-puntuacion";

    return (
        <div className={`containerCatalogo ${estiloDinamico}`}>
            <div className="containerImgcatalogo">
                <img src={imagen} alt="imagen" />
            </div>
            <div className="cardinfocatalogo">
                <h3>{nombre}</h3>
                <p>Categoria: {categoria}</p>
                <div className="rating-box">
                    Rating: {rating}
                </div>
                <Boton accion={manejarRenta} />
            </div>
        </div>
    )
}
export default Catalogo