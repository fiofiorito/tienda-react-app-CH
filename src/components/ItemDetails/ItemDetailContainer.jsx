// hooks
import { useContext, useEffect, useState } from "react";
// components
import ItemDetail from "./ItemDetail";
import Loader from "../Loader";
import CartContext from "../../context/CartContext/CartContext";
// routing
import { useParams } from "react-router";
// firebase
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../hooks/useDatabase";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    useEffect(() => {
        const itemReference = doc(db, "ItemCollection", id);
        getDoc(itemReference)
            .then(snapshot => setItem({
                id: snapshot.id,
                ...snapshot.data()
            }))
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
