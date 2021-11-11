import { createContext, useState } from "react"

export const context = createContext()

const { Provider } = context

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (product, cantidad) => {
        console.log("soy el contexto", product, cantidad)
    }

    const valoresContext = {
        cart: cart,
        addToCart: addToCart
    }

    return (
        <Provider value={valoresContext}>
            {children}
        </Provider>
    )
}


export default CartContext
