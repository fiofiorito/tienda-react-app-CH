// components & style
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import Loader from "../Loader";
import Error from "../Error/Error";
// routing
import { useParams } from "react-router";
// firebase
import { query, where } from 'firebase/firestore';
import { getCollectionData, getDocuments } from "../../services/firestoreService";
// hooks
import { useEffect, useState } from "react";


const ItemListContainer = () => {
    const categoryId = useParams().categoryId;
    const [items, setItems] = useState([]);

    useEffect(() => {
        const itemCollection = getDocuments("ItemCollection")
        const q = categoryId ? query(itemCollection, where("categoryId", "==", categoryId)) : itemCollection;
        getCollectionData(q).then(data => setItems(data))
    }, [categoryId])

    if (items == null) {
        return <Loader />
    } else if (items !== null) {
        return <div className="slide-from-bottom">
            <ItemList items={items} />
        </div>
    } else {
        return <Error />
    }
}

export default ItemListContainer;