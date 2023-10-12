// routing
import { useParams } from 'react-router';
// styles
import './OrderSummary.css';
// firebase
import { db } from '../../hooks/useDatabase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
const OrderSummary = () => {
    const orderId = useParams().orderId;

    // const updateProductStock = () => {
    //     const orderItemRef = doc(db, "orderCollection", orderId);


    //     updateDoc(orderItemRef, { items: [] })
    //         .then(res => console.log(`${orderId} orden actualizada`))
    // }

    const updateProductStock = () => {
        const orderItemRef = doc(db, "orderCollection", orderId);
        getDoc(orderItemRef)
            .then(snapshot => {
                console.log(snapshot.data());
            })
    }
    return <>
        <h2>Gracias por su compra</h2>
        <p>{orderId}</p>
        <button onClick={updateProductStock}>aaa</button>
    </>

}

export default OrderSummary;