// routing
import { Link } from "react-router-dom";
// components & styles
import "./EmptyCart.css";
import { BiSolidErrorCircle } from 'react-icons/bi';

const EmptyCart = () => {
    return <div className="empty-cart-div-parent">
        <div className="empty-cart-div">
            <div className="error-svg">
                <BiSolidErrorCircle />
            </div>
            <p>No tienes productos en el carrito</p>
            <button className="empty-cart-btn"><Link to="/">Agregar productos</Link></button>
        </div>
    </div>

}

export default EmptyCart;