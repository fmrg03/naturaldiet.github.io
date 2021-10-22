import NavBar from "./NavBar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col>
                        <p>Mapa de Sitio</p>
                        <NavBar />
                    </Col>
                    <Col>
                        <p>Contacto</p>
                    </Col>
                    <Col>
                        <Row>
                            <p>Métodos de Pago</p>
                        </Row>
                        <Row>
                            <p>Formas de Envío</p>
                        </Row>
                    </Col>
                    <Col>
                        <p>RRSS</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer