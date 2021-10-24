import ItemCount from "./ItemCount"

const ItemListContainer = ({ saludo, stock }) => {

    const onAdd = () => {
        return (
            console.log("Se agregó el producto al carrito")
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
