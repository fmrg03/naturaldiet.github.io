import Header from "./components/Header"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import { BrowserRouter, Route } from "react-router-dom"
import CustomProvider from "./context/CartContext"

const App = () => {
    return (
        <BrowserRouter>
            <CustomProvider>
                <Header />
                <Route path="/" exact component={ItemListContainer} />
                <Route path="/categoria/:id" component={ItemListContainer} />
                <Route path="/productos" component={ItemListContainer} />
                <Route path="/item/:id" component={ItemDetailContainer} />
                <Route path="/cart" component={Cart} />
                <Footer />
            </CustomProvider>
        </BrowserRouter>
    )
}

export default App