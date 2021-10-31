import ItemList from "./ItemList"
import { useState } from "react"

const ItemListContainer = ({ saludo, tituloProductos }) => {

    const [datos, setDatos] = useState([])

    const getItem = async () => {

        const data = await fetch("http://localhost:3001/venta")
        const datosAPI = await data.json()
        setTimeout(() => { setDatos(datosAPI) }, 2000)
    }

    getItem()

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