import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const page = 2;
    const [items] = useFetch(`https://fakestoreapi.com/products/${page}`);

    useEffect(() => {
        setItem(items)
    }, [items]);

    return <div className="detail-div">
        {
            item !== null &&
            <ItemDetail item={item} />
        }
    </div>
}

export default ItemDetailContainer;