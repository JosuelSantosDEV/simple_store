import { ProductCartType } from "../../types/cart/cartType";

export type CartAction = 
    | { type: "ADD_OR_REMOVE_ITEM", payload: ProductCartType}
    | {type: "INCREASE_PRODUCT", payload: { id: number}}
    | {type: "DECREMENT_PRODUCT", payload: { id: number}}
                        