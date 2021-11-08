import { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"


const ItemDetail = ({ producto, initial }) => {

    const [stockfinal, setStockfinal] = useState(producto.stock - initial)

    const onAdd = (cantidad) => {
        console.log("se agrego: ", cantidad)
    }
    const sumarRestar = (stock) => {
        setStockfinal(stock)
        console.log("stock final: ", stock)
    }

    return (
        <Container fluid className="contenedorItemD centrar">
            <Row>
                <Col xs={12} xxl={12}>
                    <p className="nombreProducto">{producto.nombre}</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xxl={6}>
                    <Image src={producto.imagen} alt={producto.nombre} width="400x300" className="cardImagen" fluid />
                </Col>
                <Col xs={12} xxl={6} className="alignCenter">
                    <p><span className="boldFont">Precio: </span>${producto.precio}</p>
                    <ItemCount initial={initial} producto={producto} onAdd={onAdd} sumarRestar={sumarRestar} />
                    <p><span className="boldFont">Stock: </span>{stockfinal}</p>
                    <button className="irAlCarrito"><Link to="/cart">Ir al Carrito</Link></button>
                    <div>
                        <h4 className="boldFont">Detalles del Producto</h4>
                        {producto.descripcion}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail
