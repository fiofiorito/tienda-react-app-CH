// hooks 
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
// components & style
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import Loader from "../Loader";
import { useParams } from "react-router";
import Error from "../Error/Error";




const ItemListContainer = () => {
    const [items] = useFetch("https://fakestoreapi.com/products");

    const [products, setProducts] = useState(null);
    const [err, setErr] = useState("")
    const [loading, setLoading] = useState(true);

    const categoryId = useParams().categoryId;
    // console.log(categoryId)

    const getProducts = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (items !== null) {
                resolve(items)
            } else {
                reject("Ups, algo salió mal");
            }
        }, 3000);
    });

    useEffect(() => {
        getProducts()
            .then((response) => {
                if (items) {
                    setProducts(response);
                }
            })
            .catch((err) => {
                setErr(err);
            })
            .finally(() => {
                setLoading(false);
            })

    }, []);


    return <div>
        {loading && <Loader />}
        {
            products !== null &&
            <ItemList items={products} />
        }
        {err && <Error />}
    </div>
    // if (products == null) {
    //     return <Loader />
    // } else if (products !== null) {
    //     return <div className="slide-from-bottom">
    //         <ItemList items={products} />

    //     </div>
    // }
}

export default ItemListContainer;