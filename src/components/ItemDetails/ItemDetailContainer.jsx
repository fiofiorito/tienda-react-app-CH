// hooks
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
// components
import ItemDetail from "./ItemDetail";
import Loader from "../Loader";
// routing
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item] = useFetch(`https://fakestoreapi.com/products/${id}`);

    if (item == null) {
        return <Loader />
    } else if (item !== null) {
        return <div className="slide-from-bottom">
            <div className="detail-div">
                <ItemDetail item={item} />
            </div>
        </div>

    }

}

export default ItemDetailContainer;