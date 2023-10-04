// hooks
import { useContext } from 'react';
// components
import CartContext from '../../../context/CartContext/CartContext';

const CartSummary = () => {
    const { cart, removeItem } = useContext(CartContext);

    return <div>
        {/* <p>No tenes nada en tu cart</p> */}
        <div className="cart-summ-grid-div">
            {
                cart.map(el => {
                    return <div className='cart-summ-items-div' key={el.item.id}>
                        <div className='cart-summ-items-div-child'>
                            <img className='cart-summ-items-img' src={el.item.image} />
                            <div className='cart-summ-items-div-child-txt'>
                                <h4 className='cart-summ-items-h4'>{el.item.title}</h4>
                                <p>Cantidad: {el.quantity}</p>
                                <p>Subtotal: U$D {el.item.price * el.quantity}</p>
                            </div>
                        </div>
                        <button className='cart-summ-delete-btn' onClick={() => { removeItem(el.item.id) }}>Borrar item</button>
                    </div>
                })
            }
        </div>

    </div>
}

export default CartSummary;