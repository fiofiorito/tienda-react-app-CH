import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { products, getProduct } from "./Items";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loadProducts, setLoadProducts] = useState(true);
    const [err, setErr] = useState("");

    /* evita un bucle infinito de actualizacion de items, tiene q setearlos dentro
    del useState una sola vez */
    useEffect(() => {
        getProduct()
            .then((response) => {
                setItems(response)
            })
            .catch((error) => {
                setErr(error)
            })
            .finally(() => {
                setLoadProducts(false)
            })
    }, []);
    console.log(items);

    return <>
        {loadProducts && <p>Cargando productos...</p>}
        {err && <p>{err}</p>}
        {items.map((item) => (
            <ItemList product={item} key={item.id} />
        ))}

    </>

}

export default ItemListContainer;