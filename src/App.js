import Header from "./components/Header"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

const App = () => {
    return (
        <>
            <Header />
            <ItemListContainer saludo="Hola, ¡Bienvenido!" tituloProductos="Productos" />
            <ItemDetailContainer />
            <Footer />
        </>
    )
}

export default App