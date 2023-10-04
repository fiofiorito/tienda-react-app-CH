// hooks
import { useContext } from "react";
// components & styles
import CartSummary from "../../components/Cart/CartSummary/CartSummary";
import '../../components/Cart/CartSummary/CartSummary.css';
import CartContext from "../../context/CartContext/CartContext";
import EmptyCart from "../../components/Cart/EmptyCart/EmptyCart";

const CartSummaryPage = () => {
    const { clear, cart } = useContext(CartContext);
    const handleClear = () => {
        clear();
    }

    return <div>
        <div className="cart-summ-header">
            <h3 className="cart-summ-page-h3">Resumen de compra</h3>
            <button className="cart-summ-delete-btn" onClick={handleClear}>Borrar todo</button>
        </div>
        {cart.length === 0 && <EmptyCart />}
        {cart.length > 0 && <>
            <CartSummary />
            <div>
                <p>Total: U$D {
                    cart.reduce((total, el) => total + (el.item.price * el.quantity), 0)
                }</p>
            </div>
        </>}

    </div>
}

export default CartSummaryPage;