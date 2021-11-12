import { useContext } from "react"
import { context } from "../context/CartContext"

const Cart = () => {

    const { cart, addItem, removeItem, clearCart } = useContext(context)
    console.log(cart)
    console.log(addItem)
    console.log(removeItem())
    console.log(clearCart)

    return (
        <div>
            
        </div>
    )
}

export default Cart
