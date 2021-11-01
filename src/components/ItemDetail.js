import { useState } from "react"
import ModalCart from './ModalCart'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const ItemDetail = ({ productos, initial, stock }) => {

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
            <Container fluid className="contenedorItemD">
                <Row>
                    <Col xs={12} xxl={6}>
                        <img key={productos.id} src={productos.imagen} alt={productos.nombre} width="400x300" className="cardImagen" />
                    </Col>
                    <Col xs={12} xxl={6} className="alignCenter">
                        <p className="nombreProducto">{productos.nombre}</p>
                        <p><span className="boldFont">Precio: </span>${productos.precio}</p>
                        <div className="divCantidad">
                            <button className="material-icons" onClick={restarContador}>remove</button>
                            <p className="cantidadProducto alignCenter"><span className="boldFont">Cantidad: </span>{contador}</p>
                            <button className="material-icons" onClick={sumarContador}>add</button>
                        </div>
                        <ModalCart nombre={productos.nombre} unidades={contador} imagen={productos.imagen} precio={productos.precio} />
                        <p><span className="boldFont">Stock: </span>{stockfinal - initial}</p>
                        <div>
                            <h4 className="boldFont">Detalles del Producto</h4>
                            {productos.descripcion}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default ItemDetail
