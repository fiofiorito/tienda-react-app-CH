// hooks & routing
import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router';
// components & styles
import CartSummary from "../../components/Cart/CartSummary/CartSummary";
import '../../components/Cart/CartSummary/CartSummary.css';
import './CartSummaryPage.css';
import CartContext from "../../context/CartContext/CartContext";
import EmptyCart from "../../components/Cart/EmptyCart/EmptyCart";
import Error from '../../components/Error/Error';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// firebase
import { db } from '../../hooks/useDatabase'
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';

const CartSummaryPage = () => {
    const { clear, cart, totalPrice } = useContext(CartContext);
    const [error, setError] = useState("");
    const [finalPrice, setFinalPrice] = useState(0);
    const cartLength = cart.length;
    const sweetAlert = withReactContent(Swal);

    const handleClear = () => {
        clear();
    }

    useEffect(() => {
        setFinalPrice(totalPrice)
    }, [cartLength])

    const navigate = useNavigate()
    const checkout = () => {
        const order = {
            // cambiar buyer por buyen info pasada por un form
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
            .then(res => {
                cart.forEach(product => {
                    const itemRef = doc(db, "ItemCollection", product.item.id);
                    getDoc(itemRef)
                        .then(snapshot => {
                            updateDoc(itemRef, { stock: snapshot.data().stock - product.quantity })
                        })
                });
                sweetAlert.fire({
                    icon: "success",
                    title: <p>Su orden fue procesada con éxito!</p>,
                    text: `Número de orden: ${res.id}`,
                    confirmButtonText: "Volver a la página principal"
                })
                    .then(() => {
                        clear()
                        navigate(`/ordersummary/${res.id}`)
                    })
            })
            .catch(err => setError(err))
    }

    return <div>
        <div className="cart-summ-header">
            <h3 className="cart-summ-page-h3">Resumen de compra</h3>
            <button className="cart-summ-delete-btn" onClick={handleClear}>Borrar todo</button>
        </div>
        {cartLength === 0 && <EmptyCart />}
        {cartLength > 0 && <>
            <CartSummary />
            <div className="cart-summ-pay-div">
                <p>Total: U$D {finalPrice}</p>
                <button className="cart-summ-pay-btn" onClick={checkout}>Finalizar compra</button>
            </div>
        </>}
        {error && <Error />}

    </div>
}

export default CartSummaryPage;