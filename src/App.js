import Header from "./components/Header"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {
    return (
        <>
            <Header />
            <ItemListContainer saludo="Hola, ¡Bienvenido!" tituloProductos="Productos" />
            <Footer />
        </>
    )
}

export default App