import { MdOutlineClose } from "react-icons/md";
import { ModalBackground, ModalBox, ModalContent } from "./styles";
import Icon from "../icon";
import React from "react";
import { ProductType } from "../../types/product/productType";

type Props = {
    onModalOpen?: (value?: unknown)=>void;
    product: ProductType;
}

const ProductModal : React.FC<Props>= ({onModalOpen, product}) => {
    return (
        <>
            <ModalBackground/>
            <ModalContent open={true}>
                <img src={product.image} alt="" />
                <Icon size={40} color="orangePrimary" onClickAction={onModalOpen} >
                    <MdOutlineClose />
                </Icon>
                <ModalBox>
                    <div>
                        <h2>{product.name}</h2>
                        <h3> R$ {product.price.toFixed(2)}</h3>
                    </div>
                    <h3>{product.description}</h3>
                </ModalBox>  
            </ModalContent>
        </>
    )
}

export default ProductModal;