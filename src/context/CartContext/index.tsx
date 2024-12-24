import React, { createContext, useReducer, useState } from "react";
import { CartContextType } from "../../types/cart/cartContextType";
import { ProductCartType } from "../../types/cart/cartType";
import { CartReduce } from "./reduce";



export const CartContext = createContext<CartContextType | undefined>(undefined);

type Props = {
    children: React.ReactNode
}

const initialState: ProductCartType[] = [];

export const CartProvider: React.FC<Props> = ({children}) => {

    const [cart, dispatch] = useReducer(CartReduce, initialState);
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <CartContext.Provider value={{cart, dispatch, quantity, setQuantity, totalPrice, setTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}