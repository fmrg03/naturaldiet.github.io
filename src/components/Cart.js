import { useContext } from "react"
import { context } from "../context/CartContext"
import { Container, Row, Col } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import Image from 'react-bootstrap/Image'

const Cart = () => {

    const { cart, removeItem, clearCart } = useContext(context)

    const { push } = useHistory()

    const redireccionar = () => {
        push("/productos")
    }

    let totalAPagar = 0
    cart.forEach(element => {
        totalAPagar += element.cantidad * element.producto.precio
    })

    if (cart.length === 0) {
        return (
            <Container fluid id="carritoVacio">
                <Row>
                    <Col className="alignCenter">
                        <h1 className="tituloCarritoVacio">Tu Carrito se encuentra Vacío</h1>
                        <h4 className="tituloCarritoVacio">Presiona el botón para ver los productos</h4>
                        <button className="buttonCarrito boldFont" onClick={redireccionar}>Productos</button>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container fluid id="layoutCarrito">
                <p className="tituloCarrito centrar">Carrito</p>
                {cart.map(item => (
                    <Row className="item">
                        <Col className="centrar">
                            <h1>{item.producto.nombre}</h1>
                            <Image src={item.producto.imagen} className="imagenCarrito" alt="item.producto.nombre" />
                        </Col>
                        <Col className="totalProducto centrar">
                            <h4><span className="boldFont">Total:</span> ${item.producto.precio * item.cantidad}</h4>
                            <h4>Cantidad: {item.cantidad}</h4>
                            <button className="buttonCarrito" onClick={() => removeItem(item.producto)}>Eliminar</button>
                        </Col>
                    </Row>
                ))}
                <Row className="divTotalFinal">
                    <Col className="centrar totalProducto">
                        <button className="buttonVaciarCarrito" onClick={() => clearCart()}>Vaciar Carrito</button>
                    </Col>
                    <Col className="derecha">
                        <p className="TotalFinal">Total a Pagar: <span className="boldFont">${totalAPagar}</span></p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Cart
