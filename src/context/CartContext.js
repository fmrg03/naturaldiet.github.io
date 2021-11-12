import { createContext, useState } from "react"

export const context = createContext()

const { Provider } = context

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (cantidad, producto) => {
        if (isInCart(producto) === true) {
            const arrayCart = [...cart]
            let inidice = arrayCart.findIndex(item => item.producto.id === producto.id)
            arrayCart[inidice].cantidad += cantidad
            setCart(arrayCart)
            console.log("arrayCart", arrayCart)
        } else {
            const arrayCart = [...cart, { cantidad, producto }]
            setCart(arrayCart)
            console.log("arrayCart", arrayCart)
        }
    }

    const isInCart = (productoIngresado) => {
        if (cart.find(item => item.producto.id === productoIngresado.id)) {
            return true
        } else {
            return false
        }
    }

    const removeItem = (producto) => {
        let arrayCart = [...cart]
        arrayCart = arrayCart.filter(item => item.producto.id !== producto.id)
        setCart(arrayCart)
        console.log("se removió el producto", producto)
        console.log("arrayCart", arrayCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const valoresContext = {
        cart: cart,
        addItem: addItem,
        removeItem: removeItem,
        clearCart: clearCart
    }

    return (
        <Provider value={valoresContext}>
            {children}
        </Provider>
    )
}


export default CartContext
