import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <nav>
                <a href="/home">Inicio</a>
                <a href="/nosotros">Nosotros</a>
                <a href="/productos">Productos</a>
                <a href="/promo">Promociones</a>
                <a href="/contacto">Contacto</a>
            </nav>
            <CartWidget />
        </>
    )
}

export default NavBar

