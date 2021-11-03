import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import Spinner from "react-bootstrap/Spinner"
import { useParams } from "react-router"

const ItemDetailContainer = () => {

    let { id } = useParams()

    const [datos, setDatos] = useState([])

    let URL = "http://localhost:3001/venta/" + id

    const getItem = async () => {

        const data = await fetch(URL)
        const datosAPI = await data.json()
        setDatos(datosAPI)
    }

    useEffect(() => {
        getItem()
    }, [datos])

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
                <ItemDetail productos={datos} stock={datos.stock} initial={1} />
            </div>
        )
    }
}

export default ItemDetailContainer
