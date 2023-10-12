// routing
import { useParams } from 'react-router';
// styles
import './OrderSummary.css';
// firebase
import { db } from '../../hooks/useDatabase';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
const OrderSummary = () => {
    const { orderId } = useParams();
    const [orderData, setOrderData] = useState({});

    useEffect(() => {
        updateProductStock();
        console.log(orderId)
    }, [])
    const updateProductStock = () => {
        const orderItemRef = doc(db, "orderCollection", "iBsfIUaR68mNSfKYIRzb");
        // debugger
        getDoc(orderItemRef)
            .then(snapshot => {
                setOrderData(snapshot.data())
                console.log(orderData.items)
            });
    }
    return <>
        <h2>Gracias por su compra</h2>
        <p>{orderId}</p>
        <button onClick={updateProductStock}>aaa</button>
    </>

}

export default OrderSummary;