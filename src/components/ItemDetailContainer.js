import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import Spinner from "react-bootstrap/Spinner"
import { useParams } from "react-router"
import { Container, Row, Col } from "react-bootstrap"
import { db } from "../firebase/firebase"

const ItemDetailContainer = () => {

    let { id } = useParams()

    const [datos, setDatos] = useState([])

    useEffect(() => {
        const promesa = db.collection("productos").doc(id).get()

        promesa
            .then((productos) => {
                const datos = productos.data()
                setDatos({ ...datos, id: productos.id })
            })
            .catch((error) => {
                console.log(error)
            })
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
