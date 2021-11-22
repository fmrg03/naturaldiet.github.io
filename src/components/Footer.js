import NavBar from "./NavBar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col className="mapaSitio">
                        <p className="titulosFooter">Mapa de Sitio</p>
                        <NavBar />
                    </Col>
                    <Col>
                        <p className="titulosFooter contactoTitulo">Contacto</p>
                        <Container fluid className="colContacto">
                            <div>
                                <img src="./images/phone.png" width="30" height="30"
                                    alt="phoneIcon" />
                                <a href="wa.link/n91isy" target="_blank" rel="noreferrer"> +54 9 11 2386 5247 </a>
                            </div>
                            <div>
                                <img src="./images/email.png" width="30" height="30" alt="emailIcon" />
                                <a href="mailto:naturaldiet@gmail.com">naturaldiet@gmail.com</a>
                            </div>
                            <div>
                                <img src="./images/pin.png" width="30x30" alt="locationIcon" />
                                <a href="https://www.google.com/maps/place/San+Isidro,+Provincia+de+Buenos+Aires/@-34.4720519,-58.5636093,13z/data=!3m1!4b1!4m5!3m4!1s0x95bcb03cd891437f:0xab3b49e671350275!8m2!3d-34.470829!4d-58.5286102"
                                    target="_blank" rel="noreferrer"> San
                                    Isidro, Buenos
                                    Aires,
                                    Argentina</a>
                            </div>
                        </Container>
                    </Col>
                    <Col>
                        <Row>
                            <p className="titulosFooter">Métodos de Pago</p>
                            <div className="flexFooter">
                                <img src="./images/visa.png" width="60x60" alt="visa" />
                                <img src="./images//mastercard.png" width="60x60" alt="mastercard" />
                                <img src="./images/mercadopago.png" width="100x100" alt="mercadopago" />
                                <img src="./images/dinero.png" alt="efectivo" />
                            </div>
                        </Row>
                        <Row className="espacioFilas">
                            <p className="titulosFooter">Formas de Envío</p>
                            <div className="flexFooter">
                                <img src="./images/correoargentino.jpg" width="80x80" alt="correoargentino" />
                                <img src="./images//oca.png" width="70x70" alt="oca" />
                                <img src="./images/andreani.png" width="120x120" alt="andreani" />
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <p className="titulosFooter">Redes Sociales</p>
                            <div className="flexFooter">
                                <img src="./images/twitter_logo.png" width="45x45" alt="twitterIcon" />
                                <img src="./images//instagram_logo.png" width="45x45" alt="instagramIcon" />
                                <img src="./images/facebook_logo.png" width="40" height="45" alt="facebookIcon" />
                            </div>
                        </Row>
                        <Row className="espacioFilas">
                            <p className="boldFont">Copyrigth &copy; Natural Diet - 2021</p>
                            <img src="./images/logoNatural.png" className="logoFooter" alt="logoNatural" />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer