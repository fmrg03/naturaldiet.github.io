import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Nosotros</a>
                <a href="#">Productos</a>
                <a href="#">Promociones</a>
                <a href="#">Contacto</a>
            </nav>
            <CartWidget />
        </>
    )
}

export default NavBar

