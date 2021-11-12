import { Link } from "react-router-dom"
import { useContext } from "react"
import { context } from "../context/CartContext"

const CartWidget = () => {

    const { cart } = useContext(context)

    let total = 0
    cart.forEach(element => {
        total += element.cantidad
    })

    return (
        <div className="divCarrito">
            <Link to="/cart" className="linkCarrito">
                <span className="material-icons carrito">shopping_cart</span>
                <p>{total}</p>
            </Link>

        </div>
    )
}

export default CartWidget
