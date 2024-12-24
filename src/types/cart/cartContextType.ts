import React from "react";
import { ProductCartType } from "./cartType";
import { CartAction } from "../../context/CartContext/actions";

export type CartContextType = {
    cart: ProductCartType[];
    dispatch: React.Dispatch<CartAction>;
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    totalPrice: number;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}
