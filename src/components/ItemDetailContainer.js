import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import Spinner from "react-bootstrap/Spinner"

const ItemDetailContainer = () => {

    const [datos, setDatos] = useState([])

    const getItem = async () => {

        const data = await fetch("http://localhost:3001/venta/4051")
        const datosAPI = await data.json()
        setDatos(datosAPI)
    }

    useEffect(() => { setTimeout(() => { getItem() }, 2000) }, [])

    const onAdd = (unidades, productoVenta) => {
        return (
            console.log("Se agregó " + unidades + " unidad/es del producto " + productoVenta + " al carrito")
        )
    }
    if (datos.length === 0) {
        return (
            <>
                <h1 className="productosTitulo">Detalles</h1>
                <div className="cargando">Cargando... <Spinner animation="border" variant="success" /></div>
            </>
        )
    } else {
        return (
            <div>
                <h1 className="productosTitulo">Detalles</h1>
                <ItemDetail productos={datos} stock={datos.stock} initial={1} callback={onAdd} />
            </div>
        )
    }
}

export default ItemDetailContainer
