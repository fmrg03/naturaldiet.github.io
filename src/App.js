import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "react-bootstrap/Container"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {
    return (
        <>
            <Header />
            <ItemListContainer saludo="Hola, ¡Bienvenido!"/>
            <Footer/>
        </>
    )
}

export default App