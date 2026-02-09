import { useState } from 'react'

function Boton({ accion }) {
    const [contador, setContador] = useState(0);

    const manejarClick = () => {
        setContador(contador + 1); 
        accion(); 
    }

    return (
        <button onClick={manejarClick}>
            Rentar Película {contador > 0 ? `(${contador})` : ''}
        </button>
    )
}
export default Boton
