import Item from "./Item"
import Spinner from 'react-bootstrap/Spinner'

const ItemList = ({ productos }) => {

    if (productos.length === 0) {
        return <div className="cargando">Cargando... <Spinner animation="border" variant="success" /></div>
    }
    else {
        return (
            <>
                {productos.map(producto => {
                    return (
                        <>
                            <Item key={producto.id} producto={producto} />
                        </>
                    )
                })}
            </>
        )
    }
}

export default ItemList