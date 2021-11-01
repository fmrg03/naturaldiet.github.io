import ItemList from "./ItemList"
import { useState, useEffect } from "react"

const ItemListContainer = ({ saludo, tituloProductos }) => {

    const [datos, setDatos] = useState([])

    const getItem = async () => {

        const data = await fetch("http://localhost:3001/venta")
        const datosAPI = await data.json()

        setDatos(datosAPI)
    }

    useEffect(() => { setTimeout(() => { getItem() }, 2000) }, [])


    return (
        <div>
            <h1 className="saludo">{saludo}</h1>
            <p className="productosTitulo">{tituloProductos}</p>
            <div className="flexProductos">
                <ItemList productos={datos} initial={1} />
            </div>
            {/*<ItemCount stock={stock} initial={1} callback={onAdd} />*/}
        </div>
    )
}

export default ItemListContainer