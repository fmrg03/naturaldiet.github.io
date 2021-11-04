import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    let nombreCategoria = null
    let { id } = useParams()

    if (id !== undefined) {
        switch (id) {
            case "frutosSecos":
                nombreCategoria = "Frutos Secos"
                break
            case "cereales":
                nombreCategoria = "Cereales"
                break
            case "legumbres":
                nombreCategoria = "Legumbres"
                break
            default:
                break
        }
        id = "/?q=" + id

    } else {
        id = "/"
        nombreCategoria = "Productos"
    }

    const URL = "http://localhost:3001/venta" + id

    const [datos, setDatos] = useState([])

    const getItem = async () => {
        const data = await fetch(URL)
        const datosAPI = await data.json()
        setDatos(datosAPI)
    }

    useEffect(() => {
        if (id) {
            getItem()
        }
    }, [id])

    return (
        <div>
            <h1 className="saludo">Hola, ¡Bienvenido!</h1>
            <p className="productosTitulo">{nombreCategoria}</p>
            <div className="flexProductos">
                <ItemList key={id} productos={datos} initial={1} />
            </div>
        </div>
    )
}

export default ItemListContainer