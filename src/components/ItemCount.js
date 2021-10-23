import { useState } from "react"



const ItemCount = ({ stock }) => {

    const [contador, setContador] = useState(0)

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const restarContador = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    return (
        <div className="centrar">
            <img src="monitor.jpg" alt="Monitor" width="300x300" className="imagenMonitor" />
            <p><span className="stock">Cantidad: </span>{contador}</p>
            <button className="material-icons" onClick={restarContador}>remove</button>
            <button className="material-icons" onClick={sumarContador}>add</button>
            <p><span className="stock">Stock: </span>{stock}</p>
        </div>
    )
}

export default ItemCount