import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav>
            <a href="#">Nosotros</a>
            <a href="#">Productos</a>
            <a href="#">Contacto</a>
            <CartWidget />
        </nav>
    )
};

export default NavBar;

