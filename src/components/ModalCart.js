import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const ModalCart = ({ nombre, unidades, imagen, precio, add }) => {

    const { push } = useHistory()
    const redireccionar = () => {
        push("/cart")
    }

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => {
        setShow(true)
        setTimeout(() => setShow(false), 2500)
        add()
    }


    return (
        <>
            <button className="material-icons botonAddCart" variant="primary" onClick={handleShow}>
                <span className="agregarAlCarrito">Agregar al Carrito </span> add_shopping_cart
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Producto Agregado al Carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body className="alignCenter">
                    <p className="textoModal">Se agregó {unidades} unidad/es del producto <span className="boldFont">{nombre}</span> al carrito</p>
                    <img src={imagen} alt={nombre} width="150x150" className="cardImagen" />
                    <p className="textoModal"><span className="boldFont">Total</span> = ${precio * unidades}</p>
                    <button className="buttonCarrito" onClick={redireccionar}>Ir al Carrito</button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalCart
