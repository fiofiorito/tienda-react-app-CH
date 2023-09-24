// hooks
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
// components
import ItemDetail from "./ItemDetail";
// routing
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item] = useFetch(`https://fakestoreapi.com/products/${id}`);


    return <div className="detail-div">
        {
            item !== null &&
            <ItemDetail item={item} />
        }
    </div>
}

export default ItemDetailContainer;