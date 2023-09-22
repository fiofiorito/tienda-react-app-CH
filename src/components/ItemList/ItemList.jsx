import { useEffect, useState } from "react";
import Items from "./Items";

const ItemList = ({ items }) => {
    return <div className="grid">
        {items.map((item) => {
            return <Items key={item.id} item={item} />
        })}
    </div>
}

export default ItemList;

