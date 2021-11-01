import Item from "./Item"
import Spinner from 'react-bootstrap/Spinner'

const ItemList = ({ productos }) => {

    if (productos.length === 0) {
        return <div className="cargando">Cargando... <Spinner animation="border" variant="success" /></div>
    }
    else {
        return (
            <>
                {productos.map((e, i) => {
                    return (
                        <>
                            <Item id={e.id} nombre={e.nombre} precio={e.precio} imagen={e.imagen} />
                        </>
                    );
                })}
            </>
        );
    }
}

export default ItemList