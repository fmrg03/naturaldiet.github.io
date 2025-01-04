import { Container, Col } from "react-bootstrap"

const Contact = () => {
    return (
        <Container>
            <Col xxl={4} id="containerContacto">
                <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/xyylrjdo" method="post">
                    <fieldset id="fs-frm-inputs">
                        <h2 className="centrar">Contacto</h2>
                        <label htmlFor="full-name">Nombre y Apellido</label>
                        <input type="text" name="name" id="full-name" placeholder="Nombre y Apellido" required=" " />
                        <label htmlFor="email-address">Email</label>
                        <input type="email" name="_replyto" id="email-address" placeholder="example@email.com" required=" " />
                        <label htmlFor="telephone">Teléfono</label>
                        <input type="number" name="telephone" id="telephone" placeholder="11 1234-5678" required=" " />
                        <label htmlFor="message">Mensaje</label>
                        <textarea rows="5" name="message" id="message" placeholder="Escriba lo que desee consultar o solicitar" required=" "></textarea>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
                    </fieldset>
                    <input type="submit" value="Enviar" />
                </form>
            </Col>
        </Container>
    )
}

export default Contact
