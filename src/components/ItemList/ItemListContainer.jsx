// hooks 
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
// components & style
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import Loader from "../Loader";




const ItemListContainer = () => {
    const [items] = useFetch("https://fakestoreapi.com/products");

    if (items == null) {
        return <Loader />
    } else if (items !== null) {
        return <div className="slide-from-bottom">
            <ItemList items={items} />
        </div>
    }
}

export default ItemListContainer;