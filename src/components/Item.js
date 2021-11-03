import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, imagen }) => {
    const ruta = "/item/" + id
    return (
        <Container fluid className="centrar contenedorCards borderBlack">
            <Link to={ruta}><Image key={id} src={imagen} alt={nombre} fluid /></Link>
            <p className="nombreProducto">{nombre}</p>
            <p><span className="boldFont">Precio: </span>${precio}</p>
        </Container >
    )
}

export default Item

