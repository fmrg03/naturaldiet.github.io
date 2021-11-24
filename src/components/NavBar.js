import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from "react-bootstrap"


const NavBar = () => {
    return (
        <>
            <Navbar id="navFooter" collapseOnSelect expand="lg" variant="light">
                <Container className="menu">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto menu">
                            <NavLink to="/" exact>Inicio</NavLink>
                            <NavLink to="/productos" className="desplegable">Productos <span className="span material-icons">south_east</span>
                                <ul className="menuDesplegable">
                                    <li><NavLink to="/categoria/frutosSecos">Frutos Secos</NavLink></li>
                                    <li><NavLink to="/categoria/cereales">Cereales</NavLink></li>
                                    <li><NavLink to="/categoria/legumbres">Legumbres</NavLink></li>
                                </ul></NavLink>
                            <NavLink to="/promo">Promociones</NavLink>
                            <NavLink to="/contacto">Contacto</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <CartWidget />
        </>
    )
}

export default NavBar

