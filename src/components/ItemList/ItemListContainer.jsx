// hooks 
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
// components & style
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import Loader from "../Loader";
import Error from "../Error/Error";
// routing
import { useParams } from "react-router";

const ItemListContainer = () => {
    const categoryId = useParams().categoryId;
    const URL = categoryId ? `https://fakestoreapi.com/products/category/${categoryId}` : "https://fakestoreapi.com/products";
    const [items] = useFetch(URL);

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