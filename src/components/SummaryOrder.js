import { useContext } from "react"
import { context } from "../context/CartContext"
import Spinner from "react-bootstrap/Spinner"
import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import { useHistory } from "react-router-dom"
import { db } from "../firebase/firebase"


const SummaryOrder = () => {

    const { ordenF } = useContext(context)

    const { push } = useHistory()

    const irAInicio = () => {
        push("/")
    }

    let totalAPagar = 0

    const [datos, setDatos] = useState({ id: ordenF })
    useEffect(() => {
        const promesa = db.collection("ordenes").doc(ordenF).get()
        promesa
            .then((productos) => {
                const datosCompletos = productos.data()
                setDatos({ ...datos, datosCompletos })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [ordenF])

    if (Object.keys(datos).length === 1) {
        return (
            <div className="cargando">Cargando... <Spinner animation="border" variant="success" /></div>
        )
    } else {
        return (
            <Container fluid id="layoutResumen">
                <p id="idCompra"><span className="boldFont">Compra #</span>{datos.id}</p>
                <h1 className="centrar boldFont">Resumen de Compra</h1>
                <Row className="item">
                    <Col xxl={5}>
                        <h3 className="centrar marginBottom">Datos del Comprador</h3>
                        <p><span className="boldFont">- Nombre y Apellido:</span> {datos.datosCompletos.buyer.nombre}</p>
                        <p><span className="boldFont">- Email:</span> {datos.datosCompletos.buyer.email}</p>
                        <p><span className="boldFont">- Teléfono:</span> {datos.datosCompletos.buyer.telefono}</p>
                        <p><span className="boldFont">- Método de Págo:</span> {datos.datosCompletos.buyer.pago}</p>
                    </Col>
                    <Col xxl={7} className="borderLeft">
                        <h3 className="centrar marginBottom">Productos</h3>
                        {datos.datosCompletos.productos.map(item => {
                            totalAPagar += item.cantidad * item.producto.precio
                            return (
                                <Row key={item.producto.id}>
                                    <Col className="centrar paddingLeft">
                                        <h6>{item.producto.nombre}</h6>
                                        <Image src={item.producto.imagen} className="imagenCarritoForm" alt={item.producto.nombre} />
                                    </Col>
                                    <Col className="centrar paddingRight">
                                        <h6><span className="boldFont">Total: </span> ${item.producto.precio * item.cantidad}</h6>
                                        <h6>Cantidad: {item.cantidad}</h6>
                                    </Col>
                                </Row>
                            )
                        })}

                    </Col>
                </Row>
                <Row className="divTotalFinal">
                    <Col className="derecha">
                        <h4 className="totalResumen">Total: <span className="boldFont">${totalAPagar}</span></h4>
                    </Col>
                </Row>
                <Row className="centrar">
                    <Col xxl={4}>
                        <button className="buttonVolverInicio boldFont" onClick={irAInicio}>Volver a Inicio</button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SummaryOrder
