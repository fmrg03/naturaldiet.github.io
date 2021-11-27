import { Container, Row, Col } from "react-bootstrap"
import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { context } from "../context/CartContext"
import Image from 'react-bootstrap/Image'
import { db } from "../firebase/firebase"

const Form = () => {

    const { cart, clearCart, addOrden } = useContext(context)
    const { push } = useHistory()

    let totalAPagar = 0
    let fechaCompra = new Date().toLocaleDateString()

    const [datos, setDatos] = useState()
    const onChange = e => {
        const { name, value } = e.target;
        setDatos({
            ...datos,
            [name]: value,
        });
    }
    const finalizarCompra = (e) => {
        e.preventDefault()
        if (datos.nombre && datos.telefono && datos.email !== undefined) {
            const orden = { buyer: datos, productos: cart, totalAPagar, fecha: fechaCompra }
            const collection = db.collection("ordenes")
            const query = collection.add(orden)
            query
                .then(resultado => {
                    addOrden(resultado.id)
                    push("/compra")
                    clearCart()
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    return (
        <Container fluid>
            <Row className="formJustify">
                <Col xxl={3} id="Form">
                    <form>
                        <h4 className="centrar boldFont">Datos de Contacto</h4>
                        <label className="boldFont" htmlFor="nombre">Nombre y Apellido</label>
                        <input type="text" name="nombre" id="nombre" required onChange={onChange} />
                        <label className="boldFont" htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required onChange={onChange} />
                        <label className="boldFont" htmlFor="telefono">Teléfono</label>
                        <input type="number" name="telefono" id="telefono" required onChange={onChange} />
                        <label className="boldFont" htmlFor="pago">Método de Pago</label>
                        <select id="pago" name="pago" required onChange={onChange}>
                            <option value=""></option>
                            <option value="Efectivo">Efectivo</option>
                            <option value="MercadoPago">MercadoPago</option>
                        </select>
                        <button className="botonFinal" type="submit" onClick={finalizarCompra}>Finalizar Compra</button>
                    </form>

                </Col>
                <Col xxl={4} id="carritoForm">
                    <h4 className="centrar boldFont">Carrito</h4>
                    {cart.map(item => {
                        totalAPagar += item.cantidad * item.producto.precio
                        return (
                            <Row className="item" key={item.producto.id}>
                                <Col className="centrar">
                                    <h6>{item.producto.nombre}</h6>
                                    <Image src={item.producto.imagen} className="imagenCarritoForm" alt={item.producto.nombre} />
                                </Col>
                                <Col className="totalProducto centrar">
                                    <h6><span className="boldFont">Total: </span> ${item.producto.precio * item.cantidad}</h6>
                                    <h6>Cantidad: {item.cantidad}</h6>
                                </Col>
                            </Row>)
                    })}
                    <p className="derecha">Total a Pagar: <span className="boldFont">${totalAPagar}</span></p>
                </Col>
            </Row>
        </Container>
    )
}

export default Form
