import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

const Item = ({ id, nombre, precio, imagen }) => {

    return (
        <Container fluid className="centrar contenedorCards borderBlack">
            <Image key={id} src={imagen} alt={nombre} fluid />
            <p className="nombreProducto">{nombre}</p>
            <p><span className="boldFont">Precio: </span>${precio}</p>
        </Container>
    )
}

export default Item

