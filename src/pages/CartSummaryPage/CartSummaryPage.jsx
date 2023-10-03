// components & styles
import { useContext } from "react";
import CartSummary from "../../components/CartSummary/CartSummary";
import '../../components/CartSummary/CartSummary.css';
import CartContext from "../../context/CartContext/CartContext";

const CartSummaryPage = () => {
    const { clear } = useContext(CartContext);
    const handleClear = () => {
        clear();
    }
    return <div>
        <div className="cart-summ-header">
            <h3 className="cart-summ-page-h3">Resumen de compra</h3>
            <button className="cart-summ-delete-btn" onClick={handleClear}>Borrar todo</button>
        </div>
        <CartSummary />

    </div>
}

export default CartSummaryPage;