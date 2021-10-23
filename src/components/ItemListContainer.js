import ItemCount from "./ItemCount"

const ItemListContainer = ({ saludo, stock }) => {
    return (
        <div>
            <p className="saludo">{saludo}</p>
            <ItemCount stock={stock}/>
        </div>
    )
}

export default ItemListContainer
