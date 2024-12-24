import React from "react";
import { CartSideBarContent, InfoCartBox, ProductCartBox } from "./styles";
import Icon from "../icon";
import { MdOutlineClose } from "react-icons/md";
import ProductCart from "../ProductCart";
import { useCartContext } from "../../hooks/useCartContext";

type Props = {
    onClickCloseButton?: (value?:unknown) => void;
    onMouseOutAction?: (value?:unknown) => void;
    onClickSideBarButton: (value?:unknown) => void;
}

const CartSideBar: React.FC<Props> = ({onMouseOutAction, onClickCloseButton, onClickSideBarButton}) => {

    const {cart,increaseProduct, decrementProduct, quantity, totalPrice } = useCartContext();

    

    return (
        <CartSideBarContent onMouseOut={onMouseOutAction}>
            
            <div><h1>Product Cart</h1></div>
            <Icon size={40} color="orangePrimary" onClickAction={onClickCloseButton} >
                <MdOutlineClose />
            </Icon>
            <ProductCartBox>
                {
                    cart.map(
                        product => (
                            <ProductCart key={product.id} product={product} handleDecrementProduct={decrementProduct} handleIncreaseProduct={increaseProduct} />
                        )
                    )
                }
                
            </ProductCartBox>
            <InfoCartBox>
                    <h3>Qt. Itens: {quantity}</h3>
                    <h3>Value total: {totalPrice.toLocaleString("pt-BR",{style: "currency", currency: "BRL"})}</h3>
                    <button onClick={onClickSideBarButton}>Go to Cart Page</button>
                </InfoCartBox>
        </CartSideBarContent>
    )
}

export default CartSideBar;