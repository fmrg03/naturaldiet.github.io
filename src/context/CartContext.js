import { createContext, useState } from "react"

export const context = createContext()

const { Provider } = context

const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (cantidad, producto) => {
        if (isInCart(producto) === true) {
            const arrayCart = [...cart]
            let indice = arrayCart.findIndex(item => item.producto.id === producto.id)
            arrayCart[indice].cantidad += cantidad
            setCart(arrayCart)
        } else {
            const arrayCart = [...cart, { cantidad, producto }]
            setCart(arrayCart)
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
    }

    const clearCart = () => {
        setCart([])
    }

    const [ordenF, setOrdenF] = useState()

    const addOrden = (orden) => {
        setOrdenF(orden)
    }

    const valoresContext = {
        cart: cart,
        addItem: addItem,
        removeItem: removeItem,
        clearCart: clearCart,
        addOrden: addOrden,
        ordenF: ordenF
    }

    return (
        <Provider value={valoresContext}>
            {children}
        </Provider>
    )
}


export default CustomProvider
