import { Container, Row, Col } from "react-bootstrap"
import BannerServices from "./BannerServices"

const Promotions = () => {
    return (
        <Container fluid>

            <Row className="filaPromos">
                <h1 className="productosTitulo">Promociones</h1>
                <Row>
                    <Col className="colBanner borderCol2">
                        <img src="/images/regalo.png" alt="promo1" />
                        <p className="tituloBanner">PROMO 1</p>
                        <p>Llevando de 10 Kg a 15 Kg de nuestros productos (variados), obtienes automaticamente un descuento del 10% (Acumulable con el descuento por pago en Efectivo).</p>
                    </Col>
                    <Col className="colBanner">
                        <img src="/images/regalo.png" alt="promo2" />
                        <p className="tituloBanner">PROMO 2</p>
                        <p>Llevando de 10 Kg o más de un mismo producto, ¡te regalamos 1 Kg extra y un cupón del 5% para tu proxima compra!</p>
                    </Col>
                    <Col className="colBanner borderCol">
                        <img src="/images/regalo.png" alt="promo3" />
                        <p className="tituloBanner">PROMO 3</p>
                        <p>Con la compra de 5 Kg de Maiz, te llevas 1 Litro de Aceite para tus Pochoclos.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="colBanner borderCol2">
                        <img src="/images/regalo.png" alt="promo4" />
                        <p className="tituloBanner">PROMO 4</p>
                        <p>Realizando tu compra Online de más de $10.000, te llevas un cupón de descuento del 15% para que uses en tu próxima compra en nuestras tiendas físicas.</p>
                    </Col>
                    <Col className="colBanner">
                        <img src="/images/regalo.png" alt="promo5" />
                        <p className="tituloBanner">PROMO 5</p>
                        <p>Con la compra de alguna de nuestras promos anteriores, te llevas una remera con nuestro logo Natual Diet.</p>
                    </Col>
                </Row>
            </Row>
            <Row className="filaBanner">
                <BannerServices />
            </Row>
        </Container>
    )
}

export default Promotions
