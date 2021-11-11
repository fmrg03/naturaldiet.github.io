import { Link } from "react-router-dom"
import { useContext } from "react"
import { context } from "../context/CartContext"

const CartWidget = () => {

    const { cart } = useContext(context)
    console.log("esto es resultadoo", cart)

    return (
        <Link to="/cart">
            <span className="material-icons carrito">shopping_cart</span>
        </Link>
    )
}

export default CartWidget
