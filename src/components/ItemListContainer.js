import products from "../products.json"
import ItemList from "./ItemList"

const ItemListContainer = ({ saludo, stock, tituloProductos }) => {

    const promesa = new Promise((respuesta, fallido) => {

        setTimeout(() => {
            respuesta(products)
        }, 2000)
    })

    promesa.then((products) => { console.log(products) })

    promesa.catch(() => { console.log("Promesa rechazada") })


    const onAdd = (unidades, productoVenta) => {
        return (
            console.log("Se agregó " + unidades + " unidad/es del producto " + productoVenta + " al carrito")
        )
    }

    return (
        <div>
            <h1 className="saludo">{saludo}</h1>
            <p className="productosTitulo">{tituloProductos}</p>
            <div className="flexProductos">
                <ItemList productosx={products} initial={1} callback={onAdd}/>
            </div>
            {/*<ItemCount stock={stock} initial={1} callback={onAdd} />*/}
        </div>
    )
}

export default ItemListContainer