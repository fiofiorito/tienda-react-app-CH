// hooks
import { useState } from "react";
// components & style
import { BsCart3 } from "react-icons/bs";
import './CartWidget.css';

function CartWidget() {
    const [itemsOnCart, setItemsOnCart] = useState(0);

    return <div className="cart-widget">
        < BsCart3 /> <span>0</span>
        {/* <p className="items-on-cart">{itemsOnCart}</p> */}
    </div>
}

export default CartWidget;