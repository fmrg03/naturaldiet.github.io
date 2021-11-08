import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import Spinner from "react-bootstrap/Spinner"
import { useParams } from "react-router"
import { Container, Row, Col } from "react-bootstrap"

const ItemDetailContainer = () => {

    let { id } = useParams()

    const [datos, setDatos] = useState([])

    useEffect(() => {
        let URL = "http://localhost:3001/venta/" + id
        const getItem = async () => {
            const data = await fetch(URL)
            const datosAPI = await data.json()
            setDatos(datosAPI)
        }
        getItem()
    }, [id])

    if (datos.length === 0) {
        return (
            <>
                <h1 className="productosTitulo">Detalles</h1>
                <div className="cargando">Cargando... <Spinner animation="border" variant="success" /></div>
            </>
        )
    } else {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className="productosTitulo">Detalles</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ItemDetail id={datos.id} producto={datos} initial={1} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ItemDetailContainer
