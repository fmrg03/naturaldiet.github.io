import Accordion from 'react-bootstrap/Accordion'
import { useState } from "react"
import ModalCart from './ModalCart'

const Item = ({ id, nombre, precio, imagen, stock, descripcion, initial, callback }) => {

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
        <div className="centrar margin">
            <img key={id} src={imagen} alt={nombre} width="300x300" className="cardImagen" />
            <p key={id} className="nombreProducto">{nombre}</p>
            <p><span className="boldFont">Cantidad: </span>{contador}</p>
            <p key={id}><span className="boldFont">Precio: </span>${precio}</p>
            <button className="material-icons" onClick={restarContador}>remove</button>
            <button className="material-icons" onClick={sumarContador}>add</button>
            <ModalCart nombre={nombre} unidades={contador} imagen={imagen} precio={precio} />
            <p key={id}><span className="boldFont">Stock: </span>{stockfinal - initial}</p>
            <Accordion className="acordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><span className="boldFont">Detalles del Producto</span></Accordion.Header>
                    <Accordion.Body key={id}>
                        {descripcion}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Item

