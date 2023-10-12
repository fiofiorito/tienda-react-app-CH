// routing
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage/HomePage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import ItemListContainer from "./ItemList/ItemListContainer";
import ItemDetailContainer from "./ItemDetails/ItemDetailContainer";
import SupportPage from "../pages/SupportPage/SupportPage";
import CartSummaryPage from "../pages/CartSummaryPage/CartSummaryPage";
import OrderSummary from "../pages/OrderSummary/OrderSummary";

const Routing = () => {
    return <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/soporte' element={<SupportPage />} />
        <Route path='/cart' element={<CartSummaryPage />} />
        <Route path="/ordersummary/:id" element={<OrderSummary />} />
    </Routes>
}

export default Routing;