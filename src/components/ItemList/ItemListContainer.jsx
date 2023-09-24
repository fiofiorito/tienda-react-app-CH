// hooks 
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
// components & style
import ItemList from "./ItemList";
import "./ItemListContainer.css";


const ItemListContainer = () => {
    const [items] = useFetch("https://fakestoreapi.com/products");
    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setProducts([items])
    //         setLoading(false)
    //         console.log(products, loading)
    //     }, 5000)
    // }, []);
    // AGREGAR UN HOC PARA HACER EL LOADING DE LOS PRODUCTOS!!!

    return <div>
        {
            items !== null &&
            <ItemList items={items} />
        }
    </div>

}

export default ItemListContainer;