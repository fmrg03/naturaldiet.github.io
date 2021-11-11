import { useState } from "react"
import ModalCart from './ModalCart'
import { Container, Row } from "react-bootstrap"

const ItemCount = ({ initial, producto, onAdd, sumarRestar }) => {

    const [contador, setContador] = useState(initial)

    const [stockfinal, setStockfinal] = useState(producto.stock - initial)

    const sumarContador = () => {
        if (contador < producto.stock) {
            setContador(contador + 1)
        }
        if (stockfinal > 1) {
            setStockfinal(stockfinal - 1)
        }
        sumarRestar(stockfinal - 1)
    }

    const restarContador = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
        if (stockfinal < producto.stock - 1) {
            setStockfinal(stockfinal + 1)
        }
        sumarRestar(stockfinal)
    }

    const buttonOnAdd = () => {
        onAdd(contador)
    }


    return (
        <Container fluid className="centrar">
            <Row>
                <div className="divCantidad">
                    <button className="material-icons" onClick={restarContador}>remove</button>
                    <p className="cantidadProducto alignCenter"><span className="boldFont">Cantidad: </span>{contador}</p>
                    <button className="material-icons" onClick={sumarContador}>add</button>
                </div>
            </Row>
            <ModalCart nombre={producto.nombre} unidades={contador} imagen={producto.imagen} precio={producto.precio} add={buttonOnAdd} />
        </Container>
    )
}

export default ItemCount