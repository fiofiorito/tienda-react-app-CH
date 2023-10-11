// hooks
import { useContext, useEffect, useState } from "react";
// components & styles
import CartSummary from "../../components/Cart/CartSummary/CartSummary";
import '../../components/Cart/CartSummary/CartSummary.css';
import CartContext from "../../context/CartContext/CartContext";
import EmptyCart from "../../components/Cart/EmptyCart/EmptyCart";



// firebase
import { db } from '../../hooks/useDatabase'
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import Error from '../../components/Error/Error';



const CartSummaryPage = () => {
    const { clear, cart, totalPrice } = useContext(CartContext);
    const [finalPrice, setFinalPrice] = useState(0);
    const cartLength = cart.length;

    const handleClear = () => {
        clear();
    }

    useEffect(() => {
        setFinalPrice(totalPrice)
    }, [cartLength])

    const navigate = useNavigate()
    const checkout = () => {
        const order = {
            buyer: {
                id: 1,
                name: "user" + Math.floor(Math.random() * 1000000),
                phone: "+1 " + Math.floor(Math.random() * 1000000) + " " + Math.floor(Math.random() * 10000),
                email: "nameandphone@mail.com"
            },
            items: cart,
            date: new Date(),
            total: finalPrice
        }
        const orderCollection = collection(db, "orderCollection")
        addDoc(orderCollection, order)
            // ACA EN VEZ DE ALERT, PONER UN SWEET ALERT!!!
            .then(res => {
                alert("tu orden " + res.id + " se proceso con exito")
            })
            .catch(err => { err && <Error /> })

        // Cuando haga redireccion al checkout ==> Eliminar el setTimeout()
        setTimeout(() => {
            clear()
            // Hace una redireccion una vez terminada la compra
            navigate("/")

        }, 3000)

        // escribir funcion para updateDoc

    }

    return <div>
        <div className="cart-summ-header">
            <h3 className="cart-summ-page-h3">Resumen de compra</h3>
            <button className="cart-summ-delete-btn" onClick={handleClear}>Borrar todo</button>
        </div>
        {cartLength === 0 && <EmptyCart />}
        {cartLength > 0 && <>
            <CartSummary />
            <div>
                <p>Total: U$D {finalPrice}</p>
                <button onClick={checkout}>Pay</button>
            </div>
        </>}

    </div>
}

export default CartSummaryPage;