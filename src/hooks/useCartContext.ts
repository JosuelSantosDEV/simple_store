import { useContext, useEffect, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { ProductCartType } from "../types/cart/cartType";


type AccumulatorType = {
    totalTemp: number;
    quantityTemp: number;
}


export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart deve ser usado dentro de um CartProvider");
    }
    const {cart, dispatch, quantity, setQuantity,totalPrice, setTotalPrice} = context;


    function addOrRemoveProductInCart(newProduct: ProductCartType){
        dispatch({type: "ADD_OR_REMOVE_ITEM", payload: newProduct});
        
    }

    function checkProductInCart(id: number): boolean{
      
        return cart.some((product) => product.id == id )  
    }

    function increaseProduct(id: number) {
        dispatch({type: "INCREASE_PRODUCT", payload: {id}});
    }
    

    function decrementProduct (id: number) {
        dispatch({type: "DECREMENT_PRODUCT", payload: {id}});  
    }

    const {quantityTemp, totalTemp} = useMemo(() => {
        return cart.reduce<AccumulatorType>((productAccumulator, product)=>{
            return {
                totalTemp: productAccumulator.totalTemp + product.price * product.quantity,
                quantityTemp: productAccumulator.quantityTemp + product.quantity
            }
        }, 
        {totalTemp: 0, quantityTemp:0})},
    [cart]);

    useEffect(()=>{
        setQuantity(quantityTemp);
        setTotalPrice(totalTemp);
    });

    return {cart, quantity, totalPrice, addOrRemoveProductInCart, checkProductInCart, increaseProduct, decrementProduct};
};