import Header from "./components/Header"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import { BrowserRouter, Route } from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={ItemListContainer} />
            <Route path="/categoria/:id" component={ItemListContainer} />
            <Route path="/productos" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
            <Footer />
        </BrowserRouter>
    )
}

export default App