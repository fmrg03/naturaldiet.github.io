import NavBar from "./NavBar"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img className="logoHeader" src="/images/logoNatural.png" alt="Logo" />
            </Link>
            <NavBar />
        </header>
    )
}

export default Header