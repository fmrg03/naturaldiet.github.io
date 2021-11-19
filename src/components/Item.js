import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    const ruta = "/item/" + producto.id
    return (
        <Container fluid className="centrar contenedorCards borderBlack">
            <Link to={ruta}><Image src={producto.imagen} alt={producto.nombre} fluid /></Link>
            <p className="nombreProducto">{producto.nombre}</p>
            <p><span className="boldFont">Precio: </span>${producto.precio}</p>
        </Container >
    )
}

export default Item

