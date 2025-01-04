import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import BannerServices from "./BannerServices"
import Spinner from "react-bootstrap/Spinner"
import { useParams } from "react-router"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
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

    const ruta = "/categoria/" + datos.categoria

    let nombreCategoria = "Productos"
    
    switch (datos.categoria) {
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
                <Row className="indice">
                    <Col xxl={5} className="indice">
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li>/</li>
                            <li><Link to="/productos">Productos</Link></li>
                            <li>/</li>
                            <li><Link to={ruta}>{nombreCategoria}</Link></li>
                            <li>/</li>
                            <li><span>{datos.nombre}</span></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ItemDetail producto={datos} initial={1} />
                    </Col>
                </Row>
                <Row className="filaBanner">
                    <BannerServices />
                </Row>
            </Container >
        )
    }
}

export default ItemDetailContainer
