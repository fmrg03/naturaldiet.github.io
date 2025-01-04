import { Container, Row, Col } from "react-bootstrap"

const BannerServices = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="colBanner borderCol2">
                    <img src="/images/transporte.png" alt="envio" />
                    <p className="tituloBanner">ENVÍOS A CABA / Z. NORTE</p>
                    <p>Recibí tu producto entre 24 a 72 hs luego de tu compra</p>
                </Col>
                <Col className="colBanner">
                    <img src="/images/tarjeta.png" alt="tarjeta" />
                    <p className="tituloBanner">HASTA 12 CUOTAS</p>
                    <p>¡Con todas las tarjetas! Y hasta 6 cuotas sin interés en tarjetas seleccionadas</p>
                </Col>
                <Col className="colBanner borderCol">
                    <img src="/images/peso.png" alt="efectivo" />
                    <p className="tituloBanner">DESCUENTO EN EFECTIVO</p>
                    <p>Pagá en Efectivo al momento de la entrega y obtené un 10% de descuento</p>
                </Col>
            </Row>
        </Container>
    )
}

export default BannerServices
