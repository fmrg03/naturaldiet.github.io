import { useState } from "react"
import ModalCart from './ModalCart'


const ItemCount = ({ stock, initial, productos }) => {

    const [contador, setContador] = useState(initial)

    const [stockfinal, setStockfinal] = useState(stock)

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
        if (stockfinal > 1) {
            setStockfinal(stockfinal - 1)
        }
    }
    const restarContador = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
        if (stockfinal < stock) {
            setStockfinal(stockfinal + 1)
        }
    }

    return (
        <div className="centrar">
            <div className="divCantidad">
                <button className="material-icons" onClick={restarContador}>remove</button>
                <p className="cantidadProducto alignCenter"><span className="boldFont">Cantidad: </span>{contador}</p>
                <button className="material-icons" onClick={sumarContador}>add</button>
            </div>
            <ModalCart nombre={productos.nombre} unidades={contador} imagen={productos.imagen} precio={productos.precio} />
            <p><span className="boldFont">Stock: </span>{stockfinal - initial}</p>
        </div>
    )
}

export default ItemCount