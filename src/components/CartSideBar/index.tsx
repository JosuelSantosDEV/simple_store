import React from "react";
import { CartSideBarContent, InfoCartBox } from "./styles";
import Icon from "../icon";
import { MdOutlineClose } from "react-icons/md";

type Props = {
    onClickCloseButton?: (value?:unknown) => void;
    onMouseOutAction?: (value?:unknown) => void;
    onClickSideBarButton: (value?:unknown) => void;
}

const CartSideBar: React.FC<Props> = ({onMouseOutAction, onClickCloseButton, onClickSideBarButton}) => {
    return (
        <CartSideBarContent onMouseOut={onMouseOutAction}>
            
            <div><h1>Product Cart</h1></div>
            <Icon size={40} color="orangePrimary" onClickAction={onClickCloseButton} >
                <MdOutlineClose />
            </Icon>
            <InfoCartBox>
                <h3>Qt. Itens: 10</h3>
                <h3>Full value: R$ 5999.89</h3>
                <button onClick={onClickSideBarButton}>Go to Cart Page</button>
            </InfoCartBox>
        </CartSideBarContent>
    )
}

export default CartSideBar;