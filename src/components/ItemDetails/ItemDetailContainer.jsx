// hooks
import useFetch from "../../hooks/useFetch";
// components
import ItemDetail from "./ItemDetail";
import Loader from "../Loader";
import CartContext from "../../context/CartContext/CartContext";
// routing
import { useParams } from "react-router";
import { useContext } from "react";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item] = useFetch(`https://fakestoreapi.com/products/${id}`);

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
