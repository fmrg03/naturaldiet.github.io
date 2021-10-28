import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const ModalCart = ({ nombre, unidades, imagen, precio }) => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => {
        setShow(true)
        setTimeout(() => setShow(false), 2500)
    }


    return (
        <>
            <button className="material-icons botonAddCart" variant="primary" onClick={handleShow}>
                add_shopping_cart
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Producto Agregado al Carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="textoModal">Se agregó {unidades} unidad/es del producto <span className="boldFont">{nombre}</span> al carrito</p>
                    <img src={imagen} alt={nombre} width="150x150" className="cardImagen" />
                    <p className="textoModal"><span className="boldFont">Total</span> = ${precio * unidades}</p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalCart
