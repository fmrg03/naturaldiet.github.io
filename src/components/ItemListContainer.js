import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

const ItemListContainer = () => {

    let nombreCategoria = null
    let { id } = useParams()

    if (id !== undefined) {
        switch (id) {
            case "frutosSecos":
                nombreCategoria = "Frutos Secos"
                break
            case "cereales":
                nombreCategoria = "Cereales"
                break
            case "legumbres":
                nombreCategoria = "Legumbres"
                break
            default:
                break
        }
        id = "/?q=" + id

    } else {
        id = "/"
        nombreCategoria = "Productos"
    }

    const [datos, setDatos] = useState([])

    useEffect(() => {
        if (id) {
            const URL = "http://localhost:3001/venta" + id
            const getItem = async () => {
                const data = await fetch(URL)
                const datosAPI = await data.json()
                setDatos(datosAPI)
            }
            getItem()
        }
    }, [id])

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="saludo">Hola, ¡Bienvenido!</h1>
                    <p className="productosTitulo">{nombreCategoria}</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xxl={12}>
                    <div className="flexProductos">
                        <ItemList productos={datos} initial={1} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemListContainer