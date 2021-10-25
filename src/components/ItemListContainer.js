import ItemCount from "./ItemCount"

const ItemListContainer = ({ saludo, stock }) => {

    const onAdd = (unidades) => {
        return (
            console.log("Se agregó "+ unidades +" unidad/es del producto al carrito")
        )
    }
    return (
        <div>
            <p className="saludo">{saludo}</p>
            <ItemCount stock={stock} initial={1} callback={onAdd} />
        </div>
    )
}

export default ItemListContainer
