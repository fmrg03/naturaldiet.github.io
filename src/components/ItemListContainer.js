import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { db } from "../firebase/firebase"

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
                nombreCategoria = "Productos"
                break
        }
    }

    const [datos, setDatos] = useState([])

    useEffect(() => {
        let query = db.collection("productos")
        if (id) {
            query = query.where("categoria", "==", id)
        }
        const promesa = query.get()
        promesa
            .then((productos) => {
                const datos = productos.docs.map(doc =>
                    ({ ...doc.data(), id: doc.id }))
                setDatos(datos)
            })
            .catch((error) => {
                console.log(error)
            })

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