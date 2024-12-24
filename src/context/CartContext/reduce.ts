import { ProductCartType } from "../../types/cart/cartType";
import { CartAction } from "./actions";

export const CartReduce= (state: ProductCartType[], action: CartAction): ProductCartType[]  => {
    switch (action.type) {
        case "ADD_OR_REMOVE_ITEM":{
            const productExist = state.some(product => product.id == action.payload.id);
            state = !productExist ?
                [...state, action.payload] :
                state.filter(product => product.id != action.payload.id);
            return state
        }   
        case "DECREMENT_PRODUCT":{
            return state.map(product => {
                return product.id == action.payload.id ? { ...product, quantity: product.quantity - 1 } : product;
            }).filter(product => product.quantity > 0);
        }
        case "INCREASE_PRODUCT":{
            return state.map(product => {
                return product.id == action.payload.id ? { ...product, quantity: product.quantity + 1 } : product;
            });
        }
        default:
            return state;
    }
}