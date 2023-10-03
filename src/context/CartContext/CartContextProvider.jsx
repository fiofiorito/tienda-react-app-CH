import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log("esto es tu", cart)

    const addItem = (item, quantity) => {
        const id = item.id
        if (!isInCart(id)) {
            setCart([
                ...cart,
                { item, quantity }
            ])
        } else {
            const updatedCart = cart.map((cartItem) => {
                if (cartItem.item.id === id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + quantity
                    };
                }
                return cartItem;
            });
            setCart(updatedCart);
        }
    }

    const isInCart = (id) => {
        return cart.some(cartItem => cartItem.item.id === id)
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(cartItem => cartItem.item.id !== id)
        setCart(updatedCart);
    }

    const clear = () => {
        setCart([]);
    }



    const valuesForValue = {
        cart,
        addItem,
        removeItem,
        isInCart,
        clear
    }

    return <CartContext.Provider value={valuesForValue}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider;