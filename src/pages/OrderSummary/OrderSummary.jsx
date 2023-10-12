import { useParams } from 'react-router';
import './OrderSummary.css';

const OrderSummary = () => {
    const { orderId } = useParams()

    const updateProductStock = () => {
        const orderItemRef = doc(db, "orderCollection", orderId);


        updateDoc(orderItemRef, { items: [] })
            .then(res => console.log(`${orderId} orden actualizada`))
    }
    return <>
        {/* {orderId && updateProductStock()} */}
    </>

}

export default OrderSummary;