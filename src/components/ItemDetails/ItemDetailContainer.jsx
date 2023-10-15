// hooks
import { useContext, useEffect, useState } from "react";
// components
import ItemDetail from "./ItemDetail";
import Loader from "../Loader";
import CartContext from "../../context/CartContext/CartContext";
// routing
import { useParams } from "react-router";
// firebase
import { getDocument, getDocumentData } from "../../services/firestoreService";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    useEffect(() => {
        const itemRef = getDocument("ItemCollection", id)
        getDocumentData(itemRef)
            .then(data => setItem(data))
    }, [id])

    const { addItem } = useContext(CartContext);
    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    if (item == null) {
        return <Loader />
    } else if (item !== null) {
        return <div className="slide-from-bottom">
            <div className="detail-div">
                <ItemDetail item={item} onAdd={onAdd} />
            </div>
        </div>

    }

}

export default ItemDetailContainer;
