import Header from "./components/Header"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import { BrowserRouter, Route } from "react-router-dom"
import CustomProvider from "./context/CartContext"
import Form from "./components/Form"
import SummaryOrder from "./components/SummaryOrder"
import Promotions from "./components/Promotions"

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
                <Route path="/checkout" component={Form} />
                <Route path="/compra" component={SummaryOrder} />
                <Route path="/promo" component={Promotions} />
                <Route path="/contacto" component={Contact} />
                <Footer />
            </CustomProvider>
        </BrowserRouter>
    )
}

export default App