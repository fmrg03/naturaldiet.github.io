import { useState } from "react"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [datos, setDatos] = useState([])

    const getItem = async () => {

        const data = await fetch("http://localhost:3001/venta")
        const datosAPI = await data.json()
        setTimeout(() => { setDatos(datosAPI) }, 2000)
    }

    getItem()

    const onAdd = (unidades, productoVenta) => {
        return (
            console.log("Se agregó " + unidades + " unidad/es del producto " + productoVenta + " al carrito")
        )
    }

    return (
        <div>
            <h1>Detalles</h1>
            <ItemDetail productos={datos} initial={1} callback={onAdd} />
        </div>
    )
}

export default ItemDetailContainer
