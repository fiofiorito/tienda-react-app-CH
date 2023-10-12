// hooks
import { useContext } from "react";
// components & style
import { BsCart3 } from "react-icons/bs";
import './CartWidget.css';
import CartContext from "../../../context/CartContext/CartContext";

function CartWidget() {
    const { cart } = useContext(CartContext);

    const cartLength = cart.length;
    const checkLength = () => {
        if (cartLength > 0) {
            return <span>{cartLength}</span>
        } else {
            return <span>0</span>
        }
    }
    return <div className="cart-widget">
        < BsCart3 /> <span>{
            checkLength()
        }</span>
    </div>
}

export default CartWidget;