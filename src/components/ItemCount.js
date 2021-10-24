import { useState } from "react"


const ItemCount = ({ stock, initial, callback }) => {



    const [contador, setContador] = useState(initial)

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
    const [stockfinal, setStockfinal] = useState(stock)

    return (
        <div className="centrar">
            <img src="/images/monitor.jpg" alt="Monitor" width="300x300" className="imagenMonitor" />
            <p><span className="stock">Cantidad: </span>{contador}</p>
            <button className="material-icons" onClick={restarContador}>remove</button>
            <button className="material-icons" onClick={sumarContador}>add</button>
            <button className="material-icons botonAddCart" onClick={callback}>add_shopping_cart</button>
            <p><span className="stock">Stock: </span>{stockfinal - initial}</p>
        </div>
    )
}

export default ItemCount