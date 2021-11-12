import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <nav>
                <ul className="menu">
                    <li><NavLink to="/" exact>Inicio</NavLink></li>
                    <li><NavLink to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink to="/productos">Productos <span className="material-icons">south_east</span></NavLink>
                        <ul className="menuDesplegable">
                            <li><NavLink to="/categoria/frutosSecos">Frutos Secos</NavLink></li>
                            <li><NavLink to="/categoria/cereales">Cereales</NavLink></li>
                            <li><NavLink to="/categoria/legumbres">Legumbres</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/promo">Promociones</NavLink></li>
                    <li><NavLink to="/contacto">Contacto</NavLink></li>
                </ul>
            </nav>
            <CartWidget />
        </>
    )
}

export default NavBar

