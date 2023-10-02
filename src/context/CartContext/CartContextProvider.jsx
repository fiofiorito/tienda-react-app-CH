import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    // const [inCart, setInCart] = useState(false)

    console.log("esto es tu", cart)
    const isInCart = (item, quantity) => {
        // HACER EL FILTERING DE ITEMS IN CART PARA PODER EVITAR DUPLICADOS!
        if (item.id) {
            // setInCart(false)
            setCart([
                ...cart,
                { item, quantity }
            ]);
            console.log("juega el if")
        } else if (item.id == cart.item.id) {
            // setInCart(true);
            // setCart([
            //     ...cart
            // ])
            console.log("ya esta en el carro")
        }
    }
    const addItem = (item, quantity) => {
        isInCart(item, quantity)
    }

    const removeItem = (id) => {

    }
    const valuesForValue = {
        cart,
        addItem,
        removeItem
    }

    return <CartContext.Provider value={valuesForValue}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider;