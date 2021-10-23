import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "react-bootstrap/Container"
import ItemListContainer from "./components/ItemListContainer"
import { useState } from "react"

const App = () => {
    return (
        <>
            <Header />
            <ItemListContainer saludo="Hola, ¡Bienvenido!" stock={5} />
            <Footer />
        </>
    )
}

export default App